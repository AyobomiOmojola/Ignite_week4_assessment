let S1: string = "Hello"
let S2: string = "Bye"
let output: string = ''

// Declare i and j as refernce indexes and assign them values of 0 as a default
let i: number = 0
let j: number = 0

// Write a while loop to iterate through S1 and S2 until all characters in both have been alternated
while (i < S1.length || j < S2.length) {
    if (i < S1.length) {
        // while i is lesser than the length of S1, concatenate the value at the current index of S1 to 'output'
        output = output.concat(S1[i])
        i++ // increase i by 1 to continue to the next index on S1 for the next iteration
    }

    if (j < S2.length) {
        // while j is lesser than the length of S2, concatenate the value at the current index of S2 to 'output'
        output = output.concat(S2[j])
        j++ // increase j by 1 to continue to the next index on S2 for the next iteration
    }
}

console.log(`The alternated merged characters from both strings is: ${output}`)

//yet another random