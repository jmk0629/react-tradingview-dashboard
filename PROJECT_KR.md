# 프로젝트 설명: 금융 대시보드 (GlobalDash)

이 프로젝트는 전 세계(한국, 미국, 일본, 베트남, 중국, 인도네시아, 암호화폐)의 주식 및 코인 가격을 실시간 차트로 확인할 수 있는 웹 사이트입니다.

## 1. 기술 스택 (Tech Stack)
이 웹사이트는 최신 웹 기술을 사용하여 빠르고 현대적인 디자인을 구현했습니다.
- **React (Vite)**: 사용자 인터페이스를 만들기 위한 핵심 프레임워크입니다.
- **TailwindCSS**: 사이트의 스타일링(디자인)을 담당합니다. 프리미엄 느낌의 글래스모피즘(유리 같은 효과) 디자인을 적용했습니다.
- **TradingView Widget**: 차트 및 금융 데이터를 보여주는 핵심 도구입니다.

## 2. API 및 데이터 소스 (Data Source)
사용자가 요청하신 **"오픈소스처럼 사용할 수 있는 API"**로 **TradingView Advanced Chart Widget**을 채택했습니다.

### 데이터 관련 주의사항 (중요!)
TradingView 무료 위젯은 라이선스 문제로 인해 **일부 국가(한국, 일본 등)의 개별 종목 실시간 데이터를 차단**하는 경우가 있습니다. (예: "Symbol only available on TradingView" 에러 발생)

이를 해결하기 위해 이 프로젝트는 다음과 같은 **대체 데이터(Proxy Data)**를 사용하도록 설정했습니다:
- **한국(Korea)**: 개별 종목 대신 **KOSPI/KOSDAQ 지수**나, 해외 거래소에 상장된 주식(예: **Samsung GDR**, **KB Financial ADR**)을 사용합니다.
- **일본(Japan)**: **Nikkei 225 지수** 또는 미국에 상장된 **Sony ADR**, **Toyota ADR** 등을 사용합니다.
- **베트남(Vietnam)**: **VN Index** 또는 베트남 ETF(**VNM**)를 사용하여 전체 시장 흐름을 볼 수 있게 했습니다.

이렇게 하면 에러 없이 안정적으로 차트를 볼 수 있습니다.

### 사용된 API 엔드포인트 개념
이 프로젝트는 백엔드 서버에서 JSON 데이터를 가져오는 방식 대신, **클라이언트 사이드 위젯** 방식을 사용합니다.
- `src/components/TradingViewWidget.jsx` 파일에서 TradingView의 스크립트(`embed-widget-advanced-chart.js`)를 로드합니다.
- 이 스크립트가 TradingView 서버와 직접 통신하여 실시간 가격 데이터를 받아와 그립니다.

## 3. 주요 기능 및 구현 방법

### A. 국가별/시장별 탭 이동
- **구현**: `Navbar.jsx`
- 상단 메뉴에서 'Korea', 'USA', 'Vietnam' 등을 클릭하면 해당 국가의 대표 종목이나 리스트로 전환됩니다.

### B. 사이드바 종목 리스트 (Market List)
- **구현**: `MarketList.jsx`
- 각 국가별로 인기 있는 종목들(예: 삼성전자, 애플, 비나밀크 등)을 미리 리스트로 만들어 두었습니다.
- 이 리스트는 `App.jsx`에서 상태(State)로 관리되며, 항목을 클릭하면 오른쪽 차트가 즉시 해당 종목으로 바뀝니다.

### C. 전체 화면 차트
- **구현**: `App.jsx`, `index.css`
- CSS를 사용하여 브라우저 화면 전체를 꽉 채우도록 레이아웃을 잡았습니다. (`h-screen`, `flex-1`)

## 4. 파일 구조
- `/src/components/TradingViewWidget.jsx`: 차트를 그리는 핵심 컴포넌트 (위젯 설정 포함)
- `/src/components/MarketList.jsx`: 왼쪽 사이드바의 종목 리스트 (에러 방지를 위한 대체 심볼 적용됨)
- `/src/components/Navbar.jsx`: 상단 네비게이션 바
- `/src/App.jsx`: 전체 레이아웃을 잡고, 어떤 종목을 보여줄지 결정하는 메인 파일

이 구조를 통해 누구나 쉽게 코드를 수정하고 새로운 국가나 종목을 추가할 수 있습니다.
