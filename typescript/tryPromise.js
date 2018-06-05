const p1 = new Promise(resolve => {
    console.log("[p1] resolved");
    resolve(1);
});
p1.then((val)=> {
    console.log(`[p1.then] ${val}`);
}).catch((err)=> {
    console.log(`[p1.err] ${err}`);
});

const p2 = new Promise((reject) => {
    console.log("[p2] resolved");
    reject(new Error("p2error"));
});
p2.then((val)=> {
    console.log(`[p2.then] ${val}`);
}).catch((err)=> {
    console.log(`[p2.err] ${err}`);
});

/*
output:
$ node tryPromise.js
[p1] resolved
[p2] resolved
[p1.then] 1
[p2.then] Error: p2error
timeout
*/
