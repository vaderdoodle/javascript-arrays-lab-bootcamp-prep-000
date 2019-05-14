var kittens = [] //define your array here

// Add your functions and code here
destructivelyAppendKitten(name)

function destructivelyPrependKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  return kittens.concat(kittens, name);
}

function prependKitten(name) {
  return kittens.  
}

function removeLastKitten() {
  
}

function removeFirstKitten() {
  
}