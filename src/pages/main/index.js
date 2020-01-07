import React, { Component } from 'react';
import api from '../../services/api';
import "./styles.css";

export default class Main extends Component {


    state = {
        products: [],
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response  = await api.get(`/users/gabrieloureiro/repos`);
        this.setState({ products: response.data });
        console.log(response.data);
    };
    
    

    render(){
        return (
            <div className="product-list">
                {this.state.products.map(product =>(
                    <article key={product.id}>
                        <ul>
                            <img src={product.owner.avatar_url} width="80"></img>
                            <a target="_blank" href={product.html_url}>
                                <strong>{product.name}</strong>
                            </a>
                        </ul>
                    </article>
                ))}
            </div>
        )
    }
}
