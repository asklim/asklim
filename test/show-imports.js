async function stdoutImports (path) {
    const esModule = await import( path.esm );
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const cjsModule = require( path.cjs );
    const esmCount = Object.entries( esModule ).length;
    const cjsCount = Object.entries( cjsModule ).length;

    console.log('----- esm -----');
    console.log( esModule );
    console.log('----- cjs -----');
    console.log( cjsModule );
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
forEach( stdoutImports
// async (path) => {
//     const esModule = await import( path.esm );
//     // eslint-disable-next-line @typescript-eslint/no-var-requires
//     const cjsModule = require( path.cjs );
//     console.log( esModule );
//     console.log('-----------');
//     console.log( cjsModule );
//     const esmCount = Object.entries( esModule ).length;
//     const cjsCount = Object.entries( cjsModule ).length;
//     console.log(`Object ${path.esm} entries count: esm ${esmCount}`);
//     console.log(`Object ${path.cjs} entries count: cjs ${cjsCount}\n`);
//     console.log('===========\n');
// }
);
