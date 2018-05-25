import React, { Component } from 'react';
import RaisedButton from 'components/RaisedButton';
import { Container, FormField, TextAreaField, ModalHeader } from './style';

const btnStyle = {
  width: '100%'
};

export default class Modal extends Component {
  static defaultProps = {
    isOpen: false
  };

  state = {
    value: ''
  };

  handleChange = () => {
    const { submitTodo, closeModal } = this.props;
    const value = this.state.value;
    const checkValue = value.trim();

    if (!checkValue) {
      return false;
    }

    this.setState({ value: '' });
    submitTodo(checkValue);
    closeModal();
  };

  render() {
    const { isOpen, closeModal, formChange } = this.props;

    if (!isOpen) {
      return false;
    }
    return (
      <Container onClick={closeModal}>
        <FormField onClick={e => e.stopPropagation()}>
          <ModalHeader>TODOを入力してください</ModalHeader>
          <TextAreaField
            onChange={e => this.setState({ value: e.target.value })}
          />
          <RaisedButton
            onClick={this.handleChange}
            text="送信"
            style={btnStyle}
          />
        </FormField>
      </Container>
    );
  }
}
