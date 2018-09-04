import React from 'react'

// styles
import './sidebar.scss'

const Sidebar = ({ title, pages }) => {
    return (
        <section id="sidebar">
            <div className="title"><a href="/">{title}</a></div>
            <nav>
                <ul>
                    {
                        pages.map(({ name, url }, index) => <li key={index + name}><a>{name}</a></li>)
                    }
                </ul>
            </nav>
        </section>
    )
}

export default Sidebar
