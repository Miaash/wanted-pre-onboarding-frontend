# wanted-pre-onboarding-frontend
### 1. 프로젝트의 실행 방법
- 환경구성 및 패키지설치: 리액트 프로젝트 생성 시 CRA를 통해 WEBPACK, BABEL등의 설치 및 설정 과정을 생략하고 작업환경을 구축했습니다. 
- node package manager(npm)를 통해 node로 만들어진 package를 관리하며 로컬서버를 구동해 개발했습니다.

#### 실행 과정
1. 회원가입을 합니다.
- 이메일은 형식에 맞춰 입력해야합니다.
- 비밀번호는 8자리 이상 입력해야합니다.
<img width="1382" alt="스크린샷 2022-12-08 오전 2 21 01" src="https://user-images.githubusercontent.com/98681659/206249254-732461f6-53ff-43f7-a90e-0e0e70577ffc.png">


2. 회원가입 성공 시 로그인 페이지로 이동합니다.
- 회원가입과 마찬가지로 형식에 맞춰 이메일과 비밀번호를 입력합니다.
<img width="1602" alt="스크린샷 2022-12-08 오전 2 21 25" src="https://user-images.githubusercontent.com/98681659/206249314-c396b1f1-abfb-454e-82dd-49388c813792.png">


3. 로그인 성공 시 todo페이지로 이동합니다.
- 새로운 todo를 추가할 수 있습니다.
<img width="1626" alt="스크린샷 2022-12-08 오전 2 22 01" src="https://user-images.githubusercontent.com/98681659/206249463-df4ff1c9-893e-4fa2-a771-f908ee4bdd99.png">

- 작성된 todo를 삭제할 수 있습니다.
<img width="1595" alt="스크린샷 2022-12-08 오전 2 22 52" src="https://user-images.githubusercontent.com/98681659/206249638-4121e5bb-0cce-4eaa-8f0f-82ac16391159.png"><img width="1575" alt="스크린샷 2022-12-08 오전 2 22 59" src="https://user-images.githubusercontent.com/98681659/206249699-62aeaf0a-8d36-4563-a73d-b5d974a17918.png">

- 수정버튼을 클릭해 todo의 내용과 체크박스의 체크 여부를 수정할 수 있습니다.
<img width="1507" alt="스크린샷 2022-12-08 오전 2 22 29" src="https://user-images.githubusercontent.com/98681659/206249951-b3c1faec-b429-4683-bf7c-2ab4833c70e3.png"><img width="1599" alt="스크린샷 2022-12-08 오전 2 22 37" src="https://user-images.githubusercontent.com/98681659/206249993-843de0e9-11cf-4d8f-be07-6954f50f4799.png">

4. 로그인을 하지 않은 상태로 todo페이지로 이동할 수 없습니다.
- 로그인을 하지 않은 상태에서 임의로 todo페이지로 이동할 시 로그인페이지로 리다이렉트 됩니다.

5. 정해지지 않은 경로로 이동할 수 없습니다.
- 정해지지 않은 경로로 이동할 시 NotFound페이지가 렌더링 됩니다.
<img width="1515" alt="스크린샷 2022-12-08 오전 2 29 06" src="https://user-images.githubusercontent.com/98681659/206250106-05ec1f71-a1dd-4c97-90e2-1b32d24a37e8.png">


### 2. 데모 영상 
배포링크(vercel): https://wanted-pre-onboarding-proj.vercel.app/

