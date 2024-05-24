import React from 'react';
import Layout from '../../components/layout/Layout';
import PictureAndText from '../../components/picture-and-text/PictureAndText';
import Picture from '../../components/picture/Picture';
import Text from '../../components/text/Text';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <Layout>
      <PictureAndText>
        <Picture
          src="https://images.squarespace-cdn.com/content/v1/640bb2a094bc044ee3179f89/a22abf09-2d29-44a2-9fd0-723a009fe559/admin-accounting-legal.JPG"
          alt="image"
        />
        <Text>
          <h4><strong>Accounting, and Financial</strong></h4>
          <p>
            With a dedicated team of skilled accounting and finance
            professionals, we combine our insights and experience to transform
            each of our company’s internal processes and strategies. We remove
            one of the major hurdles to expanding a business: building,
            developing and managing an internal accounting team.
          </p>
        </Text>
      </PictureAndText>

      <PictureAndText picturePosition="right">
        <Picture
          src="https://images.squarespace-cdn.com/content/v1/640bb2a094bc044ee3179f89/5f4d9a02-2813-404c-9be0-2e1be1947ea1/info-systems-consulting.JPG"
          alt="image"
        />
        <Text>
          <h4><strong>Pooled Financial Resources</strong></h4>
          <p>
            The Edge Business Group operates as one from a financial
            perspective: each company is an equal participant in the pooled
            financial resources of the Group, able to easily access the capital
            it needs to support its working cash needs, actively engage in
            acquisitions, and purchase the capital assets it needs to expand its
            market reach.
          </p>
        </Text>
      </PictureAndText>

      <PictureAndText>
        <Picture
          src="https://images.squarespace-cdn.com/content/v1/640bb2a094bc044ee3179f89/a6cdfb97-b836-4960-a7d3-d487bc48df7d/strategic-planning.JPG"
          alt="image"
        />
        <Text>
          <h4><strong>Corporate Governance and Corporate Strategy</strong></h4>
          <p>
            Each of the companies within the Edge Business Group operates with
            its own Board of Directors and adheres to a strict set of good
            corporate governance policies and guidelines. Led by a group of
            experienced business leaders, the Board provides stability and
            fiduciary responsibility, maintaining focus on long-term strategic
            objectives and goals.
          </p>
        </Text>
      </PictureAndText>
    </Layout>
  );
};

export default Home;
