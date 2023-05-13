import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction, ThunkAction, AnyAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import  apis from '../../services'
import { DogType } from '../../interfaces/interface'

// Define a type for the slice state
interface PetState {
  offset:number,
  pets: Array<DogType>,
  totalCount: number
}

// Define the initial state using that type
const initialState: PetState = {
  offset:0,
  pets:[],
  totalCount:0
}

export const petSlice = createSlice({
  name: 'pets',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increaseOffset:(state, action:PayloadAction<number>)=>{
      state.offset = state.offset + action.payload;
    },
    resetOffset:(state)=>{
      state.offset = 0;
    },
    setTotalCount:(state, action:PayloadAction<number>)=>{
      state.totalCount = action.payload;
      console.log(state.totalCount)
    },
    setPets: (state, action:PayloadAction<Array<DogType>>) => {
      action.payload.map((item)=>
        state.pets.push(item)
      )
    },
  },
})

export const petsAction = petSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.pets.pets.length
export default petSlice.reducer

export const fetchPets =(offset:number):ThunkAction<void, RootState, unknown, AnyAction>=>{
  return async(dispatch)=>{
      const response = await apis.getPets(offset);
      dispatch(petsAction.setPets(response.entities))
      dispatch(petsAction.setTotalCount(response.totalCount))
  }
}