const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const catCopy = [...cats, name];
    return catCopy;
}

function prependCat(name) {
    const catCopy2 = [name, ...cats];
    return catCopy2;

}

function removeLastCat() {
    const catCopy2 = [...cats];
    catCopy2.pop();
    return catCopy2;
}

function removeFirstCat() {
    const catCopy4 = [...cats];
    catCopy4.shift();
    return catCopy4;
}

