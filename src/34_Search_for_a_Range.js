var searchRange = function(arr, target) {
  const start = binarySearch(arr, target-0.5);
  if (arr[start] != target) {
    return [-1, -1];
  }
  arr.push(0);
  const end = binarySearch(arr, target+0.5)-1;
  return [start, end];

  function binarySearch(ar, t) {
    let start = 0;
    let end = ar.length - 1;
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (t < ar[mid]){
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return start;
  }
};