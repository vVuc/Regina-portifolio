import styled from "styled-components";

export const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* Impede interação com as imagens decorativas */
    z-index: 1; /* Coloca as imagens atrás do conteúdo */

    .bg-image {
        position: absolute;
        max-width: 200px; /* Ajuste conforme necessário */
        max-height: auto;
        /* opacity: 0.7; Deixe translúcido para um efeito mais sutil */
    }

    .balance {
        bottom: 0;
        left: 0;

    }

    .RamoSuperiorDireito{
        top: 0;
        right: 0vw;
    }
    .RamoCentralDireito{
        min-width: 26.625rem;
        flex-shrink: 0;
        top: 23vh;
        left: 75vw;
    }


`
export const BodyStlyles = styled.body`
    background: linear-gradient(290deg, #F3E1DC 3.8%, #FFF 84.72%);
    min-height: 100vh;
    min-width: 100vw;
    padding: 0 5rem;
    overflow-x: hidden; /* Evita scroll horizontal */
    position: relative; /* Define o contexto para os elementos posicionados */

    main{
        display: flex; 
        justify-content:space-between;
        z-index: 10;
    }

    .Content{
        display: flex; 
        flex-direction: column; 
        align-items: center;
        justify-content: center;
        z-index: 10;
    }

    .statue{
        width: 39.5rem;
        height: 100vh;
        z-index: 99;
    }

      
    @media (width <= 900px) {
        &{
            padding:3rem;
        }

        main{
            display: block; 
        }

        .statue{
            display: none;
    }
}
`