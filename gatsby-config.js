module.exports = {
  siteMetadata: {
    title: `PTP_STT_mockup`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components",
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Montserrat`,
        `Play`,
        `Gruppo`,
        `Roboto`,
        `Raleway`,
        `Ubuntu`,
        `Poppins`,
        `cursive\:300,400,400i,700` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  },
]
  
};