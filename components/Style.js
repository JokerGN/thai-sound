import style from 'styled-components'

export const Bar = style.ul`
  position: relative;
  min-height: 40px;
  margin: 0px 0px 0px;
  border: 1px solid transparent;
  background-color: #3a80f2;
  border-radius: 10px;
`;

export const Nav = style.li`
  position: relative;
  display: block;
  float: left;
`;

export const NavItem = style.a`
  text-decoration: none;
  color: white;
  position: relative;
  display: block;
  padding: 10px 15px;
  line-height: 20px;


  &:hover {
    background: lightblue;
    border-radius: 10px;
  }
`;

export const Side = style.ul`
  height: 100%;
  width: 17%;
  position: fixed;
  top: 20;
  left: 0;
  background-color: #111;
  overflow-x: hidden;

  @media screen and (max-hight: 450px) {
    padding-top: 15px;
    font-size: 18px;
  }
`;
