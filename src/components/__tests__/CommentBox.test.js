import React from 'react';
import {mount} from 'enzyme';
import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(<Root>
        <CommentBox />
    </Root>);
});

it('has a text area and two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {

    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            // mock object.
            target : {value : 'new comment'}
        });
        wrapped.update();

    });

    it('has a text area that users can type in', () => {
        // wrapped.find('textarea').simulate('change', {
        //     // mock object.
        //     target : {value : 'new comment'}
        // });
        // wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('should empty out the textarea when form is submitted', () => {
        // wrapped.find('textarea').simulate('change', {
        //     // mock object.
        //     target : {value : 'new comment'}
        // });
        // wrapped.update();
        // expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});

afterEach(() => {
    wrapped.unmount();
});