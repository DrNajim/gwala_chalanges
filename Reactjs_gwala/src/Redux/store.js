import {configureStore} from '@reduxjs/toolkit'
import QuestionpostsReducer from "./Reducer/Questionposts"  
import SignReducer from "./Reducer/Siginreducer"


const Store = configureStore({
    reducer: {
        Listquestion: QuestionpostsReducer,
        LSignin : SignReducer
    }
})
export default Store