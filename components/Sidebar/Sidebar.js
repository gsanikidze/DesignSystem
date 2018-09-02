import React from 'react'
import Link from 'next/link'

// styles
import './sidebar.scss'

const Sidebar = ({ title, pages }) => {
    return (
        <section id="sidebar">
            <div class="title">{title}</div>
            <nav>
                <ul>
                    {
                        pages.map(({ name, url }, index) => <li key={index + name}><Link href={url}>{name}</Link></li>)
                    }
                </ul>
            </nav>
        </section>
    )
}

export default Sidebar
