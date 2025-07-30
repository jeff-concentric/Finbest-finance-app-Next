import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Quote = (props) => {
  return (
    <>
      <div className={`quote-quote1 ${props.rootClassName} `}>
        <div className="quote-quote2">
          <span className="quote-quote3">{props.quote}</span>
        </div>
        <div className="quote-people">
          <div className="quote-person">
            <img
              alt="person-avatar"
              src={props.avatar}
              className="quote-avatar"
            />
            <div className="quote-person-details">
              <span className="quote-text1">{props.author}</span>
              <span>{props.title}</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .quote-quote1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .quote-quote2 {
            display: flex;
            align-items: center;
            text-overflow: ellipsis;
            flex-direction: column;
          }
          .quote-quote3 {
            font-size: 32px;
            font-style: italic;
            text-align: center;
            font-family: Poppins;
            font-weight: 400;
            line-height: 48px;
          }
          .quote-people {
            gap: var(--dl-layout-space-sixunits);
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .quote-person {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .quote-avatar {
            width: 55px;
            height: 55px;
            border-radius: var(--dl-layout-radius-round);
          }
          .quote-person-details {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .quote-text1 {
            font-style: normal;
            font-weight: 600;
          }

          @media (max-width: 767px) {
            .quote-quote3 {
              font-size: 24px;
              margin-top: var(--dl-layout-space-twounits);
              line-height: 36px;
            }
            .quote-person {
              flex-direction: column;
            }
            .quote-person-details {
              align-items: center;
            }
          }
        `}
      </style>
    </>
  )
}

Quote.defaultProps = {
  quote:
    '“I love lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaation ullamco 100%."',
  rootClassName: '',
  title: 'Manager @Vista Social',
  author: 'Andy Smith',
  avatar: '/pastedimage-8jmb-200w.png',
}

Quote.propTypes = {
  quote: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  avatar: PropTypes.string,
}

export default Quote
