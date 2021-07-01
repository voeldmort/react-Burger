import React,{Component} from 'react';
import './Modal.css';
import Auc from '../../../hoc/Auc';
import Backdrop from'../Backdrop/Backdrop'

class Modal extends Component {
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show!==this.props.show;
        
    }
    componentWillUpdate() {
        console.log("[Modal] will Update");
    }
    render(){
        return(
            <Auc>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
            className='Modal'
            style={{
                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: this.props.show ? '1' : '0'
            }}>
            {this.props.children}
        </div>

    </Auc>

        )
    }
}

export default Modal;