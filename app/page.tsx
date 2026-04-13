export default function GSMCarwashHomepage() {
  const products = [
    {
      title: "터널세차기",
      desc: "소형 RV 차량 흐름에 적합한 고효율 자동 세차 시스템으로, 빠른 처리량과 안정적인 운영이 강점입니다.",
      features: ["대량 세차 대응", "운영 효율 향상", "맞춤형 설계 가능"],
    },
    {
      title: "문형 대형 세차기",
      desc: "버스, 화물차, 특장차 등 대형 차량에 적합한 자동 세차 설비입니다.",
      features: ["대형 차량 전용", "강력한 세척 성능", "내구성 중심 설계"],
    },
    {
      title: "문형 소형 세차기",
      desc: "승용차 및 소형 차량 대상의 자동 세차 시스템으로, 공간 효율과 경제성을 함께 고려했습니다.",
      features: ["소형 부지 적합", "가성비 운영", "간편한 유지관리"],
    },
    {
      title: "노터치 세차기",
      desc: "차량 외관 접촉 없이 세척하는 방식으로 스크래치 부담을 줄이고 프리미엄 세차 경험을 제공합니다.",
      features: ["비접촉 세차", "도장면 부담 완화", "프리미엄 고객층 적합"],
    },
    {
      title: "코인세차장 제조·판매",
      desc: "코인세차장 구축에 필요한 장비 제조부터 현장 적용까지 통합 지원하는 솔루션입니다.",
      features: ["창업/운영 맞춤", "장비 제조·공급", "현장 중심 지원"],
    },
  ];

  const projects = [
    { name: "시공 사례 01" },
    { name: "시공 사례 02" },
    { name: "시공 사례 03" },
  ];

  return (
    <main className="page">
      <header className="header">
        <div className="container headerInner">
          <div>
            <div className="logo">
              <span className="logoBlue">GSM</span>
              <span className="logoBlack">자동화세차기</span>
            </div>
            <div className="logoSub">자동차 자동화 세차기 제조 · 판매 전문기업</div>
          </div>

          <nav className="nav">
            <a href="#about">회사소개</a>
            <a href="#products">제품소개</a>
            <a href="#projects">시공게시판</a>
            <a href="#contact">문의안내</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="heroOverlay" />
        <div className="container heroInner">
          <div className="heroContent">
            <div className="heroBadge">제조 · 판매 · 시공 · 유지관리</div>
            <h1 className="heroTitle">
              자동세차 설비의 기준,
              <br />
              GSM자동화세차기
            </h1>
            <p className="heroDesc">
              터널세차기, 문형 대형/소형 세차기, 노터치 세차기, 코인세차장까지
              현장에 맞는 자동 세차 솔루션을 설계하고 제조·판매하는 전문 회사입니다.
            </p>

            <div className="heroButtons">
              <a href="#contact" className="btn btnPrimary">
                상담 문의
              </a>
              <a
                href="https://www.youtube.com/@gsm1613"
                target="_blank"
                rel="noreferrer"
                className="btn btnYoutube"
              >
                설치영상 유튜브 클릭
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container aboutGrid">
          <div>
            <div className="eyebrow">About Company</div>
            <h2 className="sectionTitle">회사를 소개합니다</h2>
            <p className="sectionText">
              GSM자동화세차기는 자동차 자동화 세차 설비 분야에서 축적된 경험을 바탕으로,
              고객 현장에 적합한 세차 시스템을 제안하고 제조·판매·시공까지 일괄 대응하는 기업입니다.
              단순한 장비 공급을 넘어 운영 효율, 유지관리 편의성, 고객 만족도를 함께 고려한 솔루션을 제공합니다.
            </p>
          </div>

          <div className="infoCard">
            <div className="infoBox">
              <div className="label">회사명</div>
              <div className="value">GSM자동화세차기</div>
              <div className="label gapTop">사업분야</div>
              <div className="value">자동세차기 제조 · 판매 · 시공 · 유지관리</div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="section sectionGray">
        <div className="container">
          <div className="eyebrow">Products</div>
          <h2 className="sectionTitle">주요 제품 소개</h2>

          <div className="productGrid">
            {products.map((product) => (
              <article key={product.title} className="productCard">
                <h3 className="productTitle">{product.title}</h3>
                <p className="productDesc">{product.desc}</p>
                <div className="featureList">
                  {product.features.map((feature) => (
                    <div key={feature} className="featureItem">
                      {feature}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2 className="sectionTitle">시공 게시판</h2>

          <div className="projectGrid">
            {projects.map((project) => (
              <article key={project.name} className="projectCard">
                <div className="projectPlaceholder">시공사례</div>
                <div className="projectBody">
                  <div className="projectTitle">시공 사례</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contactSection">
        <div className="container">
          <h2 className="sectionTitle sectionTitleWhite">문의 안내</h2>

          <div className="contactCard">
            <div className="contactLabel">문의 및 회사정보</div>
            <div className="contactText">
              TEL: 031-673-7985
              <br />
              MOBILE: 010-9021-0010
              <br />
              FAX: 031-672-2697
              <br />
              <br />
              주소: 경기도 안성시 미양면 안골길 41-22 6동
              <br />
              이메일: gsm1221@naver.com
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          © 2026 GSM자동화세차기. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}
