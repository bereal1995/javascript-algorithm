# 가위바위보

> N\*N 격자판이 주어졌을 때, 각 격자에는 높이가 쓰여있습니다.
> 각 격자판의 숫자가 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다.
> 이때, 봉우리 지역이 몇 개 있는지 구하시오.

```javascript
function solution07(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let isAble = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];

        if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[i][j] <= arr[nx][ny]) {
          isAble = 0;
          break;
        }
      }

      if (isAble) answer++;
    }
  }

  return answer;
}
console.log(
  'solution07',
  solution07([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
```

- 상하좌우 판단을 하기위해 dx, dy 변수를 선언해준다.
- 2중반복문을 돌려서 격자 하나마다 상하좌우를 확인하는 반복문을 다시 설정해준다.
- 상하좌우 값중에 격자보다 크거나 0보다 작거나 같은값이 있을 때 반복문 실행을 종료하고 넘어간다.
- 반복문 끝까지 통과한 경우 봉우리 지역이므로 갯수를 1만큼 올려준다.
