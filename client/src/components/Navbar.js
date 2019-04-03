import React from 'react';
import { Link, } from 'react-router-dom';
import { Menu, Button,} from "semantic-ui-react";

const Navbar = () => (
  <Menu>
    <Link to="/">
    <Button color="black">Home</Button>
    </Link>
    <Link to="/about">
    <Button color="purple">About</Button>
    </Link>
    <Link to="/products">
    <Button color="purple">Products</Button>
    </Link>
  </Menu>
)

export default Navbar;
