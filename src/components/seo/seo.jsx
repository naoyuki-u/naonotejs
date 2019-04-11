import React, { Component } from "react"
import { Helmet } from "react-helmet"

const config = require('../../utils/site_config')

class SEO extends Component {
  render() {
    const { postNode, isPost, slug } = this.props;
    let title;
    let description;
    let image;
    let postURL;
    if (isPost) {
      const post_frontmatter = postNode.frontmatter;
      title = post_frontmatter.title;
      description = post_frontmatter.description
        ? post_frontmatter.description
        : post_frontmatter.excerpt;
      postURL = urljoin(config.siteUrl, config.pathPrefix, slug);
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
                image
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
          image: {
            "@type": "ImageObject",
            url: image
          },
          description
        }
      ]);
    }
    console.log("debug region");
    alert("hoge");
    console.log(schemaOrgJSONLD);
    return (
      <Helmet>
        {/* General tags */}
        <meta name="description" content={description} />
        {/* <meta name="image" content={image} /> */}

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        <meta property="og:url" content={isPost ? postURL : blogURL} />
        {isPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {/* <meta property="og:image" content={image} /> */}
        <meta
          property="fb:app_id"
          content={config.siteFBAppID ? config.siteFBAppID : ""}
        />

        {/* Twitter Card tags */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={config.userTwitter ? config.userTwitter : ""}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} /> */}
      </Helmet>
    );
  }
}

export default SEO;
