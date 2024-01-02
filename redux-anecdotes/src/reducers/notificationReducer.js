import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification: {
            reducer: (state, action) => {
                return action.payload
            }
        } ,
        clearNotification () {
            return ''
        }
    }
})

export const notify = (content, timeout) => {
    return dispatch => {
        dispatch(setNotification(content))
        setTimeout(() => {
            dispatch(clearNotification())
        }, timeout*1000)
    }
}

export const { setNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer