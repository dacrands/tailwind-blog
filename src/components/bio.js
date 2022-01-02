/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="max-w-lg mt-3">
      <p className="text-lg">
        I am a full-stack software developer,
        building things for the internet profressionally
        since 2018 and recreationally since 2016.
       
        {` `}
        <a className="
          underline 
          underline-offset-4
          decoration-2
          text-zinc-700
          dark:text-white
          decoration-yellow-400 
          dark:decoration-yellow-500    
          hover:decoration-wavy                                  
          font-bold"
          target={"_blank"}
          rel={"noreferrer"}
          href="https://github.com/dacrands"> Check out
          my GitHub</a> {` `}
          to view some of my side-projects.
      </p>
    </div>
  )
}

export default Bio
