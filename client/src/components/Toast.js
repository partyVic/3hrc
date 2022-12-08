import React from 'react'
import './toast.css'

const Toast = ({ isShowToast }) => {
    return (
        <div>
            <div
                className={`Toast ${isShowToast ? 'move' : ''}`}
            >
                Message sent
            </div>
        </div>
    )
}

export default Toast