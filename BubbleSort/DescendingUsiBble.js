function descbbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]<arr[j+1]){
                // if condititon is true than swap them
                let temp =arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    console.log(arr);
}

let arr =[234,43,55,63,5,6,295,547];
descbbleSort(arr);