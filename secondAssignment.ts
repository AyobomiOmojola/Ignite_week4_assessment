let input:string = "testingtreessiffff"
let result:string = ""

// A for loop to concatenate unique strings without a duplicate to 'result' 
for (let i = 0; i < input.length; i++) {
    // set the stringUnique variable to be 1 as default
    let stringUnique:number = 1
    
    // A for loop to check if a character in input is already added to result
    for (let j = 0; j < result.length; j++) {
        if (input[i] === result[j]) {
            // if character from input is present in result, set stringUnique to 0 and break out of loop to save time
            stringUnique = 0
            break
        }
    }

    if (stringUnique === 1) {
        // if stringUnique is 1, such character is not present in result and hence concatenated to it
        result = result.concat(input[i])
    }
}

console.log(`The unique characters in the input string are: ${result}`)


// another random
