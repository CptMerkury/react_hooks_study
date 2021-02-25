import React, {useContext, useReducer} from "react";

const AlertReducer = React.createContext()
export const useAlert = () => useContext(AlertReducer)

const AlertProvider = ({children}) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'SHOW':
                return {
                    ...state,
                    visible: true,
                    text: action.payload
                }
            case 'HIDE' :
                return {
                    ...state,
                    visible: false
                }
            default :
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        visible: false,
        text: ''
    })

    const show = (text) => dispatch({type: 'SHOW', payload: text})
    const hide = () => dispatch({type: 'HIDE'})

    return (
        <AlertReducer.Provider value={{
            visible: state.visible,
            text: state.text,
            show,
            hide
        }}>
            {children}
        </AlertReducer.Provider>
    )
}

export default AlertProvider