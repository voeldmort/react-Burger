import React ,{Component} from 'react';
import Auc from '../../hoc/Auc';
import Burger from '../../component/Burger/Burger';
import BuildControls from '../../component/Burger/BuildControls/BuildControls';
import Modal from '../../component/UI/Modal/Modal';
import OrderSummary from '../../component/Burger/OrderSummary/Ordersummary';
const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
};


class BurgerBuilder extends Component{
    
state= {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0,

        },
        purchasble:false,
        totalPrice:4.09,
        purchasing:false
}

// updatePurchaseState (ingredients) {
//     const sum=Object.keys(ingredients)
//     .map(igKey => {
//         return ingredients[igKey];
//     })
//     .reduce((sum,el)=>{
//         return sum+el;
//     },0);
//     this.setState({purchasble:sum>0});
// }

updatePurchaseState (ingredients) {
    const sum = Object.keys( ingredients )
        .map( igKey => {
            return ingredients[igKey];
        } )
        .reduce( ( sum, el ) => {
            return sum + el;
        }, 0 );
    this.setState( { purchasable: sum > 0 } );
}




addIngredientHandler=(type)=>{
const oldCount = this.state.ingredients[type];
const updatedCount=oldCount+1;
const updatedIngedinats={
    ...this.state.ingredients
    //Update the ingredients 
};
updatedIngedinats[type]=updatedCount;
const priceAddition=INGREDIENT_PRICES[type];
const oldPrice=this.state.totalPrice;
const newPrice=oldPrice+priceAddition;
this.setState({totalPrice:newPrice,ingredients:updatedIngedinats});
this.updatePurchaseState(updatedIngedinats);
//Update the price
}


removeIngredientHandler=(type)=>{
    const oldCount = this.state.ingredients[type];
    if(oldCount<=0){
        return;
    }
const updatedCount=oldCount-1;
const updatedIngedinats={
    ...this.state.ingredients
    //Update the ingredients 
};
updatedIngedinats[type]=updatedCount;
const priceDeduction=INGREDIENT_PRICES[type];
const oldPrice=this.state.totalPrice;
const newPrice=oldPrice-priceDeduction;
this.setState({totalPrice:newPrice,ingredients:updatedIngedinats});
this.updatePurchaseState(updatedIngedinats);
//Update the price
    
};

purchaseHandler =()=> {
    this.setState({purchasing:true});
}

purchaseCancelHandler=()=>{
    this.setState({purchasing:false});
}
purchaseContinueHandler=()=>{
    alert('You Continue');
}



    render(){
        const disabledInfo={
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        }
        return(
            <Auc>
                <Burger ingredients={this.state.ingredients} />
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                    price={this.state.totalPrice}  
                    purchaseCanceled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}/>
                </Modal>
                
                <BuildControls
                ingredientAdded={this.addIngredientHandler} 
                 ingedientRemoved={this.removeIngredientHandler}
                 disabled={disabledInfo}
                 ordered={this.purchaseHandler}
                 price={this.state.totalPrice}
                 purchasable={this.state.purchasable}/>
            </Auc>
        );
    }
}


export default BurgerBuilder;
