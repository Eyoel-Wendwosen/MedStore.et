import React, { Component, useState, useEffect } from 'react'
import {
	Button,
	Row,
	Col,
	Input,
	CardImg,
	Card,
	Form,
	Container,
	CardBody,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	FormGroup,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	UncontrolledCarousel,
} from 'reactstrap'
import classnames from 'classnames'

import axios from 'axios'
import Rating from '@material-ui/lab/Rating'
import { LOCAL_BASE_URL, API_URL } from 'constants.js'
import SerializeForm from 'form-serialize'

const ProductDetail = props => {
	let [product, setProduct] = useState()
	let [slideItems, setSlideItems] = useState([])

	let [isRequestModalOpen, setIsRequestModalOpen] = useState(false)

	let productId = props.match.params.productId

	useEffect(() => {
		async function fetchData() {
			let product = (await axios.get(`${LOCAL_BASE_URL}${API_URL}/product/${productId}`)).data.data
			setProduct(product)
			console.log('product')
			console.log(product)
			slideItems = product.photo_urls.map(photo => {
				return {
					src: `${LOCAL_BASE_URL}/${photo}`,
				}
			})
			setSlideItems(slideItems)
			console.log(slideItems)
		}
		fetchData()
	}, [productId])

	const toggleRequestModal = () => {
		setIsRequestModalOpen(!isRequestModalOpen)
	}

	const handleRequestSubmit = e => {
		e.preventDefault()
		let formValues = SerializeForm(e.target, { hash: true })
		console.log({ ...formValues })
		let request = {
			product: product._id,
			name: formValues.name,
			phone: formValues.phone,
			email: formValues.email,
			quantity: formValues.quantity,
			message: formValues.message,
			address: formValues.address,
		}

		axios.post(`${LOCAL_BASE_URL}${API_URL}/request`, request).then(res => {
			console.log(res.data)
		})
	}

	return (
		<>
			{' '}
			{product ? (
				<div>
					<section>
						<Row className="product-detail pl-lg-9 p-4 pt-5 mt-5 mb-3 bg-grey">
							<Col lg="4" className="mb-lg-auto">
								<div className="rounded shadow-lg overflow-hidden ">
									{/* <UncontrolledCarousel autoPlay={false} controls={true} indicators={true} items={this.state.product ? this.state.product.photo_urls : ""} /> */}
									<UncontrolledCarousel items={slideItems} />
								</div>
							</Col>
							<Col className="ml-4" lg="6">
								<Row>
									<h1>{product ? product.name : ''}</h1>
								</Row>
								<Row>
									<span className="material-icons mt-1">local_offer</span>
									{product ? product.tags.map(tag => <span className="pl-1">{tag} </span>) : ''}
								</Row>
								<Col>
									<Rating name="read-only" value={product ? product.rating : ''} readOnly />
								</Col>

								<hr className="mt-0" />
								<Row className="mt-3">
									<Col>
										<h5 className="text-gray">Brand: </h5>
										<h4>
											{product ? product.brand : ''}
											<span className="material-icons ml-5">location_on</span>
											<span className=" ml-2 font-weight-lighter">
												{product ? product.country : ''}
											</span>
										</h4>
									</Col>
								</Row>
								<br />
								<Row>
									<Col lg="7">
										<Button
											className="btn-icon btn-1 ml-1 "
											color="info"
											type="button"
											outline
											onClick={toggleRequestModal}>
											<span className="btn-inner--text">Request Information</span>
											<span className="btn-inner--icon mr-1">
												<i className="ni ni-bag-17" />
											</span>
										</Button>
										<br />
										<br />
									</Col>
									<Col lg="5">
										<h6>Need Help in choosing? Contact our equipment experts.</h6>
										<p>
											<span className="material-icons">phone</span> +251-919-38-1997
										</p>
										<p>
											<span className="material-icons">phone</span> +251-911-89-1367
										</p>
									</Col>
								</Row>
							</Col>
						</Row>
						<hr className="mt-0 mb-0" />
						<Row className="product-info pl-lg-9 p-4">
							<Col className="order-2 product-characterstics bg-grey p-2 rounded shadow mr-5">
								<h4 className="">Specification</h4>
								<hr className="mt-0" />
								{product
									? product.characteristics.map(char => (
											<Row className="ml-2">
												<Col sm="4">
													<small className="text-capitalize  font-weight-bold">{char[0]}:</small>
												</Col>
												<Col sm="8">
													<p>{char[1]}</p>
												</Col>
											</Row>
									  ))
									: ''}
							</Col>
							<Col className="order-1 product-description bg-grey p-2 rounded shadow mr-5">
								<h4>Description</h4>
								<hr className="mt-0" />
								<p className="ml-3">{product ? product.description : ''}</p>
							</Col>
							<Col className="order-3 product-catalogue bg-grey p-2 rounded shadow mr-5">
								<h4>Catalogue</h4>
								<hr className="mt-0" />
							</Col>
						</Row>
						<div>
							<h3 className="pl-4">Similar Products</h3>
							<hr className="mt-0" />
						</div>
					</section>
					{/* <this.renderRequestForm /> */}
					<Modal size="md" isOpen={isRequestModalOpen} toggle={toggleRequestModal}>
						<Form
							onSubmit={e => {
								handleRequestSubmit(e)
								toggleRequestModal()
							}}>
							<ModalBody className="p-0">
								<Col lg="" className="p-0">
									<Card className="bg-gradient-secondary shadow">
										<CardBody className="p-lg-5">
											<h4 className="mb-1">Want to know more about the {product.name}</h4>
											<p className="mt-0">Let us know your questions ...</p>
											<FormGroup>
												<InputGroup className="input-group-alternative">
													<InputGroupAddon addonType="prepend">
														<InputGroupText>
															<i className="ni ni-user-run" />
														</InputGroupText>
													</InputGroupAddon>
													<Input required placeholder="Enter Your name" type="text" name="name" />
												</InputGroup>
											</FormGroup>
											<FormGroup>
												<InputGroup className="input-group-alternative">
													<InputGroupAddon addonType="prepend">
														<InputGroupText>
															<i className="ni ni-pin-3" />
														</InputGroupText>
													</InputGroupAddon>
													<Input required placeholder="Enter your address" name="address" />
												</InputGroup>
											</FormGroup>
											<Row>
												<Col>
													<FormGroup>
														<InputGroup className="input-group-alternative">
															<InputGroupAddon addonType="prepend">
																<InputGroupText>
																	<i className="ni ni-email-83" />
																</InputGroupText>
															</InputGroupAddon>
															<Input placeholder="Enter your email" name="email" type="email" />
														</InputGroup>
													</FormGroup>
												</Col>
												<Col>
													<FormGroup>
														<InputGroup className="input-group-alternative">
															<InputGroupAddon addonType="prepend">
																<InputGroupText>
																	<i className="ni ni-mobile-button" />
																</InputGroupText>
															</InputGroupAddon>
															<Input
																placeholder="Enter your phone"
																required
																name="phone"
																type="phone"
															/>
														</InputGroup>
													</FormGroup>
												</Col>
											</Row>

											<FormGroup className="mb-4">
												<Input
													className="form-control-alternative"
													cols="80"
													name="message"
													placeholder="Do you have specific requirements (tell us more about your needs)..."
													rows="4"
													type="textarea"
												/>
											</FormGroup>
											<FormGroup className="mb-4">
												<h6>Quality</h6>
												<Input type="number" name="quantity" id="exampleSelect" placeholder="12" />
											</FormGroup>
											<div>
												<Button block className="btn-round" color="default" size="lg" type="submit">
													Send Message
												</Button>
											</div>
										</CardBody>
									</Card>
								</Col>
							</ModalBody>
						</Form>
					</Modal>
				</div>
			) : (
				'Loading...'
			)}
		</>
	)
}

export default ProductDetail
