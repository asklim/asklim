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
        esm: 'asklim/http',
        cjs: 'asklim/http',
    }, {
        esm: 'asklim/rsis',
        cjs: 'asklim/rsis',
    }, {
        esm: 'asklim/weeks',
        cjs: 'asklim/weeks',
    }, {
        esm: 'asklim',
        cjs: 'asklim',
    },
    // {
    //     esm: 'asklim/package.json',
    //     cjs: 'asklim/package.json',
    // },
].
forEach( stdoutImports );
