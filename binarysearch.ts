function binarySearch(array: number[], target: number): number {
    //start on the left 
    let left = 0;
    //start on the right 
    let right = array.length - 1;
    while (left <= right) {
        //calculate the middle of the array 
        let middle = Math.floor((left + right) / 2);
        if (array[middle] === target) {
            return middle;
        } else if (array[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 5;
let index = binarySearch(array, target);
console.log(index);