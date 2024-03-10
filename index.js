document.getElementById('changeColorBtn').addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            document.body.style.backgroundColor = 'black';
        }
    });
});