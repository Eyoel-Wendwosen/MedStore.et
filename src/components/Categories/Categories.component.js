import React, { Component, useState, useEffect } from 'react'
import { Col, Container, Collapse, Row, UncontrolledCollapse } from 'reactstrap'
import { Link, useRouteMatch } from 'react-router-dom'
import axios from 'axios'
import { LOCAL_BASE_URL, API_URL } from 'constants.js'

const renderCategories = (categories, onCategorySelect, path) => {
	return (
		<ul className="list-group">
			{categories.map(category => (
				<li key={category.name} className="list-group-item">
					{category.subCategories.length !== 0 ? (
						<span>{category.name}</span>
					) : (
						<Link to={`${path}/category/${category._id}`}>
							<span onClick={() => onCategorySelect(category)}>{category.name}</span>
						</Link>
					)}
					{category.subCategories.length !== 0 && (
						<span id={`Category_${category.name.split(' ')[0]}`} class="material-icons rigth-align">
							expand_more
						</span>
					)}
					{category.subCategories.length !== 0 && (
						<UncontrolledCollapse toggler={`#Category_${category.name.split(' ')[0]}`}>
							<ul className="list-group">
								{category.subCategories.map(sub_cat => (
									<Link to={`${path}/subCategory/${sub_cat._id}`}>
										<li
											onClick={() => onCategorySelect(sub_cat)}
											key={sub_cat.name}
											className="list-group-item">
											<span className="text-decoration-none">{sub_cat.name}</span>
										</li>
									</Link>
								))}
							</ul>
						</UncontrolledCollapse>
					)}
				</li>
			))}
		</ul>
	)
}

const Categories = (props, match) => {
	const [isOpen, setIsOpen] = useState(true)
	const [categories, setcategories] = useState([])

	useEffect(async () => {
		try {
			let categories = (await axios.get(`http://localhost:8080/api/v1/category`)).data.data
			let subCategories = (await axios.get(`http://localhost:8080/api/v1/subCategory`)).data.data
			// adding new an array of subcategories for each categories
			categories.forEach(category => {
				category.subCategories = subCategories.filter(
					subCategory => subCategory.category == category._id
				)
			})
			// saving the new fetched categories to the state of the componenet
			setcategories(categories)
		} catch (error) {}
	}, [])

	let { path, url } = useRouteMatch()

	const collapseCategoriesView = () => {
		setIsOpen(!isOpen)
	}

	const { onCategorySelect } = props

	let col_1, col_2
	if (categories.length !== 0) {
		let center = Math.ceil(categories.length / 2)
		col_1 = categories.slice(0, center)
		col_2 = categories.slice(center)
	}

	return (
		<>
			<div>
				<h3 onClick={() => collapseCategoriesView()} className="display-4 d-inline text-dark p-3">
					Categories {this}
				</h3>
				<span onClick={() => collapseCategoriesView()} className="display-4 pt-1 material-icons">
					{' '}
					more_vert
				</span>
				<Collapse isOpen={isOpen} toggler="collapseCategories">
					<Row className="bg-grey shadow mt-4 pb-2">
						{col_1 && (
							<Col lg="6" md="6" sm="6" className="pl-0">
								{renderCategories(col_1, onCategorySelect, path)}
							</Col>
						)}
						{col_2 && (
							<Col lg="6" md="6" sm="6" className="pr-0">
								{renderCategories(col_2, onCategorySelect, path)}
							</Col>
						)}
					</Row>
				</Collapse>
			</div>
		</>
	)
}

export default Categories
