import React ,{Component} from 'react';
import Auc from '../../hoc/Auc';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
   state={
      showSideDrawer:false
   }
   sideDrawerClosedHandler=()=>{
      this.setState({showSideDrawer:false});

   }
   sideDrawerToggleHandler=()=>{
       this.setState((prevState)=>{
            return {showSideDrawer:!prevState.showSideDrawer}
      });

   }
   render(){
      return(
         <Auc>
        <Toolbar  drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
          <main className='Content'>
             {this.props.children}
          </main>

   </Auc>

      );
   }
}




export default Layout;

