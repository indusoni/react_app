import styled from 'styled-components';

const styles = {};
styles.SideBarContainer = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: left;

  flex-flow: row wrap;

  font-weight: bold;

  background: #e5e7e9;

  width: 100%;
`;

styles.Header = styled.div`
  background: lightgrey;
  flex: 1 100%;
  padding: 10px;
  text-align: center;
`;
styles.SideBarNav = styled.div`
  background: #aeb6bf;
  flex: 1;
  padding: 10px;
  height: 700px;
`;
styles.Main = styled.div`
  padding: 10px;
  flex: 5;
`;
styles.List = styled.ul`list-style-type: none;`;
styles.ListItem = styled.li`padding: 10px;`;
export default styles;
