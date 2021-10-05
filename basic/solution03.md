# 중복단어제거

> 중복된 단어를 제거하고 출력하라.

```javascript
function solution17(arr) {
  let answer;
  answer = arr.filter((v, i) => arr.indexOf(v) === i)

  return answer;
}

console.log('solution17',solution17(['good', 'time', 'good', 'time', 'student']));
// ['good', 'time', 'student']
```

- indexOf(v)와 i가 같으면 중복되지않은 문자열이기 때문에 이를 filter를 사용해서 배열을 반환해준다.
