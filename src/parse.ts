import ohm from 'ohm-js';
import path from 'path';
import { promises as fs } from 'fs';

tryParse()

async function tryParse() {
    const { grammar, semantics } = await createICSGrammar();

    const parse = (str: string) => {
        const result = grammar.match(str);
        if (result.failed()) {
            console.log(result.message);
            return false;
        }
        const n = semantics(result);

        return n.parse();
    };

    const icsText = await read('example.ics');
    const r = parse(icsText);
    fs.writeFile(path.join(__dirname, 'test.json'), JSON.stringify(r, null, 2));
}

async function createICSGrammar() {
    const grammarSource = await read('ics.ohm');
    const grammar = ohm.grammar(grammarSource);

    const semantics = grammar.createSemantics();

    semantics.addOperation('parse', {
        Table(_s, statements, blocks, _e) {
            return {
                type: 'table',
                props: propertiesToObject(statements.parse()),
                blocks: blocks.parse(),
            };
        },
        Block(e) {
            return e.parse();
        },
        Event(_s, statements, _e) {
            return {
                type: 'event',
                props: propertiesToObject(statements.parse()),
            };
        },
        Timezone(_s, statements, blocks, _e) {
            return {
                type: 'timezone',
                props: propertiesToObject(statements.parse()),
                blocks: blocks.parse(),
            };
        },
        Daylight(_s, statements, _e) {
            return {
                type: 'daylight',
                props: propertiesToObject(statements.parse()),
            };
        },
        Standard(_s, statements, _e) {
            return {
                type: 'standard',
                props: propertiesToObject(statements.parse()),
            };
        },
        statement(key, properties, _, values) {
            const s: IStatement = {
                type: 'statement',
                key: key.parse(),
                value: values.parse().join(''),
            };

            // const ps: IProperty[] = properties.parse();

            // if (ps.length) {
            //     s.properties = propertiesToObject(ps)
            // }

            return s;
        },
        property(_, key, _eq, value) {
            return {
                type: 'property',
                key: key.sourceString,
                value: value.sourceString,
            };
        },
        key(e) {
            return e.sourceString;
        },
        value(e) {
            return e.sourceString;
        },
    });

    return {
        grammar,
        semantics,
    };
}

function propertiesToObject(props: IProperty[]) {
    const o: Record<string, string> = {};

    for (const p of props) {
        o[p.key] = p.value;
    }

    return o;
}

async function read(name: string) {
    const p = path.join(__dirname, name);
    return fs.readFile(p, { encoding: 'utf-8' });
}

interface IStatement {
    type: string;
    key: string;
    value: string;
    properties?: Record<string, string>;
}

interface IProperty {
    type: string;
    key: string;
    value: string;
}