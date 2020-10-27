import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem,
    Table,
    Button,
    ListGroupItemHeading,
    ListGroupItemText
} from 'reactstrap';
import Rating from '@material-ui/lab/Rating';

import NavBar from 'components/Navbars/Navbar.component';
import SimpleFooter from 'components/Footers/SimpleFooter.component';


class CompareProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    name: "Blood Pressure Scanner",
                    sold_by: {
                        name: "WAGGA",
                        location: "Germany"
                    },
                    rating: 5,
                    img_urls: [
                        {
                            src: require("assets/img/theme/img-1-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        },
                        {
                            src: require("assets/img/theme/img-2-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        },
                        {
                            src: require("assets/img/theme/img-1-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        },
                        {
                            src: require("assets/img/theme/img-2-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        }
                    ],
                    tags: ["eye", "oct", "ophtalmology"],
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    characterstics: [
                        {
                            name: "battery life",
                            value: "5 hrs"
                        },
                        {
                            name: "battery life",
                            value: "5 hrs"
                        }
                    ]
                },
                {
                    name: "Blood Pressure Scanner",
                    sold_by: {
                        name: "WAGGA",
                        location: "Germany"
                    },
                    rating: 5,
                    img_urls: [
                        {
                            src: require("assets/img/theme/img-1-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        },
                        {
                            src: require("assets/img/theme/img-2-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        },
                        {
                            src: require("assets/img/theme/img-1-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        },
                        {
                            src: require("assets/img/theme/img-2-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        }
                    ],
                    tags: ["eye", "oct", "ophtalmology"],
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    caracterstics: [
                        {
                            name: "battery life",
                            value: "5 hrs"
                        },
                        {
                            name: "battery life",
                            value: "5 hrs"
                        }
                    ]
                },
                {
                    name: "Blood Pressure Scanner",
                    sold_by: {
                        name: "WAGGA",
                        location: "Germany"
                    },
                    rating: 5,
                    img_urls: [
                        {
                            src: require("assets/img/theme/img-1-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        },
                        {
                            src: require("assets/img/theme/img-2-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        },
                        {
                            src: require("assets/img/theme/img-1-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        },
                        {
                            src: require("assets/img/theme/img-2-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        }
                    ],
                    tags: ["eye", "oct", "ophtalmology"],
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    characterstics: [
                        {
                            name: "battery life",
                            value: "5 hrs"
                        },
                        {
                            name: "battery life",
                            value: "5 hrs"
                        }
                    ]
                },
                {
                    name: "Blood Pressure Scanner",
                    sold_by: {
                        name: "WAGGA",
                        location: "Germany"
                    },
                    rating: 5,
                    img_urls: [
                        {
                            src: require("assets/img/theme/img-1-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        },
                        {
                            src: require("assets/img/theme/img-2-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        },
                        {
                            src: require("assets/img/theme/img-1-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        },
                        {
                            src: require("assets/img/theme/img-2-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        }
                    ],
                    tags: ["eye", "oct", "ophtalmology"],
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    caracterstics: [
                        {
                            name: "battery life",
                            value: "5 hrs"
                        },
                        {
                            name: "battery life",
                            value: "5 hrs"
                        }
                    ]
                },
                {
                    name: "Blood Pressure Scanner",
                    sold_by: {
                        name: "WAGGA",
                        location: "Germany"
                    },
                    rating: 5,
                    img_urls: [
                        {
                            src: require("assets/img/theme/img-1-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        },
                        {
                            src: require("assets/img/theme/img-2-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        },
                        {
                            src: require("assets/img/theme/img-1-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        },
                        {
                            src: require("assets/img/theme/img-2-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        }
                    ],
                    tags: ["eye", "oct", "ophtalmology"],
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    characterstics: [
                        {
                            name: "battery life",
                            value: "5 hrs"
                        },
                        {
                            name: "battery life",
                            value: "5 hrs"
                        }
                    ]
                },
                {
                    name: "Blood Pressure Scanner",
                    sold_by: {
                        name: "WAGGA",
                        location: "Germany"
                    },
                    rating: 5,
                    img_urls: [
                        {
                            src: require("assets/img/theme/img-1-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        },
                        {
                            src: require("assets/img/theme/img-2-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        },
                        {
                            src: require("assets/img/theme/img-1-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        },
                        {
                            src: require("assets/img/theme/img-2-1200x1000.jpg"),
                            altText: "",
                            caption: "",
                            header: ""
                        }
                    ],
                    tags: ["eye", "oct", "ophtalmology"],
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    caracterstics: [
                        {
                            name: "battery life",
                            value: "5 hrs"
                        },
                        {
                            name: "battery life",
                            value: "5 hrs"
                        }
                    ]
                }
            ]
        };
    }

    renderCharacterstics(charactersitcs) {
        console.log((Array.from(charactersitcs)));

        return Array.from(charactersitcs).map(char => {
            return (<td>
                <ListGroup>
                    <ListGroupItem>
                        <ListGroupItemHeading>{char.name}</ListGroupItemHeading>
                        <ListGroupItemText>{char.name}</ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            </td>);
        });
    }
    render() {
        return (
            <>
                <NavBar />
                <div className="product-content mr-5 ml-5">
                    {this.state.products.length !== 0 && (
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th className="text-lg-center align-content-center">Product</th>
                                    {this.state.products.map(c => (
                                        <td>
                                            <img
                                                alt={`${c.name} Product`}
                                                src={c.img_urls[0].src}
                                                height="250px"
                                                width={100} />
                                        </td>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Charactersitcs</th>
                                    {this.state.products.map(c => {
                                        // this.renderCharacterstics(c.characterstics);
                                    })
                                    }
                                </tr>
                                <tr>
                                    <th scope="row">Description</th>
                                    {this.state.products.map(c => (
                                        <td>
                                            {c.description}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <th scope="row">Sold By</th>
                                    {this.state.products.map(c => (
                                        <td>
                                            {c.sold_by.name}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <th scope="row">Rating</th>
                                    {this.state.products.map(c => (
                                        <td>
                                            <Rating name="read-only" value={c.rating} readOnly />
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <th scope="row">Rating</th>
                                    {this.state.products.map(c => (
                                        <td>
                                            <Button
                                                className="font-weight-lighter"
                                                color="info"
                                                type="button"
                                                outline> View Product</Button>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </Table>
                    )}
                </div>
                <SimpleFooter />
            </>
        );
    }
}

export default CompareProduct;