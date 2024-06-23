import { createSlice } from '@reduxjs/toolkit'

type HamburgerStateType = {
  active: boolean
}
const initialState: HamburgerStateType = {
  active: false,
}

const hamburgerSlice = createSlice({
  name: 'hamburger',
  initialState,
  reducers: {
    togle(state) {
      state.active = !state.active
    },
    open(state) {
      state.active = true
    },
    close(state) {
      state.active = false
    },
  },
})

export default hamburgerSlice.reducer
export const { togle, close, open } = hamburgerSlice.actions
