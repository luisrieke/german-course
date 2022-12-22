import Script from 'next/script';

const Cookies = () => {
  return (
    <>
      <Script
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/1315d47d-d606-4f96-a103-c9afa6469781/cd.js"
        type="text/javascript"
        async
        padding-left="200px"
        padding-right="200px"
      ></Script>
    </>
  );
};

export default Cookies;
