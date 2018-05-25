// @flow

import React, { Component } from 'react';
import RaisedButton from 'components/RaisedButton';
import ScrollLock from 'react-scrolllock';
import {
  Container,
  FormField,
  TextAreaField,
  ModalHeader,
  FormMainField
} from './style';

const btnStyle = {
  width: '100%'
};

type Props = {
  submitTodo: Function,
  closeModal: Function,
  isOpen: boolean
};

type State = {
  value: string
};

export default class Modal extends Component<Props, State> {
  static defaultProps = {
    isOpen: false
  };

  state = {
    value: ''
  };

  handleChange = () => {
    const { submitTodo, closeModal } = this.props;
    const { value } = this.state;
    const checkValue = value.trim();

    if (!checkValue) {
      return false;
    }

    this.setState({ value: '' });
    submitTodo(checkValue);
    closeModal();
  };

  render() {
    const { isOpen, closeModal } = this.props;

    if (!isOpen) {
      return false;
    }
    return (
      <Container onClick={closeModal}>
        <FormField onClick={e => e.stopPropagation()}>
          <FormMainField>
            <ModalHeader>TODOを入力してください</ModalHeader>
            <TextAreaField
              onChange={e => this.setState({ value: e.target.value })}
            />
            <RaisedButton
              onClick={this.handleChange}
              text="送信"
              style={btnStyle}
            />
          </FormMainField>
        </FormField>
        <ScrollLock />
      </Container>
    );
  }
}
