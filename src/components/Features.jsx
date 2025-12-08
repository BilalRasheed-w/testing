import React from "react";
import web_developer from "/web development.jpg";
import Digital_Marketing from "/Digital marketing.jpg";
import Ai from "/ai_integration.jpg";

import FeatureBox from "./ui/FeatureBox";

const Features = () => {
  return (
    <div className="main_div md:mt-16 lg:mt-10 bg-light">
      <FeatureBox
        heading={"Web Development"}
        image={web_developer}
        text={texts[0].web_dev_text}
      />
      <FeatureBox
        heading={"Digital Marketing"}
        image={Digital_Marketing}
        text={texts[1].Digital_Marketing}
      />
      <FeatureBox heading={"Ai Integration"} image={Ai} text={texts[2].Ai} />
    </div>
  );
};

export default Features;

const texts = [
  {
    web_dev_text: ` Modern web development is built around fast and scalable technologies.
  The MERN stack — MongoDB, Express, React, and Node — is a popular
  option because it allows developers to use JavaScript on both the
  frontend and backend. React helps build dynamic user interfaces,
  Node and Express handle server logic and APIs, while MongoDB stores
  flexible JSON-like data. With tools like Tailwind CSS, TypeScript,
  and cloud platforms, teams can deploy apps quickly and maintain them
  easily. Learning these technologies gives developers the ability to
  create full-stack applications, from dashboards and e-commerce to
  real-time chat systems and SaaS platforms. `,
  },
  {
    Digital_Marketing: ` Digital marketing focuses on bringing customers to a brand through
  channels like social media, search engines, email, and online ads.
  Instead of just posting content, teams track analytics, keywords,
  and user behavior to understand what people want. Tools like
  Google Ads, Meta Business Suite, SEO, and automation platforms help
  businesses generate leads and convert them into sales. When the right
  audience sees the right message at the right time, marketing becomes
  measurable and cost-effective. Whether a small startup or a large
  company, a strong online presence can make a huge difference in growth.
`,
  },
  {
    Ai: `  AI integration means using artificial intelligence to improve existing
  products and workflows. Instead of building everything from scratch,
  developers plug AI services into apps for things like chatbots,
  recommendation systems, content automation, and image or text analysis.
  With tools like OpenAI, TensorFlow, and cloud services, teams can
  process data at scale and make smarter decisions. Companies use AI to
  reduce manual work, speed up support, and create personalized user
  experiences. When done well, AI becomes a natural part of software,
  helping businesses move faster and innovate with confidence. `,
  },
];
