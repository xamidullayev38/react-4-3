import React from "react";

function Footer() {
  const footerLinks = [
    {
      title: "Features",
      links: [
        "Cool stuff",
        "Random feature",
        "Team feature",
        "Stuff for developers",
        "Another one",
        "Last time",
      ],
    },
    {
      title: "Resources",
      links: [
        "Resource",
        "Resource name",
        "Another resource",
        "Final resource",
      ],
    },
    {
      title: "About",
      links: ["Team", "Locations", "Privacy", "Terms"],
    },
  ];

  return (
    <footer className="container py-5 border-top">
      <div className="row">
        <div className="col-12 col-md">
          <small className="d-block mb-3 text-muted">&copy; 2017–2018</small>
        </div>

        {footerLinks.map((section, index) => (
          <div className="col-6 col-md" key={index}>
            <h5>{section.title}</h5>
            <ul className="list-unstyled text-small">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a className="text-muted" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
