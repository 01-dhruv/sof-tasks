import React from 'react'
import Widget from './Widget'
import WidgetTags from './WidgetTags'
import './RightSideBar.css'

const RightSideBar = ({theme}) => {
    return (
        <section className="right-sidebar">
            <Widget theme={theme}/>
            <WidgetTags theme={theme}/>
        </section>
    )
}

export default RightSideBar
