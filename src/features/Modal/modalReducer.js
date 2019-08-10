import {createReducer} from'../../common/utils/createReducer'
import { Modal_Open, Modal_Close } from './modalConstants';
const initialState=null;


const openModal=(state,payload)=>{
    const{ modalType,modalProps}=payload;
    return{
        modalType,
        modalProps
    }
}

const closeModal =(state)=>{
    return null;
}

export default createReducer(initialState,{
    [Modal_Open]:openModal,
    [Modal_Close]:closeModal

})