import { Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';

function NavBar() {
  return (
    <>
      <Menu color="blue" secondary pointing fixed="top" size="massive">
        <Menu.Menu position="left">
          <Menu.Item active={true} as={Link} to="/">
            <Icon name="checkmark box" />
            Todos
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Menu secondary size="massive"></Menu>
    </>
  );
}

export default NavBar;
