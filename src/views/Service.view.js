import React from 'react'

import { Container, Row, Col, Card, CardBody, Badge, CardImg } from 'reactstrap'

class Services extends React.Component {
	render() {
		return (
			<>
				<main ref="main">
					<div className="position-relative">
						<section className="section section-hero bg-gradient-teal section-shaped">
							{/* <div className="shape shape-style-1 ">
                                <span className="span-150" />
                                <span className="span-50" />
                                <span className="span-50" />
                                <span className="span-75" />
                                <span className="span-100" />
                                <span className="span-75" />
                                <span className="span-50" />
                                <span className="span-100" />
                                <span className="span-50" />
                                <span className="span-100" />
                            </div> */}

							<Container className="py-lg-md d-flex">
								<div className="col px-0">
									<Row className="content-center">
										<Col lg="8">
											<span>
												<h2 className="display-3 text-white">Services We Offer</h2>
												<p xl="12" style={{ textAlign: 'left' }} className="text-white">
													Buy and Sell: Market place of Medical Equipment <br />
													Buy and Sell New as well as Used Medical Equipments from stock and order.
													<br />
													Each Equipment at Medstore.et is fully authorized, registered, and
													certified at eFDA-Ethiopian Food and Drug Administration.
													<br />
												</p>
											</span>
										</Col>
									</Row>
									<Row>
										<span>
											<p></p>
										</span>
									</Row>
									<Row>
										<span></span>
									</Row>
								</div>
							</Container>
							<div className="separator separator-bottom separator-skew">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									preserveAspectRatio="none"
									version="1.1"
									viewBox="0 0 2560 100"
									x="0"
									y="0">
									<polygon className="fill-white" points="2560 0 2560 100 0 100" />
								</svg>
							</div>
						</section>
						<section className="section section-lg pt-lg-0 mt--150 ">
							<Container>
								<Row className="justify-content-center services-card">
									<Col lg="12">
										<Row className="row-grid">
											<Col lg="4">
												<Card className="card-lift--hover shadow border-0">
													<CardBody className="py-5">
														<CardImg
															className="mb-4"
															src={require('assets/img/ill/Technical Suppot.png')}
															alt="Smartphone icon"
														/>

														<h4 className="text-uppercase text-center bold">Technical Support</h4>
														<p className="description mt-3">
															<span className="font-weight-bold">MedStore.et</span> is home to
															experienced biomedical engineers where you can get technical support
															for your entire medical facility
														</p>
														<div>
															<Badge color="primary" pill className="mr-1">
																installation
															</Badge>
															<Badge color="primary" pill className="mr-1">
																Repair
															</Badge>
															<Badge color="primary" pill className="mr-1">
																relocation
															</Badge>
														</div>
														{/* <Button
                                                            className="mt-4"
                                                            color="primary"
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            Learn more
                                                        </Button> */}
													</CardBody>
												</Card>
											</Col>

											<Col lg="4">
												<Card className="card-lift--hover shadow border-0">
													<CardBody className="py-5">
														<CardImg
															className="mb-4"
															src={require('assets/img/ill/Consultancy.png')}
															alt="Smartphone icon"
														/>
														<h4 className="text-uppercase text-center bold">Consultancy</h4>
														<p className="description mt-3">
															<span className="font-weight-bold">MedStore.et</span> supports and
															advises you while you make a medical equipment purchase, and advice on
															managing medical equipment on health facilities.
														</p>
														<div>
															<Badge color="info" pill className="mr-1">
																Consult
															</Badge>
															<Badge color="info" pill className="mr-1">
																Support
															</Badge>
															<Badge color="info" pill className="mr-1">
																market
															</Badge>
														</div>
														{/* <Button
                                                            className="mt-4"
                                                            color="info"
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            Learn more
                                                        </Button> */}
													</CardBody>
												</Card>
											</Col>

											<Col lg="4">
												<Card className="card-lift--hover shadow border-0">
													<CardBody className="py-5">
														<CardImg
															className="mb-4"
															src={require('assets/img/ill/Tender.png')}
															alt="Smartphone icon"
														/>
														<h4 className="text-uppercase text-center bold">Tender</h4>
														<p className="description mt-3">
															At <span className="font-weight-bold">MedStore.et</span> searching for
															tender is easy, you can find floating tender, biding tenders, and hot
															deals through our{' '}
															<span className="font-weight-bold">MedStore.et</span> premium
															subscription.
														</p>
														<div>
															<Badge color="success" pill className="mr-1">
																deal
															</Badge>
															<Badge color="success" pill className="mr-1">
																tender
															</Badge>
															<Badge color="success" pill className="mr-1">
																service
															</Badge>
														</div>
														{/* <Button
                                                            className="mt-4"
                                                            color="success"
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            Learn more
                                                        </Button> */}
													</CardBody>
												</Card>
											</Col>
										</Row>
									</Col>
								</Row>
							</Container>
						</section>
						<section className="section bg-secondary">
							<Container>
								<Row className="row-grid align-items-center">
									<Col className="pr-md-5" md="6" lg="6">
										<Card className="bg-default shadow border-0">
											<CardImg
												alt="..."
												className="img-fluid floating"
												src={require('assets/img/theme/Maintenance.jpg')}
												top
											/>
										</Card>
									</Col>
									<Col md="6">
										<h3>Technical Support</h3>
										<p>
											<span className="font-weight-bold">MedStore.et</span> is home to experienced
											biomedical engineers where you can get technical support for your medical
											equipment. The service includes new installation, relocation, performance and
											verification, Maintenance and more of medical equipment.
										</p>
										<ul className="list-unstyled mt-5">
											<li className="py-2">
												<div className="d-flex align-items-center">
													<div>
														<Badge className="badge-circle mr-3" color="success">
															<i className="ni ni-settings-gear-65" />
														</Badge>
													</div>
													<div>
														<h6 className="mb-0">Carefully crafted effort</h6>
													</div>
												</div>
											</li>
											<li className="py-2">
												<div className="d-flex align-items-center">
													<div>
														<Badge className="badge-circle mr-3" color="success">
															<i className="ni ni-html5" />
														</Badge>
													</div>
													<div>
														<h6 className="mb-0">Top industry experts</h6>
													</div>
												</div>
											</li>
											<li className="py-2">
												<div className="d-flex align-items-center">
													<div>
														<Badge className="badge-circle mr-3" color="success">
															<i className="ni ni-satisfied" />
														</Badge>
													</div>
													<div>
														<h6 className="mb-0">Super friendly support team</h6>
													</div>
												</div>
											</li>
										</ul>
									</Col>
								</Row>
							</Container>
						</section>
						<section className="section">
							<Container>
								<Row className="row-grid align-items-center">
									<Col className=" order-2 pr-md-5" md="6" lg="6">
										<Card className="bg-default shadow border-0">
											<CardImg
												alt="..."
												className="img-fluid"
												src={require('assets/img/theme/Consultancy.jpg')}
												top
											/>
										</Card>
									</Col>
									<Col md="6">
										<h3>Consultancy</h3>
										<p>
											<span className="font-weight-bold">MedStore.et</span> is again a place where
											you can get early notification. Every Medical Equipment Tender in Ethiopia
											through subscription. You get detailed information about the tender..
										</p>
										<ul className="list-unstyled mt-5">
											<li className="py-2">
												<div className="d-flex align-items-center">
													<div>
														<Badge className="badge-circle mr-3" color="success">
															<i className="ni ni-settings-gear-65" />
														</Badge>
													</div>
													<div>
														<h6 className="mb-0">Customer focused</h6>
													</div>
												</div>
											</li>
											<li className="py-2">
												<div className="d-flex align-items-center">
													<div>
														<Badge className="badge-circle mr-3" color="success">
															<i className="ni ni-html5" />
														</Badge>
													</div>
													<div>
														<h6 className="mb-0">Towards Goal</h6>
													</div>
												</div>
											</li>
											<li className="py-2">
												<div className="d-flex align-items-center">
													<div>
														<Badge className="badge-circle mr-3" color="success">
															<i className="ni ni-satisfied" />
														</Badge>
													</div>
													<div>
														<h6 className="mb-0">Quality oriented</h6>
													</div>
												</div>
											</li>
										</ul>
									</Col>
								</Row>
							</Container>
						</section>

						<section className="bg-gradient-teal">
							<Container>
								<Row className="pt-5 ">
									<Col className="order-md-2" md="6">
										<img
											alt="..."
											className="img-fluid floating"
											src={require('assets/img/theme/promo-1.png')}
										/>
									</Col>
									<Col className="order-md-1" md="6">
										<div className="pr-md-5">
											<div className="icon icon-xg icon-shape-white icon-shape shadow rounded-circle mb-5">
												<i className="ni ni-notification-70 icon-c" />
											</div>
											<h3 className="text-white">Tenders notification</h3>
											<p className="text-white">
												MedStore.et is again a place where you can get early notification on any
												Medical Tender in Ethiopia through subscription.
											</p>
											<ul className="list-unstyled mt-5 te">
												<li className="py-2 te">
													<div className="d-flex align-items-center">
														<div>
															<Badge className="badge-circle mr-3" color="success">
																<i className="ni ni-bullet-list-67" />
															</Badge>
														</div>
														<div>
															<h6 className="mb-0 text-white">Carefully curated content</h6>
														</div>
													</div>
												</li>
												<li className="py-2">
													<div className="d-flex align-items-center">
														<div>
															<Badge className="badge-circle mr-3" color="success">
																<i className="ni ni-notification-70" />
															</Badge>
														</div>
														<div>
															<h6 className="mb-0 text-white">Timely notification</h6>
														</div>
													</div>
												</li>
												<li className="py-2">
													<div className="d-flex align-items-center">
														<div>
															<Badge className="badge-circle mr-3" color="success">
																<i className="ni ni-satisfied" />
															</Badge>
														</div>
														<div>
															<h6 className="mb-0 text-white">Super friendly support team</h6>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</Col>
								</Row>
							</Container>
							{/* <div className="separator separator-top zindex-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                    version="1.1"
                                    viewBox="0 0 2560 75"
                                    x="0"
                                    y="0"
                                >
                                    <polygon
                                        style={{ fill: '#FFFFFF' }}
                                        points="0 0 0 75 2560 75"
                                    />
                                </svg>
                            </div> */}
						</section>
					</div>
				</main>
			</>
		)
	}
}

export default Services
