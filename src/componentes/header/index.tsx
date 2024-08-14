import { useState } from "react";
import { FaRegSquarePlus } from "react-icons/fa6";
import Modal from "../modal";
import { Controller, useForm } from "react-hook-form";
import Input from "../input";
import { error } from "console";
import { Categories } from "../../api/categoryes.api";

type HeaderProps = {
  title: string;
}

export default function Header({ title }: HeaderProps) {

  const [visible, setViseble] = useState(false)

  const close = () => {
    setViseble(false)
  }

  const open = () => {
    setViseble(true)
  }
  
  const { handleSubmit, register } = useForm();

  const onSave = async (data: any) => {
    try {

      await Categories.create(data)

    }catch(error: any){
      alert(` Ocorreu um erro: ${error.message}`)
    }

  }

  return (
    <header className='header'>
      <div className="header_container">
        <div className="logo_container">
          <div className='logo'>
            <img src='./image/logo.png' alt="logo" />
            <div>
              <h1>Categorias</h1>
              <p> Comida Italiana, sim</p>
            </div>
          </div>
        </div>
        <div className='button'>
          <div onClick={() => open()} style={{cursor: 'pointer'}}>
            <div className='button_body_new'>
              Nova categoria
            </div>
            <div className='button_body_icon'> <FaRegSquarePlus /> </div>
          </div>
        </div>
      </div>

      <Modal title='Cadastrar novo produto' visible={visible} close={close}>
        <div>
          <form onSubmit={handleSubmit(onSave)} className="form">
            
           <Input {...register("descricao")} />

           <select {...register("active")} className="form_select" >
            <option value="1">sim</option>
            <option value="0">Não</option>
           </select>

          <div className="button_group">
          <button type="reset" className="butto_reset">Limpar</button>
          <button type="submit" className="button_primary">Enviar</button>
          </div>

          </form>
        </div>
      </Modal>
    </header >
  )
}