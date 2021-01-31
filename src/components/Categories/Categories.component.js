import React, { Component, useState, useEffect } from 'react'
import { Col, Container, Collapse, Row, UncontrolledCollapse } from 'reactstrap'
import { Link, useRouteMatch } from 'react-router-dom'
import axios from 'axios'

const renderCategories = (categories, onCategorySelect, path, collapseCategoriesView) => {
	return (
		<ul className="list-group">
			{categories.map(category => (
				<li key={category.name} className="list-group-item">
					{category.subCategories.length !== 0 ? (
						<p className="m-0 p-0" id={`Category_${category.name.split(' ')[0]}`}>
							<span>{category.name}</span>
							<span className="material-icons rigth-align">expand_more</span>
						</p>
					) : (
						<Link to={`${path}/category/${category._id}`}>
							<span
								onClick={() => {
									onCategorySelect(category)
									collapseCategoriesView()
								}}>
								{category.name}
							</span>
						</Link>
					)}
					{category.subCategories.length !== 0 && (
						<UncontrolledCollapse toggler={`#Category_${category.name.split(' ')[0]}`}>
							<ul className="list-group">
								{category.subCategories.map(sub_cat => (
									<Link to={`${path}/subCategory/${sub_cat._id}`}>
										<li
											onClick={() => {
												onCategorySelect(sub_cat)
												collapseCategoriesView()
											}}
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

	useEffect(() => {
		async function fetchData() {
			let categories = (
				await axios.get(
					`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_URL}/category`
				)
			).data.data
			let subCategories = (
				await axios.get(
					`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_URL}/subCategory`
				)
			).data.data
			// adding new an array of subcategories for each categories
			categories.forEach(category => {
				category.subCategories = subCategories.filter(
					subCategory => subCategory.category == category._id
				)
			})
			setcategories(categories)
		}
		fetchData()
		// saving the new fetched categories to the state of the componenet
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
				<h3
					onClick={() => collapseCategoriesView()}
					style={{ cursor: 'pointer' }}
					className="display-4 d-inline text-dark p-3">
					Categories {this}
					<span
						onClick={() => collapseCategoriesView()}
						style={{ display: 'initial' }}
						className="material-icons">
						{' '}
						{isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
					</span>
				</h3>
				<Collapse isOpen={isOpen} toggler="collapseCategories">
					<Row className="bg-grey shadow mt-4 pb-2">
						{col_1 && (
							<Col lg="6" md="6" sm="6" className="pl-0">
								{renderCategories(col_1, onCategorySelect, url, collapseCategoriesView)}
							</Col>
						)}
						{col_2 && (
							<Col lg="6" md="6" sm="6" className="pr-0">
								{renderCategories(col_2, onCategorySelect, url, collapseCategoriesView)}
							</Col>
						)}
					</Row>
				</Collapse>
			</div>
		</>
	)
}

export default Categories
