import { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    // Trigger animations on mount
    setIsVisible(true);
  }, []);

  return (
    <section className="section hero" ref={heroRef}>
      <div className="w-layout-blockcontainer container_default overflow w-container">
        {/* Navbar - View 0.1s animation */}
        <div 
          data-w-id="4537995e-145b-7ec4-dfcc-ef8e7f0523c6" 
          data-animation="default" 
          data-collapse="medium" 
          data-duration="400" 
          data-easing="ease" 
          data-easing2="ease" 
          role="banner" 
          className={`navbar-logo-left-container shadow-three w-nav ${isVisible ? 'animate-fade-up-1' : ''}`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible 
              ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' 
              : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d',
            transition: 'opacity 1s ease 0.1s, transform 1s ease 0.1s'
          }}
        >
          <div className="container">
            <div className="navbar-wrapper">
              <a href="/" aria-current="page" className="navbar-brand w-nav-brand w--current" aria-label="home">
                <img 
                  width="124" 
                  sizes="124px" 
                  alt="Hochqualifizierte, medizinische Fachkräfte aus dem Ausland gewinnen." 
                  src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669cdf98c6e29f58581ad730_Logo%20flach%20weiss%20Kopie.png" 
                  loading="eager" 
                  srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669cdf98c6e29f58581ad730_Logo%20flach%20weiss%20Kopie-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669cdf98c6e29f58581ad730_Logo%20flach%20weiss%20Kopie-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669cdf98c6e29f58581ad730_Logo%20flach%20weiss%20Kopie.png 944w" 
                  className="nav_logo"
                />
              </a>
              <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
                <ul role="list" className="nav-menu-two w-list-unstyled">
                  <li className="nav_bg">
                    <a href="/" aria-current="page" className="nav-link w--current">Home</a>
                    <a href="https://frese-recruiting.de#loesungen" className="nav-link">Lösungen</a>
                    <a href="https://frese-recruiting.de#fallstudien" className="nav-link">Fallstudien</a>
                    <a href="https://frese-recruiting.de#fallstudien" className="nav-link">Bewertungen</a>
                    <a href="https://frese-recruiting.de#unternehmen" className="nav-link">Unternehmen</a>
                    <a href="/kandidaten" className="nav-link">Bewerber</a>
                  </li>
                  <li className="mobile-margin-top-10">
                    <a href="/kontakt" className="nav_button w-button">Kontakt</a>
                  </li>
                </ul>
              </nav>
              <div className="horizontal_right_wrapper">
                <a href="/kontakt" className="button_primary small_mobile w-inline-block">
                  <div className="text-block small">Kontakt</div>
                </a>
                <div 
                  className="menu-button w-nav-button" 
                  style={{WebkitUserSelect: 'text'}} 
                  aria-label="menu" 
                  role="button" 
                  tabIndex="0" 
                  aria-controls="w-nav-overlay-0" 
                  aria-haspopup="menu" 
                  aria-expanded={isMenuOpen}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <img 
                    loading="eager" 
                    src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669b924186dd3498054ff2e4_menu%20(9).svg" 
                    alt="menu button" 
                    className="menu_toggle"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
        </div>

        <div className="vertical_center_wrapper hero">
          {/* Sub Header - View 0.2s animation */}
          <div 
            data-w-id="df093de7-20ac-e0b8-01b8-eb3f00d5cdec" 
            className="sub_header_hero"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible 
                ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' 
                : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              transition: 'opacity 1s ease 0.2s, transform 1s ease 0.2s'
            }}
          >
            Für Physiotherapeuten und Kliniken
          </div>

          {/* H1 Heading - View 0.3s animation */}
          <h1 
            data-w-id="e1dd8d5d-99aa-5bf0-3c39-035d2ff71190" 
            className="heading_h1 center white _900px"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible 
                ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' 
                : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s'
            }}
          >
            Hochqualifizierte, medizinische Fachkräfte aus dem Ausland gewinnen
          </h1>

          {/* Paragraph - View 0.4s animation */}
          <p 
            data-w-id="02da42f9-e56c-091b-04ad-0979a701d012" 
            className="paragraph_large center white _680px"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible 
                ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' 
                : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s'
            }}
          >
            Durch Frese Recruiting erhalten Sie Zugriff auf internationale Fachkräfte und das ganz ohne bürokratischen Aufwand.
          </p>

          {/* Button Wrapper - View 0.5s animation */}
          <div 
            data-w-id="1fdf079a-91b5-5d74-087e-3c049df81327" 
            className="button_wrapper"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible 
                ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' 
                : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s'
            }}
          >
            <a href="/kontakt" className="primary_button w-button">Kostenfreies Erstgespräch vereinbaren</a>
          </div>

          {/* Bullet Wrapper - View 0.6s animation */}
          <div 
            data-w-id="e39e5080-479c-462b-6da6-f8c8bcc8003f" 
            className="bullet-wrapper"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible 
                ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' 
                : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s'
            }}
          >
            <div className="bullet-wrapper-single">
              <img 
                loading="lazy" 
                src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669b98f06de75eb9da868901_Icon%20(39).svg" 
                alt="check icon" 
                className="check-icon"
              />
              <div className="benefit-title">100% kostenfrei</div>
            </div>
            <div className="bullet-wrapper-single">
              <img 
                loading="lazy" 
                src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669b98f06de75eb9da868901_Icon%20(39).svg" 
                alt="check icon" 
                className="check-icon"
              />
              <div className="benefit-title">Ausführliche Beratung</div>
            </div>
            <div className="bullet-wrapper-single">
              <img 
                loading="lazy" 
                src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669b98f06de75eb9da868901_Icon%20(39).svg" 
                alt="check icon" 
                className="check-icon"
              />
              <div className="benefit-title">30 Minuten</div>
            </div>
          </div>

          {/* Hero Images - Hero Animation (a-29) */}
          <div data-w-id="2e073c2f-4eb9-bef9-ca3b-083fd44f11a9" className="image_center_wrapper">
            {/* Left Image - slides in from right with rotation */}
            <img 
              width="500" 
              alt="hero_card_illustration" 
              src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66adcf35c66d4ca474090c98_hero_2%20(1)-min.png" 
              loading="lazy" 
              srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66adcf35c66d4ca474090c98_hero_2%20(1)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66adcf35c66d4ca474090c98_hero_2%20(1)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66adcf35c66d4ca474090c98_hero_2%20(1)-min.png 1167w" 
              sizes="(max-width: 767px) 100vw, 500px" 
              className="hero_image_left"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-3deg) skew(0deg, 0deg)' 
                  : 'translate3d(20px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
                transition: 'opacity 1s ease 0s, transform 1s ease 0s'
              }}
            />
            
            {/* Center Image */}
            <img 
              className="hero_image_center" 
              src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b477f6ac870b036dac3ce2_hero-3%20(1)-min.png" 
              width="500" 
              alt="hero_card_illustration" 
              sizes="(max-width: 767px) 100vw, 500px" 
              data-w-id="2e073c2f-4eb9-bef9-ca3b-083fd44f11ab" 
              loading="lazy" 
              srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b477f6ac870b036dac3ce2_hero-3%20(1)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b477f6ac870b036dac3ce2_hero-3%20(1)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b477f6ac870b036dac3ce2_hero-3%20(1)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b477f6ac870b036dac3ce2_hero-3%20(1)-min.png 1167w"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
                transition: 'opacity 1s ease 0.1s'
              }}
            />
            
            {/* Right Image - slides in from left with rotation */}
            <img 
              width="500" 
              alt="hero_card_illustration" 
              src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b477f6a86b76d6a6103001_hero-3%20(2)-min.png" 
              loading="lazy" 
              srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b477f6a86b76d6a6103001_hero-3%20(2)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b477f6a86b76d6a6103001_hero-3%20(2)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b477f6a86b76d6a6103001_hero-3%20(2)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66b477f6a86b76d6a6103001_hero-3%20(2)-min.png 1167w" 
              sizes="(max-width: 767px) 100vw, 500px" 
              className="hero_image_right"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(3deg) skew(0deg, 0deg)' 
                  : 'translate3d(-20px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
                transition: 'opacity 1s ease 0s, transform 1s ease 0s'
              }}
            />
          </div>
        </div>

        {/* Pulsing Circle Background */}
        <img 
          alt="circle" 
          src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669beebc1867343b01df6c2f_Group%2046430.svg" 
          className="medium_circle pulse-animation" 
          style={{
            transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', 
            transformStyle: 'preserve-3d', 
            willChange: 'transform'
          }}
        />
      </div>

      <style jsx>{`
        /* Pulse Animation for Circle */
        @keyframes pulse {
          0% {
            transform: translate3d(0px, 0px, 0px) scale3d(0.97, 0.97, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
          }
          50% {
            transform: translate3d(0px, 0px, 0px) scale3d(1.03, 1.03, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
          }
          100% {
            transform: translate3d(0px, 0px, 0px) scale3d(0.97, 0.97, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
          }
        }

        .pulse-animation {
          animation: pulse 2s ease infinite;
        }
      `}</style>
    </section>
  );
}