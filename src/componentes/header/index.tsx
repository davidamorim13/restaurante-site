

type HeaderProps = {
    title: string;
}

export default function Header ({title}: HeaderProps) {
   return(
   <header className='header'>
      <div className="logo_container">
      <div className='logo'>
        <img src='./image/logo.png'/>
       <div>
       <h1>Categorias</h1>
       <p> Comida Italiana, sim</p>
       </div>
      </div>
      </div>
      <div className='button'>
        <div>
          <div className='button_body_new'>
            Nova categoria
          </div>
          <div className='button_body_icon'>+</div>
        </div>
      </div>
     </header>
   )
}