import React from 'react'
import { GetStarted } from '@questlabs/react-sdk'
import { Config } from './config'

export default function Getstarted() {
    return (
        <GetStarted
            userId={Config.USER_ID}
            token={Config.TOKEN}
            questId={Config.QUEST_ID}
            iconUrls={[
                "https://pin.questprotocol.xyz/ipfs/QmWSjM2BwmSW7pda3YmWxyFQ7sCJ9PVmVAwj1W9K7XAHhG",
                "https://pin.questprotocol.xyz/ipfs/QmRC5SwJpBup4wRB32DxjPV2fEnccpJkuMTBtzS9aiJg42",
                "https://pin.questprotocol.xyz/ipfs/QmcYB6T27vbqdaaeJdx1Cz3nz9oYMhTegpWjhSff7aX2Mi",
                "https://pin.questprotocol.xyz/ipfs/QmavuprWaHKvd5JZvkdgathYKLr5Zcshc1EPRzRzBJaPqw"
            ]}
            allowMultiClick={false}
            autoHide={false}
            headingText="What’s new"
            onCompleteAllStatus={() => {
                // showToast.success({ text: "completed successfully" })
            }}
            template={2}
            showLoadingIndicator

            uniqueUserId="soumitra.petbindhi+1@gmail.com"
            showProgressBar
            showFooter={false}
            styleConfig={{
                // Card:{backgroundColor:'red',borderBottom:'1px solid blue'}
            }}
        />
    )
}
