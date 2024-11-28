import CompanyLogo from "../../../assets/images/header-logo.png";

const Footer = () => {
  return (
    <div className="bg-base-200 text-base-content p-20">
      <div className="container mx-auto">
        <footer className="footer">
          <aside>
            <img src={CompanyLogo} className="w-52" alt="company-logo" />
            <h3 className="text-black font-semibold text-xl">
              Home Lengo Industries Ltd.
            </h3>
            <p className="mt-5">Providing reliable Residents || 2002</p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
