import React, { Component } from 'react';
import { Container, FormField } from './style';

export default class Modal extends Component {
  static defaultProps = {
    isOpen: false
  };

  state = {
    value: ''
  };

  handleChange = () => {
    this.props.closeModal(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    const { isOpen, closeModal, formChange } = this.props;

    if (!isOpen) {
      return false;
    }
    return (
      <Container onClick={closeModal}>
        <FormField onClick={e => e.stopPropagation()}>
          <textarea onChange={e => this.setState({ value: e.target.value })} />
          <button type="button" onClick={this.handleChange}>
            submit
          </button>
        </FormField>
      </Container>
    );
  }
}
