import React, { Component, useEffect, useState } from 'react'
import { Row, Col, Card, CardBody, CardImg, CardTitle, CardLink } from 'reactstrap'
import axios from 'axios'
import { LOCAL_BASE_URL, API_URL } from 'constants.js'
import { useParams, Link } from 'react-router-dom'

const ProductsView = (props, match) => {
	const [products, setProducts] = useState([])
	let isUsedProduct = props.match.path.includes('usedProducts') // used to check if all product is required
	let isAccesories = props.match.path.includes('accessories') // used to check if all product is required
	const categoryIdKey = Object.keys(props.match.params)[0]
	const categoryIdValue = Object.values(props.match.params)[0]
	console.log(categoryIdKey)
	useEffect(() => {
		let ignore = false
		async function fetchData() {
			console.log(`${LOCAL_BASE_URL}${API_URL}/${categoryIdKey}/${categoryIdValue}/product`)
			let products = (
				await axios(`${LOCAL_BASE_URL}${API_URL}/${categoryIdKey}/${categoryIdValue}/product`)
			).data.data
			products.forEach(product => (product.photo_urls = product.photo_urls.split(';')))
			if (!ignore) setProducts(products)
		}
		async function fetchUsedProducts() {
			const result = await axios(`${LOCAL_BASE_URL}${API_URL}/product?condition=used`)
			if (!ignore) setProducts(result.data.data)
		}
		async function fetchaccessories() {
			// getting accessories category id
			const accesoryCategory = (
				await axios(
					`${LOCAL_BASE_URL}${API_URL}/category?name=accessory&name=Accessory&name=accessories&name=Accessories`
				)
			).data.data

			if (accesoryCategory.length !== 0) {
				const accesoryCategoryID = accesoryCategory[0]._id
				const result = await axios(
					`${LOCAL_BASE_URL}${API_URL}/category/${accesoryCategoryID}/product`
				)
				if (!ignore) setProducts(result.data.data)
			}
		}

		if (isUsedProduct) fetchUsedProducts()
		else if (isAccesories) fetchaccessories()
		else fetchData()

		return () => {
			ignore = true
		}
	}, [categoryIdValue, categoryIdKey])

	const { onProductSelect, onAddToCompare } = props

	return (
		<section>
			<Row>{renderProducts(products, onProductSelect, onAddToCompare, props.match.url)}</Row>

			<hr className="" />
			<h3 className="pl-4">Similar Products</h3>
			<Row>{renderProducts(products, onProductSelect, onAddToCompare, props.match.url)}</Row>
		</section>
	)
}
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
				<Link className="h-75" to={`${url}/detail/${product._id}`}>
					<CardBody onClick={() => onProductSelect(product)} className="py-1 px-3">
						<CardImg
							width="250px"
							height="250px"
							className="p-1"
							alt="Image not found"
							src={`${LOCAL_BASE_URL}${API_URL}/${product.photo_urls[0]}`}
							onClick={() => onProductSelect(product)}
						/>
						<CardTitle tag="h4" className="ml-1 my-0 mt-2 bg-grey">
							{product.name}
						</CardTitle>
						<p className="font-weight-lighter text-dark">{product.description}</p>
						<p>{product.brand}.</p>
					</CardBody>
				</Link>
				<CardBody className="content-center">
					<CardLink
						style={{ cursor: 'pointer' }}
						onClick={() => {
							onAddToCompare(product)
						}}>
						<span className="material-icons">compare_arrows</span>
					</CardLink>
				</CardBody>
				{/* <CardLink href="">
                            <span className="material-icons text-red">favorite_outline</span>
                        </CardLink> */}
			</Card>
		</Col>
	))
	return productRender
}
export default ProductsView
