import React from 'react'
import Alert from "./Alert";
import Main from "./Main";
import AlertProvider from "./AlertContext";

const ContextHook = () => {
    return (
        <AlertProvider>
            <div className='wrapper bg-light p-3'>
                <Alert/>
                <Main/>
            </div>
        </AlertProvider>
    )
}
export default ContextHook