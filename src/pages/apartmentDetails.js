import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"

export default function ApartmentDetails(props) {
  const { apartmentDetails } = props.data
  
  console.log(apartmentDetails)
  
  return (
    <Layout>
      {apartmentDetails.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...componentProps} />
      })}
    </Layout>
  )
}
export const Head = (props) => {
  const { apartmentDetails } = props.data
  return <SEOHead {...apartmentDetails} />
}
export const query = graphql`
  {
    query apartmentDetails (id: String) {
      apartmentDetails(id: {eq: id }){
        id
        slug
        title
        description
        image {
          id
          url
        }
        blocks: content {
          id
          blocktype
          ...AboutHeroContent
          ...AboutStatListContent
          ...HomepageProductListContent
          ...AboutLeadershipContent
          ...HomepageBenefitListContent
          ...AboutLogoListContent
          ...HomepageCtaContent
        }
      }
    }
  }
`
