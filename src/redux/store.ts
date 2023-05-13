import { configureStore } from '@reduxjs/toolkit'
import petReducer from './pet/petSlice'
export const store = configureStore({
  reducer: {
    pets:petReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch