'use client';
import { useEffect, useRef } from 'react';

export default function IntroSection() {
  const subHeaderRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0,
      rootMargin: '0px'
    };

    const animateElement = (element, delay) => {
      if (!element) return;
      
      // Initial state (hidden)
      element.style.opacity = '0';
      element.style.transform = 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
      element.style.transformStyle = 'preserve-3d';

      // Animate after delay
      setTimeout(() => {
        element.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        element.style.opacity = '1';
        element.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
      }, delay);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animation delays based on Webflow animations
          // a-6: View 0.1s (100ms delay)
          if (entry.target === subHeaderRef.current) {
            animateElement(entry.target, 100);
          }
          // a-7: View 0.2s (200ms delay)
          if (entry.target === headingRef.current) {
            animateElement(entry.target, 200);
          }
          // a-8: View 0.3s (300ms delay)
          if (entry.target === textRef.current) {
            animateElement(entry.target, 300);
          }
          // a-12: View 0.4s (400ms delay)
          if (entry.target === buttonRef.current) {
            animateElement(entry.target, 400);
          }
          // a-13: View 0.5s (500ms delay)
          if (entry.target === cardsRef.current) {
            animateElement(entry.target, 500);
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements
    if (subHeaderRef.current) observer.observe(subHeaderRef.current);
    if (headingRef.current) observer.observe(headingRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section intro">
      <div className="w-layout-blockcontainer container_default w-container">
        <div className="vertical_center_wrapper">
          <div 
            ref={subHeaderRef}
            data-w-id="0854582c-69db-4516-2984-3d4f92c5ad1e"
            className="sub_header_transparent"
          >
            Willkommen bei der...
          </div>
          <h2 
            ref={headingRef}
            data-w-id="c585a543-1605-159a-2601-7651dbaa4a9f"
            className="heading_h2 center white _705px"
          >
            Willkommen bei der Frese Recruiting GmbH!
          </h2>
          <div 
            ref={textRef}
            data-w-id="2046cdd7-29db-e3be-ba09-6bc7c3da2b35"
            className="intro_text"
          >
            <span className="opacity">
              Entdecken Sie eine Welt der Möglichkeiten in der Rekrutierung von internationalen Physiotherapeuten und Pflegekräften für deutsche Unternehmen. Als eines der führenden Unternehmen in diesem Bereich sind wir Ihre Partner in der Suche nach hochqualifizierten Fachkräften, die Ihre Teams bereichern werden. 
            </span>&nbsp;<br/><br/>
            Erfahren Sie, wie wir Ihnen helfen können, Ihre Personalanforderungen effektiv zu erfüllen und die Zukunft Ihrer Praxis oder Klinik zu sichern. Bereit für eine neue Ära der Personalbeschaffung? Starten Sie jetzt Ihre Reise mit uns.
          </div>
          <div 
            ref={buttonRef}
            data-w-id="27cda35e-8c67-6bbf-59fa-ec8c022e6c74"
            className="button_wrapper"
          >
            <a href="/kontakt" className="primary_button blue w-button">Kostenfreies Erstgespräch vereinbaren</a>
          </div>
          <div id="w-node-dcf17bd9-3a95-241d-94fd-1b37a502abbe-b094ed5a" className="w-layout-layout facts_stack wf-layout-layout">
            <div className="w-layout-cell">
              <div className="fact_card _1">
                <div className="fact_card small">
                  <img 
                    src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669bed3d3a920f6c2024fe35_stopwatch%20(1)%201.svg" 
                    loading="eager" 
                    width="32" 
                    alt="time_icon"
                  />
                </div>
                <div className="fact_title">4+ Jahre an Erfahrung</div>
              </div>
            </div>
            <div className="w-layout-cell">
              <div className="fact_card">
                <div className="fact_card small">
                  <img 
                    src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669bed3d3a920f6c2024fe35_stopwatch%20(1)%201.svg" 
                    loading="eager" 
                    width="32" 
                    alt="time_icon"
                  />
                </div>
                <div className="fact_title">4+ Jahre an Erfahrung</div>
              </div>
            </div>
            <div className="w-layout-cell">
              <div className="fact_card">
                <div className="fact_card small">
                  <img 
                    src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669bed3d3a920f6c2024fe35_stopwatch%20(1)%201.svg" 
                    loading="eager" 
                    width="32" 
                    alt="time_icon"
                  />
                </div>
                <div className="fact_title">4+ Jahre an Erfahrung</div>
              </div>
            </div>
            <div className="w-layout-cell">
              <div className="fact_card">
                <div className="fact_card small">
                  <img 
                    src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669bed3d3a920f6c2024fe35_stopwatch%20(1)%201.svg" 
                    loading="eager" 
                    width="32" 
                    alt="time_icon"
                  />
                </div>
                <div className="fact_title">4+ Jahre an Erfahrung</div>
              </div>
            </div>
            <div className="w-layout-cell">
              <div className="fact_card">
                <div className="fact_card small">
                  <img 
                    src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669bed3d3a920f6c2024fe35_stopwatch%20(1)%201.svg" 
                    loading="eager" 
                    width="32" 
                    alt="time_icon"
                  />
                </div>
                <div className="fact_title">4+ Jahre an Erfahrung</div>
              </div>
            </div>
          </div>
        </div>
        <div 
          ref={cardsRef}
          data-w-id="a108f6dc-58bf-3410-376f-5d3070bca657"
          className="cards_wrapper"
        >
          <img 
            src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a20b7db4f0a04deb6af8f6_card1-min.png" 
            loading="eager" 
            width="Auto" 
            height="250" 
            alt="fact-cards" 
            srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a20b7db4f0a04deb6af8f6_card1-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a20b7db4f0a04deb6af8f6_card1-min.png 829w" 
            sizes="(max-width: 479px) 100vw, 278.1875px" 
            className="fact_card_image _1"
          />
          <img 
            src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a20b7db4f2e400e63b5dcb_card2-min.png" 
            loading="eager" 
            width="Auto" 
            height="250" 
            alt="fact-cards" 
            srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a20b7db4f2e400e63b5dcb_card2-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a20b7db4f2e400e63b5dcb_card2-min.png 829w" 
            sizes="(max-width: 479px) 100vw, 278.546875px" 
            className="fact_card_image _2"
          />
          <img 
            src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a20b7dc75d6cc93a9aaf66_card3-min.png" 
            loading="eager" 
            width="270" 
            sizes="(max-width: 479px) 100vw, 270px" 
            alt="fact-cards" 
            srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a20b7dc75d6cc93a9aaf66_card3-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a20b7dc75d6cc93a9aaf66_card3-min.png 829w" 
            className="fact_card_image _3"
          />
          <img 
            src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a20b7d2d5e8ac2806c2db6_card4-min.png" 
            loading="eager" 
            width="270" 
            sizes="(max-width: 479px) 100vw, 270px" 
            alt="fact-cards" 
            srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a20b7d2d5e8ac2806c2db6_card4-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a20b7d2d5e8ac2806c2db6_card4-min.png 829w" 
            className="fact_card_image _4"
          />
          <img 
            src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a20b7d7c80acce7d6de3b7_card5-min.png" 
            loading="eager" 
            width="270" 
            sizes="(max-width: 479px) 100vw, 270px" 
            alt="fact-cards" 
            srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a20b7d7c80acce7d6de3b7_card5-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a20b7d7c80acce7d6de3b7_card5-min.png 829w" 
            className="fact_card_image _5"
          />
        </div>
      </div>
    </section>
  );
}