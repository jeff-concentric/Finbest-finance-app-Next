import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Highlight = (props) => {
  return (
    <>
      <div className="highlight-highlight">
        <span className="highlight-text1">{props.title}</span>
        <span className="highlight-text2">{props.description}</span>
      </div>
      <style jsx>
        {`
          .highlight-highlight {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .highlight-text1 {
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .highlight-text2 {
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
          }
          @media (max-width: 767px) {
            .highlight-text1 {
              font-size: 16px;
              text-align: center;
              line-height: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

Highlight.defaultProps = {
  description:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud',
  title: 'Everything you get with Finbest',
}

Highlight.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
}

export default Highlight
