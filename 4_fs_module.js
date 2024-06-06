const f=require('fs')

let fi=f.readFileSync('a.txt') //reading a file

console.log(fi)

// f.writeFileSync('b.txt',fi)  writeing to a file

f.appendFileSync('a.txt',"sdsjdksdfk")  //append to a file

f.unlinkSync('a.txt')  //deleting a file
