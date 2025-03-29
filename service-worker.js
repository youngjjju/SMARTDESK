// Service-worker는 백그라운드에서 실행되고 있는 스크립트

// 아이콘을 클릭했을 때, 사이드 패널이 열리도록 함
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));
