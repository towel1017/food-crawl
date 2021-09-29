import styled from "styled-components";

export const FoodStoreItemWrapper = styled.div`
    display : flex;
    align-items: center;
    justify-content: space-between;

    padding : 10px 15px;
    
    border : 1px solid black;
    border-radius: 5px;

    margin : 8px;
`;

export const StoreItemInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;

    margin-right : 15px;
`;

export const StoreNameText = styled.span`
    font-size : 20px;
    font-weight : bold;
    
    padding : 3px;
`;

export const StoreTypeText = styled.div`
    font-size : 15px;
    color : gray;
    font-weight: bold;

    padding : 3px;
`;

export const StoreAddressText = styled.span`
    font-size : 15px;

    padding : 3px;
`;

export const StoreItemInfoWrapper2 = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: space-around;
    & > span {
        text-align: right;
        font-size : 16px;
        font-weight: bold;

        margin : 10px 0;
    }
    & > button {
        background: none;
        border-radius: 5px;
        border: 0.5px solid black;
        padding : 10px 15px;

        margin : 10px 0;
    }
    & > button:hover {
        background-color: black;
        color : white;
    }
`;