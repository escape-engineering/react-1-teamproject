# 리액트 심화주차 1조 팀프로젝트

## 실행화면 및 배포주소

## 사용 라이브러리

## truoble shooting

---

발생
상세 페이지에서 뒤로 가기를 누를 시
Todo의 맵핑이 이루어지지 않는 현상
원인
상세페이지로 넘어갈 시 배열인 Todo가
\_\_getTodosDesc로 인해 객체로 덮어써버리고
다시 상세페이지로 갈 때 배열로 전환이 안되고있음
해결
리덕스 초기값으로 TodoDesc를 저장, 상세페이지에서 출력할 객체로 활용

---

## 코드리뷰

## 컴포넌트 구분 기준
