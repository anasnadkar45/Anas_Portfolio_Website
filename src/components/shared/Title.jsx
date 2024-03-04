import React from 'react'

const Title = ({children}) => {
    return (
        <div className=' w-fit'>
            <h1 className='capitalize text-6xl font-bold'>{children}</h1>
            <div className='h-2 bg-[#1AD46F] w-48 text-center mb-1 rounded-md'></div>
            <div className='h-2 bg-[#FFEE00] w-48 text-center rounded-md translate-x-2'></div>
        </div>
    )
}

export default Title
