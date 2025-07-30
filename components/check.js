import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Check = (props) => {
  return (
    <>
      <div className={`check-check ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="check-icon1">
          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
        </svg>
        <span className="check-text">{props.feature}</span>
      </div>
      <style jsx>
        {`
          .check-check {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .check-icon1 {
            width: 18px;
            height: 18px;
          }
          .check-text {
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          @media (max-width: 767px) {
            .check-text {
              line-height: 21px;
            }
          }
        `}
      </style>
    </>
  )
}

Check.defaultProps = {
  rootClassName: '',
  feature: 'Sed ut perspiciatis unde',
}

Check.propTypes = {
  rootClassName: PropTypes.string,
  feature: PropTypes.string,
}

export default Check
