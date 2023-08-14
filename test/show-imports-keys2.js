
async function stdoutImports (path) {
    const esModule = await import( path.esm );
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const cjsModule = require( path.cjs );
    const esmCount = Object.entries( esModule ).length;
    const cjsCount = Object.entries( cjsModule ).length;

    console.log('----- esm -----');
    console.log( Object.keys( esModule ));
    console.log('----- cjs -----');
    console.log( Object.keys( cjsModule ));
    console.log(`Entries count: esm ${esmCount}, path: ${path.esm}`);
    console.log(`Entries count: cjs ${cjsCount}, path: ${path.cjs}\n`);
    console.log('===========\n');
}

[
    {
        esm: '../dist/logger/logger.js',
        cjs: '../dist/logger/logger'
    }, {
        esm: '../dist/rsis/rsis.js',
        cjs: '../dist/rsis/rsis',
    }, {
        esm: '../dist/weeks/weeks.js',
        cjs: '../dist/weeks/weeks',
    }, {
        esm: '../dist/index.js',
        cjs: '../dist/index',
    },
    // {
    //     esm: '../dist/http/http-response-codes.js',
    //     cjs: '../dist/http/http-response-codes',
    // },
].
forEach( stdoutImports );
