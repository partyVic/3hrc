import React, { useState } from 'react'

const DropDownModalItems = ({ title }) => {
    const [isHovering, setIsHovering] = useState(false)

    return (
        <div
            className={`${isHovering ? 'text-red-500 underline underline-offset-2 decoration-solid cursor-pointer' : ''}`}
            onMouseOver={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {title}
        </div>
    )
}

export default DropDownModalItems