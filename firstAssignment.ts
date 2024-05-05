let Array1: number[] = [1, 2, 3, 4, 5, 10, 11, 18, 16]
let Array2: number[] = [2, 3, 1, 0, 5, 11]

let absentNumbers: number[] = []

// for loop to check if number in Array1 is absent in Array2 and pushing it to absentNumbers array
for (let i = 0; i < Array1.length; i++) {
    // set the numberAbsent variable to 1 as a default
    let numberAbsent:number = 1

    // A for loop to compare each number from Array1 to the entire Array2
    for (let j = 0; j < Array2.length; j++) {
        if (Array1[i] === Array2[j]) {
            // if a number in Array1 is found in Array2 change numberAbsent = 0 and break out of loop to save time
            numberAbsent = 0
            break
        }
    }

    if (numberAbsent === 1) {
        // if numberAbsent remains 1 then such number in Array1 is absent in Array2 and pushed to the absentNumbers array
        absentNumbers.push(Array1[i])
    }
}

console.log(`The numbers absent in Array2 are: ${absentNumbers}`)
