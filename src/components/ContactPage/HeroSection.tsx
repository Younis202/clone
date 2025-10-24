import { useState } from 'react';

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="section hero sub">
      <div className="w-layout-blockcontainer container_default overflow w-container">
        <div 
          data-w-id="4537995e-145b-7ec4-dfcc-ef8e7f0523c6" 
          data-animation="default" 
          data-collapse="medium" 
          data-duration="400" 
          data-easing="ease" 
          data-easing2="ease" 
          role="banner" 
          className="navbar-logo-left-container shadow-three w-nav" 
          style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
        >
          <div className="container">
            <div className="navbar-wrapper">
              <a href="/" className="navbar-brand w-nav-brand" aria-label="home">
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
                    <a href="/" className="nav-link">Home</a>
                    <a href="https://frese-recruiting.de#loesungen" className="nav-link">Lösungen</a>
                    <a href="https://frese-recruiting.de#fallstudien" className="nav-link">Fallstudien</a>
                    <a href="https://frese-recruiting.de#fallstudien" className="nav-link">Bewertungen</a>
                    <a href="https://frese-recruiting.de#unternehmen" className="nav-link">Unternehmen</a>
                    <a href="/kandidaten" className="nav-link">Bewerber</a>
                  </li>
                  <li className="mobile-margin-top-10">
                    <a href="/kontakt" aria-current="page" className="nav_button w-button w--current">Kontakt</a>
                  </li>
                </ul>
              </nav>
              <div className="horizontal_right_wrapper">
                <a href="/kontakt" aria-current="page" className="button_primary small_mobile w-inline-block w--current">
                  <div className="text-block small">Kontakt</div>
                </a>
                <div 
                  className="menu-button w-nav-button" 
                  style={{ WebkitUserSelect: 'text' }} 
                  aria-label="menu" 
                  role="button" 
                  tabIndex="0" 
                  aria-controls="w-nav-overlay-0" 
                  aria-haspopup="menu" 
                  aria-expanded="false"
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
          <div 
            data-w-id="d55ae42b-67b7-b1f1-eaea-26b5d2659d3b" 
            style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }} 
            className="sub_header_hero"
          >
            Kontakt
          </div>
          <h1 
            data-w-id="d55ae42b-67b7-b1f1-eaea-26b5d2659d3d" 
            style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }} 
            className="heading_h1 center white _800px"
          >
            Jetzt unverbindlich Kontakt aufnehmen
          </h1>
          <p 
            data-w-id="d55ae42b-67b7-b1f1-eaea-26b5d2659d3f" 
            style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1 }} 
            className="paragraph_large center white _680px"
          >
            Tragen Sie sich jetzt ein und einer unserer Experten wird sich schnellstmöglich mit Ihnen in Verbindung setzen oder Sie buchen sich direkt einen passenden Termin auf der Folgeseite.
          </p>
          <div 
            data-w-id="f4713dc3-9a36-3909-091a-10277d57b864" 
            style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1 }} 
            className="button_wrapper"
          >
            <a href="/kandidaten" className="primary_button w-button">Du möchtest dich bewerben?</a>
          </div>
        </div>
        <img 
          alt="circle" 
          src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669beebc1867343b01df6c2f_Group%2046430.svg" 
          className="medium_circle sub _1" 
          style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1.03, 1.03, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
        />
      </div>
      <div className="w-layout-blockcontainer container_default w-container">
        <div className="vertical_center_wrapper">
          <div 
            data-w-id="d55ae42b-67b7-b1f1-eaea-26b5d2659d44" 
            style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1 }} 
            className="form_wrapper"
          >
            <div 
              data-w-id="e609d469-c552-e8ca-802b-2ef28127ace5" 
              style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1 }} 
              className="contact-card"
            >
              <div id="w-node-e609d469-c552-e8ca-802b-2ef28127ace6-f527f600" className="form-block w-form">
                <form 
                  id="wf-form-Kontakt-Form" 
                  name="wf-form-Kontakt-Form" 
                  data-name="Kontakt Form" 
                  method="get" 
                  data-w-id="e609d469-c552-e8ca-802b-2ef28127ace7" 
                  className="contact-form" 
                  data-wf-page-id="66a20e4be210aad6f527f600" 
                  data-wf-element-id="e609d469-c552-e8ca-802b-2ef28127ace7" 
                  style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1 }} 
                  aria-label="Kontakt Form"
                  action="https://www.frese-recruiting.de/danke"
                >
                  <div id="w-node-e609d469-c552-e8ca-802b-2ef28127ace8-f527f600" className="field-wrapper">
                    <label htmlFor="Vorname" className="field-label">Ihr Vorname <span className="red">*</span></label>
                    <input 
                      className="contact-form-text-field w-input" 
                      maxLength="256" 
                      name="Vorname" 
                      data-name="Vorname" 
                      placeholder="Max " 
                      type="text" 
                      id="Vorname" 
                      required
                    />
                  </div>
                  <div id="w-node-e609d469-c552-e8ca-802b-2ef28127acef-f527f600" className="field-wrapper">
                    <label htmlFor="Nachname" className="field-label">Ihr Nachname <span className="red">*</span></label>
                    <input 
                      className="contact-form-text-field w-input" 
                      maxLength="256" 
                      name="Nachname" 
                      data-name="Nachname" 
                      placeholder="Mustermann" 
                      type="text" 
                      id="Nachname" 
                      required
                    />
                  </div>
                  <div id="w-node-e609d469-c552-e8ca-802b-2ef28127acf6-f527f600" className="field-wrapper">
                    <label htmlFor="E-Mail-Adresse" className="field-label">Ihre E-Mail-Adresse <span className="red">*</span></label>
                    <input 
                      className="contact-form-text-field w-input" 
                      maxLength="256" 
                      name="E-Mail-Adresse" 
                      data-name="E Mail Adresse" 
                      placeholder="Max@Muster-GmbH.de" 
                      type="email" 
                      id="E-Mail-Adresse" 
                      required
                    />
                  </div>
                  <div id="w-node-e609d469-c552-e8ca-802b-2ef28127acfd-f527f600" className="field-wrapper">
                    <label htmlFor="Telefonnummer" className="field-label">Ihre Telefonnummer <span className="red">*</span></label>
                    <input 
                      className="contact-form-text-field w-input" 
                      maxLength="256" 
                      name="Telefonnummer" 
                      data-name="Telefonnummer" 
                      placeholder="+49..." 
                      type="tel" 
                      id="Telefonnummer" 
                      required
                    />
                  </div>
                  <div id="w-node-e609d469-c552-e8ca-802b-2ef28127ad04-f527f600" className="field-wrapper">
                    <label htmlFor="Unternehmen" className="field-label">Ihre Unternehmen <span className="red">*</span></label>
                    <input 
                      className="contact-form-text-field w-input" 
                      maxLength="256" 
                      name="Unternehmen" 
                      data-name="Unternehmen" 
                      placeholder="Muster-GmbH" 
                      type="text" 
                      id="Unternehmen" 
                      required
                    />
                  </div>
                  <div id="w-node-e609d469-c552-e8ca-802b-2ef28127ad0b-f527f600" className="field-wrapper">
                    <label htmlFor="Nachricht" className="field-label">Ihre Nachricht an uns <span className="red">*</span></label>
                    <textarea 
                      id="Nachricht" 
                      name="Nachricht" 
                      maxLength="5000" 
                      data-name="Nachricht" 
                      placeholder="..." 
                      required 
                      className="contact-form-text-field textarea w-input"
                    />
                  </div>
                  <div id="w-node-e609d469-c552-e8ca-802b-2ef28127ad12-f527f600" className="field-wrapper">
                    <label className="w-checkbox checkbox-field">
                      <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>
                      <input 
                        type="checkbox" 
                        name="checkbox" 
                        id="checkbox" 
                        data-name="Checkbox" 
                        required 
                        style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
                      />
                      <span className="checkbox-label w-form-label" htmlFor="checkbox">
                        Unsere allgemeinen Datenschutzhinweise und Hinweise zu Ihrem datenschutzrechtlichen Widerspruchsrecht finden Sie <a href="/datenschutz" className="red-text-link">hier</a>.
                      </span>
                    </label>
                  </div>
                  <input 
                    type="submit" 
                    data-wait="Formular wird gesendet..." 
                    id="w-node-e609d469-c552-e8ca-802b-2ef28127ad1a-f527f600" 
                    className="button w-button" 
                    value="Formular abschicken!"
                  />
                </form>
                <div className="success-message-2 w-form-done" tabIndex="-1" role="region" aria-label="Kontakt Form success">
                  <div className="text-block-3">Vielen Dank, wir werden uns in Kürze bei Ihnen melden.</div>
                </div>
                <div className="error-message w-form-fail" tabIndex="-1" role="region" aria-label="Kontakt Form failure">
                  <div>Es tut uns leid. Etwas ist beim Absenden des Formulars schief gelaufen. </div>
                </div>
              </div>
              <div 
                id="w-node-e609d469-c552-e8ca-802b-2ef28127ad21-f527f600" 
                data-w-id="e609d469-c552-e8ca-802b-2ef28127ad21" 
                className="contact-information-wrapper" 
                style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1 }}
              >
                <div className="contact-person-wrapper">
                  <img 
                    width="100" 
                    height="Auto" 
                    alt="tobias-frese" 
                    src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/680365fd17dd244f6d5bbde4_logo%20tobi.png" 
                    loading="lazy" 
                    className="contact-person-image"
                  />
                  <div className="contact-person-info-wrapper">
                    <div className="contact-person-name">Tobias Frese</div>
                    <div className="contact-person-role">Ihr Ansprechpartner</div>
                  </div>
                </div>
                <div className="footer-contact-line">
                  <img 
                    loading="lazy" 
                    src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4fdcae5371438740304c0_Group%207201.svg" 
                    alt="" 
                    className="contact-icon"
                  />
                  <a href="mailto:info@frese-recruiting.de" className="link gray">info@frese-recruiting.de</a>
                </div>
                <div className="footer-contact-line hide">
                  <img 
                    loading="lazy" 
                    src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4fcaae2b43a9b49abc4f7_Group%2045050%20(2).svg" 
                    alt="Telefon-Icon" 
                    className="contact-icon"
                  />
                  <a href="tel:+49(0)15151196220" className="link gray">+49 (0) 151 511 96 220</a>
                </div>
                <div className="footer-contact-line">
                  <img 
                    loading="lazy" 
                    src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4fdd4bf26f8288bdbde0d_Group%207205.svg" 
                    alt="" 
                    className="contact-icon"
                  />
                  <a href="tel:+4922129211450" className="link gray">+49 0221 29211450</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}