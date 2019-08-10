import { Modal_Open, Modal_Close } from "./modalConstants";

export const openModal=(modalType,modalProps)=>{
    return{
        type:Modal_Open,
        payload:{
            modalType,
            modalProps
        }
    }

}

export const closeModal=()=>{
    return{
        type:Modal_Close
    }
}
