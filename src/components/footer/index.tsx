import { Contato, Info, PerfilRegina,InfoData } from "./styles";

export function Footer() {
    return (
        <Contato>
            <PerfilRegina/>
            <Info>
                <div>
                    <h2>Contato</h2>
                    <div className="Bar"/>
                </div>
                <InfoData>
                    <img className="contato" src="./Tel.png" />
                    <div >
                        <h3>Telefone e WhatsApp</h3>
                        <p>(21)99159-9875</p>
                    </div>
                </InfoData>
                <InfoData>
                    <img className="Email" src="./Email.png" />
                    <div>
                        <h3>E-mail</h3>
                        <p>regina.medeiros.advogada@gmail.com</p>
                    </div>
                </InfoData>
                <InfoData>
                    <img className="local" src="./mapsIcon.png" />
                    <div>
                        <h3>Local</h3>
                        <p>Rio de Janeiro - RJ</p>
                    </div>
                </InfoData>
            </Info>
        </Contato>
    )
}