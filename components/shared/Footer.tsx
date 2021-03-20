import React, { FC } from "react";
import styled from "styled-components";

export const Footer: FC = ({}) => {
  return (
    <Styled>
      <Content>
        <nav className="mobile-footer-nav">
          <div>
            <img src="/assets/shared/desktop/logo-light.png" />
          </div>
          <ul>
            <li>Our Company</li>
            <li>Locations</li>
            <li>Contact</li>
          </ul>
        </nav>
        <nav className="footer-nav">
          <div>
            <img src="/assets/shared/desktop/logo-light.png" />
          </div>
          <ul>
            <li>Our Company</li>
            <li>Locations</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="footer-bottom">
          <div className="location-info">
            <p>
              <strong>Designo Central Office</strong>
            </p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div className="contact-info">
            <p>
              <strong>Contact Us (Central Office)</strong>
            </p>
            <p>P: +1 253-863-8967</p>
            <p>M: contact@designo.co</p>
          </div>
          <Socials />
        </div>
      </Content>
    </Styled>
  );
};

const Styled = styled.footer`
  min-height: 24.56rem;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.primary.dark};
  padding: 0 1.5rem;
  padding-top: 9.06rem;
  padding-bottom: 3.75rem;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 0 2rem;
    padding-top: 9.06rem;
    padding-bottom: 3.75rem;
  }
`;

const Content = styled.div`
  color: white;

  .footer-nav {
    display: none;
  }
  .mobile-footer-nav {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  .mobile-footer-nav div {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
    text-align: center;
  }

  .mobile-footer-nav div img {
    width: 202px;
    padding-bottom: 2.25rem;
  }

  .footer-nav, .footer-bottom {
    max-width: 1110px;
    margin: 0 auto;
  }

  ul {
    list-style: none;
    text-transform: uppercase;
    letter-spacing 2px;
    padding: 1.5rem 0;
    margin-top: 0.5rem;
    text-align: center;
    li {
      margin-bottom: 1.5rem;

      &:hover, &:active, &:focus {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  .location-info, .contact-info {
    margin-bottom: 2.5rem;
    
    p {
      text-align: center;
      margin-bottom: 0.75rem;
      color: rgba(255,255,255, 0.535);
    }
  }

  

  ${({ theme }) => theme.breakpoints.tablet} {
    .mobile-footer-nav {
      display: none;
    }

    .footer-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      margin-bottom: 2rem;
      ul {
        display: flex;
        align-items: center;

        li {
          margin-right: 2rem;

          &:last-child {
            margin-right: 0;
          }
        }
      }
      div img {
        width: 200px;
      }
    }

    .footer-bottom {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;

      div {
        margin-right: 2rem;
      }
    }    
  }
`;

const Socials: FC = () => {
  return (
    <SocialsWrapper>
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
          fillRule="nonzero"
        />
      </svg>
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"
          fillRule="nonzero"
        />
      </svg>
      <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
          fillRule="nonzero"
        />
      </svg>
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
          fillRule="nonzero"
        />
      </svg>
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
          fillRule="nonzero"
        />
      </svg>
    </SocialsWrapper>
  );
};

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  svg {
    margin-right: 1rem;
    cursor: pointer;
    fill: ${({ theme }) => theme.primary.main};
    &:last-child {
      margin-right: 0;
    }

    &:hover,
    &:active,
    &:focus {
      fill: ${({ theme }) => theme.secondary.main};
    }
  }
`;