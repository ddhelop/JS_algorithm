function solution(a, b, c) {
  //최댓값 구하기
  let max = 0;
  if (a < b) {
    max = b;
    if (max < c) {
      max = c;
      if (c > a + b) console.log("NO");
      else console.log("YES");
    }
    if (b > a + c) console.log("NO");
    else console.log("YES");
  } else {
    max = a;
    if (a > c + b) console.log("NO");
    else console.log("YES");
  }
}

console.log(solution(3, 3, 3));
