// import { useState } from 'react'
import questLogo from './assets/quest_logo.png'
import './App.css'

function App() {
    // const onClick = async () => {
    //     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    //     chrome.scripting.executeScript({
    //         target: { tabId: tab.id! },
    //         func: () => {
    //             document.body.style.backgroundColor = 'green';
    //         }
    //     });
    // }

    const changeColorOnClick = async () => {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.scripting.executeScript({
          target: { tabId: tab.id! },
          func: () => {
            document.body.style.backgroundColor = 'green';
          }
        });
      }

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={questLogo} className="logo" alt="Vite logo" />
                </a>
            </div>
            <h1>Quest Chrome extension kit starter template</h1>
            <div className="card">
                <button onClick={() => changeColorOnClick()}>
                    Change Color
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}
export default App