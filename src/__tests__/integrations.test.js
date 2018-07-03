import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status : 200,
        response : [
            {
                name : 'fetched #1'
            },
            {
                name : 'fetched #2'
            }
        ]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
    // attempt to render the entire app.
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    // find the fetchComments button and click it.
    wrapped.find('.fetch-comments').simulate('click');
    // introduce a tiny little pause.```
    // setTimeout(() => {
    //     wrapped.update();
    //     // expect to find a list of comments. 500 li's.
    //     // console.log(wrapped.find('li'));
    //     expect(wrapped.find('li')).toBeTruthy();
    //     expect(wrapped.find('li').length).toEqual(2);
    //     wrapped.unmount();
    //     done();
    // }, 500);

    moxios.wait(() => {
        wrapped.update();
        // expect to find a list of comments. 500 li's.
        // console.log(wrapped.find('li'));
        expect(wrapped.find('li')).toBeTruthy();
        expect(wrapped.find('li').length).toEqual(2);
        wrapped.unmount();
        done();

    });

    // done();
});