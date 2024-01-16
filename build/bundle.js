/*! For license information please see bundle.js.LICENSE.txt */
  flex: 0 0 auto;
  margin-right: 16px;
  padding-right: 16px;
`,s=i.default.div`
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 16px 0;
  width: 100%;
`;c.default=({slides:e})=>{const c=(0,r.useRef)(null),[t,a]=(0,r.useState)(0);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s,{ref:c,onScroll:()=>{if(c.current){const e=c.current.scrollLeft;a(e)}},className:"sliderWrapper",children:e.map(((e,c)=>(0,n.jsx)(o,{children:e},c)))})})}},2632:function(e,c,t){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,c,t,a){void 0===a&&(a=t);var n=Object.getOwnPropertyDescriptor(c,t);n&&!("get"in n?!c.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return c[t]}}),Object.defineProperty(e,a,n)}:function(e,c,t,a){void 0===a&&(a=t),e[a]=c[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,c){Object.defineProperty(e,"default",{enumerable:!0,value:c})}:function(e,c){e.default=c}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var c={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&a(c,e,t);return n(c,e),c},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0});const o=t(5893),s=t(7294),l=i(t(7363));t(4089);const f=(0,s.lazy)((async()=>await Promise.resolve().then((()=>r(t(8735))))));c.default=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f,{}),(0,o.jsx)(l.default,{})]})},2629:function(e,c,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0});const n=t(5893),r=a(t(7294)),i=a(t(745)),o=t(9818),s=a(t(2632)),l=document.getElementById("root");null!=l?i.default.createRoot(l).render((0,n.jsx)(r.default.StrictMode,{children:(0,n.jsx)(o.BrowserRouter,{children:(0,n.jsx)(s.default,{})})})):console.error("Element with ID 'root' not found in the document.")},8121:function(e,c,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.OutlinedButton=c.FullWidthButton=c.SharpButton=c.SmallButton=c.Button=void 0;const n=a(t(3133)),r=t(9142);c.Button=n.default.button`
  align-items: center;
  background-color: ${e=>e.background};
  border: none;
  border-radius: 8px;
  color: ${e=>e.color?e.color:r.blackishGreen};
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 48px;
  justify-content: center;
  padding: 3px 24px;
  flex: 1 0 0;

  &:hover {
    background: ${e=>e.hovered};
    color: ${e=>e.hovered_color};
    cursor: pointer;
  }
`,c.SmallButton=(0,n.default)(c.Button)`
  flex: 0 0 0;

  @media (max-width: 1035px) {
    flex: 1 0 0;
  }
`,c.SharpButton=(0,n.default)(c.Button)`
  flex-direction: row;
  flex-wrap: nowrap;
  border-radius: 4px;
  gap: 10px;
  padding: 3px 16px;
  max-width: 13%;

  @media (max-width: 1350px) {
    max-width: 25%;
  }

  @media (max-width: 850px) {
    max-width: 45%;
  }
`,c.FullWidthButton=(0,n.default)(c.SharpButton)`
  min-width: 100%;
`,c.OutlinedButton=(0,n.default)(c.SharpButton)`
  border: 1px solid ${e=>e.background};
  background: transparent;

  &:hover {
    background: ${e=>e.background};
  }
`},8236:function(e,c,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.FooterDiv=c.FooterImage=c.HeaderDiv=void 0;const n=a(t(3133));c.HeaderDiv=n.default.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url('/assets/landing_background.png');
  background-position: center;
  background-size: cover;
  border: none;
  border-radius: 24px;
  height: 599px;
  margin: 30px;
  text-align: center;

  @media (max-width: 500px) {
    border-radius: 0 0 24px 24px;
    margin: 0;
    padding: 10px 30px;
  }
`,c.FooterImage=n.default.div`
  width: 400px;
  height: 305px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;

  @media (max-width: 500px) {
    display: none;
  }
`,c.FooterDiv=n.default.footer`
  background: transparent;
`},2349:function(e,c,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.MenuIcon=void 0;const n=t(982),r=a(t(3133)),i=t(9142);c.MenuIcon=(0,r.default)(n.FontAwesomeIcon)`
    color: ${i.white};
`},8818:function(e,c,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.IconAbsolute=c.SmallTail=c.FooterIcon=c.InputIcon=c.XSIcon=c.SmallIcon=void 0;const n=a(t(3133));c.SmallIcon=n.default.img`
  height: 24px;
  padding-right: 4px;
  width: 24px;
`,c.XSIcon=(0,n.default)(c.SmallIcon)`
  height: 16px;
  width: 16px;
`,c.InputIcon=(0,n.default)(c.SmallIcon)`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(25%, 90%);
`,c.FooterIcon=n.default.img`
  height: 20px;
  width: 20px;
  padding-right: 12px;
`,c.SmallTail=n.default.img`
  border-radius: 8px;
  height: 90px;
  margin-right: 16px;
  width: 90px;
`,c.IconAbsolute=n.default.img`
  position: absolute;
  top: ${e=>e.top};
  left: ${e=>e.left};
`},4514:function(e,c,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.DateInput=c.PrimaryInput=c.DescribedInput=void 0;const n=a(t(3133));c.DescribedInput=n.default.input`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid black;
  border-radius: 4px;
  padding: 15px 36px 15px 46px;

  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin: 10px 0;

  @media (max-width: 800px) {
    padding: 15px 5px 15px 36px;
  }
`,c.PrimaryInput=n.default.input`
  border-radius: 4px 4px 0px 0px;
  border: none;
  height: 40px;
  flex: 1 0 0;

  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;

  display: flex;
  padding: 8px 60px 8px 16px;
  align-items: center;
  align-self: stretch;
`,c.DateInput=n.default.input`
  border: 1px solid black;
  border-radius: 4px;
  padding: 14px 16px;

  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin: 10px 0;
`},1316:function(e,c,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.PrimaryLink=c.ButtonLink=void 0;const n=t(9818),r=a(t(3133)),i=t(9142);c.ButtonLink=(0,r.default)(n.Link)`
  color: ${e=>e.color?e.color:i.blackishGreen};
  padding-right: 32px;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${e=>e.hovered_color};
    cursor: pointer;
  }
`,c.PrimaryLink=(0,r.default)(n.Link)`
  &:hover {
    color: ${e=>e.hovered_color};
    cursor: pointer;
  }
`},6726:function(e,c,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.UnList=c.ListHeadline=c.ListItem=void 0;const n=a(t(3133)),r=t(9142);c.ListItem=n.default.li`
  color: ${r.blackishGreen};

  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  list-style: none;

  margin-bottom: 12px;

  opacity: 0.7;
`,c.ListHeadline=(0,n.default)(c.ListItem)`
  font-size: 16px;
  font-weight: 700;
  opacity: 1;
  margin-bottom: 16px;
`,c.UnList=n.default.ul`
  @media (max-width: 1100px) {
    width: 30%;
  }

  @media (max-width: 800px) {
    width: 25%;
  }

  @media (max-width: 600px) {
    width: 40%;
  }

  @media (max-width: 500px) {
    width: 80%;
  }
`},7872:function(e,c,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.Nav=void 0;const n=a(t(3133));c.Nav=n.default.nav`
  align-items: center;
  background: transparent;
  display: flex;
  justify-content: space-between;
  padding: 24px 32px;

  @media(max-width: 550px) {
    flex-wrap: nowrap;
  }
`},7929:function(e,c,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.XSTail=c.BigTail=c.SmallTail=c.MediumTail=c.MarginSection=c.FirstSection=c.FooterSubscribeSection=c.HeaderSearchSection=c.ColumnSection=c.FullVerticalSection=c.HorizontalAbsolute=c.VerticalSection=c.FullWidthEndSection=c.FullWidthHorizontalSection=c.HorizontalSection=void 0;const n=t(6431),r=a(t(3133)),i=t(9142);c.HorizontalSection=r.default.section`
  align-items: center;
  display: flex;
  padding: 0;

  @media (max-width: 710px) {
    justify-content: ${e=>e.justify};
    width: 100%;
  }
`,c.FullWidthHorizontalSection=(0,r.default)(c.HorizontalSection)`
  align-items: stretch;
  flex-wrap: ${e=>e.wrap?e.wrap:"wrap"};
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 16px;
  width: 100%;
  overflow: ${e=>e.overflow};

  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }

  @media (max-width: 500px) {
    align-items: center;
  }
`,c.FullWidthEndSection=(0,r.default)(c.HorizontalSection)`
  justify-content: flex-end;
  gap: 24px;
  align-self: stretch;

  @media (max-width: 700px) {
    justify-content: space-between;
  }
`,c.VerticalSection=(0,r.default)(n.motion.section)`
  align-self: ${e=>e.align?e.align:"stretch"};
  background: ${e=>e.background};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: ${e=>e.height};
  justify-content: ${e=>e.justify};
  overflow: ${e=>e.overflow};
  position: relative;

  @media (max-width: 1250px) {
    width: ${e=>e.width?e.width:"30%"};
  }

  @media (max-width: 1000px) {
    width: ${e=>e.width?e.width:"45%"};
  }

  @media (max-width: 700px) {
    width: ${e=>e.width?e.width:"95%"};
  }
`,c.HorizontalAbsolute=(0,r.default)(c.VerticalSection)`
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -353px;
  padding: 241px 104px 64px 104px;
  position: relative;
  z-index: 0;

  @media (max-width: 1250px) {
    flex-direction: row;
    gap: 30px;
  }

  @media (max-width: 600px) {
    padding: 281px 104px 64px 104px;
  }
`,c.FullVerticalSection=(0,r.default)(c.VerticalSection)`
  justify-content: end;
  gap: 24px;
  height: 100%;
  width: 100%;

  @media (max-width: 1000px) {
    width: ${e=>e.width};
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`,c.ColumnSection=r.default.section`
  margin-top: 80px;
`,c.HeaderSearchSection=r.default.section`
  background-color: ${e=>e.background?e.background:i.white};
  margin: 150px 74px;
  border-radius: 16px;
  box-shadow: 0px 4px 16px 0px rgba(141, 211, 187, 0.15);
  display: flex;
  padding: 16px 32px 32px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  @media (max-width: 600px) {
    margin: 100px 34px;
    padding: 16px 10px;
  }

  @media (max-width: 500px) {
    margin: 100px 10px;
  }
`,c.FooterSubscribeSection=(0,r.default)(c.HeaderSearchSection)`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: end;
  padding-bottom: 0;
  position: relative;
  z-index: 1;

  @media (max-width: 1100px) {
    justify-content: space-between;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`,c.FirstSection=r.default.section`
  margin: 220px 104px 80px 104px;

  @media (max-width: 1250px) {
    margin-top: 350px;
  }

  @media (max-width: 1000px) {
    margin-top: 450px;
  }

  @media (max-width: 700px) {
    margin-top: 500px;
  }

  @media (max-width: 600px) {
    margin: 500px 80px 80px 80px;
  }

  @media (max-width: 600px) {
    margin: 500px 40px 80px 40px;
  }
`,c.MarginSection=r.default.section`
  margin: 80px 104px;

  @media (max-width: 600px) {
    margin: 80px 40px 80px 40px;
  }
`,c.MediumTail=(0,r.default)(n.motion.section)`
  border-radius: 12px;
  background: ${i.mintGreen};
  background-image: url(${e=>e.background});
  background-position: center;
  background-size: cover;
  width: 250px;
  height: 420px;
  display: flex;
  align-items: end;
  padding: 24px;
  margin: 32px 0;
`,c.SmallTail=(0,r.default)(c.MediumTail)`
  align-self: end;
  height: 200px;
  margin: 0;
  padding: 0;
  width: 95%;

  @media (max-width: 1000px) {
    width: 100%;
  }
`,c.BigTail=(0,r.default)(c.MediumTail)`
  box-sizing: border-box;
  height: 424px;
  width: 100%;
  padding: 24px;
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 400px) {
    height: 530px;
  }
`,c.XSTail=r.default.section`
  background: ${i.white};
  border-radius: 8px;

  display: flex;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  height: 62px;

  @media (max-width: 400px) {
    height: 42px;
    flex-direction: row;
    padding: 0;
    width: 100%;
    order: -1;
  }
`},9503:function(e,c,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.Option=c.DescribedSelect=void 0;const n=a(t(3133));c.DescribedSelect=n.default.select`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  border: 1px solid black;
  border-radius: 4px;
  padding: 14px 26px 14px 46px;

  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin: 10px 0;

  @media (max-width: 800px) {
    padding: 15px 5px 15px 36px;
  }
`,c.Option=n.default.option`
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`},7214:function(e,c,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.BigHeadlineText=c.InputDescription=c.MediumHedlineText=c.SmallHeadlineText=c.HeadlineText=c.SmallDescription=c.BigText=c.MediumText=c.LightText=c.Text=void 0;const n=t(6431),r=a(t(3133)),i=t(9142);c.Text=(0,r.default)(n.motion.p)`
  color: ${e=>e.color};
  font-family: ${i.primaryFont};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`,c.LightText=(0,r.default)(c.Text)`
  font-weight: 400;
`,c.MediumText=(0,r.default)(c.Text)`
  font-size: 16px;
  margin-bottom: 8px;
`,c.BigText=(0,r.default)(c.Text)`
  font-size: 24px;
`,c.SmallDescription=(0,r.default)(c.Text)`
  font-size: 12px;
  font-weight: 400;
`,c.HeadlineText=(0,r.default)(c.Text)`
  text-align: ${e=>e.align?e.align:"center"};
  font-family: ${i.primaryFont};
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 2px;
  width: ${e=>e.width};

  @media (max-width: 700px) {
    font-size: 35px;
  }
  @media (max-width: 500px) {
    font-size: 28px;
  }
`,c.SmallHeadlineText=(0,r.default)(c.Text)`
  font-size: 20px;
`,c.MediumHedlineText=(0,r.default)(c.Text)`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 32px;

  @media (max-width: 700px) {
    font-size: 25px;
  }
`,c.InputDescription=(0,r.default)(c.Text)`
  position: absolute;
  padding: 5px;
  top: 0;
  left: 0;
  transform: translate(20%, -30%);
  background: ${i.white};
`,c.BigHeadlineText=(0,r.default)(c.HeadlineText)`
  font-size: 80px;
  text-transform: uppercase;

  @media (max-width: 700px) {
    font-size: 60px;
  }
`},9142:(e,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.primaryFont=c.lightMint=c.hoveredMintGreen=c.mintGreen=c.blackishGreen=c.white=c.black=void 0,c.black="#000000",c.white="#FFFFFF",c.blackishGreen="#112211",c.mintGreen="#8DD3BB",c.hoveredMintGreen="#9BE0C8",c.lightMint="#CDEAE1",c.primaryFont='"Montserrat", sans-serif'}},a={};function n(e){var c=a[e];if(void 0!==c)return c.exports;var r=a[e]={id:e,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var c=e&&e.__esModule?()=>e.default:()=>e;return n.d(c,{a:c}),c},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(t,a){if(1&a&&(t=this(t)),8&a)return t;if("object"==typeof t&&t){if(4&a&&t.__esModule)return t;if(16&a&&"function"==typeof t.then)return t}var r=Object.create(null);n.r(r);var i={};e=e||[null,c({}),c([]),c(c)];for(var o=2&a&&t;"object"==typeof o&&!~e.indexOf(o);o=c(o))Object.getOwnPropertyNames(o).forEach((e=>i[e]=()=>t[e]));return i.default=()=>t,n.d(r,i),r},n.d=(e,c)=>{for(var t in c)n.o(c,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:c[t]})},n.o=(e,c)=>Object.prototype.hasOwnProperty.call(e,c),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,n(2629)})();