(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66],{8670:function(t,e,i){Promise.resolve().then(i.bind(i,1501))},6463:function(t,e,i){"use strict";var n=i(1169);i.o(n,"useRouter")&&i.d(e,{useRouter:function(){return n.useRouter}})},35:function(t,e,i){"use strict";i.d(e,{Z:function(){return g}});var n=i(6800),a=i.n(n),s=i(2265),r=i(7437);let l=["as","disabled"];function o({tagName:t,disabled:e,href:i,target:n,rel:a,role:s,onClick:r,tabIndex:l=0,type:o}){t||(t=null!=i||null!=n||null!=a?"a":"button");let c={tagName:t};if("button"===t)return[{type:o||"button",disabled:e},c];let u=n=>{var a;if(!e&&("a"!==t||(a=i)&&"#"!==a.trim())||n.preventDefault(),e){n.stopPropagation();return}null==r||r(n)};return"a"===t&&(i||(i="#"),e&&(i=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:e?void 0:l,href:i,target:"a"===t?n:void 0,"aria-disabled":e||void 0,rel:"a"===t?a:void 0,onClick:u,onKeyDown:t=>{" "===t.key&&(t.preventDefault(),u(t))}},c]}s.forwardRef((t,e)=>{let{as:i,disabled:n}=t,a=function(t,e){if(null==t)return{};var i,n,a={},s=Object.keys(t);for(n=0;n<s.length;n++)i=s[n],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,l),[s,{tagName:c}]=o(Object.assign({tagName:i,disabled:n},a));return(0,r.jsx)(c,Object.assign({},a,s,{ref:e}))}).displayName="Button";let c=s.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:u,Provider:h}=c,d=s.forwardRef((t,e)=>{let{as:i,bsPrefix:n,variant:l="primary",size:u,active:h=!1,disabled:d=!1,className:g,...f}=t,m=function(t,e){let{prefixes:i}=(0,s.useContext)(c);return t||i.btn||"btn"}(n,0),[p,{tagName:x}]=o({tagName:i,disabled:d,...f});return(0,r.jsx)(x,{...p,...f,ref:e,disabled:d,className:a()(g,m,h&&"active",l&&"".concat(m,"-").concat(l),u&&"".concat(m,"-").concat(u),f.href&&d&&"disabled")})});d.displayName="Button";var g=d},1501:function(t,e,i){"use strict";i.r(e);var n=i(7437),a=i(2265),s=i(7073);i(9595);var r=i(5634),l=i(35),o=i(5606),c=i(4379),u=i.n(c),h=i(2258),d=i(495);class g extends a.Component{componentDidMount(){this.setIdState()}render(){return(0,n.jsx)(s.Z,{body:(0,n.jsxs)("div",{children:[this.state.error&&(0,n.jsxs)("div",{className:"dichthuat-showError",children:['Lỗi: "',this.state.error.message,'"']}),(0,n.jsxs)("div",{className:"dichthuat-container row row-cols-6 row-cols-xxxxxl-5 row-cols-xxxxl-4 row-cols-xl-3 row-cols-lg-2 gy-6 gx-xxl-2 gx-xl-3 gx-lg-2",children:[(0,n.jsx)(h.Z,{title:"Ti\xeau đề bộ dịch thuật mới",name:"dichthuat",placeHolder:"Nhập ti\xeau đề bộ dịch thuật mới",onChangeHandle:t=>this.onChangeHandle(t,"dichthuat")}),(0,n.jsx)(h.Z,{title:"Ti\xeau đề tiếng Trung của dịch thuật mới",name:"tieudeTiengTrung",placeHolder:"Nhập ti\xeau đề tiếng Trung của bộ dịch thuật mới",onChangeHandle:t=>this.onChangeHandle(t,"tieudeTiengTrung")}),(0,n.jsx)(h.Z,{title:"T\xe1c giả",name:"author",placeHolder:"Nhập t\xean t\xe1c giả",onChangeHandle:t=>this.onChangeHandle(t,"author")}),(0,n.jsx)(h.Z,{title:"Đường link ảnh của t\xe1c giả",name:"imgAuthor",placeHolder:"Nhập link ảnh của t\xe1c giả",onChangeHandle:t=>this.onChangeHandle(t,"imgAuthor")}),(0,n.jsx)(h.Z,{title:"Đường link trang chủ của t\xe1c giả",name:"webLink",placeHolder:"Nhập đường link trang chủ của t\xe1c giả",onChangeHandle:t=>this.onChangeHandle(t,"webLink")}),(0,n.jsx)(h.Z,{title:"Đường link của một b\xe0i học trong bộ dịch",name:"youtubeLinkToGetImg",placeHolder:"Nhập đường link của một b\xe0i học trong bộ dịch",onChangeHandle:t=>this.onChangeHandle(t,"youtubeLinkToGetImg")})]}),(0,n.jsxs)("div",{className:"dichthuatAdd-View",children:[(0,n.jsx)(r.Z,{webLink:this.state.webLink?this.state.webLink:null,tieudeTiengTrung:this.state.tieudeTiengTrung?this.state.tieudeTiengTrung:null,author:this.state.author?this.state.author:null,imgAuthor:this.state.imgAuthor?this.state.imgAuthor:null,link:"#",title:this.state.dichthuat?this.state.dichthuat:null,img:this.state.id?"https://img.youtube.com/vi/".concat(this.state.id,"/sddefault.jpg"):null,alt:"IMG Link"}),(0,n.jsx)("div",{className:"col-2 dichthuatAdd-button",children:(0,n.jsxs)(l.Z,{variant:"info",onClick:this.updateBoDichMoi,children:["Add",(0,n.jsx)("i",{className:"fa-solid fa-calendar-plus"})]})})]})]})})}constructor(t){super(t),this.onChangeHandle=(t,e)=>{if(this.setState({[e]:t.target.value}),"youtubeLinkToGetImg"===e){let e=this.getYoutubeId(t.target.value);this.setState({id:e}),console.log(e)}if("dichthuat"===e){let e=(0,d.Z)(t.target.value);this.setState({dichthuat_slug:e})}},this.getYoutubeId=t=>{var e=t.split("=");return e[1]?e[1].split("&")[0]:"null"},this.setIdState=()=>{if(this.state.youtubeLinkToGetImg){let t=this.getYoutubeId(this.state.youtubeLinkToGetImg);this.setState({id:t}),console.log(t)}},this.updateBoDichMoi=async()=>{let{dichthuat:t,dichthuat_slug:e,youtubeLinkToGetImg:i,webLink:n,tieudeTiengTrung:a,author:s,imgAuthor:r,id:l}=this.state,c="/users/dichthuat/".concat(e);try{if(!this.isNhapDayDuText()||await this.isTieuDeExistInFirebase())return;var h=await (0,o.Pf)("".concat(c,"/tieude"),t),d=await (0,o.Pf)("".concat(c,"/link"),i),g=await (0,o.Pf)("".concat(c,"/weblink"),n),f=await (0,o.Pf)("".concat(c,"/tieudeTiengTrung"),a),m=await (0,o.Pf)("".concat(c,"/author"),s),p=await (0,o.Pf)("".concat(c,"/imgAuthor"),r),x=await (0,o.Pf)("".concat(c,"/id"),l);if(d&&g&&f&&m&&p&&x&&h)u().fire("Tạo b\xe0i mới th\xe0nh c\xf4ng","","success"),this.setState({nav:!0});else{let t={message:"Tạo b\xe0i mới thất bại!"};u().fire(t.message,"","info"),this.setState({error:t})}}catch(e){console.error("Lỗi tạo b\xe0i mới:",e);let t={message:"Lỗi tạo b\xe0i mới: "+e.message};u().fire(e.message,"","info"),this.setState({error:t})}},this.isTieuDeExistInFirebase=async()=>{let{dichthuat_slug:t,dichthuat:e}=this.state;if(!await this.getInfo("/users/dichthuat/".concat(t)))return!1;{let t={message:'T\xean bộ dịch thuật "'.concat(e,'" đ\xe3 tồn tại, vui l\xf2ng tạo bộ dịch thuật kh\xe1c')};return u().fire(t.message,"","info"),this.setState({error:t}),!0}},this.isNhapDayDuText=()=>{let{dichthuat:t,youtubeLinkToGetImg:e,webLink:i,tieudeTiengTrung:n,author:a,imgAuthor:s,id:r}=this.state;if(t&&i&&a&&r&&s&&n&&e){if(this.isValidDichThuat(t)){if(this.isValidYoutubeLink(e))return!0;{let t={message:'Đường link YouTube kh\xf4ng hợp lệ "'.concat(e,'"')};u().fire(t.message,"","info"),this.setState({error:t})}}else{let e={message:'T\xean b\xe0i dịch "'.concat(t,"\" kh\xf4ng được chứa c\xe1c k\xfd tự: '.', '#', '$', '[', hoặc ']'")};u().fire(e.message,"","info"),this.setState({error:e})}}else{let t={message:"Vui l\xf2ng điền đầy đủ th\xf4ng tin v\xe0 thử lại"};return u().fire(t.message,"","info"),this.setState({error:t}),!1}},this.isValidYoutubeLink=t=>/^(https?:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$/.test(t),this.isValidDichThuat=t=>!/[.#$[\]]/.test(t),this.getInfo=async t=>{try{let e=await (0,o.F3)(t);if(null!==e)return console.log("data return:",e),e}catch(t){throw t}},this.state={dichthuat:null,dichthuat_slug:null,youtubeLinkToGetImg:null,webLink:null,tieudeTiengTrung:null,author:null,imgAuthor:null,id:null,error:null,nav:!1}}}e.default=g},2258:function(t,e,i){"use strict";var n=i(7437);i(2265),e.Z=function(t){return(0,n.jsxs)("div",{className:"form-group dichthuat-formInput",children:[(0,n.jsx)("label",{htmlFor:"",children:t.title}),(0,n.jsx)("input",{type:"text",className:"form-control",name:t.name,id:"","aria-describedby":"helpId",placeholder:t.placeHolder,onChange:t.onChangeHandle,value:t.value})]})}},5634:function(t,e,i){"use strict";var n=i(7437),a=i(7138),s=i(2265);i(5103);var r=i(6648);let l=s.memo(t=>(0,n.jsx)("div",{className:"col-4",style:{marginTop:"20px"},children:(0,n.jsxs)("div",{className:"itemCard-container",onClick:t.cardClick,onMouseEnter:t.cardClick,children:[(0,n.jsx)(a.default,{className:"itemCard-title",href:t.link,target:"_self",onClick:t.cardClick,children:(0,n.jsx)(r.default,{src:t.img||"https://www.lifedna.com.tw/upload-files/motto/pic/1291771141.jpg?v=2016",alt:"Item Image",width:500,height:500})}),(0,n.jsxs)("div",{className:"itemCard-content",children:[(0,n.jsx)("h3",{className:"itemCard-content-title",children:t.title}),(0,n.jsx)("div",{className:"itemCard-content-description",children:(0,n.jsx)("span",{children:t.tieudeTiengTrung})}),(0,n.jsx)("div",{className:"itemCard-content-author",children:(0,n.jsxs)("div",{className:"itemCard-content-author-container",children:[(0,n.jsx)(r.default,{src:t.imgAuthor||"https://yt3.googleusercontent.com/ytc/AIdro_nevnvE7nYPdcdQLMZgoxJsx1g62U2soHKg3PAG3rQE0g=s160-c-k-c0x00ffffff-no-rj",alt:"Author Image",width:30,height:30}),(0,n.jsx)("a",{href:t.webLink,target:"_blank",children:(0,n.jsx)("h4",{children:t.author})})]})})]})]})}));l.displayName="ItemCard",e.Z=l},495:function(t,e){"use strict";e.Z=function(t){return t=(t="@"+(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.toLowerCase()).replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi,"a")).replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi,"e")).replace(/i|í|ì|ỉ|ĩ|ị/gi,"i")).replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi,"o")).replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi,"u")).replace(/ý|ỳ|ỷ|ỹ|ỵ/gi,"y")).replace(/đ/gi,"d")).replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,"")).replace(/ /gi,"-")).replace(/\-\-\-\-\-/gi,"-")).replace(/\-\-\-\-/gi,"-")).replace(/\-\-\-/gi,"-")).replace(/\-\-/gi,"-"))+"@").replace(/\@\-|\-\@|\@/gi,"")}},9595:function(){},5103:function(){},6800:function(t,e){var i;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t="",e=0;e<arguments.length;e++){var i=arguments[e];i&&(t=s(t,function(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return a.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var i in t)n.call(t,i)&&t[i]&&(e=s(e,i));return e}(i)))}return t}function s(t,e){return e?t?t+" "+e:t+e:t}t.exports?(a.default=a,t.exports=a):void 0!==(i=(function(){return a}).apply(e,[]))&&(t.exports=i)}()}},function(t){t.O(0,[555,621,777,461,481,138,885,648,574,971,23,744],function(){return t(t.s=8670)}),_N_E=t.O()}]);