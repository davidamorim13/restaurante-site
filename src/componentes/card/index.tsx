
export type CardProps = {
    name: string;
    description: string;
    active: boolean;
}


export default function Card({ name, description, active }: CardProps){
    return(
        <section className="card">
            <div className="image">
                <img src="./image/ao molho.png" alt="foto da categoria"/>
            </div>

            <div className="content">

                <h2 className="text-ellipse">{name}</h2>
                <p className="text-ellipse">{description}</p>
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
                    <input type="checkbox" checked={active}/>
                </div>
            </div>

          
        </section>
    )
}