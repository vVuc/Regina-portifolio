import { Card } from "../../components/cards";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { BodyStlyles,Background } from "./styles";

export function Home() {
    return (
        <BodyStlyles>
            <Background>
                <img src="balance2.svg" className="balance bg-image" />
                <img src="RamoSuperiorDireito.png" className="RamoSuperiorDireito bg-image"/>
                <img src="RamoCentralDireito.png" className="RamoCentralDireito bg-image"/>
            </Background>
            <main>
                <div className="Content">
                <Header />
                <Card/>
                <Footer />
                </div>
                <img className="statue" src="./statue.png" alt="Imagem da estatua da justiça" />
            </main>
        </BodyStlyles>
    )
}