import { Link } from 'react-router-dom';
import questLogo from '../assets/quest_logo.png'

function Popup() {

    // example function to show how to use chrome.scripting.executeScript
    // const changeColorOnClick = async () => {
    //     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    //     chrome.scripting.executeScript({
    //         target: { tabId: tab.id! },
    //         func: () => {
    //             document.body.style.backgroundColor = 'green';
    //         }
    //     });
    // }

    return (
        <>
            <div>
                <a className='link' href="https://www.questlabs.ai/" target="_blank">
                    <img src={questLogo} className="logo" alt="Vite logo" />
                </a>
            </div>
            <h1>Quest Chrome extension kit starter template</h1>
            <div className="card">
                <button className='button' onClick={() => {}}>
                    Login to Get Started
                </button>
            </div>
            <Link target='_blank' to='https://docs.questlabs.ai/quest-sdks/react-sdk-components/' className="read-the-docs">
                Read Documentation for more details to integrate Quest SDK
            </Link>
        </>
    )
}
export default Popup;