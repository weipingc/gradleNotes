async function main() {
    console.log('[main] await ping()');
    await ping();
    console.log('[main] awaited ping()');
}
async function ping() {
    for (var i = 0; i < 2; i++) {
        console.log(`---------------------------------------------\n[ping] await ${i} delay()`);
        await delay(300);
        console.log('[ping] awaited delay()');
    }
}
function delay(ms: number) {
    let p = new Promise(resolve => setTimeout( ()=>{
        console.log('[delayTimer] before calling resolve()');
        resolve();
    }, ms));
    console.log('[delay] returning p');
    return p;
}

main();
