import { Route, Routes } from 'react-router-dom'
import Home from './Home.tsx'
import Login from './Login.tsx'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}
