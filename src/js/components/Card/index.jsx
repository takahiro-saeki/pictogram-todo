import React, { Component, Fragment } from 'react';
import Icon from 'components/Icon';
import {
  iconStyle,
  inputStyle,
  checkStyle,
  defaultCheckStyle
} from './inlineStyle';
import {
  Container,
  IconWrapper,
  TextWrap,
  TopWrapper,
  BottomWrapper,
  AreaSeparator
} from './style';

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
    const {
      memo,
      deleteTodo,
      editTodo,
      toggleCheck,
      changeCheckbox
    } = this.props;
    const { isEdit } = this.state;
    return (
      <Container>
        {isEdit ? (
          <input
            ref={node => (this.textInput = node)}
            onBlur={this.changeEdit}
            style={inputStyle}
            onKeyDown={e => this.isEnter(e, memo.id)}
          />
        ) : (
          <Fragment>
            <TopWrapper onDoubleClick={this.changeEdit}>
              <IconWrapper>
                {memo.isChecked ? (
                  <Icon
                    name="check_circle"
                    style={checkStyle}
                    onClick={() => toggleCheck(memo.id)}
                  />
                ) : (
                  <Icon
                    name="check_circle_outline"
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
            </TopWrapper>
            <BottomWrapper>
              <AreaSeparator>
                <label>
                  <input
                    name="today"
                    type="checkbox"
                    checked={memo.today}
                    onChange={() => changeCheckbox(memo.id)}
                  />
                  <span>今日のタスク</span>
                </label>
              </AreaSeparator>
              <AreaSeparator line>
                <span>追加した日: </span>
                <span>{memo.date}</span>
              </AreaSeparator>
            </BottomWrapper>
          </Fragment>
        )}
      </Container>
    );
  }
}
