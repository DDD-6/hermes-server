# Hermes service

## Prerequisites

- Docker
- Docker Compose
- make

> 패키지 의존성은 컨테이너 안에서 설치가되어서 개발 환경과 상관 없이 작동하는데, IDE에서 인식을 못 하기 때문에 로컬에서도 인스톨 하고 시작하세요!
> 환경 간 차이를 최소화 하기 위해서 이렇게 설정 했는데, 특히 초반에 패키지 인스톨 때문에 개발 속도가 안난다 생각되시면, 인스톨 되는 패키지 공유하도록 바꾸겠습니다.

## Run

```
make
```

> 리소스 정리는 make clean (데이터 볼륨은 지워지지 않습니다.)

## E2E Test

> 개발 환경과 독립적으로 E2E 테스트 환경을 구성했습니다.

```
make test
```

> 리소스 정리는 make clean_test