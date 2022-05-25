import React from 'react-dom'

const Loading = () => {

    return (
        <div className='my-5 d-flex flex-column justify-content-center align-items-center'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <span>Loading...</span>
        </div>
    )
}

export default Loading;