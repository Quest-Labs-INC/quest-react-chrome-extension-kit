import { TutorialScreen } from '@questlabs/react-sdk'
import { Config } from './config'

export default function Tutorial() {
    return (
        <TutorialScreen
            userId={Config.USER_ID}
            token={Config.TOKEN}
            questId={Config.QUEST_ID}
            styleConfig={{}}
            heading='Your Application Progress'
            subheading='Welcome back, Please complete your application'
        />
    )
}
