import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ExContext';

export default function CompC() {
    let objtheme = useContext(ThemeContext);

    return (
        <div>
            <p className={objtheme.theme}>{objtheme.message}</p>
        </div>
    )
}
