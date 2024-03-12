import { OnBoarding } from '@questlabs/react-sdk'
import { Config } from './config';
import React from 'react';


export default function Onboarding() {
    const [answer, setAnswer] = React.useState({});
    function printAnswer() {
    }
    return (
        <OnBoarding
            userId={Config.USER_ID}
            questId={Config.QUEST_ID}
            answer={answer}
            setAnswer={setAnswer}
            token={Config.TOKEN}
            progress={["Personal sdrerwtr", "Professional", "Additional",]}
            showFooter={false}
            controlBtnType="Arrow"
            singleChoose="modal3"
            multiChoice="modal2"
            design={[[1, 2], [3, 4], [5, 6, 7]]}
            getAnswers={printAnswer}
            styleConfig={{ Form: { border: '1px solid black' } }}
            headingScreen={[{ name: "Tell us about yourself", desc: "this is description" }]}
        />
    )
}
