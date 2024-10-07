import React, { useContext } from 'react'
import Navbar from '../components/indusphere/Navbar'
import Sidebar from '../components/indusphere/Sidebar'
import { Outlet } from 'react-router-dom'
import { ServiceCtx } from '../contexts/indusphere/Service'

export default function MainLayout({ children }) {

    const service = useContext(ServiceCtx)

    return (
        <>
            <Sidebar/>
            <Navbar/>
            <div className='main-container'>
                <div style={{backgroundColor: service.background}} className='content'>{children}</div>
            </div>
        </>
    )
}
