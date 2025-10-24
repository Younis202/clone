'use client';

import { useEffect, useRef } from 'react';

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0,
      rootMargin: '0px 0px -10% 0px'
    };

    const animateOnScroll = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          element.style.opacity = '1';
          element.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
        }
      });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    if (sectionRef.current) {
      const animatedElements = sectionRef.current.querySelectorAll('[data-animation]');
      animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
        el.style.transition = 'opacity 1s ease, transform 1s ease';
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="unternehmen" className="section about" ref={sectionRef}>
      <div className="w-layout-blockcontainer container_default w-container">
        <div className="vertical_center_wrapper">
          <div
            data-animation="a-3"
            className="sub_header_white"
          >
            <div className="sub_header_gradient">Über uns</div>
          </div>
          <h2
            data-animation="a-4"
            className="heading_h2 center _700px"
          >
            Wer steckt hinter der Frese Recruiting GmbH?
          </h2>
          <p
            data-animation="a-5"
            className="paragraph_default center _850px"
          >
            Hinter der Frese Recruiting GmbH steht ein engagiertes Team aus Experten mit langjähriger Erfahrung im Bereich Personalrekrutierung und Gesundheitswesen. Gegründet von Tobias Frese, vereint unser Team fundiertes Wissen und umfassende Branchenkenntnisse. Unsere Mitarbeiter sind leidenschaftlich darum bemüht, die besten Talente weltweit zu identifizieren und sicherzustellen, dass diese nahtlos in das deutsche Gesundheitssystem integriert werden. <br /><br />Mit einem starken Fokus auf Qualität, Effizienz und Service stellen wir sicher, dass unsere Kunden stets bestens betreut werden und die vermittelten Fachkräfte optimale Arbeitsbedingungen vorfinden. Unser Ziel ist es, nachhaltige Lösungen zu bieten, die sowohl den Bedürfnissen unserer Kunden als auch der internationalen Fachkräfte gerecht werden.
          </p>
          <div
            data-animation="a-12"
            className="w-layout-grid team_grid"
          >
            <div className="right_wrapper">
              <img
                src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/68036444c9efdd38b5c8f4a3_Titelbild%20Christina%20Reel%202%20(30).png"
                loading="eager"
                width="280"
                sizes="(max-width: 479px) 100vw, 280px"
                alt="team-image"
                srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/68036444c9efdd38b5c8f4a3_Titelbild%20Christina%20Reel%202%20(30)-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/68036444c9efdd38b5c8f4a3_Titelbild%20Christina%20Reel%202%20(30)-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/68036444c9efdd38b5c8f4a3_Titelbild%20Christina%20Reel%202%20(30).png 1080w"
                className="team_image"
              />
            </div>
            <img
              className="team_image large"
              src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/6803621168e3355dea8680b9_Titelbild%20Christina%20Reel%202%20(27)%202.png"
              width="240"
              height="Auto"
              alt="team-image"
              sizes="240px"
              id="w-node-_9c37da92-ab0a-e6b3-5431-15fea3b7fcd3-b094ed5a"
              loading="eager"
              srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/6803621168e3355dea8680b9_Titelbild%20Christina%20Reel%202%20(27)%202-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/6803621168e3355dea8680b9_Titelbild%20Christina%20Reel%202%20(27)%202-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/6803621168e3355dea8680b9_Titelbild%20Christina%20Reel%202%20(27)%202.png 1080w"
            />
            <div className="left_wrapper">
              <img
                src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/680364d2fb237254d2cf5e61_Titelbild%20Christina%20Reel%202%20(31).png"
                loading="eager"
                width="280"
                height="Auto"
                alt="team-image"
                srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/680364d2fb237254d2cf5e61_Titelbild%20Christina%20Reel%202%20(31)-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/680364d2fb237254d2cf5e61_Titelbild%20Christina%20Reel%202%20(31)-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/680364d2fb237254d2cf5e61_Titelbild%20Christina%20Reel%202%20(31).png 1080w"
                sizes="(max-width: 479px) 100vw, 280px"
                className="team_image"
              />
            </div>
          </div>
          <div
            data-animation="a-13"
            className="button_wrapper"
          >
            <a href="/kontakt" className="primary_button blue _2 w-button">
              Kostenfreies Erstgespräch vereinbaren
            </a>
          </div>
          <div className="divider"></div>
          <div
            data-animation="a-3"
            className="sub_header_white"
          >
            <div className="sub_header_gradient">FAQ</div>
          </div>
          <h2
            data-animation="a-4"
            className="heading_h2 center _700px"
          >
            Häufig gestellte Fragen
          </h2>
          <div
            data-animation="a-5"
            className="w-layout-grid faq_grid"
          >
            <div data-delay="0" data-hover="false" className="faq-item-border first w-dropdown">
              <div className="faq-toggle w-dropdown-toggle" id="w-dropdown-toggle-0" aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex="0">
                <div className="faq-title-wrapper-large">
                  <div className="paragraph-regular text-weight-medium">Was macht die Frese Recruiting GmbH?</div>
                  <div className="toggle_wrapper">
                    <div className="faq-arrow w-embed">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_43_556)">
                          <path d="M23.7499 11.25H13.7501V1.24992C13.7501 0.560074 13.19 0 12.4999 0C11.8101 0 11.25 0.560074 11.25 1.24992V11.25H1.24992C0.560074 11.25 0 11.8101 0 12.4999C0 13.19 0.560074 13.7501 1.24992 13.7501H11.25V23.7499C11.25 24.44 11.8101 25.0001 12.4999 25.0001C13.19 25.0001 13.7501 24.44 13.7501 23.7499V13.7501H23.7499C24.44 13.7501 25.0001 13.19 25.0001 12.4999C25.0001 11.8101 24.44 11.25 23.7499 11.25Z" fill="#0EE7F6" />
                        </g>
                        <defs>
                          <clipPath id="clip0_43_556">
                            <rect width="25" height="25" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="faq-content w-dropdown-list" id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0" style={{ height: '0px' }}>
                <div className="faq-content-wrapper">
                  <p className="faq-paragraph">
                    Wir helfen Unternehmen aus dem Gesundheitswesen erfolgreich qualifizierte Fachkräfte aus dem Ausland zu rekrutieren und erfolgreich in die Einrichtungen zu integrieren.<br /><br />Und das ganze ohne bürokratischen Aufwand für unsere Kunden und staatlich gefördert.
                  </p>
                </div>
              </nav>
            </div>
            <div data-delay="0" data-hover="false" className="faq-item-border first w-dropdown">
              <div className="faq-toggle w-dropdown-toggle" id="w-dropdown-toggle-1" aria-controls="w-dropdown-list-1" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex="0">
                <div className="faq-title-wrapper-large">
                  <div className="paragraph-regular text-weight-medium">Wie lange dauert der Rekrutierungsprozess?</div>
                  <div className="toggle_wrapper">
                    <div className="faq-arrow w-embed">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_43_556)">
                          <path d="M23.7499 11.25H13.7501V1.24992C13.7501 0.560074 13.19 0 12.4999 0C11.8101 0 11.25 0.560074 11.25 1.24992V11.25H1.24992C0.560074 11.25 0 11.8101 0 12.4999C0 13.19 0.560074 13.7501 1.24992 13.7501H11.25V23.7499C11.25 24.44 11.8101 25.0001 12.4999 25.0001C13.19 25.0001 13.7501 24.44 13.7501 23.7499V13.7501H23.7499C24.44 13.7501 25.0001 13.19 25.0001 12.4999C25.0001 11.8101 24.44 11.25 23.7499 11.25Z" fill="#0EE7F6" />
                        </g>
                        <defs>
                          <clipPath id="clip0_43_556">
                            <rect width="25" height="25" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="faq-content w-dropdown-list" id="w-dropdown-list-1" aria-labelledby="w-dropdown-toggle-1" style={{ height: '0px' }}>
                <div className="faq-content-wrapper">
                  <p className="faq-paragraph">
                    Die Dauer des Prozesses variiert stark und hängt mit vielen unterschiedlichen Faktoren wie dem Herkunftsland oder dem Standort der Einrichtung zusammen.<br /><br />Die Standard-Dauer beträgt ca. 6-8 Monate bis zur Einreise des Kandidaten. Es kann aber auch deutlich schneller gehen oder etwas länger dauern.<br /><br />Für genauere Zeitangaben sprechen Sie uns gerne an.
                  </p>
                </div>
              </nav>
            </div>
            <div data-delay="0" data-hover="false" className="faq-item-border first w-dropdown">
              <div className="faq-toggle w-dropdown-toggle" id="w-dropdown-toggle-2" aria-controls="w-dropdown-list-2" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex="0">
                <div className="faq-title-wrapper-large">
                  <div className="paragraph-regular text-weight-medium">Welche Qualifikationen haben die von Ihnen rekrutierten Fachkräfte?</div>
                  <div className="toggle_wrapper">
                    <div className="faq-arrow w-embed">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_43_556)">
                          <path d="M23.7499 11.25H13.7501V1.24992C13.7501 0.560074 13.19 0 12.4999 0C11.8101 0 11.25 0.560074 11.25 1.24992V11.25H1.24992C0.560074 11.25 0 11.8101 0 12.4999C0 13.19 0.560074 13.7501 1.24992 13.7501H11.25V23.7499C11.25 24.44 11.8101 25.0001 12.4999 25.0001C13.19 25.0001 13.7501 24.44 13.7501 23.7499V13.7501H23.7499C24.44 13.7501 25.0001 13.19 25.0001 12.4999C25.0001 11.8101 24.44 11.25 23.7499 11.25Z" fill="#0EE7F6" />
                        </g>
                        <defs>
                          <clipPath id="clip0_43_556">
                            <rect width="25" height="25" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="faq-content w-dropdown-list" id="w-dropdown-list-2" aria-labelledby="w-dropdown-toggle-2" style={{ height: '0px' }}>
                <div className="faq-content-wrapper">
                  <p className="faq-paragraph">
                    Alle durch uns vermittelten Kandidaten, besitzen eine Ausbildung, die in Deutschland anerkannt werden kann. <br /><br />Die Qualifikationen der Kandidaten variieren natürlich stark von Kandidaten die gerade Ihre Ausbildung abgeschlossen haben bis hin zu Universitätsprofessoren, haben wir schon alles vermittelt.<br /><br />Sollten Sie besondere Wünsche oder Ansprüche haben, sprechen Sie uns gerne an und wir werden gemeinsam prüfen, welche Möglichkeiten es gibt.
                  </p>
                </div>
              </nav>
            </div>
            <div data-delay="0" data-hover="false" className="faq-item-border first w-dropdown">
              <div className="faq-toggle w-dropdown-toggle" id="w-dropdown-toggle-3" aria-controls="w-dropdown-list-3" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex="0">
                <div className="faq-title-wrapper-large">
                  <div className="paragraph-regular text-weight-medium">Wie wird der Wohnraum für neue Mitarbeiter organisiert?</div>
                  <div className="toggle_wrapper">
                    <div className="faq-arrow w-embed">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_43_556)">
                          <path d="M23.7499 11.25H13.7501V1.24992C13.7501 0.560074 13.19 0 12.4999 0C11.8101 0 11.25 0.560074 11.25 1.24992V11.25H1.24992C0.560074 11.25 0 11.8101 0 12.4999C0 13.19 0.560074 13.7501 1.24992 13.7501H11.25V23.7499C11.25 24.44 11.8101 25.0001 12.4999 25.0001C13.19 25.0001 13.7501 24.44 13.7501 23.7499V13.7501H23.7499C24.44 13.7501 25.0001 13.19 25.0001 12.4999C25.0001 11.8101 24.44 11.25 23.7499 11.25Z" fill="#0EE7F6" />
                        </g>
                        <defs>
                          <clipPath id="clip0_43_556">
                            <rect width="25" height="25" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="faq-content w-dropdown-list" id="w-dropdown-list-3" aria-labelledby="w-dropdown-toggle-3" style={{ height: '0px' }}>
                <div className="faq-content-wrapper">
                  <p className="faq-paragraph">
                    Selbstverständlich unterstützen wir Sie auch bei der Suche nach Wohnraum für Ihre neuen Mitarbeiter.<br /><br />Durch Kooperationen mit Wohngesellschaften und die spezielle Schulung unserer Mitarbeiter, ist es uns möglich zeitnah Wohnraum zu organisieren, egal ob auf dem Land oder in einer Großstadt.
                  </p>
                </div>
              </nav>
            </div>
            <div data-delay="0" data-hover="false" className="faq-item-border first w-dropdown">
              <div className="faq-toggle w-dropdown-toggle" id="w-dropdown-toggle-4" aria-controls="w-dropdown-list-4" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex="0">
                <div className="faq-title-wrapper-large">
                  <div className="paragraph-regular text-weight-medium">Was unterscheidet uns von anderen Personalvermittlungsagenturen?</div>
                  <div className="toggle_wrapper">
                    <div className="faq-arrow w-embed">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_43_556)">
                          <path d="M23.7499 11.25H13.7501V1.24992C13.7501 0.560074 13.19 0 12.4999 0C11.8101 0 11.25 0.560074 11.25 1.24992V11.25H1.24992C0.560074 11.25 0 11.8101 0 12.4999C0 13.19 0.560074 13.7501 1.24992 13.7501H11.25V23.7499C11.25 24.44 11.8101 25.0001 12.4999 25.0001C13.19 25.0001 13.7501 24.44 13.7501 23.7499V13.7501H23.7499C24.44 13.7501 25.0001 13.19 25.0001 12.4999C25.0001 11.8101 24.44 11.25 23.7499 11.25Z" fill="#0EE7F6" />
                        </g>
                        <defs>
                          <clipPath id="clip0_43_556">
                            <rect width="25" height="25" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="faq-content w-dropdown-list" id="w-dropdown-list-4" aria-labelledby="w-dropdown-toggle-4" style={{ height: '0px' }}>
                <div className="faq-content-wrapper">
                  <p className="faq-paragraph">
                    Erfolgsgarantie: Sie zahlen nur wenn ein Arbeitsvertrag geschlossen wird.<br /><br />Anti-Bürokratie-System: Sie müssen sich nicht mit koplizierten Behörden-Prozessen oder komplexen Formularen herumschlagen, diese Arbeit nehmen wir Ihnen komplett ab.<br /><br />Expertise im Bereich der öffentlichen Fördergelder: Bei den meisten Agenturen lassen Sie einen Haufen Geld liegen, weil die meisten Agenturen die Möglichkeiten der öffentlichen Förderung nicht kennen oder sie einfach nicht nutzen.
                  </p>
                </div>
              </nav>
            </div>
            <div data-delay="0" data-hover="false" className="faq-item-border first w-dropdown">
              <div className="faq-toggle w-dropdown-toggle" id="w-dropdown-toggle-5" aria-controls="w-dropdown-list-5" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex="0">
                <div className="faq-title-wrapper-large">
                  <div className="paragraph-regular text-weight-medium">Wie gut sprechen die Kandidaten deutsch?</div>
                  <div className="toggle_wrapper">
                    <div className="faq-arrow w-embed">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_43_556)">
                          <path d="M23.7499 11.25H13.7501V1.24992C13.7501 0.560074 13.19 0 12.4999 0C11.8101 0 11.25 0.560074 11.25 1.24992V11.25H1.24992C0.560074 11.25 0 11.8101 0 12.4999C0 13.19 0.560074 13.7501 1.24992 13.7501H11.25V23.7499C11.25 24.44 11.8101 25.0001 12.4999 25.0001C13.19 25.0001 13.7501 24.44 13.7501 23.7499V13.7501H23.7499C24.44 13.7501 25.0001 13.19 25.0001 12.4999C25.0001 11.8101 24.44 11.25 23.7499 11.25Z" fill="#0EE7F6" />
                        </g>
                        <defs>
                          <clipPath id="clip0_43_556">
                            <rect width="25" height="25" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="faq-content w-dropdown-list" id="w-dropdown-list-5" aria-labelledby="w-dropdown-toggle-5" style={{ height: '0px' }}>
                <div className="faq-content-wrapper">
                  <p className="faq-paragraph">
                    Alle Kandidaten haben zum Zeitpunkt der Einreise mindestens ein B1 Sprachzertifikat, das bedeutet man kann sich schon gut mit Ihnen verständigen.<br /><br />Die Sprache ist ein essenziell wichtiger Bestandteil im medizinischen Bereich, deshalb achten wir sehr genau auf die Sprachfähigkeit der Kandidaten.<br /><br />Durch Kooperationen mit erstklassigen Sprachschulen weltweit sorgen wir dafür, dass alle durch uns vermittelten Kandidaten bestmöglich vorbereitet werden.
                  </p>
                </div>
              </nav>
            </div>
          </div>
          <div className="comparsion_wrapper_red cta">
            <p
              data-animation="a-3"
              className="sub_header_light"
            >
              Kontakt
            </p>
            <div 
              data-animation="a-4"
              className="cta_title"
            >
              Jetzt unverbindlich Kontakt aufnehmen
            </div>
            <div
              data-animation="a-8"
              className="button_wrapper"
            >
              <a href="/kontakt" className="primary_button small _2 w-button">
                Kostenfreies Erstgespräch vereinbaren
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}