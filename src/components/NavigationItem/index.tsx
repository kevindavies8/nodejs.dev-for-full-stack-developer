import React from 'react';
import { LocalizedLink as Link } from 'gatsby-theme-i18n';
import classnames from 'classnames';

interface Props {
  key: string;
  isLearn?: boolean;
  isRead: boolean;
  isActive: boolean;
  slug: string;
  title: string;
  baseUrl?: string;
  onClick?: () => void;
}

const NavigationItem = ({
  isLearn = true,
  isRead,
  isActive,
  slug,
  title,
  baseUrl,
  onClick,
}: Props): JSX.Element => {
  const className = isLearn
    ? classnames('t-body2 side-nav__item', {
        'side-nav__item--done': isRead,
        'side-nav__item--active': !isRead && isActive,
      })
    : classnames('t-body2 side-nav__item-community', {
        'side-nav__item-community--active': isActive,
      });

  return (
    <Link
      to={`${baseUrl || '/learn/'}${slug}`}
      id={`link-${slug}`}
      onClick={onClick}
      className={className}
    >
      {title}
    </Link>
  );
};

export default NavigationItem;
