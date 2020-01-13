import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "../components/header.module.css"

const Header = ({ siteTitle,siteDescription,about,contact,blog }) => (
  <header
    style={{
      background: `rgba(50,50,50,0.8)`,
      marginBottom: `1.45rem`,
    }}
  >
      <h1 style={{ margin: "0 0 0 0.9rem" }}>
        <Link
          to="/"
          style={{color: "white", textDecoration: "none"}}
        >
          {siteTitle}
        </Link>
      </h1>
      <h3 style={{color: `rgba(223, 227, 235,0.4)`, margin: "0 0 0 0.9rem"}}>{siteDescription}</h3>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex"
      }}
    >
      <h4 style={{ marginRight: "0.9rem" }}>
        <Link
          to="/about"
          className={headerStyles.link}
          activeClassName={headerStyles.active}
        >
          {about}
        </Link>
      </h4>
      <h4 style={{ marginRight: "0.9rem" }}>
        <Link
          to="/contact"
          className={headerStyles.link}
          activeClassName={headerStyles.active}
        >
          {contact}
        </Link>
      </h4>
      <h4 style={{ marginRight: "0.9rem" }}>
        <Link
          to="/blog"
          className={headerStyles.link}
          activeClassName={headerStyles.active}
        >
          {blog}
        </Link>
      </h4>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  about: PropTypes.string,
  contact: PropTypes.string,
  blog: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
