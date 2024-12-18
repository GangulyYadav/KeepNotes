import React from 'react'

function CustomInputField(props) {
    const { setIsClicked } = props

    return (
        <div className='flex justify-center items-center h-1/3 w-1/2 '>
            <button name="changeModal" onClick={() => { setIsClicked(true) }} className='w-1/2 bg-white rounded-xl shadow-2xl h-1/3'>Take Note</button>
        </div>
    )
}

export default CustomInputField