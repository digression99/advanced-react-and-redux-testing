import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

// export default () => {
//     return (
//         <div>
//             <Route path="/post" component={CommentBox}/>
//             <Route path="/" exact component={CommentList}/>
//             {/*<CommentBox />*/}
//             {/*<CommentList />*/}
//         </div>
//     );
// };

class App extends Component {
    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommentBox}/>
                <Route path="/" exact component={CommentList}/>
            </div>
        );
    }

    renderButton() {
        if (this.props.auth) {
            console.log('Authorized');
            return (
                <button
                    onClick={() => this.props.changeAuth(false)}
                >SIGN OUT</button>);
        } else {
            console.log('Not Authorized');
            return (
                <button
                    onClick={() => this.props.changeAuth(true)}
                >SIGN IN</button>
            );
        }
    }

    renderHeader() {
        return (
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/post">POST A COMMENT</Link>
                </li>
                <li>
                    {this.renderButton()}
                </li>
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {auth : state.auth}
};

// map dispatch to props

export default connect(mapStateToProps, actions)(App);