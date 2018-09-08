import React from 'react'

// components
import SidebarNavigation from './SidebarNavigation'

// styles
import './sidebar.scss'

const Sidebar = ({ title, navigationItems }) => {
    return (
        <section id="sidebar">
            <header><a href="/">{title}</a></header>
            <SidebarNavigation navigationItems={navigationItems} />
        </section>
    )
}

export default Sidebar
