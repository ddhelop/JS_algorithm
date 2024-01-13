function solution(arr) {
  let answer = arr[0];
  for (i = 1; i < 7; i++) {
    if (answer > arr[i]) {
      answer = arr[i];
    }
  }
  return answer;
}

let arr = [5, 3, 7, 1, 2, 15, 17];
console.log(solution(arr));
