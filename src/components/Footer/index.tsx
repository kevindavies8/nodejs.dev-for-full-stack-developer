import React from 'react';
import { FormattedMessage } from 'react-intl';
import { LocalizedLink as Link } from 'gatsby-theme-i18n';
import { ReactComponent as GitHubLogo } from '../../images/logos/github-logo.svg';
import { ReactComponent as TwitterLogo } from '../../images/logos/twitter-logo.svg';
import { ReactComponent as SlackLogo } from '../../images/logos/slack-logo.svg';
import './footer.scss';

export interface DropDownState {
  active: number;
  isOpen: boolean;
  shouldDropDownBlur: boolean;
}

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <ul className="footer__left">
        <li>
          <Link className="footer__link" to="/about/trademark">
            <FormattedMessage id="components.footer.links.trademark" />
          </Link>
        </li>
        <li>
          <Link className="footer__link" to="/about/privacy">
            <FormattedMessage id="components.footer.links.privacy" />
          </Link>
        </li>
        <li>
          <a
            className="footer__link"
            href="https://github.com/openjs-foundation/cross-project-council/blob/main/CODE_OF_CONDUCT.md#contributor-covenant-code-of-conduct"
          >
            <FormattedMessage id="components.footer.links.codeOfConduct" />
          </a>
        </li>
        <li>
          <Link className="footer__link" to="/about/security">
            <FormattedMessage id="components.footer.links.security" />
          </Link>
        </li>
        <li>
          <Link className="footer__link" to="/about">
            <FormattedMessage id="components.footer.links.about" />
          </Link>
        </li>
        <li>
          <Link className="footer__link" to="/blog">
            <FormattedMessage id="components.footer.links.blog" />
          </Link>
        </li>
      </ul>
      <ul className="footer__right">
        <li>
          <FormattedMessage id="components.footer.links.openJsFoundation" />
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/nodejs/node"
            rel="noopener noreferrer"
            aria-label="Node.js Github Page Link"
          >
            <span className="sr-only">
              <FormattedMessage id="components.footer.links.github" />
            </span>
            <GitHubLogo fill="var(--color-text-secondary)" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://twitter.com/nodejs"
            rel="noopener noreferrer"
            aria-label="Node.js Twitter Link"
          >
            <TwitterLogo fill="var(--color-text-secondary)" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://slack.openjsf.org"
            rel="noopener noreferrer"
            aria-label="Node.js Slack Link"
          >
            <SlackLogo fill="var(--color-text-secondary)" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
