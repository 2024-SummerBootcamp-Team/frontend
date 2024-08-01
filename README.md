

# Brain Washer - 진정한 동기부여를 제공하는 서비스
![logo](https://github.com/user-attachments/assets/1516f9a3-b1c4-4920-9981-25faf4040d96)

<br>

## 🙋 What is Brain Washer
**1. 특정인의 독한말 서비스 제공**
``` 
1. 3명의 인물 (앤드류, 현우진, 전한길) 중 한명 선택
2. 채팅 형식으로 사용자의 고민을 독설로 조언
3. 텍스트와 TTS를 실시간으로 스트리밍
```
**2. 발췌 이미지 생성**
```
1. 사용자가 원하는 발췌 구간과 이미지 선택
2. 이미지 생성
3. 이미지 다운로드
```
**3. 공유 기능**
```
1. 공유할 이미지 또는 TTS 음성파일 선택
2. 카카오톡으로 공유
3. 공유된 이미지 또는 TTS 음성파일 재생 및 다운로드 기능
```
<br>

## 🗂 Index

 - [Service Flow](#service-flow)
 - [System Architecture](#system-architecture)
 - [Tech Stack](#tech-stack)
 - [ERD](#%EF%B8%8Ferd)
 - [API](#api)
 - [Monitoring Tools](#%EF%B8%8Fmonitoring-tools)
 - [Member](#member)
 - [Blog](#blog)

<br>

## 🎥 Demo
### 메인페이지
![메인페이지](https://github.com/user-attachments/assets/fbd0766b-9362-4bb0-8a2c-cfec4bfc7a2c)

<br>

### 채팅방 ( 🔊 소리필수!! )

https://github.com/user-attachments/assets/00974c17-6019-41d1-88cb-2e9d533408ae



<br>

### 카카오톡 공유 ( 🔊 소리필수!! )

https://github.com/user-attachments/assets/ddb28e65-ce09-4054-87b1-95d76963e043

<br>

### 발췌 이미지 생성


https://github.com/user-attachments/assets/4a70866f-6c0f-491e-bb98-f918e28b62cf





<br>

### 대시보드
![대시보드](https://github.com/user-attachments/assets/c46c8797-daf5-4a27-ba77-514b9d5de28c)


<br>

## 🔗 ERD

<img width="1335" alt="ERD" src="https://github.com/user-attachments/assets/2c253991-0dcc-4431-b050-bd64459bc4a0">

<br>

## 🚧 System Architecture

![시스템아키텍쳐](https://github.com/user-attachments/assets/c0333bd3-be06-4fe3-b7d3-b2d699a64f6d)

<br>

## 📡 API

<img width="1462" alt="스크린샷 2024-07-30 오후 3 25 06" src="https://github.com/user-attachments/assets/ed27d35d-1025-4d46-b528-36cb9f683473">
<img width="1449" alt="스크린샷 2024-07-30 오후 3 25 21" src="https://github.com/user-attachments/assets/9704bb78-5e56-4951-87a4-6478429c74f1">
<img width="1448" alt="스크린샷 2024-07-30 오후 3 25 36" src="https://github.com/user-attachments/assets/d7342195-f2c1-46fa-be83-cbfc56146460">



<br>

## 🖥️ Monitoring Tools
>   Grafana & Slack

<table>
  <tr>
    <td>
      <img width="1120" alt="image" src="https://github.com/user-attachments/assets/414827d0-d730-45cc-905c-66a072b085bf">
    </td>
    <td>
     <img width="458" alt="image" src="https://github.com/user-attachments/assets/d4ff16f6-2fd7-4110-aa6f-14a885bad543">

  
  </tr>
</table>


<br>

## 📚Tech Stack

<table width="1000">
  <tr>
    <th width="200">Frontend</th>
    <th width="200">Backend</th>
    <th width="200">DevOps</th>
    <th width="200">DB</th>
    <th width="200">Monitoring</th>
    <th width="200">Others</th>
  </tr>
  <tr>
    <td align="center">
      <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/><br>
      <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"/><br>
      <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/><br>
      <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/><br>
    </td>
    <td align="center">
      <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=FastAPI&logoColor=white"/><br>
      <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white"/><br>
    </td>
    <td align="center">
      <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"/><br>
      <img src="https://img.shields.io/badge/AMAZON_EC2-FF9900?style=for-the-badge&logo=AMAZONEC2&logoColor=white"/></br>
      <img src="https://img.shields.io/badge/githubactions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white"/><br>
      <img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white"/><br>
      <img src="https://img.shields.io/badge/elastic_load_balancing-8C4FFF?style=for-the-badge&logo=awselasticloadbalancing&logoColor=white"/><br>
      <img src="https://img.shields.io/badge/AWS_CodeDeploy-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"/><br>
      <img src="https://img.shields.io/badge/CloudFront-003399?style=for-the-badge&logo=Amazon%20AWS&logoColor=white"/>
    </td>
    <td align="center">
      <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"/><br>
      <img src="https://img.shields.io/badge/AMAZON_RDS-527FFF?style=for-the-badge&logo=AMAZONRDS&logoColor=white"/></br>
      <img src="https://img.shields.io/badge/AMAZON_S3-569A31?style=for-the-badge&logo=AMAZONS3&logoColor=white"/></br>
      <img src="https://img.shields.io/badge/Redis-FF4438?style=for-the-badge&logo=Redis&logoColor=white">
    </td>
    <td align="center">
       <img src="https://img.shields.io/badge/Cadvisor-34E0A1?style=for-the-badge&logo=tripadvisor&logoColor=white"/><br>
       <img src="https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white"/></br>
    <img src="https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=Grafana&logoColor=white"/></br>
    <img src="https://img.shields.io/badge/ELK_stack-005571?style=for-the-badge&logo=Elastic&logoColor=white"/></br>
    </td>
    <td align="center">
      <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white"/><br>
      <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"/><br>
      <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"/><br>
      <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"/><br>
      <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white"/><br>
      <img src="https://img.shields.io/badge/Zoom-0B5CFF?style=for-the-badge&logo=Zoom&logoColor=white"/><br>
      <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/><br>
      <img src="https://img.shields.io/badge/GitKraken-179287?style=for-the-badge&logo=GitKraken&logoColor=white"/><br>
    </td>
  </tr>
</table>


<br>

## 🧑‍🤝‍🧑 Member
<table width="1000">
    <thead>
    </thead>
    <tbody>
    <tr>
        <th>Pictures</th>
         <td width="100" align="center">
            <a href="https://github.com/dongmin115">
                <img src="https://github.com/user-attachments/assets/3c75ba19-824c-4369-b636-5ce0a9ad4ac3" width="70" height="70">
            </a>
        </td>
        <td width="100" align="center">
             <a href="https://github.com/dlwhsk0">
                <img src="https://github.com/user-attachments/assets/3b20222b-4755-4a64-826f-08822fdd7956" width="70" height="70">
            </a>
        </td>
        <td width="100" align="center">
             <a href="https://github.com/jimin1945">
                <img src="https://github.com/user-attachments/assets/92929f1d-b429-4e1f-b8aa-7b4df38ebc96" width="70" height="70">
            </a>
        </td>
        <td width="100" align="center">
             <a href="https://github.com/kalsteve">
                <img src="https://github.com/user-attachments/assets/d349cee9-ebee-4fdd-9d3e-9efbafca8669" width="70" height="70">
            </a>
        </td>
        <td width="100" align="center">
             <a href="https://github.com/drghdtjr">
                <img src="https://github.com/user-attachments/assets/d851b869-6275-455f-86d0-8e3714771b17" width="70" height="70">
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/leeminseo0809">
                <img src="https://github.com/user-attachments/assets/a2c05b69-3737-4e84-9ea8-441f396d4c2d" width="70" height="70">
            </a>
        </td>
    </tr>
    <tr>
        <th>Name</th>
        <td width="100" align="center">임동민</td>
        <td width="100" align="center">조하나</td>
        <td width="100" align="center">김지민</td>
        <td width="100" align="center">김윤기</td>
        <td width="100" align="center">김홍석</td>
        <td width="100" align="center">이민서</td>
    </tr>
    <tr>
        <th>Position</th>
        <td width="150" align="center">
            Frontend<br>
            Leader<br>
        </td>
        <td width="150" align="center">
            Backend<br>
            DevOps<br>
        </td>
        <td width="150" align="center">
            Frontend<br>
        </td>
        <td width="150" align="center">
            Backend<br>
            DevOps<br>
        </td>
        <td width="150" align="center">
            Backend<br>
            DevOps<br>
        </td>
        <td width="150" align="center">
            Backend<br>
            DevOps<br>
        </td>
    </tr>
    <tr>
        <th>GitHub</th>
        <td width="100" align="center">
            <a href="https://github.com/dongmin115">
                <img src="http://img.shields.io/badge/dongmin115-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/dlwhsk0">
                <img src="http://img.shields.io/badge/dlwhsk0-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/jimin1945">
                <img src="http://img.shields.io/badge/jimin1945-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/kalsteve">
                <img src="http://img.shields.io/badge/kalsteve-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/drghdtjr">
                <img src="http://img.shields.io/badge/drghdtjr-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/leeminseo0809">
                <img src="http://img.shields.io/badge/leeminseo0809-green?style=social&logo=github"/>
            </a>
        </td>
     </tr>
    </tbody>
</table>

<br>

## 📝 Blog
[Medium](https://medium.com/@dongmin11566/2024-siliconvalley-summer-bootcamp-brainwasher-korean-abdf9b5c7ce8)
