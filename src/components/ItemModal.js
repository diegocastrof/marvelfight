import React, { Component } from 'react'
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { unmountModalItem } from '../actions/modalItem.actions';

Modal.setAppElement('#app');

class ItemModal extends Component {
  handleCloseModal = (e) => {
    this.props.dispatch(unmountModalItem())
  }
  render() {
    const { title, thumbnail, description, creators } = this.props.modalItem || {};
    const img_url = thumbnail ? `${thumbnail.path}.${thumbnail.extension}`.replace('http://', 'https://') : ''
    const creatorsName = creators ? creators.items.map(item => item.name ) : []
    return (
      <div>
        <Modal
          isOpen={ this.props.isModalOpen }
          onRequestClose={ this.handleCloseModal } // dispatch unmountItem
          closeTimeoutMS={300}
          contentLabel='Item view'
          className="modal"
        > 
          <div className="modal-img-container">
            <img className="responsive-img" src={img_url} alt="modal character image"/>
          </div>
          <h3 className="modal__title"> { title } </h3>
          {
            description ? <p className="modal__description">{ description }</p> :
            <p className="modal__description">We don't have a description for this item </p>
          }
          <div className="modal__creators">
            <p className="modal__creators--title center-align">Creators:</p>
            /
            {
              creatorsName.map((name, index) => (
                <span key={ index }> { name } /</span>
              ))
            }
          </div>
          <button 
            onClick={this.handleCloseModal} // dispatch unmountItem
            className="waves-effect waves-light red lighten-2 btn"
          >
          Close
          </button>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modalItem: state.modalItem[0],
    isModalOpen: state.modalItem.length > 0 ? true : false
  }
}
export default connect(mapStateToProps)(ItemModal)