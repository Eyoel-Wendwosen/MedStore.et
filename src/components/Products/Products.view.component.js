import React, { Component, useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardImg, CardTitle, CardLink } from 'reactstrap';
import axios from 'axios';
import { LOCAL_BASE_URL, API_URL } from 'constants.js';
import { useParams, Link } from 'react-router-dom';

const ProductsView = (props, match) => {
	const [products, setProducts] = useState([]);
	const categoryIdKey = Object.keys(props.match.params)[0];
	const categoryIdValue = Object.values(props.match.params)[0];

	useEffect(() => {
		let ignore = false;
		async function fetchData() {
			const result = await axios(`${LOCAL_BASE_URL}${API_URL}/${categoryIdKey}/${categoryIdValue}/product`);
			if (!ignore) setProducts(result.data.data);
		}

		fetchData();
		return () => { ignore = true; };

	}, [categoryIdValue, categoryIdKey]);

	// api/v1/category/60006761e31b22043098595f/product

	const { onProductSelect, onAddToCompare } = props;

	return (
		<section>
			{/* <Row >
		            <Col> */}
			<Row>{renderProducts(products, onProductSelect, onAddToCompare, props.match.url)}</Row>
			{/* </Col>
		        </Row> */}
			<hr className="" />
			{/* <h3 className="pl-4">
		            Similar Products
		            </h3>
		            <Row>
		            {this.renderProducts(10)}
		        </Row> */}
		</section>
	);
};
const renderProducts = (products, onProductSelect, onAddToCompare, url) => {
	let productRender = products.map(product => (
		<Col
			style={{
				display: 'flex',
				display: '-webkit-flex',
				'flex-wrap': 'wrap',
			}}
			key={product}
			className="mt-4"
			xl="2"
			lg="5"
			md="4"
			sm="6">
			<Card className="card-lift shadow border-3">
				<Link
					to={`${url}/detail`}
				>
					<CardBody onClick={() => onProductSelect(product)} className="py-1 px-3">
						<CardImg
							className="p-1"
							alt="Image not found"
							// height="100vh"
							// src={"http://localhost:8080/avatars/temini.jpg"}
							src={`${LOCAL_BASE_URL}/${product.photo_urls[0]}`}
							onClick={() => onProductSelect(product)}
						/>
						<CardTitle tag="h4" className="ml-1 my-0 mt-2 bg-grey">
							{product.name}
						</CardTitle>
						<p className="font-weight-lighter text-dark">{/* {product.description} */}</p>
						<p>{product.brand}.</p>
					</CardBody>
				</Link>
				<CardBody className="content-center">
					<CardLink
						style={{ cursor: 'pointer' }}
						onClick={() => {
							onAddToCompare(product);
						}}>
						<span className="material-icons">compare_arrows</span>
					</CardLink>
				</CardBody>
				{/* <CardLink href="">
                            <span className="material-icons text-red">favorite_outline</span>
                        </CardLink> */}
			</Card>
		</Col>
	));
	return productRender;
};
export default ProductsView;
