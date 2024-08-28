import { FaRegSquarePlus } from "react-icons/fa6";

type HeaderProps = {
  title: string;
  openModal?: () => void;
  buttonEnable?: boolean;
}

export default function Header({ title, openModal, buttonEnable = true }: HeaderProps) {

  const handlerOpenModal = () => {
    if (openModal) {
      openModal()
    }
  }


  return (
    <header className='header'>
      <div className="header_container">
        <div className="logo_container">
          <div className='logo'>
            <img src='./image/logo.png' alt="logo" />
            <div>
              <h1>{title}</h1>
              <p> Comida Italiana, sim</p>
            </div>
          </div>

          <div className="menu">
            <ul>
              <li>

                <a href="/">Home</a>

              </li>

              <li>

                <a href="/products">Produtos</a>

              </li>

              <li>
                <a href="/categories">Categorias</a>
              </li>
            </ul>

          </div>
        </div>
        {
          buttonEnable && (
            <div className='button'>
              <div onClick={() => handlerOpenModal()} style={{ cursor: 'pointer' }}>
                <div className='button_body_new'>
                  Criar {title}
                </div>
                <div className='button_body_icon'> <FaRegSquarePlus /> </div>
              </div>
            </div>
          )
        }
      </div>
    </header >
  )
}