var num = [2,3] 
num.push(4)
num.push(1)
num.sort()
console.log(num)
console.log(num[2])

console.log(`o numero ${num[0]} e diferente do ${num[2]}` )

for(var b = 0; b <= num.length; b++) {
    console.log(`a posiçao ${b} valores ${num[b]}`)
}

for(var c in num) {
    console.log(`a posiçao ${c} valores ${num[c]}`)
}