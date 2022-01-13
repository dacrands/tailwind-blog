/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FancyLink } from "./fancy-link"

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
    <div className="mt-3">
      <p>
        I am a full-stack software developer,
        building things for the internet profressionally
        since 2018 and recreationally since 2016.
        <br />
        <FancyLink href={"https://github.com/dacrands"}>
          Check out my GitHub
        </FancyLink>
        {` `}
        to view some of my side-projects.
      </p>
    </div>
  )
}

export default Bio
