import { FeedbackWorkflow } from '@questlabs/react-sdk'
import React from 'react'
import { Config } from './config'

export default function Feedbackworkflow() {
    return (
        <FeedbackWorkflow
            userId={Config.USER_ID}
            token={Config.TOKEN}
            showFooter={true}
            questIds={[
                'q-general-feedback',
                'q-report-a-bug',
                'q-request-a-feature',
                'q-contact-us',
            ]}
            styleConfig={{}}
            // contactUrl="https://calendly.com/sriya-persana/30min"
            isOpen={true}
        />
    )
}
