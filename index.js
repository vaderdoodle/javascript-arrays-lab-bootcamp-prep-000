var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
destructivelyAppendKitten(name)

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
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
  return kittens.concat(name);
}

function prependKitten(name) {
  return kittens.slice(name);
}

function removeLastKitten() {
  return kittens.slice(0, kittens.slice-1);
}

function removeFirstKitten() {
  return kittens.slice(1,kittens.length);
}