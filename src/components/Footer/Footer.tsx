import InstagramLogo from "../../../public/icons/InstagramLogo";
import FacebookLogo from "../../../public/icons/FacebookLogo";
import XLogo from "../../../public/icons/XLogo";
import Shop from "../Header/Shop";

const Footer = () => {
  return (
    <div className="w-full mt-8">
      <div className="bg-baseGreen text-[#EEEEEE] py-4 px-1 md:px-2">
        <div className="flex justify-between app-max-width">
          <ul className={`flex topLeftMenu`}>
            <li>
              <a
                href="https://www.facebook.com/share/14qdYwyjnX/"
                aria-label="Haru Fashion Facebook Page"
              >
                <FacebookLogo />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/officialzeaper?igsh=MXRmc3FmM2IwMHAyMg=="
                aria-label="Haru Fashion Instagram Account"
              >
                <InstagramLogo />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/officialzeaper?t=kWez4V6EaElzI38nK_NIbg&s=09"
                aria-label="Haru Fashion X Account"
              >
                <XLogo extraClass={"w-4 h-4"} />
              </a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
          </ul>
          <Shop extraClass="bg-white text-baseGreen" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
