import React,{ Component } from 'react';
import Auc from '../../../hoc/Auc';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
    componentWillUpdate(){
        console.log("OrderSummary Update");
    }
    render() {
        const ingredientSummary=Object.keys(this.props.ingredients)
    .map(igKey=>{
        return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
    });
        return(
            <Auc>
            <strong>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Continue to checkout...</p>
                <p style={{backgroundColor:'lightgreen',listStyle:'none'}}>Price: {this.props.price}</p>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                
                
            </strong>
        </Auc>
        );
    }
}




export default OrderSummary;
