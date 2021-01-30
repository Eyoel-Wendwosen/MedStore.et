import React from 'react'
import { Link } from 'react-router-dom'
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from 'headroom.js'
// reactstrap components
import {
	UncontrolledCollapse,
	DropdownMenu,
	DropdownToggle,
	UncontrolledDropdown,
	Media,
	NavbarBrand,
	Navbar,
	Nav,
	Row,
	Col,
} from 'reactstrap'

class DemoNavbar extends React.Component {
	componentDidMount() {
		let headroom = new Headroom(document.getElementById('navbar-main'))
		// initialise
		headroom.init()
	}

	state = {
		collapseClasses: '',
		collapseOpen: false,
	}

	onExiting = () => {
		this.setState({
			collapseClasses: 'collapsing-out',
		})
	}

	onExited = () => {
		this.setState({
			collapseClasses: '',
		})
	}

	render() {
		return (
			<>
				<header>
					<Navbar
						className="navbar-main shadow navbar-transparent pr-5 pl-5 "
						expand="lg"
						id="navbar-main">
						<Col lg="6" md="6">
							<NavbarBrand className="mr-lg-5 d-flex flex-row" to="/" tag={Link}>
								<img alt="..." src={require('../../assets/img/brand/Logo-w-moto-white.png')} />
							</NavbarBrand>
						</Col>

						<Col lg="6" md="6">
							<Row className="justify-content-end">
								<UncontrolledDropdown>
									<DropdownToggle nav>
										<i className="ni ni-satisfied d-lg-none" />
										<Link className="nav-link-inner--text nav-hover" to="/log-in">
											<span className="material-icons text-white">account_circle</span>
											{/* <span className="h6 font-weight-normal text-white">LogIn</span> */}
										</Link>
									</DropdownToggle>
								</UncontrolledDropdown>
							</Row>

							<Row className="justify-content-end">
								<button className="navbar-toggler" id="navbar_global">
									<span className="navbar-toggler-icon" />
								</button>
								<UncontrolledCollapse
									toggler="#navbar_global"
									navbar
									className={'justify-content-end'}
									onExiting={this.onExiting}
									onExited={this.onExited}>
									<div className="navbar-collapse-header">
										<Row>
											<Col className="collapse-brand" xs="6">
												<Link to="/">
													<img alt="..." src={require('../../assets/img/brand/Logo-w-moto.png')} />
												</Link>
											</Col>
											<Col className="collapse-close" xs="6">
												<button className="navbar-toggler" id="navbar_global">
													<span />
													<span />
												</button>
											</Col>
										</Row>
									</div>
									<Nav className="navbar-nav-hover" navbar>
										<UncontrolledDropdown nav>
											<DropdownToggle nav>
												<i className="ni ni-ui-04 d-lg-none" />
												<Link className="nav-link-inner--text nav-hover" to="/">
													<span className="h6 font-weight-normal text-white">Home</span>
												</Link>
											</DropdownToggle>
										</UncontrolledDropdown>
										<UncontrolledDropdown nav>
											<DropdownToggle nav>
												<i className="ni ni-cart d-lg-none" />
												<Link to="/product" className="nav-link-inner--text nav-hover">
													<span className="h6 font-weight-normal  text-white">Products</span>
												</Link>
											</DropdownToggle>
										</UncontrolledDropdown>
										<UncontrolledDropdown nav>
											<DropdownToggle nav>
												<i className="ni ni-app d-lg-none" />
												<Link to="/service" className="nav-link-inner--text nav-hover">
													<span className="h6 font-weight-normal text-white">Services</span>
												</Link>
											</DropdownToggle>
										</UncontrolledDropdown>
										<UncontrolledDropdown nav>
											<DropdownToggle nav>
												<i className="ni ni-circle-08 d-lg-none" />
												<Link className="nav-link-inner--text nav-hover" to="/about-us">
													<span className="h6 font-weight-normal text-white">About Us</span>
												</Link>
											</DropdownToggle>
										</UncontrolledDropdown>
										<UncontrolledDropdown>
											<DropdownToggle nav>
												<i className="ni ni-email-83 d-lg-none" />
												<Link className="nav-link-inner--text nav-hover" to="/contact-us">
													<span className="h6 font-weight-normal text-white">Contact Us</span>
												</Link>
											</DropdownToggle>
										</UncontrolledDropdown>
									</Nav>
								</UncontrolledCollapse>
							</Row>
						</Col>
					</Navbar>
				</header>
			</>
		)
	}
}

export default DemoNavbar
