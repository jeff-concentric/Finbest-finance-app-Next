import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Announcement from '../components/announcement'
import Navbar from '../components/navbar'
import Highlight from '../components/highlight'
import Point from '../components/point'
import Accordion from '../components/accordion'
import Feature from '../components/feature'
import Check from '../components/check'
import Quote from '../components/quote'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Finbest</title>
          <meta name="description" content="Description of the website" />
          <meta property="og:title" content="Finbest" />
          <meta
            property="og:description"
            content="Description of the website"
          />
        </Head>
        <div className="home-hero">
          <header className="home-heading10">
            <div id="notifcation" className="home-notification">
              <Link href="/">
                <a>
                  <Announcement
                    rootClassName="announcementroot-class-name"
                    className="home-component10"
                  ></Announcement>
                </a>
              </Link>
            </div>
            <Navbar></Navbar>
          </header>
          <div className="home-content10">
            <div className="home-content11">
              <h1 className="home-title1">
                finbest is a clean, easy to use, finance app.
              </h1>
              <span className="home-caption1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </span>
              <div className="home-hero-buttons1">
                <div className="home-ios-btn1">
                  <img
                    alt="pastedImage"
                    src="/pastedimage-zmzg.svg"
                    className="home-apple1"
                  />
                  <span className="home-caption2">Download for iOS</span>
                </div>
                <div className="home-android-btn1">
                  <img
                    alt="pastedImage"
                    src="/pastedimage-ld65.svg"
                    className="home-android1"
                  />
                  <span className="home-caption3">Download for Android</span>
                </div>
              </div>
            </div>
            <div className="home-images">
              <div className="home-column1">
                <img
                  alt="pastedImage"
                  src="/pastedimage-oy26-1500h.png"
                  className="home-pasted-image1"
                />
              </div>
              <div className="home-column2">
                <img
                  alt="pastedImage"
                  src="/pastedimage-v31-1500h.png"
                  className="home-pasted-image2"
                />
                <img
                  alt="pastedImage"
                  src="/pastedimage-c39.svg"
                  className="home-pasted-image3"
                />
              </div>
              <div className="home-column3">
                <img
                  alt="pastedImage"
                  src="/pastedimage-iqnj.svg"
                  className="home-pasted-image4"
                />
                <img
                  alt="pastedImage"
                  src="/pastedimage-06e.svg"
                  className="home-pasted-image5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="home-video1">
          <div className="home-content12">
            <div className="home-header1">
              <h2 className="home-text10">
                Built specifically for people who want faster transactions
              </h2>
            </div>
            <div className="home-video-container">
              <video
                src="https://www.youtube.com/watch?v=MRQ69XeDxVk"
                loop
                muted
                poster="/pastedimage-v2-900w.png"
                autoPlay
                className="home-video2"
              ></video>
              <div className="home-heading-container">
                <div className="home-heading11">
                  <span className="home-text11">
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="home-explore1">
                  <span className="home-text13">
                    Explore pricing plans -&gt;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-stats">
          <div className="home-stat1">
            <span className="home-caption4">200k</span>
            <span className="home-description1">
              Lorem ipsum dolor sit ametconsectetur adipiscing
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className="home-stat2">
            <span className="home-caption5">$3,5 billions</span>
            <span className="home-description2">
              Lorem ipsum dolor sit ametconsectetur adipiscing
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className="home-stat3">
            <span className="home-caption6">10.000 +</span>
            <span className="home-description3">
              Lorem ipsum dolor sit ametconsectetur adipiscing
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
        </div>
        <div className="home-sections">
          <div className="home-section1">
            <div className="home-image1">
              <div className="home-image-highlight">
                <span className="home-text14">
                  <span>
                    always know your in and out
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-content13">
              <h2 className="home-text17">Everything you get with Finbest</h2>
              <Highlight
                title="Lorem ipsum dolor sit amet, consectetur "
                description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud"
              ></Highlight>
              <Highlight
                title="Lorem ipsum dolor sit amet, consectetur "
                description="Sed do eiusmod tempor incididunt ut labore et dolore"
              ></Highlight>
              <div className="home-explore2">
                <span>Explore pricing plans -&gt;</span>
              </div>
            </div>
          </div>
          <div className="home-section2">
            <div className="home-content14">
              <div className="home-heading12">
                <h2 className="home-text19">
                  Keep track with all transactions
                </h2>
                <span className="home-text20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="home-content15">
                <div className="home-points">
                  <Point></Point>
                  <Point text="Quis nostrud exercitation ullamco"></Point>
                  <Point text="Reprehenderit qui in ea voluptate velit"></Point>
                </div>
                <Link href="/">
                  <a className="home-link2">
                    <div className="home-get-started1">
                      <span className="home-sign-up">Get started now</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="home-image2"></div>
          </div>
          <div className="home-section3">
            <div className="home-image3">
              <div className="home-image-overlay"></div>
            </div>
            <div className="home-content16">
              <h2 className="home-text21">
                <span>Create milestones</span>
                <br></br>
              </h2>
              <Accordion></Accordion>
            </div>
          </div>
        </div>
        <div className="home-banner-container">
          <div className="home-banner">
            <div className="home-overlay1">
              <span className="home-text24">
                Begin your financial journey on finbest
              </span>
              <div className="home-book-btn">
                <span className="home-text25">Book a demo</span>
              </div>
            </div>
            <img
              alt="pastedImage"
              src="/pastedimage-ylke.svg"
              className="home-pasted-image6"
            />
          </div>
        </div>
        <div className="home-features">
          <div className="home-header2">
            <div className="home-tag1">
              <span className="home-text26">Features</span>
            </div>
            <div className="home-heading13">
              <h2 className="home-text27">Everything you get with Finbest</h2>
              <span className="home-text28">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </span>
            </div>
          </div>
          <div className="home-feature-list">
            <Feature></Feature>
            <Feature
              title="Multiple Devices"
              thumbnail="/vector6113-r6dl.svg"
            ></Feature>
            <Feature
              title="Analytics"
              thumbnail="/vector6113-6zj.svg"
            ></Feature>
            <Feature
              title="Virtual Card"
              thumbnail="/vector6113-lvvs.svg"
            ></Feature>
            <Feature
              title="Safe Transactions"
              thumbnail="/vector6114-cupp.svg"
            ></Feature>
            <Feature
              title="Milestones"
              thumbnail="/vector6114-6m1e.svg"
            ></Feature>
            <Feature title="Trade" thumbnail="/vector6114-yjl.svg"></Feature>
            <Feature title="Wallet" thumbnail="/vector6113-lvvs.svg"></Feature>
          </div>
        </div>
        <div className="home-pricing">
          <div className="home-content17">
            <div className="home-header3">
              <div className="home-tag2">
                <span className="home-text29">Pricing plans</span>
              </div>
              <div className="home-heading14">
                <h2 className="home-text30">No setup cost or hidden fees.</h2>
              </div>
            </div>
            <div className="home-pricing-plans">
              <div className="home-plans1">
                <div className="home-plan1">
                  <div className="home-top1">
                    <div className="home-heading15">
                      <span className="home-text31">Standard</span>
                      <span className="home-text32">
                        Sed ut perspiciatis unde omnis iste natus error sit.
                      </span>
                    </div>
                    <div className="home-cost1">
                      <span className="home-text33">Free</span>
                    </div>
                  </div>
                  <div className="home-bottom1">
                    <div className="home-check-list1">
                      <Check></Check>
                      <Check feature="Quis nostrud exercitation ulla"></Check>
                      <Check feature="Duis aute irure dolor intuit"></Check>
                      <Check feature="Voluptas sit aspernatur aut odit"></Check>
                      <Check feature="Corporis suscipit laboriosam"></Check>
                    </div>
                    <div className="home-button1">
                      <span className="home-text34">Get Standard</span>
                    </div>
                  </div>
                </div>
                <div className="home-plan2">
                  <div className="home-top2">
                    <div className="home-heading16">
                      <span className="home-text35">Plus</span>
                      <span className="home-text36">
                        Sed ut perspiciatis unde omnis iste natus error sit.
                      </span>
                    </div>
                    <div className="home-cost2">
                      <span className="home-text37">$8</span>
                      <span className="home-text38">/month</span>
                    </div>
                  </div>
                  <div className="home-bottom2">
                    <div className="home-check-list2">
                      <Check></Check>
                      <Check feature="Quis nostrud exercitation ulla"></Check>
                      <Check feature="Duis aute irure dolor intuit"></Check>
                      <Check feature="Voluptas sit aspernatur aut odit"></Check>
                      <Check feature="Corporis suscipit laboriosam"></Check>
                    </div>
                    <div className="home-button2">
                      <span className="home-text39">Get Standard</span>
                    </div>
                  </div>
                </div>
                <div className="home-plan3">
                  <div className="home-top3">
                    <div className="home-heading17">
                      <span className="home-text40">Premium</span>
                      <span className="home-text41">
                        Sed ut perspiciatis unde omnis iste natus error sit.
                      </span>
                    </div>
                    <div className="home-cost3">
                      <span className="home-text42">$16</span>
                      <span className="home-text43">/month</span>
                    </div>
                  </div>
                  <div className="home-bottom3">
                    <div className="home-check-list3">
                      <Check></Check>
                      <Check feature="Quis nostrud exercitation ulla"></Check>
                      <Check feature="Duis aute irure dolor intuit"></Check>
                      <Check feature="Voluptas sit aspernatur aut odit"></Check>
                      <Check feature="Corporis suscipit laboriosam"></Check>
                    </div>
                    <div className="home-button3">
                      <span className="home-text44">Get Standard</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-expand1">
                <div className="home-overlay2">
                  <div className="home-header4">
                    <div className="home-heading18">
                      <span className="home-text45">Expand</span>
                      <span className="home-text46">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </span>
                    </div>
                    <div className="home-check-list4">
                      <div className="home-check1">
                        <svg viewBox="0 0 1024 1024" className="home-icon10">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text47">
                          Sed ut perspiciatis unde
                        </span>
                      </div>
                      <div className="home-check2">
                        <svg viewBox="0 0 1024 1024" className="home-icon12">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text48">
                          Quis nostrud exercitation ulla
                        </span>
                      </div>
                      <div className="home-check3">
                        <svg viewBox="0 0 1024 1024" className="home-icon14">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text49">
                          Duis aute irure dolor intuit
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="home-button4">
                    <span className="home-text50">
                      <span>Contact us</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-plans2">
              <div className="home-plan4">
                <div className="home-top4">
                  <div className="home-heading19">
                    <span className="home-text53">Standard</span>
                    <span className="home-text54">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home-cost4">
                    <span className="home-text55">Free</span>
                  </div>
                </div>
                <div className="home-bottom4">
                  <div className="home-check-list5">
                    <Check></Check>
                    <Check feature="Quis nostrud exercitation ulla"></Check>
                    <Check feature="Duis aute irure dolor intuit"></Check>
                    <Check feature="Voluptas sit aspernatur aut odit"></Check>
                    <Check feature="Corporis suscipit laboriosam"></Check>
                  </div>
                  <div className="home-button5">
                    <span className="home-text56">Get Standard</span>
                  </div>
                </div>
              </div>
              <div className="home-plan5">
                <div className="home-top5">
                  <div className="home-heading20">
                    <span className="home-text57">Plus</span>
                    <span className="home-text58">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home-cost5">
                    <span className="home-text59">$8</span>
                    <span className="home-text60">/month</span>
                  </div>
                </div>
                <div className="home-bottom5">
                  <div className="home-check-list6">
                    <Check></Check>
                    <Check feature="Quis nostrud exercitation ulla"></Check>
                    <Check feature="Duis aute irure dolor intuit"></Check>
                    <Check feature="Voluptas sit aspernatur aut odit"></Check>
                    <Check feature="Corporis suscipit laboriosam"></Check>
                  </div>
                  <div className="home-button6">
                    <span className="home-text61">Get Plus</span>
                  </div>
                </div>
              </div>
              <div className="home-plan6">
                <div className="home-top6">
                  <div className="home-heading21">
                    <span className="home-text62">Premium</span>
                    <span className="home-text63">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home-cost6">
                    <span className="home-text64">$16</span>
                    <span className="home-text65">/month</span>
                  </div>
                </div>
                <div className="home-bottom6">
                  <div className="home-check-list7">
                    <Check></Check>
                    <Check feature="Quis nostrud exercitation ulla"></Check>
                    <Check feature="Duis aute irure dolor intuit"></Check>
                    <Check feature="Voluptas sit aspernatur aut odit"></Check>
                    <Check feature="Corporis suscipit laboriosam"></Check>
                  </div>
                  <div className="home-button7">
                    <span className="home-text66">Get Plus</span>
                  </div>
                </div>
              </div>
              <div className="home-expand2">
                <div className="home-overlay3">
                  <div className="home-header5">
                    <div className="home-heading22">
                      <span className="home-text67">Expand</span>
                      <span className="home-text68">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </span>
                    </div>
                    <div className="home-check-list8">
                      <div className="home-check4">
                        <svg viewBox="0 0 1024 1024" className="home-icon16">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text69">
                          Sed ut perspiciatis unde
                        </span>
                      </div>
                      <div className="home-check5">
                        <svg viewBox="0 0 1024 1024" className="home-icon18">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text70">
                          Quis nostrud exercitation ulla
                        </span>
                      </div>
                      <div className="home-check6">
                        <svg viewBox="0 0 1024 1024" className="home-icon20">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text71">
                          Duis aute irure dolor intuit
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="home-button8">
                    <span className="home-text72">
                      <span>Contact us</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-help">
            <span className="home-text75">Need any help?</span>
            <div className="home-explore3">
              <span className="home-text76">
                Get in touch with us right away -&gt;
              </span>
            </div>
          </div>
        </div>
        <div className="home-testimonials">
          <div className="home-logo-container">
            <img
              alt="pastedImage"
              src="/pastedimage-idcu.svg"
              className="home-logo"
            />
          </div>
          <div className="home-content18">
            <div id="quotes" className="home-quotes">
              <div className="quote active-quote">
                <Quote rootClassName="quoteroot-class-name"></Quote>
              </div>
              <div className="quote">
                <Quote
                  quote='"Testing these templates is a pleasure."'
                  title="Developer @ Vista La Vista"
                  author="Author 2"
                  rootClassName="quoteroot-class-name"
                ></Quote>
              </div>
              <div className="quote">
                <Quote
                  quote='"Wow, awesome works!'
                  title="Designer @ OhBoy"
                  rootClassName="quoteroot-class-name"
                ></Quote>
              </div>
            </div>
            <div className="home-buttons">
              <div id="quote-before" className="home-left">
                <svg viewBox="0 0 1024 1024" className="home-icon22">
                  <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
                </svg>
              </div>
              <div id="quote-next" className="home-right">
                <svg viewBox="0 0 1024 1024" className="home-icon24">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </div>
            </div>
            <div>
              <div className="home-container3">
                <Script
                  html={` <script>
    /* Quote Slider - Code Embed */

    let current = 1;

    const nextButton = document.querySelector("#quote-next");
    const previousButton = document.querySelector("#quote-before");
    const quotes = document.querySelectorAll(".quote");

    if (nextButton && previousButton && quotes) {
      nextButton.addEventListener("click", () => {
        quotes.forEach((quote) => {
          quote.classList.remove("active-quote");
        });

        current == quotes.length ? (current = 1) : current++;
        quotes[current - 1].classList.add("active-quote");
      });

      previousButton.addEventListener("click", () => {
        quotes.forEach((quote) => {
          quote.classList.remove("active-quote");
        });

        current == 1 ? (current = quotes.length) : current--;
        quotes[current - 1].classList.add("active-quote");
      });
    }
  </script>`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
        <div className="home-faq">
          <div className="home-content19">
            <div className="home-header6">
              <div className="home-tag3">
                <span className="home-text77">
                  <span>FAQ</span>
                  <br></br>
                </span>
              </div>
              <div className="home-heading23">
                <h2 className="home-text80">Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="home-rows">
              <div className="home-column4">
                <div className="Question">
                  <span className="home-title2">
                    What is sit amet, consectetur adipiscing elit, sed do?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="Question">
                  <span className="home-title3">
                    What is sit amet, consectetur adipiscing elit, sed do?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description5">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est
                      laborum.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      tempor incididunt ut labore et dolore magna aliqua.
                      Excepteur sint occaecat
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
                <div className="home-question3 Question">
                  <span className="home-title4">
                    What is sit amet, consectetur adipiscing elit, sed do?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </span>
                </div>
              </div>
              <div className="home-column5">
                <div className="home-question4 Question">
                  <span className="home-title5">
                    What is sit amet, consectetur adipiscing elit, sed do?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </span>
                </div>
                <div className="home-question5 Question">
                  <span className="home-title6">
                    What is sit amet, consectetur adipiscing elit, sed do?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </span>
                </div>
                <div className="home-question6 Question">
                  <span className="home-title7">
                    What is sit amet, consectetur adipiscing elit, sed do?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description9">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est
                      laborum.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      tempor incididunt ut labore et dolore magna aliqua.
                      Excepteur sint occaecat
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-get-started2">
          <div className="home-content20">
            <div className="home-heading24">
              <h2 className="home-text87">Get started with finbest now!</h2>
              <span className="home-text88">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore magna.
              </span>
            </div>
            <div className="home-hero-buttons2">
              <div className="home-ios-btn2">
                <img
                  alt="pastedImage"
                  src="/pastedimage-zmzg.svg"
                  className="home-apple2"
                />
                <span className="home-caption7">Download for iOS</span>
              </div>
              <div className="home-android-btn2">
                <img
                  alt="pastedImage"
                  src="/pastedimage-ld65.svg"
                  className="home-android2"
                />
                <span className="home-caption8">Download for Android</span>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading10 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-notification {
            width: 100%;
          }
          .home-component10 {
            text-decoration: none;
          }
          .home-content10 {
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: center;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content11 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0.5;
            display: flex;
            z-index: 20;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            justify-content: center;
          }
          .home-title1 {
            font-size: 64px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 76px;
          }
          .home-caption1 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 400;
            line-height: 27px;
          }
          .home-hero-buttons1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            z-index: 15;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-ios-btn1 {
            gap: var(--dl-layout-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-ios-btn1:hover {
            background-color: rgba(0, 0, 0, 0.75);
          }
          .home-apple1 {
            width: 16px;
            height: 20px;
          }
          .home-caption2 {
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-android-btn1 {
            gap: var(--dl-layout-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-android-btn1:hover {
            background-color: rgba(0, 0, 0, 0.75);
          }
          .home-android1 {
            width: 18px;
            height: 20px;
          }
          .home-caption3 {
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-images {
            gap: var(--dl-layout-space-oneandhalfunits);
            right: -210px;
            bottom: -300px;
            margin: auto;
            display: flex;
            overflow: hidden;
            position: absolute;
            transform: rotate(-30deg);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-column1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-pasted-image1 {
            width: 240px;
          }
          .home-column2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-pasted-image2 {
            width: 240px;
          }
          .home-pasted-image3 {
            width: 240px;
          }
          .home-column3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-pasted-image4 {
            width: 240px;
          }
          .home-pasted-image5 {
            width: 240px;
          }
          .home-video1 {
            color: white;
            width: 100%;
            display: flex;
            z-index: 10;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            background-color: #000000;
          }
          .home-content12 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
          }
          .home-header1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text10 {
            width: 640px;
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-video-container {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-video2 {
            width: 100%;
            cursor: pointer;
            overflow: hidden;
            transition: 0.3s;
            border-color: rgba(0, 0, 0, 0);
            border-width: 2px;
          }
          .home-video2:hover {
            opacity: 0.5;
            border-color: #ade2df;
            border-width: 2px;
            border-radius: 8px;
          }
          .home-heading-container {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading11 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text11 {
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 36px;
          }
          .home-text12 {
            color: #eaeaea;
            width: 600px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-explore1 {
            color: #fff;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            border-color: #ffffff;
            border-width: 0px;
            flex-direction: column;
            padding-bottom: 4px;
            border-bottom-width: 1px;
          }
          .home-explore1:hover {
            color: rgba(255, 255, 255, 0.5);
            border-color: rgba(255, 255, 255, 0.3);
          }
          .home-text13 {
            width: Size-XSmall;
          }
          .home-stats {
            width: 100%;
            display: flex;
            z-index: 10;
            max-width: 1200px;
            align-items: center;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-stat1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            border-color: #dbdbdb;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-caption4 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-description1 {
            width: 100%;
            font-size: 18px;
            max-width: 350px;
            text-align: center;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-stat2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            border-color: #dbdbdb;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-caption5 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-description2 {
            width: 100%;
            font-size: 18px;
            max-width: 350px;
            text-align: center;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-stat3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            border-color: #dbdbdb;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
            border-left-width: 1px;
            border-bottom-width: 1px;
          }
          .home-caption6 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-description3 {
            width: 100%;
            font-size: 18px;
            max-width: 350px;
            text-align: center;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-sections {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-section1 {
            gap: var(--dl-layout-space-sixunits);
            width: 100%;
            display: flex;
            z-index: 10;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-image1 {
            width: 400px;
            height: 540px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            background-size: contain;
            justify-content: flex-end;
            background-image: url('/group%201277.svg');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-image-highlight {
            top: 0px;
            right: 0px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #375ee0;
          }
          .home-text14 {
            color: rgb(193, 255, 252);
            width: 100%;
            max-width: 90px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-content13 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text17 {
            font-size: 40px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-explore2 {
            cursor: pointer;
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            transition: 0.3s;
            align-items: flex-start;
            border-width: 0px;
            flex-direction: column;
            padding-bottom: 4px;
            border-bottom-width: 1px;
          }
          .home-explore2:hover {
            color: rgba(0, 0, 0, 0.5);
            border-color: rgba(0, 0, 0, 0.3);
          }
          .home-section2 {
            gap: var(--dl-layout-space-sixunits);
            width: 100%;
            display: flex;
            z-index: 10;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-content14 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text19 {
            font-size: 40px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-text20 {
            font-size: 18px;
            max-width: 535px;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-content15 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-points {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-link2 {
            display: contents;
          }
          .home-get-started1 {
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .home-get-started1:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-sign-up {
            font-style: normal;
            font-weight: 500;
          }
          .home-image2 {
            width: 370px;
            height: 600px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/group%201309.svg');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-section3 {
            gap: var(--dl-layout-space-sixunits);
            width: 100%;
            display: flex;
            z-index: 10;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-sixunits);
            justify-content: center;
          }
          .home-image3 {
            width: 400px;
            height: 590px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            background-size: cover;
            justify-content: center;
            background-image: url('/group%201281.svg');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-image-overlay {
            right: 0px;
            width: 180px;
            bottom: 0px;
            height: 320px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: row;
            background-size: cover;
            justify-content: center;
            background-image: url('/pastedimage-v31-1500h.png');
          }
          .home-content16 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            margin-top: var(--dl-layout-space-fiveunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text21 {
            font-size: 40px;
            max-width: 640px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-banner-container {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
          }
          .home-banner {
            width: 100%;
            height: 360px;
            display: flex;
            overflow: hidden;
            max-width: 1200px;
            align-items: center;
            border-radius: 16px;
            flex-direction: column;
            justify-content: center;
            background-color: #375ee0;
          }
          .home-overlay1 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            background-size: cover;
            justify-content: center;
            background-image: url('/mask%20group.svg');
          }
          .home-text24 {
            color: rgb(193, 255, 252);
            width: 100%;
            font-size: 40px;
            max-width: 490px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-book-btn {
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-book-btn:hover {
            background-color: rgba(0, 0, 0, 0.5);
          }
          .home-text25 {
            color: #ffffff;
            width: 100%;
            max-width: 490px;
            font-style: normal;
            font-weight: 500;
          }
          .home-pasted-image6 {
            display: none;
          }
          .home-features {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 16px;
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            justify-content: flex-start;
          }
          .home-header2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-tag1 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
            background-color: #d6f1f0;
          }
          .home-text26 {
            font-style: normal;
            font-weight: 500;
          }
          .home-heading13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text27 {
            width: 100%;
            font-size: 40px;
            max-width: 400px;
            font-style: normal;
            font-weight: 600;
            line-height: 56px;
          }
          .home-text28 {
            width: 100%;
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-feature-list {
            gap: var(--dl-layout-space-fourunits);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-pricing {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 16px;
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            background-color: #f3f5fa;
          }
          .home-content17 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
          }
          .home-header3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-tag2 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
            background-color: #d6f1f0;
          }
          .home-text29 {
            font-style: normal;
            font-weight: 500;
          }
          .home-heading14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text30 {
            width: 100%;
            font-size: 40px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-pricing-plans {
            flex: 1;
            width: 100%;
            display: grid;
            overflow: hidden;
            align-items: flex-start;
            border-color: #dbdbdb;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #375ee0;
            grid-template-columns: auto auto;
          }
          .home-plans1 {
            flex: 1;
            height: 100%;
            display: grid;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: TwoUnits;
            padding-bottom: var(--dl-layout-space-twounits);
            background-color: #ffffff;
            grid-template-columns: auto auto auto;
          }
          .home-plan1 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            border-color: #dbdbdb;
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
            border-right-width: 1px;
          }
          .home-top1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            border-color: #dbdbdb;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text31 {
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text32 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-cost1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text33 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-bottom1 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-check-list1 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .home-button1 {
            width: 100%;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #ade2df;
          }
          .home-button1:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text34 {
            font-style: normal;
            font-weight: 500;
          }
          .home-plan2 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            border-color: #dbdbdb;
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
            border-right-width: 1px;
          }
          .home-top2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            border-color: #dbdbdb;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text35 {
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text36 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-cost2 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text37 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-text38 {
            font-family: Poppins;
          }
          .home-bottom2 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-check-list2 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .home-button2 {
            width: 100%;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #ade2df;
          }
          .home-button2:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text39 {
            font-style: normal;
            font-weight: 500;
          }
          .home-plan3 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-top3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            border-color: #dbdbdb;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text40 {
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text41 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-cost3 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text42 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-text43 {
            font-family: Poppins;
          }
          .home-bottom3 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-check-list3 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .home-button3 {
            width: 100%;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #ade2df;
          }
          .home-button3:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text44 {
            font-style: normal;
            font-weight: 500;
          }
          .home-expand1 {
            flex: 0.3;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-overlay2 {
            flex: 1;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/planbackground.svg');
          }
          .home-header4 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading18 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 256px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text45 {
            color: #ffffff;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
          }
          .home-text46 {
            color: #c1fffc;
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 31px;
          }
          .home-check-list4 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-check1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon10 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text47 {
            color: #ffffff;
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-check2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon12 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text48 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-check3 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon14 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text49 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-button4 {
            width: 100%;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-button4:hover {
            background-color: rgba(0, 0, 0, 0.5);
          }
          .home-text50 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 500;
          }
          .home-plans2 {
            width: 100%;
            height: 100%;
            display: none;
            align-items: center;
            flex-direction: column;
          }
          .home-plan4 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            border-color: #dbdbdb;
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
            border-right-width: 1px;
          }
          .home-top4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            border-color: #dbdbdb;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text53 {
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text54 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-cost4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text55 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-bottom4 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-check-list5 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .home-button5 {
            width: 100%;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #ade2df;
          }
          .home-button5:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text56 {
            font-style: normal;
            font-weight: 500;
          }
          .home-plan5 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            border-color: #dbdbdb;
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
            border-right-width: 1px;
          }
          .home-top5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            border-color: #dbdbdb;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading20 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text57 {
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text58 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-cost5 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text59 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-text60 {
            font-family: Poppins;
          }
          .home-bottom5 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-check-list6 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .home-button6 {
            width: 100%;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #ade2df;
          }
          .home-button6:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text61 {
            font-style: normal;
            font-weight: 500;
          }
          .home-plan6 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            border-color: #dbdbdb;
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
            border-right-width: 1px;
          }
          .home-top6 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            border-color: #dbdbdb;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading21 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text62 {
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text63 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-cost6 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text64 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-text65 {
            font-family: Poppins;
          }
          .home-bottom6 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-check-list7 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .home-button7 {
            width: 100%;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #ade2df;
          }
          .home-button7:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text66 {
            font-style: normal;
            font-weight: 500;
          }
          .home-expand2 {
            flex: 0.3;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-overlay3 {
            flex: 1;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/planbackground.svg');
          }
          .home-header5 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading22 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 256px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text67 {
            color: #ffffff;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
          }
          .home-text68 {
            color: #c1fffc;
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 31px;
          }
          .home-check-list8 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-check4 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon16 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text69 {
            color: #ffffff;
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-check5 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon18 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text70 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-check6 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon20 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text71 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-button8 {
            width: 100%;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-button8:hover {
            background-color: rgba(0, 0, 0, 0.5);
          }
          .home-text72 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 500;
          }
          .home-help {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            flex-direction: row;
          }
          .home-text75 {
            font-family: Poppins;
          }
          .home-explore3 {
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            border-width: 0px;
            flex-direction: column;
            padding-bottom: 4px;
            border-bottom-width: 1px;
          }
          .home-explore3:hover {
            color: rgba(0, 0, 0, 0.5);
            border-color: rgba(0, 0, 0, 0.3);
          }
          .home-text76 {
            font-style: normal;
            font-weight: 600;
          }
          .home-testimonials {
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: stretch;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .home-logo-container {
            display: flex;
            padding: var(--dl-layout-space-unit);
            align-self: center;
            align-items: center;
            border-radius: var(--dl-layout-radius-radius8);
            margin-bottom: var(--dl-layout-space-threeunits);
            flex-direction: column;
            background-color: #375ee0;
          }
          .home-logo {
            width: 25px;
            height: 24px;
          }
          .home-content18 {
            display: flex;
            position: relative;
            align-items: stretch;
            flex-direction: column;
          }
          .home-quotes {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-buttons {
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 500px;
            align-self: center;
            margin-top: -55px;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-left {
            fill: #dbdbdb;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-unit);
            transition: 0.3s;
            align-items: center;
            border-color: #dbdbdb;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: row;
          }
          .home-left:hover {
            fill: #000;
            border-color: #000;
          }
          .home-icon22 {
            width: 19px;
            height: 19px;
          }
          .home-right {
            fill: #dbdbdb;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-unit);
            transition: 0.3s;
            align-items: center;
            border-color: #dbdbdb;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: row;
          }
          .home-right:hover {
            fill: #000;
            border-color: #000;
          }
          .home-icon24 {
            width: 19px;
            height: 19px;
          }
          .home-container3 {
            display: contents;
          }
          .home-faq {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 16px;
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            background-color: #f3f5fa;
          }
          .home-content19 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
          }
          .home-header6 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-tag3 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
            background-color: #d6f1f0;
          }
          .home-text77 {
            font-style: normal;
            font-weight: 500;
          }
          .home-heading23 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text80 {
            width: 100%;
            font-size: 40px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-rows {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-column4 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-title2 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-description4 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-title3 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-description5 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-question3 {
            border-bottom-width: 0px;
          }
          .home-title4 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-description6 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-column5 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-question4 {
            border-right-width: 0px;
          }
          .home-title5 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-description7 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-question5 {
            border-right-width: 0px;
          }
          .home-title6 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-description8 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-question6 {
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-title7 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-description9 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-get-started2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            background-color: #375ee0;
          }
          .home-content20 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .home-heading24 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text87 {
            color: #c1fffc;
            font-size: 64px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text88 {
            color: #ffffff;
            font-size: 20px;
            text-align: center;
            font-family: Poppins;
            line-height: 30px;
          }
          .home-hero-buttons2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            z-index: 15;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-ios-btn2 {
            gap: var(--dl-layout-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-ios-btn2:hover {
            background-color: rgba(0, 0, 0, 0.75);
          }
          .home-apple2 {
            width: 16px;
            height: 20px;
          }
          .home-caption7 {
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-android-btn2 {
            gap: var(--dl-layout-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-android-btn2:hover {
            background-color: rgba(0, 0, 0, 0.75);
          }
          .home-android2 {
            width: 18px;
            height: 20px;
          }
          .home-caption8 {
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          @media (max-width: 991px) {
            .home-content10 {
              flex-direction: column;
            }
            .home-content11 {
              gap: var(--dl-layout-space-unit);
              flex: 0 0 auto;
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: 0px;
            }
            .home-title1 {
              font-size: 50px;
              text-align: left;
              line-height: 58px;
            }
            .home-caption1 {
              font-size: 16px;
            }
            .home-hero-buttons1 {
              width: 100%;
            }
            .home-ios-btn1 {
              flex: 1;
            }
            .home-android-btn1 {
              flex: 1;
            }
            .home-images {
              left: 0px;
              right: -100px;
              bottom: -325px;
              margin: auto;
            }
            .home-pasted-image1 {
              width: 200px;
            }
            .home-pasted-image2 {
              width: 200px;
            }
            .home-pasted-image3 {
              width: 200px;
            }
            .home-pasted-image4 {
              width: 200px;
            }
            .home-pasted-image5 {
              width: 200px;
            }
            .home-content12 {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-stats {
              padding-top: var(--dl-layout-space-threeunits);
              flex-direction: column;
            }
            .home-stat1 {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
              padding-bottom: var(--dl-layout-space-threeunits);
              border-right-width: 0px;
            }
            .home-caption4 {
              text-align: center;
              line-height: 32px;
            }
            .home-stat2 {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-caption5 {
              text-align: center;
              line-height: 32px;
            }
            .home-stat3 {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-threeunits);
              border-left-width: 0px;
            }
            .home-caption6 {
              text-align: center;
              line-height: 32px;
            }
            .home-section1 {
              gap: var(--dl-layout-space-oneandhalfunits);
              padding-top: var(--dl-layout-space-fourunits);
              flex-direction: column-reverse;
            }
            .home-content13 {
              gap: var(--dl-layout-space-unit);
            }
            .home-explore2 {
              margin-top: var(--dl-layout-space-halfunit);
            }
            .home-section2 {
              padding-top: var(--dl-layout-space-fourunits);
              border-color: #dbdbdb;
              flex-direction: column;
              border-top-width: 1px;
            }
            .home-content14 {
              gap: var(--dl-layout-space-unit);
            }
            .home-content15 {
              gap: var(--dl-layout-space-twounits);
            }
            .home-section3 {
              align-items: center;
              padding-top: var(--dl-layout-space-fourunits);
              border-color: #dbdbdb;
              flex-direction: column-reverse;
              padding-bottom: var(--dl-layout-space-fourunits);
              border-top-width: 1px;
            }
            .home-content16 {
              margin-top: 0px;
            }
            .home-pricing {
              padding-top: var(--dl-layout-space-fourunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-content17 {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-header3 {
              gap: var(--dl-layout-space-unit);
            }
            .home-pricing-plans {
              grid-template-columns: none;
            }
            .home-plans1 {
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .home-overlay2 {
              width: 100%;
              background-size: contain;
              justify-content: space-between;
              background-repeat: no-repeat;
              background-position: right;
            }
            .home-header4 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-heading18 {
              gap: var(--dl-layout-space-halfunit);
              max-width: 600px;
            }
            .home-text45 {
              font-size: 18px;
            }
            .home-text46 {
              font-size: 20px;
              line-height: 26px;
            }
            .home-text47 {
              line-height: 21px;
            }
            .home-text48 {
              line-height: 21px;
            }
            .home-text49 {
              line-height: 21px;
            }
            .home-button4 {
              margin-top: var(--dl-layout-space-threeunits);
            }
            .home-overlay3 {
              width: 100%;
              justify-content: space-between;
            }
            .home-header5 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-heading22 {
              gap: var(--dl-layout-space-halfunit);
              max-width: 600px;
            }
            .home-text67 {
              font-size: 18px;
            }
            .home-text68 {
              font-size: 20px;
              line-height: 26px;
            }
            .home-text69 {
              line-height: 21px;
            }
            .home-text70 {
              line-height: 21px;
            }
            .home-text71 {
              line-height: 21px;
            }
            .home-button8 {
              margin-top: var(--dl-layout-space-threeunits);
            }
            .home-get-started2 {
              padding-top: var(--dl-layout-space-fourunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-content20 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-heading24 {
              gap: var(--dl-layout-space-halfunit);
            }
            .home-text87 {
              font-size: 40px;
            }
            .home-text88 {
              font-size: 18px;
            }
          }
          @media (max-width: 767px) {
            .home-title1 {
              font-size: 40px;
              line-height: 48px;
            }
            .home-caption1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-images {
              bottom: -250px;
            }
            .home-text10 {
              width: 100%;
              font-size: 32px;
              max-width: 640px;
            }
            .home-video-container {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-heading11 {
              gap: var(--dl-layout-space-halfunit);
            }
            .home-text11 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-text12 {
              width: 100%;
              max-width: 600px;
            }
            .home-caption4 {
              font-size: 32px;
            }
            .home-description1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-caption5 {
              font-size: 32px;
            }
            .home-description2 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-caption6 {
              font-size: 32px;
            }
            .home-description3 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text17 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text19 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text20 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-get-started1 {
              display: none;
            }
            .home-section3 {
              gap: var(--dl-layout-space-twounits);
            }
            .home-banner {
              height: 520px;
              position: relative;
            }
            .home-overlay1 {
              gap: var(--dl-layout-space-oneandhalfunits);
              flex: 1;
              z-index: 50;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
              padding-bottom: var(--dl-layout-space-threeunits);
              justify-content: flex-start;
              background-image: none;
            }
            .home-text24 {
              font-size: 32px;
            }
            .home-pasted-image6 {
              right: 0px;
              bottom: 0px;
              height: 300px;
              display: flex;
              position: absolute;
              align-self: flex-end;
            }
            .home-features {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-header2 {
              gap: var(--dl-layout-space-unit);
            }
            .home-text26 {
              font-size: 14px;
            }
            .home-text27 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text28 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-feature-list {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: column;
            }
            .home-text30 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-pricing-plans {
              display: none;
            }
            .home-plans2 {
              gap: var(--dl-layout-space-oneandhalfunits);
              display: flex;
            }
            .home-plan4 {
              max-width: 100%;
              padding-top: var(--dl-layout-space-threeunits);
              border-width: 1px;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              border-radius: 16px;
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
              background-color: #ffffff;
            }
            .home-top4 {
              width: 100%;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-heading19 {
              gap: var(--dl-layout-space-halfunit);
            }
            .home-text53 {
              font-size: 18px;
            }
            .home-text55 {
              font-size: 32px;
              line-height: 32px;
            }
            .home-plan5 {
              max-width: 100%;
              padding-top: var(--dl-layout-space-threeunits);
              border-width: 1px;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              border-radius: 16px;
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
              background-color: #ffffff;
              border-right-width: 1px;
            }
            .home-top5 {
              width: 100%;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-heading20 {
              gap: var(--dl-layout-space-halfunit);
            }
            .home-text57 {
              font-size: 18px;
            }
            .home-text59 {
              font-size: 32px;
              line-height: 32px;
            }
            .home-text61 {
              font-weight: 500;
            }
            .home-plan6 {
              max-width: 100%;
              padding-top: var(--dl-layout-space-threeunits);
              border-width: 1px;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              border-radius: 16px;
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
              background-color: #ffffff;
              border-right-width: 1px;
            }
            .home-top6 {
              width: 100%;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-heading21 {
              gap: var(--dl-layout-space-halfunit);
            }
            .home-text62 {
              font-size: 18px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
            }
            .home-text64 {
              font-size: 32px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 32px;
            }
            .home-text66 {
              font-weight: 500;
            }
            .home-expand2 {
              flex: 0 0 auto;
              width: 100%;
              border-radius: 16px;
              background-color: #375ee0;
            }
            .home-overlay3 {
              align-items: center;
              background-size: contain;
              justify-content: center;
              background-repeat: no-repeat;
              background-position: top right;
            }
            .home-testimonials {
              width: 100%;
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-logo-container {
              padding: 12px;
              margin-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-logo {
              width: 16px;
              height: 16px;
            }
            .home-left {
              display: flex;
            }
            .home-right {
              display: flex;
            }
            .home-faq {
              width: 100%;
            }
            .home-content19 {
              gap: var(--dl-layout-space-twounits);
            }
            .home-text77 {
              font-size: 14px;
            }
            .home-text80 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-rows {
              flex-direction: column;
            }
            .home-title2 {
              font-size: 16px;
            }
            .home-get-started2 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .home-hero-buttons1 {
              width: 100%;
              flex-direction: column;
            }
            .home-ios-btn1 {
              width: 100%;
            }
            .home-android-btn1 {
              width: 100%;
            }
            .home-images {
              bottom: -300px;
            }
            .home-pasted-image1 {
              width: 150px;
            }
            .home-pasted-image2 {
              width: 150px;
            }
            .home-pasted-image3 {
              width: 150px;
            }
            .home-pasted-image4 {
              width: 150px;
            }
            .home-pasted-image5 {
              width: 150px;
            }
            .home-image1 {
              width: 100%;
              max-width: 400px;
            }
            .home-image3 {
              width: 100%;
              max-width: 400px;
            }
            .home-pasted-image6 {
              height: 225px;
            }
            .home-help {
              align-items: center;
              padding-top: var(--dl-layout-space-twounits);
              flex-direction: column;
            }
            .home-buttons {
              margin-top: -40px;
            }
            .home-left {
              padding: var(--dl-layout-space-halfunit);
            }
            .home-right {
              padding: var(--dl-layout-space-halfunit);
            }
            .home-hero-buttons2 {
              width: 100%;
              flex-direction: column;
            }
            .home-ios-btn2 {
              width: 100%;
            }
            .home-android-btn2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
