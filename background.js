chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.action === "open-side-panel") {
    //@ts-ignore
    chrome.sidePanel.open({ tabId: sender.tab?.id });
  }
});

// content.js
const App = () => {
  const openSidePanel = () => {
    chrome.runtime.sendMessage({
      action: "open-side-panel",
    });
  };
  // ...

  return <button onClick={openSidePanel} />;
};
