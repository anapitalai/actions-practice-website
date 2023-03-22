import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap';

const Header = () => {
	return (
		<Navbar bg="primary" variant="dark">
			<Container>
				Authentic Kid Skills | About | Contacts
			</Container>
		</Navbar>
	);
};

export default Header;
