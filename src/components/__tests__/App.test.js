import React from 'react';
import {shallow} from 'enzyme';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// import ReactDOM from 'react-dom';

import Root from 'Root';
import App from 'components/App';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />); // wrapped component.
});


it('shows a comment box', () => { // app component does not crash.

    // const wrapped = shallow(<App />); // wrapped component.

    expect(wrapped.find(CommentBox).length).toEqual(1);
    expect(wrapped.find(CommentList).length).toEqual(1);

    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    // console.log(div.innerHTML);
    //
    // expect(div.innerHTML).toContain('Comment Box');
    // expect(div.innerHTML).toContain('Comment List');
    //
    //
    // ReactDOM.unmountComponentAtNode(div);
});

it('shows a comment list', () => {
    // const wrapped = shallow(<App />); // wrapped component.
    expect(wrapped.find(CommentList).length).toEqual(1);
});