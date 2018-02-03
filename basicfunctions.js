// Basic QUEUE data struction (add a new item to the end of the line. Oldest item is removed. FIFO)
function queue(arr, item) {
    // add new item to the back of the array:
    arr.push(item);
    // remove item from front of the array and return value:
    item = arr.shift();
    return item; // should be 'I' for the below queue variable.
}
var queue = queue(['I ', 'Like '], 'Cats');
console.log(queue);

/* PHP compare:
function queue($arr, $item) {
    array_push($arr, $item);
    $item = array_shift($arr);
    return $item;
}
$queue = queue(['I ', 'Like '], 'Cats');
echo $queue;
*/

// let vs const:

// const c; // assigned to undefined, so below line fails:
// c = 'hi';

const arr = [1, 2];
arr.push(3); // allowed to modify.
arr[0] = 5; // also allowed to modify.
//arr = [7, 8, 9]; // NOT allowed to reassign. We can only  modify the object (array in this case).
console.log(arr);

// let "lets" you reassign values to variables, unlike const:
let l = 12;
l = 3; // ok.