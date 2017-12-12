import style from 'styled-components'

export const Bar = style.ul`
  position: relative;
  min-height: 40px;
  margin: 0px 0px 0px;
  border: 1px solid transparent;
  background-color: #3a80f2;
`;

export const Nav = style.li`
  position: relative;
  display: block;
  float:left
`;

export const NavItem = style.a`
  position: relative;
  display: block;
  padding: 10px 15px;
  line-height: 20px;

  &:hover {
    background: grey;
  }
`;

