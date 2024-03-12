import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QuestProvider } from '@questlabs/react-sdk'
import { Config } from './components/config.ts'
import "@questlabs/react-sdk/dist/style.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QuestProvider apiKey={Config.API_KEY} entityId={Config.ENTITY_ID} featureFlags={{}} themeConfig={{}} apiType={Config.API_TYPE} apiSecret=''>
        <App />
      </QuestProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
