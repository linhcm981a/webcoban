import React, { Component } from 'react';

class ConTen extends Component {

  constructor(props) {
    super(props);
    this.state ={
        trangthai:0
    }
    
  }

renderButton = () => (
  <div className="row">
              <div className="btn btn-block btn-outline-warning" onClick = { () => this.editClick()}>EDIT</div>
              <div className="btn btn-block btn-warning">remove</div>
              </div>




)


renderFront = () => (

  <div className="row">
    <input  defaultValue={this.props.tieude} type="text" class="form-control"/>
  <div className="btn btn-block btn-outline-warning"onClick = { () => this.saveClick()}>save</div>
  </div>

  
)
displayCheck = () => {

    if(this.state.trangthai === 0 ){

      return this.renderButton();
    }else {

      return this.renderFront();
    }



}

editClick = ()  => {
this.setState({trangthai:1});


}
saveClick = ()  => {
  this.setState({trangthai:0});
  
  
  }





  render() {
    return (
      <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="p-5">
              <img className="img-fluid rounded-circle" src="img/01.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
    <h2 className="display-4">{this.props.tieude}</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
            </div>


        
          {this.displayCheck()}



          </div>
        </div>
      </div>
    </section>













    );
  }
}

export default ConTen;