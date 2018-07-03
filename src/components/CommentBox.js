import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

class CommentBox extends Component {
    state = {
        comment : ''
    };

    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    handleChange  = (event) => {
        this.setState({comment : event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.saveComment(this.state.comment);
        this.setState({comment : ''});
    };

    // componentDidMount() {
    //     this.shouldNavigateAway();
    // }
    //
    // componentDidUpdate() {
    //     this.shouldNavigateAway();
    // }
    //
    // shouldNavigateAway() {
    //     if (!this.props.auth) {
    //         console.log('i need to leave.');
    //         this.props.history.push('/');
    //     }
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea
                        name="textarea"
                        id="textarea"
                        cols="30"
                        rows="10"
                        value={this.state.comment}
                        onChange={this.handleChange}
                    />
                    <div>
                        <button>Submit Comment</button>
                        {/*<button>Submit Comment</button>*/}
                    </div>
                </form>
                <div>
                    <button
                        className="fetch-comments"
                        onClick={this.props.fetchComments}
                    >Fetch Comments</button>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {auth : state.auth}
// };

// export default requireAuth(CommentBox);

// export default requireAuth(connect(null, actions)(CommentBox));
// export default connect(null, actions)(requireAuth(CommentBox));
export default connect(null, actions)(requireAuth(CommentBox));
