import React from 'react'
// reactstrap components
import { Button, NavItem, NavLink, Nav, Container, Row, Col, UncontrolledTooltip } from 'reactstrap'
import { API_URL, LOCAL_BASE_URL } from '../../constants'

class SimpleFooter extends React.Component {
	render() {
		return (
			<>
				<footer className="footer" style={{ 'background-color': '#172b4d' }}>
					<Container className="">
						<Row className=" row-grid  ">
							<Col lg="">
								<h5 className="text-white">MedStore.et</h5>
								<Nav className=" nav-footer flex-column justify-content-center">
									<NavItem>
										<NavLink href="/" className="py-1">
											<span className="text-white">Home </span>
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="/product" className="py-1">
											<span className="text-white">Products </span>
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="/service" className="py-1">
											<span className="text-white">Services </span>
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="/about-us" className="py-1">
											<span className="text-white">AboutUs </span>
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="/contact-us" className="py-1">
											<span className="text-white">Contact Us </span>
										</NavLink>
									</NavItem>
									{/* <NavItem>
                    <NavLink
                      href="/contact-us" className="py-1"><span className="text-white" >LogIn </span></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/contact-us" className="py-1"><span className="text-white" >Signup </span></NavLink>
                  </NavItem> */}
								</Nav>
							</Col>
							<Col className="mt-0" lg="">
								<h5 className="text-white">Quick Links</h5>
								<Nav className=" nav-footer flex-column ">
									<NavItem>
										<NavLink href="/product/usedProducts" className="py-1">
											<span className="text-white">Used Products </span>
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="/product/accessories" className="py-1">
											<span className="text-white">Accessories</span>
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="service/Consultancy" className="py-1">
											<span className="text-white">Consultancy</span>
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="service/Technical%20Support" className="py-1">
											<span className="text-white">Technical Support</span>
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="service/Tender" className="py-1">
											<span className="text-white">Tender</span>
										</NavLink>
									</NavItem>
								</Nav>
							</Col>
							<Col className="text-center mt-0" lg="">
								<h5 className="text-white">Contact us</h5>
								<h6 className="mb-100 text-white font-weight-lighter">+251-919-38-1997</h6>
								<h6 className="mb-100 text-white font-weight-lighter">+251-911-89-1367</h6>
								<h6 className="mb-100 text-white font-weight-lighter">
									<a href="mailto: info@medstore.et">info@medstore.et</a>
								</h6>
								<Button
									className="btn-icon-only rounded-circle"
									color="twitter"
									href="https://twitter.com/"
									id="tooltip475038074"
									target="_blank">
									<span className="btn-inner--icon">
										<i className="fa fa-twitter" />
									</span>
								</Button>
								<UncontrolledTooltip delay={0} target="tooltip475038074">
									Follow us
								</UncontrolledTooltip>
								<Button
									className="btn-icon-only rounded-circle ml-1"
									color="facebook"
									href="https://www.facebook.com/MedStoreet-103342841662384"
									id="tooltip837440414"
									target="_blank">
									<span className="btn-inner--icon">
										<i className="fa fa-facebook-square" />
									</span>
								</Button>
								<UncontrolledTooltip delay={0} target="tooltip837440414">
									Like us
								</UncontrolledTooltip>
								<Button
									className="btn-icon-only rounded-circle ml-1"
									color="linkedin"
									href="https://www.linkedin.com/company/medstore-et/"
									id="tooltip829810202"
									target="_blank">
									<span className="btn-inner--icon">
										<i className="fa fa-linkedin" />
									</span>
								</Button>
								<UncontrolledTooltip delay={0} target="tooltip829810202">
									Connect with us
								</UncontrolledTooltip>
								<Button
									className="btn-icon-only rounded-circle ml-1"
									color="telegram"
									href="https://t.me/medstoreet"
									id="tooltip495507257"
									target="_blank">
									<span className="btn-inner--icon">
										<i className="fa fa-telegram" />
									</span>
								</Button>
								<UncontrolledTooltip delay={0} target="tooltip495507257">
									Join us
								</UncontrolledTooltip>
							</Col>
						</Row>
						<hr className="mb-0 mt-1" />
						<Row>
							<Col md="6">
								<div className=" copyright">
									<a href="/" target="_blank">
										MedStore.et
									</a>{' '}
									© {new Date().getFullYear()}{' '}
								</div>
							</Col>
							<Col md="6">
								<Nav className=" nav-footer justify-content-end">
									<NavItem
									// to="/"
									>
										<NavLink href="/">MedStore.et</NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="/about-us">About Us</NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md">
											MIT License
										</NavLink>
									</NavItem>
								</Nav>
							</Col>
						</Row>
					</Container>
				</footer>
			</>
		)
	}
}

export default SimpleFooter
