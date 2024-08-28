import { type Metadata } from 'next'
import { LandingTemplate } from '@templates/LandingTemplate'

export const metadata: Metadata = {
    title: 'dashboard',
}

const RootPage = () => {
    return <LandingTemplate />
}

export default RootPage
