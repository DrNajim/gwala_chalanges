import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getList=createAsyncThunk("Listquestions/getList", async ()=>{
    return axios.get("http://localhost:9000/Listquestions",)
    .then(res=>{
        return res.data}) 
    .catch(err=>console.log(err))
})
export const add=createAsyncThunk("Listquestions/add", async (newtet)=>{
    return axios.post(`http://localhost:9000/add`, newtet)
    .then(res=>{ 
        return res.data})
    .catch(err=>console.log(err))
})
const TasklistSlice = createSlice({
    name : "Tasks",
    initialState : {
        tasks :[],
        status:"",
        erreur:"",
    },
    reducers:{
    setstat(state,actions){
    state.tasks.map(item=>(item.titre===actions.payload ? {...item, statut:!item.statut}  : item))
    },
    },
    extraReducers: (builder)=>
    builder.addCase(getList.fulfilled, (state, action)=>{
        state.tasks=action.payload
        state.status="Accepted"
    })
    .addCase(getList.rejected, (state, action)=>{
        state.erreur=action.payload
        state.status="Rejected"
    })
    .addCase(getList.pending, (state, action)=>{
        state.status="Pending"})
    .addCase(add.fulfilled, (state, action)=>{
        state.tasks=action.payload
        state.status="Accepted"
    })
    .addCase(add.rejected, (state, action)=>{
        state.erreur=action.payload
        state.status="Rejected"
    })
    .addCase(add.pending, (state, action)=>{
        state.status="Pending"
    }) 
    })

export const {setadd, removeElement, setstat}= TasklistSlice.actions
export default TasklistSlice.reducer
// setadd (state,actions) {state.tasks=[...state.tasks, actions.payload]},
//        removeElement(state,staturitem){state.tasks=[...state.tasks.filter((item) => item !==staturitem)]},
