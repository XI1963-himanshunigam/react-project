import React from "react";
import { useLocation } from "react-router-dom";
import "../Dashboard/Dashboard.css";

const PostDetail = _ => {
    const { state } = useLocation();

    return (
        <div>
            <h4 className="detail-text">Photo Details</h4>
            <div className="text-center">
                <strong>{state.users.title}</strong>
            </div>
            <div className="text-center">
                <strong>{state.users.body}</strong>
            </div>
        </div>
    );
};

export default PostDetail;