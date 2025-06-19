const XLogo = ({ extraClass = "" }) => (
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-4 h-4 ${extraClass}`}
  >
    <path d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm0 480C132.288 480 32 379.712 32 256S132.288 32 256 32s224 100.288 224 224-100.288 224-224 224z" />
    <path d="M340.8 160.8L256 245.6 171.2 160.8 160 172l96 96-96 96 11.2 11.2L256 278.4l84.8 84.8L352 364l-96-96 96-96z" />
  </svg>
);
export default XLogo;
