
export default function Card(){
    return(
        <section className="card">
            <div className="image">
                <img src="./image/ao molho.png" alt="foto da categoria"/>
            </div>

            <div className="content">
                <h2>Massas</h2>
                <p>Macarrão com vegetais de primeira linha e camarão dos 7 meses.</p>
            </div>

            <div className="footer">
                <div>
                <button>
                    <img src="./image/Editar.png"/>
                </button>

                <button>
                    <img src="./image/Lixo.png"/>
                </button>
                </div>

                <div>
                    <p>Disponivel</p>
                    <input type="checkbox"></input>
                </div>
            </div>

          
        </section>
    )
}