import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Announcement = (props) => {
  return (
    <>
      <div className={`announcement-announcement ${props.rootClassName} `}>
        <span className="announcement-title">{props.title}</span>
        <div className="announcement-button">
          <span className="announcement-button-text">{props.button}</span>
        </div>
      </div>
      <style jsx>
        {`
          .announcement-announcement {
            gap: var(--dl-layout-space-halfunit);
            flex: 1;
            cursor: pointer;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: 16px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: 12px;
            justify-content: center;
            background-color: #375ee0;
          }
          .announcement-announcement:hover {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .announcement-title {
            color: #8aede8;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 21px;
          }
          .announcement-button {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
            border-color: #8aede8;
            flex-direction: row;
            padding-bottom: 4px;
            border-bottom-width: 1px;
          }
          .announcement-button-text {
            color: rgb(138, 237, 232);
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 21px;
          }
          .announcementroot-class-name {
            flex: 0 0 auto;
            width: 100%;
          }
          .announcementroot-class-name1 {
            flex: 0 0 auto;
            width: 100%;
          }
          @media (max-width: 479px) {
            .announcement-announcement {
              align-items: center;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Announcement.defaultProps = {
  title: 'We updated our Terms and Conditions.\n',
  rootClassName: '',
  button: 'See now ->',
}

Announcement.propTypes = {
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default Announcement
