import { orderBy } from "lodash";
import React, { useEffect } from "react";
import CommentsList, { AddCommentForm } from "../common/comments";
import {
    createComment,
    getComments,
    getCommentsLoadingStatus,
    loadCommentsList,
    removeComment
} from "../../store/comments";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./loadingSpinner";

const Comments = () => {
    const { prodId } = useParams();
    const dispatch = useDispatch();
    const isLoading = useSelector(getCommentsLoadingStatus());
    const comments = useSelector(getComments());

    useEffect(() => {
        dispatch(loadCommentsList(prodId));
    }, [prodId]);

    const handleSubmit = (data) => {
        dispatch(createComment({ ...data, pageId: prodId }));
    };
    const handleRemoveComment = (id) => {
        dispatch(removeComment(id));
    };

    const sortedComments = orderBy(comments, ["created_at"], ["desc"]);

    return (
        <>
            <div className="card mb-2">
                <div className="card-body ">
                    <AddCommentForm onSubmit={handleSubmit} />
                </div>
            </div>
            {sortedComments.length > 0 && (
                <div className="card mb-3">
                    <div className="card-body ">
                        <h2>Comments</h2>
                        <hr />
                        {!isLoading ? (
                            <CommentsList
                                comments={sortedComments}
                                onRemove={handleRemoveComment}
                            />
                        ) : (
                            <LoadingSpinner/>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Comments;
