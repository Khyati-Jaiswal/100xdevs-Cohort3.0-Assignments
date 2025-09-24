function isAnagram (str1, str2){
    if(str1.length != str2.length){
        return false;
    }
    const charArr1 = Array.from(str1).sort();
    const charArr2 = Array.from(str2).sort();
    if(JSON.stringify(charArr1) === JSON.stringify(charArr2)){
        return true;
    }
    return false;
}

console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world"));
console.log(isAnagram("evil", "vile"));