import * as React from "react"
import { Link } from "gatsby"
import {
  useState,
  useEffect,
  useContext
} from "react"
import { ThemeContext } from "../context/theme"
import { useRef } from "react"

export const useDocument = () => {
  const [myDocument, setMyDocument] = useState(null)

  useEffect(() => {
    setMyDocument(document)
  }, [])

  return myDocument
}

const DarkThemeToggle = () => {
  const doc = useDocument()
  const [isDarkTheme, setIsDarkTheme] = useContext(ThemeContext);

  const Wrapper = ({ children }) => (
    <div className="mb-12 relative">
      {children}
    </div>
  )

  if (!doc) return <Wrapper />    

  function toggleDarkTheme(e) {
    const htmlClassList = doc.querySelector('html').classList
    if (htmlClassList && htmlClassList.contains("dark")) {
      htmlClassList.remove("dark")
      setIsDarkTheme(false)
      return
    }
    htmlClassList.add("dark");
    setIsDarkTheme(true)
  }

  return (
    <Wrapper>
      <input
        name="toggle theme"
        id="checkbox"
        type="checkbox"
        onChange={toggleDarkTheme}
        checked={isDarkTheme}
      />
      <span id="checkbox-overlay"></span>
    </Wrapper>
  )
}

const ScrollTopBtn = () => {
  const doc = useDocument()
  const btnRef = useRef();
  useEffect(() => {
    if(!doc) return
    function handleScroll(e) {
      const showHeight = window.pageYOffset 
        + btnRef.current.getBoundingClientRect().top
      if (showHeight > 1000) {
        btnRef.current.style.display = 'block'
        return
      }
      btnRef.current.style.display = 'none'
    }
    doc.addEventListener('scroll', handleScroll)
    return () => {
      doc.removeEventListener('scroll', handleScroll)
    }
  }, [doc])

  if (!doc) return <></>


  return <a 
  ref={btnRef}
  style={{display: "none"}}
  className="fixed 
    bottom-2 
    right-2 
    text-black
    dark:text-zinc-100
    bg-indigo-200 
    hover:bg-indigo-300 
    dark:bg-indigo-800 
    dark:hover:bg-indigo-900 
    rounded
    font-bold
    uppercase
    text-sm
    tracking-wider
    p-2"
  href="#top">Back To Top</a>
}

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath


  let header

  if (isRootPath) {
    header = (
      <h1 className="mb-1 hover:underline mt-4">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="h1 hover:underline block mt-4" to="/">
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
      sm:px-4
      px-8
      "
      data-is-root-path={isRootPath}>
      <DarkThemeToggle />
      <ScrollTopBtn />
      <header>{header}</header>
      <main>{children}</main>
      <footer className="mb-4">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
