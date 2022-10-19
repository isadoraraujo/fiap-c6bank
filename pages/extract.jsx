import React from 'react'
import Sidebar from '../components/Sidebar'
import styled from '@emotion/styled'

const ExtractContainer = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
`

export default function Extract() {
    return (
        <ExtractContainer>
            <Sidebar />
            <ExtractContent />
        </ExtractContainer>
    )
}