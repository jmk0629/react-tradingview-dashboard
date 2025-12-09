# GlobalDash - 실시간 글로벌 금융 대시보드 📈

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?logo=vite)

전 세계(한국, 미국, 일본, 베트남, 중국, 인도네시아)의 주식 및 암호화폐 시세를 실시간으로 확인할 수 있는 모던한 웹 대시보드입니다.  
TradingView Advanced Chart Widget을 활용하여 전문가 수준의 차트와 보조지표를 무료로 제공합니다.

---

## ✨ 주요 기능 (Features)

*   **📊 글로벌 시장 커버리지**: 암호화폐(Crypto), 한국(KR), 미국(US), 일본(JP), 베트남(VN), 중국(CN), 인도네시아(ID) 시장 지원.
*   **⚡ 실시간 차트**: TradingView 위젯을 연동하여 지연 없는 실시간 데이터(일부 국가 제외)와 강력한 차트 도구 제공.
*   **🎨 프리미엄 UI**: 글래스모피즘(Glassmorphism) 스타일과 그라디언트 배경을 적용한 세련된 다크 모드 디자인.
*   **📱 반응형 웹**: 데스크탑 및 모바일 환경 완벽 지원.
*   **📑 빠른 종목 이동**: 사이드바의 인기 종목 리스트를 통해 국가별 주요 주식을 클릭 한 번으로 조회.
*   **🛡️ 데이터 우회(Proxy) 적용**: 무료 위젯에서 차단된 한국/일본 개별 종목 대신, GDR/ADR 및 인덱스 심볼을 사용하여 **항상 차트가 로드되도록 최적화**.

## 🛠️ 기술 스택 (Tech Stack)

*   **Framework**: React (Vite)
*   **Styling**: TailwindCSS, PostCSS
*   **Icons**: Lucide React
*   **Charting**: TradingView Advanced Real-Time Chart Widget

## 🚀 실행 방법 (Getting Started)

### 1. 프로젝트 클론 및 설치
```bash
git clone https://github.com/jmk0629/antigravity-dashboard.git
cd antigravity-dashboard
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:5173` 으로 접속하세요.

### 3. 빌드 (배포용)
```bash
npm run build
```

## ⚠️ 데이터 관련 안내 (Data Disclaimer)

본 프로젝트는 TradingView의 무료 임베드 위젯을 사용합니다.
*   **한국(KRX), 일본(TSE)** 등 일부 거래소의 실시간 데이터는 라이선스 정책상 위젯에서 직접 조회가 제한될 수 있습니다.
*   이를 해결하기 위해 본 대시보드는 **ADR(미국 예탁 증서)**, **GDR(런던 예탁 증서)**, 또는 **주가지수(Index)** 데이터를 대체하여 보여줍니다. (예: 삼성전자 → 삼성전자 GDR)

## 📁 프로젝트 구조 (Structure)

```
src/
├── components/
│   ├── MarketList.jsx       # 사이드바 종목 리스트 (Proxy 심볼 적용)
│   ├── Navbar.jsx           # 상단 국가별 네비게이션
│   └── TradingViewWidget.jsx # TradingView 차트 래퍼 컴포넌트
├── App.jsx                  # 메인 레이아웃 (LNB + Content)
├── index.css                # Tailwind 및 커스텀 스타일 정의
└── main.jsx                 # Entry Point
```
