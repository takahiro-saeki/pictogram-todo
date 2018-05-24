import React, { Component, Fragment } from 'react';
import Icon from 'components/Icon';
import { Container, IconWrapper, TextWrap } from './style';

const iconStyle = {
  color: 'red',
  fontSize: '1.8rem'
};

const inputStyle = {
  fontSize: '1rem',
  width: '100%',
  padding: '0.5rem',
  boxSizing: 'border-box',
  borderRadius: '0.25rem',
  border: '1px solid #ccc'
};

const checkStyle = {
  color: '#00bfa5',
  fontSize: '1.8rem'
};

const defaultCheckStyle = {
  color: '#CCC',
  fontSize: '1.8rem'
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
    const { memo, deleteTodo, editTodo, toggleCheck } = this.props;
    const { isEdit } = this.state;
    return (
      <Container onDoubleClick={this.changeEdit}>
        {isEdit ? (
          <input
            ref={node => (this.textInput = node)}
            onBlur={this.changeEdit}
            style={inputStyle}
            onKeyDown={e => this.isEnter(e, memo.id)}
          />
        ) : (
          <Fragment>
            <IconWrapper>
              {memo.isChecked ? (
                <Icon
                  name="check_circle_outline"
                  style={checkStyle}
                  onClick={() => toggleCheck(memo.id)}
                />
              ) : (
                <Icon
                  name="check_circle"
                  style={defaultCheckStyle}
                  onClick={() => toggleCheck(memo.id)}
                />
              )}
            </IconWrapper>
            <TextWrap line={memo.isChecked}>{memo.memo}</TextWrap>
            <IconWrapper>
              <Icon
                name="cancel"
                style={iconStyle}
                onKeyDown={e => this.isEnter(e, memo.id)}
                onClick={() => deleteTodo(memo.id)}
              />
            </IconWrapper>
          </Fragment>
        )}
      </Container>
    );
  }
}
