import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PriceType } from '../../types/PriceType'

export const SERVER_URL = 'http://localhost:5000'



type InitialStateType = {
  isLoading: boolean
  error: string 
  priceList: PriceType[]
}

const initialState: InitialStateType = {
  isLoading: false,
  error: '',
  priceList: [] as PriceType[],
}

export const fetchPrice = createAsyncThunk<
  PriceType[],
  string,
  { rejectValue: string }
>('price/fetchPrice', async function (priceName, { rejectWithValue }) {
  const url = `${SERVER_URL}${priceName}` as string
  const response = await fetch(url)
  if (!response.ok) return rejectWithValue('Server error!')

  return await response.json()
})

export const priceSclice = createSlice({
  name: 'price',

  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPrice.pending, (state) => {
      state.isLoading = true
      state.error = ''
    })
    builder.addCase(fetchPrice.fulfilled, (state, action) => {
      state.priceList = action.payload.sort((a, b) => (a.radius > b.radius ? 1 : -1))
      state.isLoading = false
    })
    builder.addCase(fetchPrice.rejected, (state, action) => {
      state.error = action.payload as string
      state.isLoading = false
    })
  },
})

export default priceSclice.reducer
export const priceActions = priceSclice.actions
