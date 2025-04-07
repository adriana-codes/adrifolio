import logo from "./images/favicon-adri-portfolio.png";
import "./FooterInfo.css";

function FooterInfo() {
  return (
    <div class="FooterInfo container container-fluid px-0">
      <div class="row align-items-center">
        <div class="col-1 justify-content-start">
          <a href="/">
            <img src={logo} width="35" alt="Adri logo" type="image/x-icon" />
          </a>
        </div>
        <div class="col-11 d-inline-flex align-items-center justify-content-end socials">
          <a
            href="https://github.com/adriana-codes"
            target="_blank"
            rel="noreferrer"
            title="Github Profile"
          >
            <i class="fa-brands fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/adri-anadiaz/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn Profile"
          >
            <i class="fa-brands fa-linkedin fa-2x"></i>
          </a>
        </div>

        <div class="row">
          <div class="col text-center">
            <h6 class="mt-1">Adri(ana) Díaz - 2025 ©</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterInfo;
