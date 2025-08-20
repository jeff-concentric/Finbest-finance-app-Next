import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Accordion = (props) => {
  return (
    <>
      <div className="accordion-accordion">
        <div
          data-role="accordion-container"
          className="accordion-element1 accordion-element"
        >
          <div className="accordion-details1">
            <span className="accordion-text1">{props.text}</span>
            <span data-role="accordion-content" className="accordion-text2">
              {props.text1}
            </span>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            data-role="accordion-icon"
            className="accordion-icon1"
          >
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
        <div
          data-role="accordion-container"
          className="accordion-element2 accordion-element"
        >
          <div className="accordion-details2">
            <span className="accordion-text3">{props.text2}</span>
            <span data-role="accordion-content" className="accordion-text4">
              {props.text3}
            </span>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            data-role="accordion-icon"
            className="accordion-icon3"
          >
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
        <div
          data-role="accordion-container"
          className="accordion-element3 accordion-element"
        >
          <div className="accordion-details3">
            <span className="accordion-text5">{props.text4}</span>
            <span data-role="accordion-content" className="accordion-text6">
              {props.text5}
            </span>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            data-role="accordion-icon"
            className="accordion-icon5"
          >
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
        <div>
          <div className="accordion-container2">
            <Script
              html={`<script>
  /*
  Accordion - Code Embed
  */

  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          accordionContents.forEach((accordionContent) => {
              accordionContent.style.display = "none"; //Hides all accordion contents
          });

          accordionIcons.forEach((accordionIcon) => {
              accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
          });

          accordionContents[index].style.display = "flex"; // Shows accordion content
          accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
      });
  });

  /*
  Here's what the above is doing:
      1. Selects all accordion containers, contents, and icons
      2. Hides all accordion contents
      3. Adds an event listener to each accordion container
      4. When an accordion container is clicked, it:
          - Hides all accordion contents
          - Resets all icon transforms to 0deg (default)
          - Checks if this container has class "accordion-open"
              - If it does, it removes class "accordion-open"
              - If it doesn't, it:
                  - Removes class "accordion-open" from all containers
                  - Adds class "accordion-open" to this container
                  - Shows accordion content
                  - Rotates accordion icon 180deg
  */
</script>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .accordion-accordion {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .accordion-element1 {
            width: 640px;
            user-select: none;
          }
          .accordion-details1 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .accordion-text1 {
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .accordion-text2 {
            width: 100%;
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .accordion-icon1 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .accordion-element2 {
            width: 640px;
            user-select: none;
          }
          .accordion-details2 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .accordion-text3 {
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .accordion-text4 {
            width: 100%;
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .accordion-icon3 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .accordion-element3 {
            width: 640px;
            user-select: none;
          }
          .accordion-details3 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .accordion-text5 {
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .accordion-text6 {
            width: 100%;
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .accordion-icon5 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .accordion-container2 {
            display: contents;
          }
          @media (max-width: 767px) {
            .accordion-element1 {
              width: 100%;
              max-width: 560px;
            }
            .accordion-text1 {
              font-size: 16px;
              line-height: 24px;
            }
            .accordion-element2 {
              width: 100%;
              max-width: 560px;
            }
            .accordion-text3 {
              font-size: 16px;
            }
            .accordion-element3 {
              width: 100%;
              max-width: 560px;
            }
            .accordion-text5 {
              font-size: 16px;
            }
          }
          @media (max-width: 479px) {
            .accordion-element1 {
              width: 350px;
              max-width: auto;
            }
            .accordion-element2 {
              width: 350px;
              max-width: auto;
            }
            .accordion-element3 {
              width: 350px;
              max-width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Accordion.defaultProps = {
  text1:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud',
  text3:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud',
  text: 'Aliquam quaerat voluptatem',
  text5:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud',
  text2: 'Nemo enim ipsam voluptatem quia voluptas',
  text4: 'Magnam aliquam quaerat voluptatem',
}

Accordion.propTypes = {
  text1: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text5: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
}

export default Accordion
