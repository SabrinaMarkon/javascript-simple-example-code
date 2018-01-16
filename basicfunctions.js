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

