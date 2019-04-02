import React from 'react';
import { PaginationInfo } from '../types';
import AuthorsList from './authors-list';
import EditLink from './edit-link';
import Pagination from './pagination';
import TOC from './toc';

type Props = {
  title: string;
  html: string;
  tableOfContents: string;
  authors: string[];
  relativePath: string;
  next?: PaginationInfo;
  previous?: PaginationInfo;
};

const Article = ({
  title,
  html,
  tableOfContents,
  previous,
  next,
  relativePath,
  authors,
}: Props) => (
  <article className="article-reader">
    <h1 className="article-reader__headline">{title}</h1>
    <TOC heading="TABLE OF CONTENTS" tableOfContents={tableOfContents} />
    <div dangerouslySetInnerHTML={{ __html: html }} />
    <AuthorsList authors={authors} />
    <EditLink relativePath={relativePath} />
    <Pagination previous={previous} next={next} />
  </article>
);

export default Article;
