import axios from 'axios';
import {SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH} from "actions/types";

const saveComment = (comment) => {
    return {
        type : SAVE_COMMENT,
        payload : comment
    }
};

const fetchComments = () => {

    const response = axios.get('http://jsonplaceholder.typicode.com/comments');

    return {
        type : FETCH_COMMENTS,
        payload : response
    };
};

const changeAuth = (isLoggedIn) => {
    return {
        type : CHANGE_AUTH,
        payload : isLoggedIn
    };
};

export {saveComment, fetchComments, changeAuth};

// export default saveComment;