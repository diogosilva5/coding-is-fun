import styled from 'styled-components';

export const SafeContainer = styled.SafeAreaView`
    flex: 1;
`;

export const Container = styled.View`
    flex: 1;
    padding-top: 200px;
`;

export const ContainerItem = styled.View`
    width: 50%;
    height: 100px;
`;

export const ButtonItem = styled.TouchableOpacity`
    flex: 1;
    margin: 24px 24px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 12px;
    border-width: 1px;
    border-color: black;
`;

export const ButtonText = styled.Text`
    color: black;
    font-weight: 600;
    font-size: 16px;
`;
