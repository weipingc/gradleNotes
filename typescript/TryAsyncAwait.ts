async function testit() {
    console.log('[main] await ping()');
    await ping();
    console.log('[main] awaited ping()');
}

// The existence of export makes this .ts file a mdule, hence a separeate namespace.
export async function ping() {
    for (var i = 0; i < 2; i++) {
        console.log(`---------------------------------------------\n[ping] await ${i} delay()`);
        await delay(300);
        console.log('[ping] awaited delay()');
    }
}
function delay(ms: number) {
    console.log('[TryAsyncAwait.delay]')
    let p = new Promise(resolve => setTimeout( ()=>{
        console.log('[delayTimer] before calling resolve()');
        resolve();
    }, ms));
    console.log('[delay] returning p');
    return p;
}

testit();
