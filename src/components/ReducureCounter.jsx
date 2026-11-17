import { useReducer } from "react"

function ReducerCounter() {
    const countReducer = (state, action) => {
        if (action.type === 'add') {
            return state + action?.pay || state + 1
        }
        return state + 1
    }


    const [count, countDispatch] = useReducer(countReducer, 30)

    return (
        <>
            <h1 className='bg-red-500'>this is redux project {count}</h1>

            <button onClick={() => countDispatch({ type: 'add' })}>update</button>


        </>
    )
}

export default ReducerCounter
