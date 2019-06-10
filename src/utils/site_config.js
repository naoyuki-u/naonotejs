const config = {
    siteTitle: "HogeNote", // Site title.
    siteDescription: "My blog powered by gatsbyjs.", // Website description used for RSS feeds/meta description tag.
    dateFormat: "YY/MM/DD", // Date format for display.
    userName: "naoyuki-u", // Username to display in the author segment.
    userEmail: "naoyuki.gatsby@gmail.com", // Email used for RSS feed's author segment
    copyright: "Copyright (c) 2019. N.Uesugi", // Copyright string for the footer of the website and RSS feed.

    siteUrl: "localhost:8000",
    pathPrefix: "/",
    siteLogo: "/logos/gatsby-icon.png",

    postNumberPerPage: "5",
    pagesRoot: "pages-",
    tagPagesRoot: "tags/",
    categoryPagesRoot: "category/"
};

module.exports = config;
