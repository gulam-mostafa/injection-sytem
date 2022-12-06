import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';

const PageNavBar = () => {
    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                        src="https://i.ibb.co/zVWS3VP/preforms1.png"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Injection Molding
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown

                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="https://i.ibb.co/YWyS5Mj/avatar.png" rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                               Unknown user
                            </span>
                            <span className="block truncate text-sm font-medium">
                               No Email
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/navbars"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default PageNavBar;