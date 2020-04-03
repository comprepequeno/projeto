import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 100%;
  background-color: #F6C54D;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: 'Helvetica Neue';
`;

export const TextTitle = styled.Text`
  font-size: 25px;
  color: #000;
  font-weight: bold;
`

export const TextSubTitle = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`

export const ImageLocalizacao = styled.Image`
  height: 215px;
  width: 300px;
`

export const ViewGroupButtons = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  padding: 0 35px;
`

export const ButtonDefault = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 45px;
  background-color: ${props => props.backgroundColor};
  border-radius: 5px;
`

export const TextButtonDefault = styled.Text`
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${props => props.color};
`

export const ViewGroupStep = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const ViewStep = styled.View`
  width: 14px;
  height: 14px;
  background-color: ${props => props.active === true ? '#643BEE' : '#D3D2D2'};
  border-radius: 7px;
  margin-right: ${props => props.marginRight === true ? '15px' : '0px'};
`
