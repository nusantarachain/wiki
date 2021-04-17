/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const Container = require("react-bootstrap/Container");
const Row = require("react-bootstrap/Row");
const Col = require("react-bootstrap/Col");
const Button = require("react-bootstrap/Button");

class FooterNavColumn extends React.Component {
  render() {
    return (
      <Col xs={6} md={3} className="mb-3 mb-md-0">
        <h5 className="text-white">{this.props.headline}</h5>
        <ul className="list-unstyled">{this.props.children}</ul>
      </Col>
    );
  }
}

class FooterLink extends React.Component {
  render() {
    return (
      <li className="py-0 py-md-1">
        <a href={this.props.href} className="text-white" target="_blank" rel="noopener noreferrer">
          {this.props.content}
        </a>
      </li>
    );
  }
}

class FooterSocialColumn extends React.Component {
  render() {
    const Social = () => (
      <ul className="list-social-links justify-content-around">
        <li className="text-white">
          <a href="https://twitter.com/nusantarachain" target="_blank" rel="noopener noreferrer">
            <i className="socicon-twitter"></i>
          </a>
        </li>
        <li className="text-white">
          <a
            href="https://github.com/nusantarachain/nuchain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="socicon-github"></i>
          </a>
        </li>
        <li className="text-white">
          <a
            href="https://www.youtube.com/channel/UCB7PbjuZLEba_znc7mEGNgw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="socicon-youtube"></i>
          </a>
        </li>
      </ul>
    );

    const Newsletter = () => (
      <>
        <p className="d-block text-white">
          Subscribe to the newsletter to hear about Nuchain updates and events.
        </p>
        <Button>
          <a
            href="https://info.nuchain.network/subscribe"
            target="_blank"
            style={{ color: "white" }}
          >
            Subscribe
          </a>
        </Button>
      </>
    );

    return (
      <Col md={3} className="px-lg-0">
        <Social />
        <Newsletter />
      </Col>
    );
  }
}

class FooterLegalLink extends React.Component {
  render() {
    return (
      <li>
        <a
          href={this.props.href}
          className="text-white text-small"
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.props.content}
        </a>
      </li>
    );
  }
}

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer spacer-y-4 pb-4" id="footer">
        <Container>
          <Row className="justify-content-start">
            <FooterNavColumn headline="General">
              <FooterLink content="About" href="https://nuchain.network/about" />
              <FooterLink content="FAQ" href="https://nuchain.network/faq" />
              <FooterLink content="Contact" href="https://nuchain.network/contact" />
              <FooterLink content="Build" href="https://nuchain.network/build" />
              <FooterLink content="Careers" href="https://nuchain.network/jobs" />
            </FooterNavColumn>
            <FooterNavColumn headline="Technology">
              <FooterLink content="Technology" href="https://nuchain.network/technology" />
              <FooterLink content="Token" href="https://nuchain.network/dot-token" />
              <FooterLink content="Telemetry" href="https://telemetry.polkadot.io/" />
              <FooterLink content="Substrate" href="https://www.parity.io/substrate" />
              <FooterLink content="Whitepaper" href="https://nuchain.network/PolkaDotPaper.pdf" />
              <FooterLink
                content="Lightpaper"
                href="https://nuchain.network/Nuchain-lightpaper.pdf"
              />
            </FooterNavColumn>
            <FooterNavColumn headline="Community">
              <FooterLink content="Community" href="https://nuchain.network/community" />
              <FooterLink content="Documentation" href="http://wiki.nuchain.network/en/latest/" />
              <FooterLink content="Brand Assets" href="https://nuchain.network/brand-assets" />
              <FooterLink content="Blog" href="https://nuchain.network/blog" />
              <FooterLink content="Medium" href="https://medium.com/polkadot-network" />
            </FooterNavColumn>
            <FooterSocialColumn />
          </Row>
          <Row className="footer-legal align-items-end mt-5 pt-4">
            {this.props.config.footerIcon && (
              <Col lg={2} className="mb-2 mb-lg-0">
                <a
                  className="navbar-brand"
                  href="https://nuchain.network/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={this.props.config.baseUrl + this.props.config.footerIcon}
                    alt="Nuchain Network"
                  />
                </a>
              </Col>
            )}
            <Col lg={10}>
              <ul className="list-unstyled d-flex flex-wrap list-pipe-separator">
                <FooterLegalLink
                  content={this.props.config.copyright}
                  href="https://nuchain.network/foundation"
                />
                <FooterLegalLink content="Disclaimer" href="https://nuchain.network/disclaimer" />
                <FooterLegalLink content="Privacy" href="https://nuchain.network/privacy" />
                <li>
                  <a className="text-white text-small" href="#" id="cookie-settings">
                    Cookie Settings
                  </a>
                  <script
                    dangerouslySetInnerHTML={{
                      __html: `
                        var cookieSettings = document.getElementById('cookie-settings');
                        cookieSettings.onclick = function() {
                          return klaro.show();
                        };
                        `,
                    }}
                  />
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

module.exports = Footer;
