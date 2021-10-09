const isUnique = (str) => {
    if (str === undefined || typeof str !== "string") throw new Error("You must provide a string")
    return new Set(str.split("")).size === str.length;
}

const isPermutation = (str1, str2) => {
    if (str1.length !== str2.length) throw new Error("String length must be equals");

    let counter = 0;
    for (let index = 0; index < str1.length; index++)
        if (str2.includes(str1.charAt(index))) counter++
    return counter === str2.length;
}

const urlify = (str) => {
    let stringArray = str.split(" ");
    let url = "";
    for (let index = 0; index < stringArray.length; index++) {
        url += stringArray[index] + "%20";
    }
    return url.slice(0, url.length - 3);
}

const permutationPalindrome = (str) => {
    const charSet = new Set();
    let string = str.replace(/\s+/g, '').toLowerCase();
    string.split('').forEach(char => {
        if (charSet.has(char)) charSet.delete(char);
        else charSet.add(char);
    })
    return charSet.size <= 1;
}

const oneAway = (str1, str2) => {
    if (insert(str1, str2)) {
        return true;
    } else return !!replace(str1, str2);
}


const replace = (str1, str2) => {
    let count = 0;
    let smallestStr = str1.length < str2.length ? str1 : str2;
    let largestStr = str1.length > str2.length ? str2 : str1;
    for (let index = 0; index < largestStr.length; index++){
        if (!smallestStr.includes(largestStr.charAt(index))) {
            count++;
        }
    }
    return count === 1;
}

const insert = (str1, str2) => {
    let isValid = false;
    if (str1.length > str2.length || str2.length > str1.length) {
        let smallestStr = str1.length < str2.length ? str1 : str2;
        let largestStr = str1.length > str2.length ? str2 : str1;
        for (let index = 0; index < smallestStr.length; index++) {
            if (largestStr.includes(smallestStr.charAt(index))) {
                isValid = true;
            }
        }
    }

    return isValid;
}

const compression = (str) => {
    let compressedString = "";
    let counter = 1;

    for (let index = 1; index < str.length; index++) {
        if (str.charAt(index - 1) === str.charAt(index)) {
            counter++;
        } else {
            compressedString += str.charAt(index - 1) + counter;
            counter = 1;
        }
    }
    compressedString += str.charAt(str.charAt(str.length - 1) - 1) + counter;
    return compressedString.length > str.length ? str : compressedString;
}


export {isUnique, isPermutation, urlify, permutationPalindrome, oneAway, compression};