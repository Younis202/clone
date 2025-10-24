import { useState, useEffect, useRef } from 'react';

export default function BenefitsSection() {
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.wId]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-w-id]').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const getAnimationStyle = (id) => {
    if (!isVisible[id]) {
      if (id === 'ef8b1336-bf27-16b0-512c-4f2fc4efd8e9' || id === 'ef8b1336-bf27-16b0-512c-4f2fc4efd8eb' || id === '4643d775-b50c-1aa9-7fdc-bd4a70f78926') {
        return { opacity: 0, transform: 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' };
      }
      if (id === '1bc60307-07a1-f76c-c8db-018311b568b8' || id === '1bc60307-07a1-f76c-c8db-018311b568bf' || 
          id === '1bc60307-07a1-f76c-c8db-018311b568c7' || id === '1bc60307-07a1-f76c-c8db-018311b568ce' || 
          id === '1bc60307-07a1-f76c-c8db-018311b568d5') {
        return { opacity: 0, transform: 'translate3d(0px, 0px, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' };
      }
    }
    return { opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' };
  };

  return (
    <section className="section benefits">
      <div className="w-layout-blockcontainer container_default w-container">
        <div className="vertical_center_wrapper">
          <div 
            data-w-id="ef8b1336-bf27-16b0-512c-4f2fc4efd8e9" 
            style={{ 
              ...getAnimationStyle('ef8b1336-bf27-16b0-512c-4f2fc4efd8e9'),
              transition: 'opacity 700ms ease 100ms, transform 700ms ease 100ms',
              transformStyle: 'preserve-3d' 
            }} 
            className="sub_header_transparent"
          >
            Ihre Vorteile
          </div>
          <h2 
            data-w-id="ef8b1336-bf27-16b0-512c-4f2fc4efd8eb" 
            style={{ 
              ...getAnimationStyle('ef8b1336-bf27-16b0-512c-4f2fc4efd8eb'),
              transition: 'opacity 1000ms ease 200ms, transform 1000ms ease 200ms',
              transformStyle: 'preserve-3d' 
            }} 
            className="heading_h2 center white _705px"
          >
            Wieso die Frese Recruiting GmbH?
          </h2>
          <div className="benefits-wrapper">
            <div className="cards-wrapper">
              <div className="solution-card-border left">
                <img 
                  className="card-illustration" 
                  src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4abece537143874d36c9f_graphic-1%20(4)-min.png" 
                  alt="increased-chard" 
                  style={{ 
                    ...getAnimationStyle('1bc60307-07a1-f76c-c8db-018311b568b8'),
                    transition: 'opacity 700ms ease 300ms, transform 700ms ease 300ms',
                    transformStyle: 'preserve-3d' 
                  }} 
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" 
                  data-w-id="1bc60307-07a1-f76c-c8db-018311b568b8" 
                  loading="eager" 
                  srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4abece537143874d36c9f_graphic-1%20(4)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4abece537143874d36c9f_graphic-1%20(4)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4abece537143874d36c9f_graphic-1%20(4)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4abece537143874d36c9f_graphic-1%20(4)-min-p-1600.png 1600w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4abece537143874d36c9f_graphic-1%20(4)-min.png 1770w"
                />
                <div className="vertical-center-wrapper _70">
                  <div className="small-title center">Anti-Bürokratie-System</div>
                  <p className="paragraph-small center">
                    Wir übernehmen den gesamten bürokratischen Aufwand sowie die Kommunikation mit den Behörden, um Ihnen so viel Arbeit wie möglich abzunehmen. Von der Anerkennung der Ausbildung bis zur Visabeantragung – wir erledigen alles für Sie.
                  </p>
                </div>
              </div>
              <div className="solution-card-border right">
                <img 
                  className="card-illustration bg" 
                  src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4ac3f093ab866a7b89258_graphic-2%20(4)-min.png" 
                  alt="together" 
                  style={{ 
                    ...getAnimationStyle('1bc60307-07a1-f76c-c8db-018311b568bf'),
                    transition: 'opacity 700ms ease 400ms, transform 700ms ease 400ms',
                    transformStyle: 'preserve-3d' 
                  }} 
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" 
                  data-w-id="1bc60307-07a1-f76c-c8db-018311b568bf" 
                  loading="eager" 
                  srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4ac3f093ab866a7b89258_graphic-2%20(4)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4ac3f093ab866a7b89258_graphic-2%20(4)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4ac3f093ab866a7b89258_graphic-2%20(4)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4ac3f093ab866a7b89258_graphic-2%20(4)-min-p-1600.png 1600w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4ac3f093ab866a7b89258_graphic-2%20(4)-min.png 1770w"
                />
                <div className="vertical-center-wrapper _70">
                  <div className="small-title center">
                    Expertise im Bereich der<br />öffentlichen Fördergelder
                  </div>
                  <p className="paragraph-small center">
                    Unsere Expertise ermöglicht es uns, Anpassungsmaßnahmen bei AZAV zertifizierten Bildungsträgern zu organisieren. Dies bedeutet für unsere Kunden eine 100% Kostenübernahme der Lehrgangskosten und Lohnkostenzuschüsse von mindestens 50% über die gesamte Maßnahmenlaufzeit durch die Agentur für Arbeit.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-layout-grid _3x1-grid">
              <div className="solution-card-border bottom-left">
                <img 
                  className="card-illustration bottom" 
                  src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4acf27843648bf2849c0c_graphic-3-min.png" 
                  alt="illustration" 
                  style={{ 
                    ...getAnimationStyle('1bc60307-07a1-f76c-c8db-018311b568c7'),
                    transition: 'opacity 700ms ease 500ms, transform 700ms ease 500ms',
                    transformStyle: 'preserve-3d' 
                  }} 
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" 
                  data-w-id="1bc60307-07a1-f76c-c8db-018311b568c7" 
                  loading="eager" 
                  srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4acf27843648bf2849c0c_graphic-3-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4acf27843648bf2849c0c_graphic-3-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4acf27843648bf2849c0c_graphic-3-min.png 1125w"
                />
                <div className="vertical-center-wrapper _90">
                  <div className="small-title center">Wohnraumorganisation</div>
                  <p className="paragraph-small center">
                    Wir kümmern uns um die Wohnraumbeschaffung für die Kandidaten, damit diese sich von Anfang an wohlfühlen und sich auf ihre neue Arbeitsstelle konzentrieren können. Ein reibungsloser Start führt zu einer besseren Integration und Zufriedenheit.
                  </p>
                </div>
              </div>
              <div className="solution-card-border">
                <img 
                  className="card-illustration bottom" 
                  src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4acf2dc623da81d97c5dd_graphic-4-min.png" 
                  alt="illustration" 
                  style={{ 
                    ...getAnimationStyle('1bc60307-07a1-f76c-c8db-018311b568ce'),
                    transition: 'opacity 700ms ease 600ms, transform 700ms ease 600ms',
                    transformStyle: 'preserve-3d' 
                  }} 
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" 
                  data-w-id="1bc60307-07a1-f76c-c8db-018311b568ce" 
                  loading="eager" 
                  srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4acf2dc623da81d97c5dd_graphic-4-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4acf2dc623da81d97c5dd_graphic-4-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4acf2dc623da81d97c5dd_graphic-4-min-p-1080.png 1080w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4acf2dc623da81d97c5dd_graphic-4-min.png 1125w"
                />
                <div className="vertical-center-wrapper _90">
                  <div className="small-title center">Erfolgsgarantie</div>
                  <p className="paragraph-small center">
                    Sie zahlen ausschließlich dann, wenn ein Arbeitsvertrag erfolgreich mit einem geeigneten Kandidaten abgeschlossen, von beiden Parteien unterzeichnet wird. Sollte ein Kandidat abspringen oder vor der Vollendung der ersten 6 Beschäftigungsmonate bei Ihnen kündigen, wird der Kandidat kostenlos nachbesetzt.
                  </p>
                </div>
              </div>
              <div className="solution-card-border bottom-right">
                <img 
                  className="card-illustration bottom" 
                  src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4ad3af96594abadeffee1_graphic-5%20(1)-min.png" 
                  alt="illustration" 
                  style={{ 
                    ...getAnimationStyle('1bc60307-07a1-f76c-c8db-018311b568d5'),
                    transition: 'opacity 700ms ease 700ms, transform 700ms ease 700ms',
                    transformStyle: 'preserve-3d' 
                  }} 
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" 
                  data-w-id="1bc60307-07a1-f76c-c8db-018311b568d5" 
                  loading="eager" 
                  srcSet="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4ad3af96594abadeffee1_graphic-5%20(1)-min-p-500.png 500w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4ad3af96594abadeffee1_graphic-5%20(1)-min-p-800.png 800w, https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/66a4ad3af96594abadeffee1_graphic-5%20(1)-min.png 1125w"
                />
                <div className="vertical-center-wrapper _90">
                  <div className="small-title center">Hohe Kundenzufriedenheit</div>
                  <p className="paragraph-small center">
                    Unsere hohe Kundenzufriedenheit spricht für sich. Wir haben zahlreiche zufriedene Kunden, die unsere Dienstleistungen regelmäßig in Anspruch nehmen und stets auf unsere Professionalität und Zuverlässigkeit zählen können.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div 
            data-w-id="4643d775-b50c-1aa9-7fdc-bd4a70f78926" 
            style={{ 
              ...getAnimationStyle('4643d775-b50c-1aa9-7fdc-bd4a70f78926'),
              transition: 'opacity 700ms ease 800ms, transform 700ms ease 800ms',
              transformStyle: 'preserve-3d' 
            }} 
            className="button_wrapper"
          >
            <a href="/kontakt" className="primary_button blue w-button">
              Kostenfreies Erstgespräch vereinbaren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}