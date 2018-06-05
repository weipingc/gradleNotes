function* generator() {
    try {
        console.log('[gen] before yield');
        yield 'foo';
    }
    catch(err) {
        console.log('[gen] catch');
        console.log(err.message); // bar!
    }
}

console.log(`[main] get generator`); // foo
var iterator = generator();
// Start execution till we get first yield value
console.log(`[main] call generator.next()`); // foo
var foo = iterator.next();
console.log(`[main] foo.value=${foo.value}`); // foo
// Resume execution throwing an exception 'bar'
console.log(`[main] call generator.throw()`);
var nextThing = iterator.throw(new Error('bar'));
