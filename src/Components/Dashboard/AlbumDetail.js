import React from "react";
import { useLocation } from "react-router-dom";
import "../Dashboard/Dashboard.css";

const AlbumDetail = _ => {
    const { state } = useLocation();

    return (
        <div>
            <h4 className="detail-text">Album Details</h4>
            <div className="text-center">
                <strong>{state.users.title}</strong>
            </div>
        </div>
    );
};

export default AlbumDetail;