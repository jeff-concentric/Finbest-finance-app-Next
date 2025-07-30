import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Social = (props) => {
  return (
    <>
      <div className={`social-social ${props.rootClassName} `}>
        <img
          alt={props.insiderAlt}
          src={props.insiderSrc}
          className="social-insider"
        />
      </div>
      <style jsx>
        {`
          .social-social {
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
            background-color: rgba(236, 233, 234, 0.2);
          }
          .social-social:hover {
            background-color: rgba(236, 233, 234, 0.6);
          }
          .social-insider {
            width: 18px;
            height: 18px;
          }

          @media (max-width: 767px) {
            .social-social {
              padding: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

Social.defaultProps = {
  insiderAlt: 'pastedImage',
  insiderSrc: '/pastedimage-9nha.svg',
  rootClassName: '',
}

Social.propTypes = {
  insiderAlt: PropTypes.string,
  insiderSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Social
