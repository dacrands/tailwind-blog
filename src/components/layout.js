import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  function toggleDarkTheme(e) {    
    const htmlClassList = document.querySelector('html').classList
    htmlClassList && htmlClassList.contains("dark") 
      ? htmlClassList.remove("dark")
      : htmlClassList.add("dark");
  }

  if (isRootPath) {
    header = (
      <h1 className="mb-4 hover:underline">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="h1 hover:underline" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div
      className="flex 
      flex-col 
      align-items 
      justify-center 
      max-w-2xl 
      mx-auto 
      pt-8
      pb-4"
      data-is-root-path={isRootPath}>
      <div className="mb-20 relative">              
        <input name="toggle theme" id="checkbox" type="checkbox" onChange={toggleDarkTheme}/>
        <span id="checkbox-overlay"></span>
      </div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
