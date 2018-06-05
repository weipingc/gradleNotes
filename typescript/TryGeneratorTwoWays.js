function* generator() {
    var bar = yield 'foo';       // the output value is saved in a variable!
    console.log(`[gen] ${bar}`); // bar!
    bar = yield 'foo1';
    console.log(`[gen] ${bar}`); // 
}

const iterator = generator();
// Start execution till we get first yield value
const foo = iterator.next();
console.log("[main] ---------------------------", foo); // foo
// Resume execution injecting bar
let nextThing = iterator.next('barr');
console.log("[main] ---------------------------", nextThing);      // bar
nextThing = iterator.next('bazz');
console.log("[main] ---------------------------", nextThing);      // baz
