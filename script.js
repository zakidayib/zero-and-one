// Good Luck 💪🏾
function ZeroAndOne(arr){
    let newArr = [];

    for(let i=0; i<arr.length; i++){
        if(arr[i]=== "Zero"){
            newArr.push(0);
        }
        else if(arr[i]==="One"){
            newArr.push(1);
        }
    }

    return newArr.join("");

}



console.log(ZeroAndOne(["Zero", "ONE", "one", "Zero"]));