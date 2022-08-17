//pages/sitemap.xml.js

import api from "../contexts/api";

function generateSiteMap(questions) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${process.env.REACT_APP_APP_URL}</loc>
     </url>
     <url>
     <loc>${process.env.REACT_APP_APP_URL}/login</loc>
     </url>
     <url>
     <loc>${process.env.REACT_APP_APP_URL}/signup</loc>
     </url>
     <url>
     <loc>${process.env.REACT_APP_APP_URL}/add-credits</loc>
     </url>
     ${questions.map(({ slug }) => {
         return `
       <url>
           <loc>${`${process.env.REACT_APP_APP_URL}/question/${slug}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const questions = await api({
    method: "get",
    url: `/sitemap`,
    // withCredentials: true,
  })
    .then(function (response) {
      const { data } = response;
      return data;
    })
    .catch(function (error) {
        console.log(error);
    });

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(questions);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
