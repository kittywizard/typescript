let age: number = 20;
let arr: number[] = [1,2];
let strArr: string[] =["1", "55"]; 

if (age < 50)
    age += 10;
    console.log(age);

function test(id: number): number {
    return id
}

// let cat: {
//     name: string,
//     age: number,
//     meow: () => void
// } = {
//     name: "Tali",
//     age: 10,
//     meow: () => {
//         console.log('meow');
//     }
// }

type Cat = {
    name: string,
    age: number,
    meow: () => void
} 

let cat: Cat = {
    name: "Tali",
    age: 10,
    meow: () => {
        console.log('meow');
    }
} 