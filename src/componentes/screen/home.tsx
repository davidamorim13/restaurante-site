import Header from "../header";


export function HomeScreen() {
    return (
        <>
            <Header title='Home'/>
            <div className="home">

            <img src="./image/home.image.jpeg" alt="logo" className="home_image"/>
            
                <div>
                    <h3> Restaurante Comida Italiana </h3>
                </div>

                <div className="home_descricao">
                    <p> O Comida Italiana é um restaurante em Barreiras que mantém sua tradição e qualidade desde os primórdios de sua fundação em 1996. Nossos produtos são produzidos com o mesmo cuidado artesanal desde então, cada criação é tratada como uma obra única e desenhada com carinho por cada um de nossos artistas. </p>

                </div>
                
                

            </div>

        </>
    )
}