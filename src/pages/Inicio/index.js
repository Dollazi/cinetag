import Rodape from "components/Rodape"
import Cabecalho from "components/Cabecalho"
import Banner from "components/Banner"
import Titulo from "components/Titulo"
import Card from "components/Card"

function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <Card id='1' titulo='Filme X' capa='https://br.web.img3.acsta.net/pictures/22/06/08/00/12/0256143.jpg' />
            <Rodape />
        </>
    )
}

export default Inicio