import Header from "../header";


export function HomeScreen() {
    return (
        <>
            <Header title='Home' buttonEnable={false} />

            <div>
                <div className="title">

                    <h1> Restaurante Comida Italiana </h1>

                </div>

                <div className="home-descricao">

                    <img src="./image/home.image.jpeg" alt="logo" className="home_image" />

                    <div>
                        <p> O Comida Italiana é um restaurante localizado em Barreiras que mantém sua tradição e qualidade desde os primórdios de sua fundação em 1996. Nossos produtos são produzidos com o mesmo cuidado artesanal desde então, cada criação é tratada como uma obra única e desenhada com carinho por cada um de nossos artistas. </p>
                    </div>



                </div>
            </div>

        </>
    )
}