import * as React from "react"
import { Link } from "gatsby"
import { useState } from "react"

const DarkThemeToggle = () => {
  const [isChecked, setIsChecked] = useState(document.querySelector('html').classList.contains("dark"))
  function toggleDarkTheme(e) {
    const htmlClassList = document.querySelector('html').classList
    if (htmlClassList && htmlClassList.contains("dark")) {
      htmlClassList.remove("dark")
      setIsChecked(false)
      return
    }
    htmlClassList.add("dark");
    setIsChecked(true)
  }

  return (
    <div className="mb-12 relative">
      <input
        name="toggle theme"
        id="checkbox"
        type="checkbox"
        onChange={toggleDarkTheme}
        checked={isChecked}
      />
      <span id="checkbox-overlay"></span>
    </div>
  )
}

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  let header

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
      pb-4
      px-4
      "
      data-is-root-path={isRootPath}>
      <DarkThemeToggle />
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
