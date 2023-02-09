import React from 'react'
import User from '../components/content/User'

export default function UserPage(props) {
    return (
        <div>
            <User listUsers={props.listUsers} />
        </div>
    )
}
