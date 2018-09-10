import React from 'react'
import { Link } from 'ROUTES'

export default ({ navigationItems, className = '' }) => {
    return (
        <nav id="sidebar_navigation" className={className}>
            <ul>
                {
                    navigationItems.map(({ title, href }, index) => (
                        <li key={index + title}>
                            <Link href={href}>
                                <a>{title}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
