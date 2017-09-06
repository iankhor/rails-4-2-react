import React from 'react';
import { Button, Modal } from 'react-bootstrap'

export default class SampleComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    }

    this.close = this.close.bind(this)
    this.open = this.open.bind(this)

  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <h1>Hi, I'm SampleComponent!</h1>


          <Button
               bsStyle="primary"
               bsSize="large"
               onClick={this.open}
             >
               Launch demo modal
             </Button>

             <Modal show={this.state.showModal} onHide={this.close}>
               <Modal.Header closeButton>
                 <Modal.Title>Modal heading</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                 <h4>Text in a modal</h4>
                 <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                 <hr />

                 <h4>Overflowing text to show scroll behavior</h4>
                 <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                 <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                 <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                 <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                 <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                 <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
               </Modal.Body>
               <Modal.Footer>
                 <Button onClick={this.close}>Close</Button>
               </Modal.Footer>
             </Modal>

      </div>

    );
  }
}
