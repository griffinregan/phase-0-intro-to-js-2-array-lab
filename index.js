// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]; 
function destructivelyAppendCat(name) {
cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
    }
    function destructivelyRemoveLastCat(name) {
    cats.pop(name)
    }
    function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
    }
    function appendCat(name) {
        const newCats = cats.slice()
        newCats.push(name)
        return newCats
    }
    function prependCat(name) {
        const newCatz = cats.slice()
        newCatz.unshift(name)
        return newCatz
    }
    function removeLastCat() {
        const newCatzz = cats.slice()
        newCatzz.pop()
        return newCatzz
    }
    function removeFirstCat() {
        const newCatss = cats.slice()
        newCatss.shift()
        return newCatss
    }