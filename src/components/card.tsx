import React from "react";

const cardStyle: React.CSSProperties = {
    padding: "100px",
    margin: "10px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

export const Card = React.memo(function Card({ children, notifications }: { children: React.ReactNode; notifications?: React.ReactNode }) {

    return <div style={cardStyle}>{notifications}{children}</div>
});