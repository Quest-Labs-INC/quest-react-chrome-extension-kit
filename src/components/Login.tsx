import { QuestLogin } from '@questlabs/react-sdk'
import React from 'react'
import { Config } from './config'

export default function Login() {
    return (
        <QuestLogin
            googleClientId={Config.GOOGLE_CLIENT_ID}
            redirectUri="http://localhost:3000"
            redirectURL="https://www.questlabs.ai/"
            styleConfig={{}}
        ></QuestLogin>
    )
}
