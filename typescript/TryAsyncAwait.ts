// Source: https://blogs.msdn.microsoft.com/typescript/2015/11/03/what-about-asyncawait/
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

/* Output

[main] await ping()
TryAsyncAwait.ts:2
---------------------------------------------
TryAsyncAwait.ts:8
[ping] await 0 delay()
[delay] returning p
TryAsyncAwait.ts:18
[delayTimer] before calling resolve()
TryAsyncAwait.ts:15
[ping] awaited delay()
TryAsyncAwait.ts:10
---------------------------------------------
TryAsyncAwait.ts:8
[ping] await 1 delay()
[delay] returning p
TryAsyncAwait.ts:18
[delayTimer] before calling resolve()
TryAsyncAwait.ts:15
[ping] awaited delay()
TryAsyncAwait.ts:10
[main] awaited ping()
*/
