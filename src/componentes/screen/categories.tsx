import { title } from "process"
import { useCallback, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Categories } from "../../api/categoryes.api"
import Modal from "../modal"
import Card, { CardProps } from "../card"
import Header from "../header"
import api from "../../api/http"


export function CategoriesScreen() {

  const [visible, setViseble] = useState(false)
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState([])

  const chamaApi = useCallback ( async () => {
    try {

      const { data } = await api.get(`/categories`, { params: { page } })
      setCategories(data)


    } catch (err: any) {
      console.log(err)
    }
  }, [page])

  useEffect(() => {
    chamaApi();
  }, [chamaApi, page])

  const close = () => {
    setViseble(false)
  }

  const open = () => {
    setViseble(true)
  }

  const { handleSubmit, register } = useForm();

  const onSave = async (data: any) => {
    try {

      await Categories.create({
        id: data.id,
        name: data.name,
        description: data.description,
        active: Boolean(data.active)
      });

    } catch (error: any) {
      alert(` Ocorreu um erro: ${error.message}`)
    }

  }

  return (
    <>
      <Header title='Categorias' openModal={open} />
      
      <div className='category_list'>

        {categories.map((item: CardProps) => <Card name={item.name} description={item.description} active={item.active} />)}

        <button onClick={() => setPage(page + 1)}>
          Proxima pagina
        </button>
      </div>

      <Modal title='Cadastrar novo produto' visible={visible} close={close}>
        <div>

          <form onSubmit={handleSubmit(onSave)} className="form">

            <text> Id </text>
            <input type="text" {...register("id")} className="form_input" />

            <text> Nome </text>
            <input type="text" {...register("name")} className="form_input" />

            <text> Descrição </text>
            <input type="text" {...register("description")} className="form_input" />

            <text> Ativo </text>
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
    </>
  )
}