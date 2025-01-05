import styled from "styled-components";

export const HeaderStyle = styled.header`
&{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        color: #241C1A;
        font-family: "Cormorant Garamond";
        font-size: 5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    
    h2 {
        color: #241C1A;
        text-align: center;
        font-family: Inter;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 2.4px;
        max-width: 41.0625rem;
    }
}

`