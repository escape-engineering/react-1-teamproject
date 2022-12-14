# 리액트 심화주차 1조 팀프로젝트

## 실행화면 및 배포주소

## 사용 라이브러리

## truoble shooting

---

- 발생
  상세 페이지에서 뒤로 가기를 누를 시
  Todo의 맵핑이 이루어지지 않는 현상
- 원인
  상세페이지로 넘어갈 시 배열인 Todo가
  \_\_getTodosDesc로 인해 객체로 덮어써버리고
  다시 상세페이지로 갈 때 배열로 전환이 안되고있음
- 해결
  리덕스 초기값으로 TodoDesc를 저장, 상세페이지에서 출력할 객체로 활용

---

- 발생
  댓글을 삭제 시 comments.filter에서 에러
- 원인
  배열이던 comments가 액션 후 빈 객체로 바뀌어서
  filter를 수행하지 못함
- 해결
  이미 delete는 썽크 내에서 완료 => reducer에서 comments에 대한 수정코드 삭제

---

- 발생
  댓글 삭제 시 업데이트가 되지 않음
- 원인
  삭제 시의 리렌더링이 처리되지 않은 문제
- 해결
  isLoading의 상태값 변경을 useEffect에 반영
  => 상태는 바뀌는데 리렌더링이 안이루어짐 => state값이 아닌 것으로 추정
  => 리렌더링용 state를 생성 후 useEffect에 반영 => 성공 => 더 좋은 방법이 있을 거 같은 느낌
  => 삭제 하기 thumk에서 get 메소드를 이용, state에 반영 => 성공!

---

## 코드리뷰

## 컴포넌트 구분 기준
