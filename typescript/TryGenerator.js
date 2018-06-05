function* idMaker(){
  let index = 0;
  while(index < 3)
    yield index++;
}

let gen = idMaker();

let next;
do {
  next = gen.next();
  console.log(next);
} while (!next.done)


function* generator(){
  console.log('-------------------------------------------------------');
  console.log('Execution started');
  yield 0;
  console.log('-------------------------------------------------------');
  console.log('Execution resumed');
  yield 1;
  console.log('-------------------------------------------------------');
  console.log('Execution resumed');
}

var iterator = generator();
console.log('Starting iteration'); // This will execute before anything in the generator function body executes
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
