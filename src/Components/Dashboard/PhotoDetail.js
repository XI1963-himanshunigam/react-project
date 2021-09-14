import React from "react";
import { useLocation } from "react-router-dom";
import "../Dashboard/Dashboard.css";

const PhotoDetail = _ => {
    const { state } = useLocation();

    return (
        <div>
            <h4 className="detail-text">Photo Details</h4>
            <div className="text-center">
                <strong>{state.users.title}</strong>
            </div>
            <div className="text-center">
                <strong>{state.users.url}</strong>
            </div>
            <div className="text-center">
                <strong>{state.users.thumbnailUrl}</strong>
            </div>
        </div>
    );
};

export default PhotoDetail;