const cats=["Milo","Otis","Garfield"]

function destructivelyAppendCat(name){
    cats.push('Ralph')
}

function  destructivelyPrependCat(name){
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat(){
    cats.pop("Garfield")
}

function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}

function  appendCat(name){
    let arr1=[...cats]
    arr1.splice(3,0,"Broom")
    return arr1
     
}
function prependCat(name){
    let arr2=[...cats]
    arr2.splice(0,0,"Arnold")
    return arr2
}
function removeLastCat(){
    let arr3=[...cats]
    arr3.splice(2,1)
    return arr3
}
function removeFirstCat(){
    let arr4=[...cats]
    arr4.splice(0,1,)
    return arr4
}