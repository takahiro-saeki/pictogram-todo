import React, { Component, Fragment } from 'react';
import Icon from 'components/Icon';
import { Container, IconWrapper, TextWrap } from './style';

const iconStyle = {
  color: 'red',
  borderRadius: '50%',
  border: '1px solid red'
};

const inputStyle = {
  fontSize: '1rem',
  width: '100%',
  padding: '0.5rem',
  boxSizing: 'border-box',
  borderRadius: '0.25rem',
  border: '1px solid #ccc'
};

export default class Card extends Component {
  state = {
    isEdit: false
  };

  componentDidUpdate() {
    if (this.state.isEdit === true) {
      this.textInput.focus();
    }
  }

  changeEdit = () => {
    this.setState(state => ({ isEdit: !state.isEdit }));
  };

  isEnter = (e, id) => {
    if (e.which === 13) {
      this.props.editTodo(id, e.target.value);
      return this.changeEdit();
    }
    this.setState({ text: e.target.value });
  };

  render() {
    const { memo, deleteTodo, editTodo } = this.props;
    const { isEdit } = this.state;
    return (
      <Container onDoubleClick={this.changeEdit}>
        <IconWrapper>
          <Icon name="check" />
        </IconWrapper>
        <TextWrap>
          {isEdit ? (
            <input
              ref={node => (this.textInput = node)}
              onBlur={this.changeEdit}
              style={inputStyle}
              onKeyDown={e => this.isEnter(e, memo.id)}
            />
          ) : (
            memo.memo
          )}
        </TextWrap>
        <IconWrapper>
          <Icon
            name="close"
            style={iconStyle}
            onKeyDown={e => this.isEnter(e, data.id)}
            onClick={() => deleteTodo(memo.id)}
          />
        </IconWrapper>
      </Container>
    );
  }
}
