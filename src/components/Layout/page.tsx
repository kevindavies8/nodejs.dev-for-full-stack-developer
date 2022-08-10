import React from 'react';
import Article from '../Article';
import Layout from '.';
import { TableOfContents } from '../../types';

import '../../styles/page.scss';

interface Page {
  editPath?: string;
  body: string;
  tableOfContents: TableOfContents;
  title: string;
  description: string;
  authors: string[];
  location?: Location;
}

const PageLayout = ({
  editPath,
  body,
  tableOfContents,
  title,
  description,
  authors,
}: Page): JSX.Element => (
  <Layout title={title} description={description}>
    <main className="page">
      <Article
        body={body}
        title={title}
        authors={authors}
        editPath={editPath}
        tableOfContents={tableOfContents}
      />
    </main>
  </Layout>
);

export default PageLayout;
