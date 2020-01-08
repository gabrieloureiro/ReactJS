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

        const { products } = this.state;

        return (
            <div className="product-list">
                {products.map(product =>(
                    <article key={product.id}>
                        <ul>
                            <img src={product.owner.avatar_url} width="65"></img>
                            <strong>{product.name}</strong>
                        </ul>
                        <p>{product.description}</p>
                        <a target="_blank" href={product.html_url}>Acess this repository</a>
                    </article>
                ))}
                <div classname="actions">
                    <button>Back</button>
                    <button>Next</button>
                </div>
            </div>
        )
    }
}
