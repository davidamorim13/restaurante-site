import { ReactNode, useState } from "react";
import { FaX } from "react-icons/fa6";

type ModalProps = {
    title: string;
    children: ReactNode
    visible: boolean;
    close: () => void;
}

export default function Modal({title, children, visible, close }: ModalProps){

  

if(!visible){
    return null;
}

    return(
        <div className="modal_orvelay">
           <div className="modal_container">
                <div className="modal_header">
                    <h1>{title}</h1>
                    <FaX size={28} onClick={ () => close()} style={{cursor: 'pointer'}}/>
                </div>
                <div className="modal_content">
                    {children}
                </div>
           </div>
        </div>
    )
}