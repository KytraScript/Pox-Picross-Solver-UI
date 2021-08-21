import React from 'react';
import Link from 'next/link';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    Collapse
} from 'shards-react';

export default class NavExample extends React.Component {
    constructor(props) {
        super(props);

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
            dropdownOpen: false,
            collapseOpen: false
        };
    }

    toggleDropdown() {
        this.setState({
            ...this.state,
            ...{
                dropdownOpen: !this.state.dropdownOpen
            }
        });
    }

    toggleNavbar() {
        this.setState({
            ...this.state,
            ...{
                collapseOpen: !this.state.collapseOpen
            }
        });
    }

    render() {
        return (
            <Navbar type="dark" theme="primary" expand="md">
                <NavbarBrand href="/">Pox and Petra's Picross Solver</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar}/>

                <Collapse open={this.state.collapseOpen} navbar>
                    <Nav navbar>
                        <Dropdown
                            open={this.state.dropdownOpen}
                            toggle={this.toggleDropdown}
                        >
                            <DropdownToggle nav caret>
                                Board Sizes
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={ () => this.props.routerAction('/?board=5')}>
                                    5 x 5
                                </DropdownItem>
                                <DropdownItem onClick={ () => this.props.routerAction('/?board=10')}>
                                    10 x 10
                                </DropdownItem>
                                <DropdownItem onClick={ () => this.props.routerAction('/?board=15')}>
                                    15 x 15
                                </DropdownItem>
                                <DropdownItem onClick={ () => this.props.routerAction('/?board=20')}>
                                    20 x 20
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Nav>

                    <Nav navbar className="ml-auto">
                        {/*<InputGroup size="sm" seamless>*/}
                        {/*    <InputGroupAddon type="prepend">*/}
                        {/*        <InputGroupText>*/}
                        {/*            /!* There was an icon here at one point*!/*/}
                        {/*        </InputGroupText>*/}
                        {/*    </InputGroupAddon>*/}
                        {/*    <FormInput className="border-0" placeholder="Search..."/>*/}
                        {/*</InputGroup>*/}
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}
