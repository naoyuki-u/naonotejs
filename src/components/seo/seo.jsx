import React, { Component } from "react"
import { Helmet } from "react-helmet"
import urljoin from "url-join";

const config = require('../../utils/site_config')

class SEO extends Component {
  render() {
    const { postNode, isPost, slug } = this.props;
    let title;
    let description;
    let postURL;
    if (isPost) {
      const post_frontmatter = postNode.frontmatter;
      title = post_frontmatter.title;
      description = post_frontmatter.description
        ? post_frontmatter.description
        : postNode.excerpt;
      postURL = urljoin(config.siteUrl, slug);
    } else {
      title = config.siteTitle;
      description = config.siteDescription;
    }
    const blogURL = urljoin(config.siteUrl, config.pathPrefix);
    const schemaOrgJSONLD = [
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : ""
      }
    ];
    if (isPost) {
      schemaOrgJSONLD.push([
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": postURL,
                name: title,
              }
            }
          ]
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url: blogURL,
          name: title,
          alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
          headline: title,
          description
        }
      ]);
    }
    console.log(schemaOrgJSONLD);
    return (
      <Helmet>
        {/* General tags */}
        <meta name="description" content={description} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        <meta property="og:url" content={isPost ? postURL : blogURL} />
        {isPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
    );
  }
}

export default SEO;
