import './App.css';
import React, {useState} from "react";
import StateHook from "./examples/stateHook";
import EffectHook from "./examples/effectHook";
import RefHook from "./examples/refHook";
import MemoHook from "./examples/memoHook";
import CallbackHook from "./examples/callbackHook/calbackHook";
import ContextHook from "./examples/contextHook/contextHook";
import ReducerHook from "./examples/reducerHook/reducerHook";
import CustomHook from "./examples/customHook";

function App() {
    let [state, setState] = useState({
        isStateHooks: false,
        isEffectHooks: false,
        isRefHooks: false,
        isMemoHooks: false,
        isCallbackHooks: false,
        isContextHooks: false,
        isReducerHooks: false,
        isCustomHooks: false,
    })
    const ACTION = {
        STATE_HOOK: 'STATE_HOOK',
        EFFECT_HOOK: 'EFFECT_HOOK',
        REF_HOOK: 'REF_HOOK',
        MEMO_HOOK: 'MEMO_HOOK',
        CALLBACK_HOOK: 'CALLBACK_HOOK',
        CONTEXT_HOOK: 'CONTEXT_HOOK',
        REDUCER_HOOK: 'REDUCER_HOOK',
        CUSTOM_HOOK: 'CUSTOM_HOOK',
    }


    const showExample = (action) => {
        switch (action) {
            case ACTION.STATE_HOOK :
                setState((prev) => {
                    return {
                        ...prev,
                        isStateHooks: !prev.isStateHooks
                    }
                })
                break;
            case ACTION.EFFECT_HOOK :
                setState((prev) => {
                    return {
                        ...prev,
                        isEffectHooks: !prev.isEffectHooks
                    }
                })
                break;
            case ACTION.REF_HOOK :
                setState((prev) => {
                    return {
                        ...prev,
                        isRefHooks: !prev.isRefHooks
                    }
                })
                break;
            case ACTION.MEMO_HOOK :
                setState((prev) => {
                    return {
                        ...prev,
                        isMemoHooks: !prev.isMemoHooks
                    }
                })
                break;
            case ACTION.CALLBACK_HOOK :
                setState((prev) => {
                    return {
                        ...prev,
                        isCallbackHooks: !prev.isCallbackHooks
                    }
                })
                break;
            case ACTION.CONTEXT_HOOK :
                setState((prev) => {
                    return {
                        ...prev,
                        isContextHooks: !prev.isContextHooks
                    }
                })
                break;
            case ACTION.REDUCER_HOOK :
                setState((prev) => {
                    return {
                        ...prev,
                        isReducerHooks: !prev.isReducerHooks
                    }
                })
                break;
            case ACTION.CUSTOM_HOOK :
                setState((prev) => {
                    return {
                        ...prev,
                        isCustomHooks: !prev.isCustomHooks
                    }
                })
                break;
            default:
                return state
        }
    }

    return (
        <div className="App m-4">
            <div>
                <button
                    onClick={() => showExample('STATE_HOOK')}
                    className='btn btn-primary m-4'>
                    Show useState
                </button>
                {!state.isStateHooks ? null : <StateHook/>}
            </div>
            <div>
                <button
                    onClick={() => showExample('EFFECT_HOOK')}
                    className='btn btn-primary m-4'>
                    Show useEffect
                </button>
                {!state.isEffectHooks ? null : <EffectHook/>}
            </div>
            <div>
                <button
                    onClick={() => showExample('REF_HOOK')}
                    className='btn btn-primary m-4'>
                    Show useRef
                </button>
                {!state.isRefHooks ? null : <RefHook/>}
            </div>
            <div>
                <button
                    onClick={() => showExample('MEMO_HOOK')}
                    className='btn btn-primary m-4'>
                    Show useMemo
                </button>
                {!state.isMemoHooks ? null : <MemoHook/>}
            </div>
            <div>
                <button
                    onClick={() => showExample('CALLBACK_HOOK')}
                    className='btn btn-primary m-4'>
                    Show useCallback
                </button>
                {!state.isCallbackHooks ? null : <CallbackHook/>}
            </div>
            <div>
                <button
                    onClick={() => showExample('CONTEXT_HOOK')}
                    className='btn btn-primary m-4'>
                    Show useContext
                </button>
                {!state.isContextHooks ? null : <ContextHook/>}
            </div>
            <div>
                <button
                    onClick={() => showExample('REDUCER_HOOK')}
                    className='btn btn-primary m-4'>
                    Show useReducer
                </button>
                {!state.isReducerHooks ? null : <ReducerHook/>}
            </div>
            <div>
                <button
                    onClick={() => showExample('CUSTOM_HOOK')}
                    className='btn btn-primary m-4'>
                    Show custom hook
                </button>
                {!state.isCustomHooks ? null : <CustomHook/>}
            </div>
        </div>
    );
}

export default App;
