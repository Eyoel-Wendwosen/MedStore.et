import React from 'react'
import {
	Container,
	Row,
	// Col,
	// CardImg,
	Button,
} from 'reactstrap'
import { Link } from 'react-router-dom'

class ECommerceService extends React.Component {
	componentDidMount() {}

	render() {
		const { service } = this.props
		return (
			<>
				<main>
					<section className="mb-3 pb-7 position-relative bg-gradient-lighter">
						<Container>
							<Row className="pt-8 row-grid align-items-center">
								<Container className="pl-2" lg="">
									<h7 className="display-2">{service.title_long}</h7>
									<p>{service.description}</p>
									{service.bullets && service.bullets.length !== 0 && (
										<ul>
											{service.bullets.map(bullet => (
												<li>{bullet}</li>
											))}
										</ul>
									)}
									{service.title === 'Buy and Sell' && (
										<Link to="/product">
											<Button>Explore Products </Button>
										</Link>
									)}
								</Container>
							</Row>
						</Container>
					</section>
				</main>
			</>
		)
	}
}
export default ECommerceService
