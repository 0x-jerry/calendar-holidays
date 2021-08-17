import path from "path";
import fs from "fs/promises";
import Prism from "prismjs";
import { getWeekInfo } from "./calendarData";
import mustache from "mustache";
import loadLanguages from "prismjs/components/";

start();
async function start() {
  const content = await fs.readFile(path.join(__dirname, "index.mustache"), {
    encoding: "utf-8",
  });

  const renderInfo = getWeekInfo();
  renderInfo.code = highlight(renderInfo.code, renderInfo.language);

  const result = mustache.render(
    content,
    {
      ...renderInfo,
      weekHtml: renderInfo.week
        .map((w) => {
          return `

      <span class="day ${w.theme}">
      <div class="weekday">${w.cMonth}</div>
      <div class="date">${w.date}</div>
      <div class="holiday">${w.cDay}</div>
    </span>
      
      `;
        })
        .join("\n"),
    },
    null,
    {
      escape: (s) => s,
    }
  );

  await fs.writeFile(path.join(__dirname, "../public/index.html"), result);
}

const getLangGrammar = (lang: string) => {
  const langMap = [
    {
      test: /(c|c\+\+)/,
      lang: "clike",
    },
  ];

  lang = langMap.find((l) => l.test.test(lang))?.lang || lang;

  loadLanguages([lang]);

  if (Prism.languages[lang]) {
    return [Prism.languages[lang], lang] as const;
  }

  return [Prism.languages.markup, "markup"] as const;
};

function highlight(code: string, lang: string): string {
  const [grammar, language] = getLangGrammar(lang.toLowerCase());

  const html = Prism.highlight(code, grammar, language);

  return `<pre class="language-${language}"><code>${html}</code></pre>`;
}
