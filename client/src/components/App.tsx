import * as React from 'react';
import { TextArea, Button } from '@blueprintjs/core';
import { connect, Dispatch } from 'react-redux';
import { TextsAction, TextsListAction, TextsAddAction, TextsReducerState } from '../reducers/texts-reducer';

import './App.css';

interface AppProps extends TextsReducerState {
  addTextDispatch: (text: string) => void;
  listTextDispatch: () => void;
}

interface AppState {
  text: string
}

class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = { text: 'Enter some text' };
  }

  addText = () => {
    this.props.addTextDispatch(this.state.text);
    this.setState({ text: '' });
  }

  onTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ text: event.target.value });
  }

  public componentDidMount() {
    this.props.listTextDispatch();
  }

  public render() {
    const { addText, onTextChange } = this;
    const { text } = this.state;
    const { texts } = this.props;

    const renderedTexts = texts.map((text, idx) => (<div key={idx}>{text}</div>))

    return (
      <div className='app'>
        <h1>APP</h1>
        {renderedTexts}
        <div className='text-area-container'>
          <TextArea value={text} onChange={onTextChange} />
        </div>
        <Button text={'Add'} onClick={addText} />
      </div>
    );
  }

}

const mapStateToProps = (state: TextsReducerState) => {
  const texts = state.texts;
  return { texts };
};

const mapDispatchToProps = (dispatch: Dispatch<TextsAction>) => {
  return {
    addTextDispatch: (text: string) => { dispatch(TextsAddAction(text)) },
    listTextDispatch: () => { dispatch(TextsListAction()) },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
