import React from "react"
import { Link } from "gatsby"

const CenteredDiv = ({ children }) => (
    <div
        style={{
            textAlign: "center"
        }}
    >
        {children}
    </div>
)

export default () => (
    <CenteredDiv>
        <h1>Oops!</h1>
        <p>This is the 404 page. The page you're looking for doesn't exist.</p>
        <Link to="/">Home</Link>
    </CenteredDiv>
)