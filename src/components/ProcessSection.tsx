import { useState, useEffect, useRef } from 'react';

const timelineSteps = [
  {
    number: 1,
    title: "You apply for a job with us.",
    description: "You apply to us and have an interview with one of our experts.\n‍\nWe will answer all your questions and plan the next steps with you.",
    image: "https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e40f73ed41b0d644aa1d_png%20(11)-min.png",
    srcSet: "https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e40f73ed41b0d644aa1d_png%20(11)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e40f73ed41b0d644aa1d_png%20(11)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e40f73ed41b0d644aa1d_png%20(11)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e40f73ed41b0d644aa1d_png%20(11)-min-p-1600.png 1600w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e40f73ed41b0d644aa1d_png%20(11)-min.png 1756w",
    reverse: false
  },
  {
    number: 2,
    title: "Job interview & \nemployment contract",
    description: "We organize interviews with employers who match your requirements.\n‍\nIf the interview is positive, you will be offered an employment contract within a very short time.",
    image: "https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54573ee81ae783d663e_png%20(12)-min.png",
    srcSet: "https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54573ee81ae783d663e_png%20(12)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54573ee81ae783d663e_png%20(12)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54573ee81ae783d663e_png%20(12)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54573ee81ae783d663e_png%20(12)-min-p-1600.png 1600w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54573ee81ae783d663e_png%20(12)-min.png 1756w",
    reverse: true
  },
  {
    number: 3,
    title: "Recognition & Visas",
    description: "We support you with all the necessary processes, such as the recognition of your qualifications and applying for a visa.\n‍\nWe know all the processes and requirements in detail and ensure that everything runs smoothly.",
    image: "https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54580f2089b066652c8_png%20(13)-min.png",
    srcSet: "https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54580f2089b066652c8_png%20(13)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54580f2089b066652c8_png%20(13)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54580f2089b066652c8_png%20(13)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54580f2089b066652c8_png%20(13)-min-p-1600.png 1600w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e54580f2089b066652c8_png%20(13)-min.png 1756w",
    reverse: false
  },
  {
    number: 4,
    title: "Immigration & starting work",
    description: "As soon as you have received your visa, we will organize an apartment for you and plan your arrival.\n\nAfter your arrival, you can start working immediately and will be paid a salary.\n\nIf necessary, we will organize your adaptation training.",
    image: "https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e545fc43314d73e4b709_png%20(14)-min.png",
    srcSet: "https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e545fc43314d73e4b709_png%20(14)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e545fc43314d73e4b709_png%20(14)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e545fc43314d73e4b709_png%20(14)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e545fc43314d73e4b709_png%20(14)-min-p-1600.png 1600w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4e545fc43314d73e4b709_png%20(14)-min.png 1756w",
    reverse: true
  },
  {
    number: 5,
    title: "Start as a certified professional",
    description: "After successfully completing the adaptation training, you can finally work as a certified professional in Germany.\n\nWe will guide you through the entire process and will always be at your side afterwards if you need help.",
    image: "https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66addb6f016533b241144ead_png%20(16)-min.png",
    srcSet: "https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66addb6f016533b241144ead_png%20(16)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66addb6f016533b241144ead_png%20(16)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66addb6f016533b241144ead_png%20(16)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66addb6f016533b241144ead_png%20(16)-min.png 1756w",
    reverse: false
  }
];

const faqItems = [
  {
    question: "What requirements do I have to fulfill to be able to work in Germany?",
    answer: "In this case, the requirements for working in Germany are as follows:\n\nGerman language skills of at least level B1\n‍\nA letter about the decision of recognition from the responsible authority\n‍\nAn application for an adaptation course\n‍\nAn employment contract\n‍\nWe will help you to complete all the necessary steps."
  },
  {
    question: "How do I find an apartment?",
    answer: "We support you in your apartment search. Everyone has different requirements for an apartment. That's why we'll work with you to find out how you want to live and then support you in your search."
  },
  {
    question: "What language skills do I need?",
    answer: "To get a visa for Germany, you need at least a B1 language certificate.\n\nTo actually be able to work as a certified professional, you need a B2 language certificate. However, you can also do this in Germany. \n\nIf you don't speak German yet, that's no problem, just apply to us and we will help you find a good language school."
  },
  {
    question: "Can I choose where I want to work?",
    answer: "Of course, we will take your wishes into serious consideration and try to fulfill them. We work with first-class healthcare facilities throughout Germany and will be happy to place you with a facility in your desired region.\n\nHowever, we cannot guarantee that you will find a position in your desired region, as we have no influence on the current staffing situation in the healthcare facilities.\n\nWe always have a large selection of good employers throughout Germany to choose from and usually always find an employer that our candidates are happy with."
  },
  {
    question: "How much will it cost?",
    answer: "Our service is completely free of charge for you. Your future employer will pay for our service."
  },
  {
    question: "Can my family come with me?",
    answer: "Yes, of course! \n\nWe also support you with family reunification. We recommend that you come to Germany alone at the beginning so that you can concentrate on your work and settle in well, but after about 3-6 months it makes sense for your family to join you. If you would like to come directly with your family, that is of course also possible.\n\nWe want you to feel at home in Germany and that includes your family."
  }
];

const PlusIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_43_556)">
      <path d="M23.7499 11.25H13.7501V1.24992C13.7501 0.560074 13.19 0 12.4999 0C11.8101 0 11.25 0.560074 11.25 1.24992V11.25H1.24992C0.560074 11.25 0 11.8101 0 12.4999C0 13.19 0.560074 13.7501 1.24992 13.7501H11.25V23.7499C11.25 24.44 11.8101 25.0001 12.4999 25.0001C13.19 25.0001 13.7501 24.44 13.7501 23.7499V13.7501H23.7499C24.44 13.7501 25.0001 13.19 25.0001 12.4999C25.0001 11.8101 24.44 11.25 23.7499 11.25Z" fill="#0EE7F6"></path>
    </g>
    <defs>
      <clipPath id="clip0_43_556">
        <rect width="25" height="25" fill="white"></rect>
      </clipPath>
    </defs>
  </svg>
);

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

const TimelineItem = ({ step, index }) => {
  const { number, title, description, image, srcSet, reverse } = step;
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const imageElement = (
    <div className="timeline_image-wrapper">
      <div
        className="timeline_box"
        style={{
          willChange: 'opacity',
          opacity: isVisible ? 1 : 0.25,
          transition: 'opacity 0.7s ease'
        }}
      >
        <img
          src={image}
          loading="eager"
          sizes="(max-width: 479px) 48px, (max-width: 767px) 64px, (max-width: 1439px) 37vw, 435px"
          srcSet={srcSet}
          alt="process-image"
          className="process_image"
        />
      </div>
    </div>
  );

  const centerElement = (
    <div id={`w-node-center-${index}`} className="timeline_centre">
      <div className="timeline_circle-padding">
        <div className="ready_circle">
          <div className="ready_number">{number}</div>
        </div>
        <div className="timeline_grey-line"></div>
      </div>
    </div>
  );

  const textElement = (
    <div
      id={`w-node-text-${index}`}
      className="timeline_text-box"
      style={{
        willChange: 'opacity',
        opacity: isVisible ? 1 : 0.25,
        transition: 'opacity 0.7s ease'
      }}
    >
      <h3 className="timeline_heading" dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br />') }} />
      <p className="paragraph_default" dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }} />
    </div>
  );

  return (
    <div ref={ref} data-w-id={`timeline-item-${index}`} className="timeline_item">
      {reverse ? (
        <>
          {textElement}
          {centerElement}
          {imageElement}
        </>
      ) : (
        <>
          {imageElement}
          {centerElement}
          {textElement}
        </>
      )}
    </div>
  );
};

const FAQItem = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div data-delay="0" data-hover="false" className="faq-item-border first w-dropdown">
      <div
        className="faq-toggle w-dropdown-toggle"
        id={`w-dropdown-toggle-${index}`}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex="0"
      >
        <div className="faq-title-wrapper-large">
          <div className="paragraph-regular text-weight-medium">{item.question}</div>
          <div className="toggle_wrapper">
            <div
              className="faq-arrow w-embed"
              style={{
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.5s ease'
              }}
            >
              <PlusIcon />
            </div>
          </div>
        </div>
      </div>
      <nav
        className="faq-content w-dropdown-list"
        id={`w-dropdown-list-${index}`}
        style={{
          height: isOpen ? 'auto' : '0px',
          overflow: 'hidden',
          transition: 'height 0.4s ease'
        }}
      >
        <div className="faq-content-wrapper">
          <p className="faq-paragraph" dangerouslySetInnerHTML={{ __html: item.answer.replace(/\n/g, '<br />') }} />
        </div>
      </nav>
    </div>
  );
};

export default function ProcessSection() {
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [titleRef, titleVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [buttonRef, buttonVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [reviewHeaderRef, reviewHeaderVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [reviewTitleRef, reviewTitleVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [caseStudyRef, caseStudyVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [testimonialRef, testimonialVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [faqHeaderRef, faqHeaderVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [faqTitleRef, faqTitleVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [faqGridRef, faqGridVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [finalButtonRef, finalButtonVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="section process">
      <div className="w-layout-blockcontainer container_default w-container">
        <div className="vertical_center_wrapper text-span-3">
          <div
            ref={headerRef}
            data-w-id="933c303d-b1e6-3a66-3bbe-65722fc67b57"
            style={{
              transform: headerVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              opacity: headerVisible ? 1 : 0,
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s'
            }}
            className="sub_header_white"
          >
            <div className="sub_header_gradient">Our method</div>
          </div>

          <h2
            ref={titleRef}
            data-w-id="933c303d-b1e6-3a66-3bbe-65722fc67b5a"
            style={{
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s'
            }}
            className="heading_h2 center"
          >
            How does our process work?
          </h2>

          <div className="timeline_content">
            <div className="timeline_component">
              <div className="timeline_progress">
                <div className="timeline_progress-bar"></div>
              </div>
              {timelineSteps.map((step, index) => (
                <TimelineItem key={index} step={step} index={index} />
              ))}
            </div>
          </div>

          <div
            ref={buttonRef}
            data-w-id="071797ac-8762-3ddc-bd9c-bb400c06a717"
            style={{
              transform: buttonVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              opacity: buttonVisible ? 1 : 0,
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s'
            }}
            className="button_wrapper sub"
          >
            <a href="https://form.jotform.com/240765018573358" className="primary_button blue sub w-button">
              Apply now - it's easy
            </a>
          </div>

          <div className="divider"></div>

          <div
            ref={reviewHeaderRef}
            data-w-id="933c303d-b1e6-3a66-3bbe-65722fc67bbe"
            style={{
              transform: reviewHeaderVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              opacity: reviewHeaderVisible ? 1 : 0,
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s'
            }}
            className="sub_header_white"
          >
            <div className="sub_header_gradient">Candidate reviews</div>
          </div>

          <h2
            ref={reviewTitleRef}
            data-w-id="933c303d-b1e6-3a66-3bbe-65722fc67bc1"
            style={{
              transform: reviewTitleVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              opacity: reviewTitleVisible ? 1 : 0,
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s'
            }}
            className="heading_h2 center _700px"
          >
            What our candidates say about us
          </h2>

          <div
            ref={caseStudyRef}
            data-w-id="933c303d-b1e6-3a66-3bbe-65722fc67bc3"
            style={{
              opacity: caseStudyVisible ? 1 : 0,
              transform: caseStudyVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s'
            }}
            className="case_study_wrapper"
          >
            <a href="#" className="case_study_video w-inline-block w-lightbox" aria-label="open lightbox" aria-haspopup="dialog">
              <img
                src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b47d0251d2e3e1d7cd3684_case-study-cover%20(5)-min.png"
                loading="lazy"
                sizes="(max-width: 479px) 89vw, (max-width: 767px) 92vw, (max-width: 991px) 90vw, (max-width: 1439px) 40vw, 496.34375px"
                srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b47d0251d2e3e1d7cd3684_case-study-cover%20(5)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b47d0251d2e3e1d7cd3684_case-study-cover%20(5)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b47d0251d2e3e1d7cd3684_case-study-cover%20(5)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b47d0251d2e3e1d7cd3684_case-study-cover%20(5)-min.png 1221w"
                alt=""
                className="video_cover"
              />
            </a>
            <div className="realtive_wrapper">
              <p
                ref={testimonialRef}
                data-w-id="933c303d-b1e6-3a66-3bbe-65722fc67bc7"
                style={{
                  opacity: testimonialVisible ? 1 : 0,
                  transform: testimonialVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                  transformStyle: 'preserve-3d',
                  transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s'
                }}
                className="paragraph_default _500px large"
              >
                "I would like to share my positive experience with Frese Recruiting. <span className="text-span-2">The recruitment process was extremely well organized and very professional.</span><span className="text-span"> </span>Communication was always clear and I felt fully supported. <br /><br />The placement was quick and smooth and <span className="text-span-3">I am extremely happy with my new position.</span> I can only recommend Frese Recruiting.
              </p>
            </div>
          </div>

          <div className="divider"></div>

          <div
            ref={faqHeaderRef}
            data-w-id="933c303d-b1e6-3a66-3bbe-65722fc67bd4"
            style={{
              transform: faqHeaderVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              opacity: faqHeaderVisible ? 1 : 0,
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s'
            }}
            className="sub_header_white"
          >
            <div className="sub_header_gradient">FAQ</div>
          </div>

          <h2
            ref={faqTitleRef}
            data-w-id="933c303d-b1e6-3a66-3bbe-65722fc67bd7"
            style={{
              opacity: faqTitleVisible ? 1 : 0,
              transform: faqTitleVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s'
            }}
            className="heading_h2 center"
          >
            Frequently asked questions
          </h2>

          <div
            ref={faqGridRef}
            data-w-id="933c303d-b1e6-3a66-3bbe-65722fc67bd9"
            style={{
              opacity: faqGridVisible ? 1 : 0,
              transform: faqGridVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s'
            }}
            className="w-layout-grid faq_grid"
          >
            {faqItems.map((item, index) => (
              <FAQItem key={index} item={item} index={index} />
            ))}
          </div>

          <div
            ref={finalButtonRef}
            data-w-id="6b5e6f79-2809-520b-088f-a06a7450e1d7"
            style={{
              transform: finalButtonVisible ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              opacity: finalButtonVisible ? 1 : 0,
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s'
            }}
            className="button_wrapper sub"
          >
            <a href="https://form.jotform.com/240765018573358" className="primary_button blue sub w-button">
              Apply now - it's easy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}