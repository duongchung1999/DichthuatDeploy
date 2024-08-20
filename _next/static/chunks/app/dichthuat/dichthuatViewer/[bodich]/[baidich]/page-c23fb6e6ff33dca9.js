(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[794],{923:function(i,e,t){Promise.resolve().then(t.bind(t,3281))},1409:function(i,e,t){"use strict";function a(i){let{src:e,width:t,quality:a}=i;return"".concat(["f_auto","c_limit","w_".concat(t),"q_".concat(a||"auto")].join(",")).concat(e)}t.r(e),t.d(e,{default:function(){return a}})},3281:function(i,e,t){"use strict";t.d(e,{default:function(){return p}});var a=t(7437),n=t(2265),c=t(7073),s=t(35),l=t(4379),o=t.n(l),r=t(5606),h=t(8833);t(4819);var d=t(2258),u=t(9768),g=t(8472),m=t(495);class v extends n.Component{componentDidMount(){this.loadLocalData()}render(){return(0,a.jsxs)("div",{className:"col-6",children:[this.state.error&&(0,a.jsxs)("div",{className:"dichthuat-showError",children:['Lỗi: "',this.state.error.message,'"']}),(0,a.jsx)(s.Z,{variant:"info",onClick:this.updateTumoi,children:"Tạo từ mới"}),(0,a.jsx)(s.Z,{variant:"danger",onClick:this.Search,children:"Search"}),(0,a.jsx)(d.Z,{title:"Từ mới",name:"tumoi",placeHolder:"Nhập từ mới",value:this.state.tumoi,onChangeHandle:i=>this.onChangeHandleTuMoi(i,"tumoi")}),(0,a.jsx)(d.Z,{title:"\xc2m H\xe1n Việt",name:"hanviet",placeHolder:"Nhập \xe2m H\xe1n Việt",value:this.state.hanviet,onChangeHandle:i=>this.onChangeHandleTuMoi(i,"hanviet")}),(0,a.jsx)(d.Z,{title:"Pinyin",name:"pinyin",placeHolder:"Nhập pinyin",value:this.state.pinyin,onChangeHandle:i=>this.onChangeHandleTuMoi(i,"pinyin")}),this.state.nghiaList.map((i,e)=>(0,a.jsxs)("div",{className:"nghiaCuaTu card border-primary",children:[(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsx)(d.Z,{title:"Nghĩa ".concat(e+1),name:"nghia",placeHolder:"Nhập nghĩa của từ",value:i.nghia,onChangeHandle:i=>this.onChangeHandle(i,"nghia",e)}),i.vidus.map((i,t)=>(0,a.jsx)("div",{className:"viduCuaTu card border-primary",children:(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsx)(d.Z,{title:"V\xed dụ ".concat(t+1),name:"vidu",placeHolder:"Nhập V\xed dụ",value:i.vidu,onChangeHandle:i=>this.onChangeHandle(i,"vidu",e,t)}),(0,a.jsx)(d.Z,{title:"\xdd nghĩa v\xed dụ ".concat(t+1),name:"nghiaVidu",placeHolder:"Nhập nghĩa của v\xed dụ",value:i.nghiaVidu,onChangeHandle:i=>this.onChangeHandle(i,"nghiaVidu",e,t)}),(0,a.jsx)(d.Z,{title:"pinyin v\xed dụ ".concat(t+1),name:"pinyinVidu",placeHolder:"Nhập nghĩa của v\xed dụ",value:i.pinyinVidu,onChangeHandle:i=>this.onChangeHandle(i,"pinyinVidu",e,t)}),(0,a.jsx)(s.Z,{variant:"warning",onClick:()=>this.removeVidu(e,t),children:"X\xf3a v\xed dụ n\xe0y"})]})},t)),(0,a.jsx)(s.Z,{variant:"info",onClick:()=>this.addVidu(e),children:"Th\xeam v\xed dụ kh\xe1c"})]}),(0,a.jsx)(s.Z,{variant:"danger",onClick:()=>this.removeNghia(e),children:"X\xf3a nghĩa"})]},e)),(0,a.jsx)(s.Z,{variant:"info",onClick:this.addNghia,style:{width:"100%"},children:"Th\xeam nghĩa kh\xe1c"}),this.state.loading?(0,a.jsx)(u.Z,{}):null]})}constructor(i){super(i),this.onChangeHandleTuMoi=(i,e)=>{this.setState({[e]:i.target.value})},this.onChangeHandle=(i,e,t,a)=>{let n=this.state.nghiaList.slice();void 0!==a?n[t].vidus[a][e]=i.target.value:n[t][e]=i.target.value,this.setState({nghiaList:n})},this.updateTumoi=async()=>{this.setState({loading:!0});let{tumoi:i,tumoiFbPath:e,userTuMoiPath:t,nghiaList:a,hanviet:n,pinyin:c}=this.state;try{if(!this.isNhapDayDuText())return;await this.updateTumoiAtPath(t,i,a,n,c),await this.updateTumoiAtPath(e,i,a,n,c),o().fire("Tạo b\xe0i mới th\xe0nh c\xf4ng","","success"),this.setState({nav:!0}),this.props.getData()}catch(i){console.error("Lỗi tạo từ mới:",i),o().fire("Lỗi tạo từ mới: "+i.message,"","info"),this.setState({error:{message:"Lỗi tạo từ mới: "+i.message}})}finally{this.setState({loading:!1})}},this.updateTumoiAtPath=async(i,e,t,a,n)=>{try{if(a){let t="".concat(i,"/").concat(e,"/hanviet"),c="".concat(i,"/").concat(e,"/pinyin");await (0,r.Pf)(t,a),n&&await (0,r.Pf)(c,n)}for(let a=0;a<t.length;a++){let n=t[a],c="".concat(i,"/").concat(e,"/nghia/").concat((0,m.Z)(n.nghia),"/pinyin"),s="".concat(i,"/").concat(e,"/nghia/").concat((0,m.Z)(n.nghia),"/nghia");console.log(c),await (0,r.Pf)(s,n.nghia);for(let t=0;t<n.vidus.length;t++){let a=n.vidus[t],c="".concat(i,"/").concat(e,"/nghia/").concat((0,m.Z)(n.nghia),"/vidu/").concat((0,m.Z)(a.vidu),"/nghia"),s="".concat(i,"/").concat(e,"/nghia/").concat((0,m.Z)(n.nghia),"/vidu/").concat((0,m.Z)(a.vidu),"/pinyin"),l="".concat(i,"/").concat(e,"/nghia/").concat((0,m.Z)(n.nghia),"/vidu/").concat((0,m.Z)(a.vidu),"/vidu");console.log(l),console.log(s),await (0,r.Pf)(c,a.nghiaVidu),await (0,r.Pf)(s,a.pinyinVidu),await (0,r.Pf)(l,a.vidu)}}}catch(e){throw console.error("Lỗi khi cập nhật từ mới tại đường dẫn:",i,e),e}},this.loadLocalData=()=>{let i=localStorage.getItem("dichthuat"),e=localStorage.getItem("video"),t=localStorage.getItem("user"),a="/users/dichthuat/".concat(i,"/listBaihoc/").concat(e),n="/users/tumoi/personal/".concat(t),c="".concat(a,"/").concat(t,"/tumoi");this.setState({userTuMoiPath:c,tumoiFbPath:n})},this.isNhapDayDuText=()=>{let{tumoi:i,nghiaList:e}=this.state;for(let t=0;t<e.length;t++){let a=e[t];if(!i||!a.nghia)return o().fire("Vui l\xf2ng điền đầy đủ th\xf4ng tin v\xe0 thử lại","","info"),this.setState({error:{message:"Vui l\xf2ng điền đầy đủ th\xf4ng tin v\xe0 thử lại"}}),!1;for(let i=0;i<a.vidus.length;i++){let e=a.vidus[i];if(!e.vidu||!e.nghiaVidu)return o().fire("Vui l\xf2ng điền đầy đủ th\xf4ng tin v\xe0 thử lại","","info"),this.setState({error:{message:"Vui l\xf2ng điền đầy đủ th\xf4ng tin v\xe0 thử lại"}}),!1;if(!this.isValidDichThuat(e.vidu))return o().fire("V\xed dụ kh\xf4ng được chứa c\xe1c k\xfd tự: . # $ [ ]","","info"),this.setState({error:{message:"V\xed dụ kh\xf4ng được chứa c\xe1c k\xfd tự: . # $ [ ]"}}),!1}}return!0},this.isValidDichThuat=i=>!/[.#$[\]]/.test(i),this.addNghia=()=>{this.setState(i=>({nghiaList:[...i.nghiaList,{nghia:"",pinyin:"",vidus:[{vidu:"",nghiaVidu:"",pinyinVidu:""}]}]}))},this.removeNghia=i=>{this.setState(e=>{let t=e.nghiaList.slice();return t.splice(i,1),{nghiaList:t}})},this.addVidu=i=>{let e=this.state.nghiaList.slice();e[i].vidus.push({vidu:"",nghiaVidu:"",pinyinVidu:""}),this.setState({nghiaList:e})},this.removeLastVidu=i=>{let e=this.state.nghiaList.slice();e[i].vidus.length>1&&e[i].vidus.pop(),this.setState({nghiaList:e})},this.removeVidu=(i,e)=>{let t=this.state.nghiaList.slice();t[i].vidus.splice(e,1),this.setState({nghiaList:t})},this.Search=async()=>{let{tumoi:i}=this.state,e=encodeURIComponent(i);try{this.setState({loading:!0});let i=await g.Z.get("https://api.hanzii.net/api/search/vi/".concat(e,"?type=word&page=1&limit=50"));if(i.data.found){let e=i.data.result[0].content;console.log(i.data.result);let t=[];e.forEach(i=>{t=t.concat(i.means)});let a=i.data.result[0].cn_vi,n=i.data.result[0].pinyin,c=t.map(i=>({nghia:i.mean,vidus:i.examples.map(i=>({vidu:i.e,pinyinVidu:i.p,nghiaVidu:i.m}))}));this.setState({nghiaList:c,hanviet:a,pinyin:n})}}catch(i){console.error("Lỗi khi t\xecm kiếm:",i),o().fire("Lỗi khi t\xecm kiếm: "+i.message,"","info"),this.setState({error:{message:"Lỗi khi t\xecm kiếm: "+i.message}})}finally{this.setState({loading:!1})}},this.state={dichthuat:null,error:null,nav:!1,userTuMoiPath:null,nghiaList:[{nghia:"",vidus:[{vidu:"",nghiaVidu:"",pinyinVidu:""}]}],loading:!1,tumoi:"",hanviet:""}}}function p(i){let{bodich:e,baidich:t}=i,[l,d]=(0,n.useState)({dichthuat:null,youtubeLink:null,webLink:null,tieude:null,tieudeTiengTrung:null,author:null,imgAuthor:null,id:null,error:null,nav:!1,tuMois:{},tuMoiNghias:{},tuMoiNghiaGets:{},tuMoiPinyins:{},tumoiViduGets:{},tuMoiVidus:{},tuMoiViduDichs:{},tuMoiViduPinyins:{},hanviets:{},baiDich:null}),[g,m]=(0,n.useState)(!0),[p,y]=(0,n.useState)(!1),[f,x]=(0,n.useState)({}),[k,j]=(0,n.useState)({});console.log(e,t),(0,n.useEffect)(()=>{w()},[]);let N=async()=>{m(!0);let i=localStorage.getItem("user"),e=localStorage.getItem("name"),a=localStorage.getItem("userImage"),n="/users/dashboard/".concat(i,"/").concat(t),{tieude:c,baiDich:s,youtubeLink:h,webLink:u,tieudeTiengTrung:g,author:v,imgAuthor:p,embedLink:y}=l,f=new Date().toISOString();try{let i=L(h);await Promise.all([(0,r.Pf)("".concat(n,"/username"),e),(0,r.Pf)("".concat(n,"/weblink"),h),(0,r.Pf)("".concat(n,"/tieudeTiengTrung"),g),(0,r.Pf)("".concat(n,"/tieude"),c),(0,r.Pf)("".concat(n,"/link"),y),(0,r.Pf)("".concat(n,"/author"),v),(0,r.Pf)("".concat(n,"/imgAuthor"),p),(0,r.Pf)("".concat(n,"/baidich"),s),(0,r.Pf)("".concat(n,"/dateTime"),f),(0,r.Pf)("".concat(n,"/id"),i),(0,r.Pf)("".concat(n,"/userImage"),a)]),o().fire("Đăng b\xe0i th\xe0nh c\xf4ng","","Th\xe0nh c\xf4ng"),d(i=>({...i,nav:!0}))}catch(e){console.error("Lỗi tạo b\xe0i mới:",e);let i={message:"Lỗi tạo b\xe0i mới: "+e.message};o().fire(e.message,"","info"),d(e=>({...e,error:i}))}finally{m(!1)}},w=async()=>{m(!0);let i=localStorage.getItem("user"),a="/users/dichthuat/".concat(e),n="/users/dichthuat/".concat(e,"/listBaihoc/").concat(t),c="".concat(n,"/").concat(i,"/baidich"),s="".concat(n,"/").concat(i,"/tumoi"),[l,o,h,u,g,v,p,y,f]=await Promise.all([(0,r.UD)(s),(0,r.eO)("".concat(n,"/tieude")),(0,r.eO)("".concat(n,"/link")),(0,r.eO)("".concat(n,"/weblink")),(0,r.eO)("".concat(n,"/tieudeTiengTrung")),(0,r.eO)("".concat(a,"/author")),(0,r.eO)("".concat(a,"/imgAuthor")),(0,r.eO)(c),(0,r.eO)("".concat(n,"/noidung"))]),x=h?"https://www.youtube.com/embed/".concat(L(h)):null,k={},j={},N={},w={},C={},b={},S={},V={};l&&await Promise.all(l.map(async i=>{k[i.key]=await (0,r.UD)("/".concat(s,"/").concat(i.key,"/nghia")),N[i.key]=await (0,r.eO)("/".concat(s,"/").concat(i.key,"/pinyin")),V[i.key]=await (0,r.eO)("/".concat(s,"/").concat(i.key,"/hanviet")),k[i.key]&&await Promise.all(k[i.key].map(async e=>{j[e.key]=await (0,r.eO)("/".concat(s,"/").concat(i.key,"/nghia/").concat(e.key,"/nghia")),w[e.key]=await (0,r.UD)("/".concat(s,"/").concat(i.key,"/nghia/").concat(e.key,"/vidu")),w[e.key]&&await Promise.all(w[e.key].map(async t=>{b[t.key]=await (0,r.eO)("/".concat(s,"/").concat(i.key,"/nghia/").concat(e.key,"/vidu/").concat(t.key,"/nghia")),C[t.key]=await (0,r.eO)("/".concat(s,"/").concat(i.key,"/nghia/").concat(e.key,"/vidu/").concat(t.key,"/vidu")),S[t.key]=await (0,r.eO)("/".concat(s,"/").concat(i.key,"/nghia/").concat(e.key,"/vidu/").concat(t.key,"/pinyin"))}))}))})),d(e=>({...e,webLink:u,tieudeTiengTrung:g,tieude:o,author:v,imgAuthor:p,youtubeLink:h,noiDungBaiDich:f,user:i,tuMoiNghias:j,tuMoiNghiaGets:k,tuMoiPinyins:N,tuMoiViduPinyins:S,tumoiViduGets:w,tuMoiVidus:C,tuMoiViduDichs:b,tuMois:l,baiDich:y,embedLink:x,hanviets:V})),m(!1)},C=async()=>{m(!0);let{baiDich:i}=l,a=localStorage.getItem("user"),n="/users/dichthuat/".concat(e,"/listBaihoc/").concat(t,"/").concat(a,"/baidich");try{await (0,r.Pf)(n,i),o().fire("Tạo b\xe0i mới th\xe0nh c\xf4ng","","success")}catch(i){console.error("Lỗi tạo b\xe0i mới:",i),o().fire("Lỗi tạo b\xe0i mới: "+i.message,"","info")}finally{m(!1)}},b=(i,e)=>i.split(RegExp("(".concat(e,")"),"gi")).map((i,t)=>i.toLowerCase()===e.toLowerCase()?(0,a.jsx)("span",{style:{color:"red"},children:i},t):i),L=i=>{var e=i.split("=");return e[1]?e[1].split("&")[0]:"null"},S=i=>{d(e=>({...e,baiDich:i.target.value}))},V=()=>{y(!p)},Z=i=>{j({...k,[i]:!k[i]})},T=(i,e)=>{x({...f,[i+"-"+e]:!0})},P=(i,e)=>{x({...f,[i+"-"+e]:!1})},{tieude:H,baiDich:D,webLink:O,tieudeTiengTrung:I,author:M,imgAuthor:_,embedLink:A,noiDungBaiDich:E}=l;return console.log(l),(0,a.jsx)(c.Z,{body:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"dichthuat-container row",children:[(0,a.jsx)("div",{className:"col-4",children:(0,a.jsx)("div",{children:(0,a.jsx)(h.Z,{videoLink:A||null,webLink:O||null,tieudeTiengTrung:I||null,author:M||null,imgAuthor:_||null,title:H||null})})}),(0,a.jsx)("div",{className:"noiDungBaiDich col-4",children:(0,a.jsx)("pre",{children:E||""})}),(0,a.jsx)("div",{className:"col",children:(0,a.jsx)("div",{className:"card border-primary",children:(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsxs)("div",{className:"",style:{display:"flex",justifyContent:"space-between",marginBottom:"10px"},children:[(0,a.jsx)("h4",{className:"card-title",children:"Phần Dịch"}),(0,a.jsxs)("div",{style:{display:"flex"},children:[(0,a.jsx)(s.Z,{className:"button-css",variant:"info",onClick:C,children:"Lưu b\xe0i dịch"}),(0,a.jsx)(s.Z,{className:"button-css",variant:"danger",onClick:N,children:"Đăng b\xe0i"})]})]}),(0,a.jsx)("textarea",{value:D||"",onChange:i=>S(i),placeholder:"Nhập b\xe0i dịch của bạn"})]})})})]}),(0,a.jsxs)("div",{className:"tumoi-area",children:[(0,a.jsxs)("div",{className:"tumoi-area-header",children:[(0,a.jsx)("h2",{className:"card-title",children:"Từ mới"}),p?(0,a.jsx)(s.Z,{variant:"danger",onClick:V,children:"Hủy"}):(0,a.jsx)(s.Z,{variant:"info",onClick:V,children:"Th\xeam từ mới"})]}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col",children:(0,a.jsxs)("div",{className:"tumoi-container",children:[(0,a.jsx)("div",{className:"tumoi-header"}),(()=>{let{tuMois:i,tuMoiNghias:e,tuMoiNghiaGets:t,tuMoiPinyins:n,tumoiViduGets:c,tuMoiVidus:o,tuMoiViduDichs:r,tuMoiViduPinyins:h,hanviets:d}=l;return i&&i.length>0?i.map((i,l)=>{let u=t[i.key],g=n[i.key],m=d[i.key],v=k[i.key];return(0,a.jsx)("div",{className:"tumoi-item",children:(0,a.jsxs)("div",{className:"tumoi-display",children:[(0,a.jsxs)("div",{className:"tumoi-display-header",children:[(0,a.jsxs)("h4",{children:[l+1,", ",i.key,"  【",m,"】"]}),(0,a.jsx)(s.Z,{variant:v?"danger":"warning",onClick:()=>Z(i.key),children:v?"Ẩn bớt nghĩa của từ":"Hiển thị nghĩa của từ"})]}),v&&u&&u.map((t,n)=>{let l=c[t.key],d=e[t.key],u=f[i.key+"-"+t.key];return(0,a.jsxs)("div",{className:"tumoi-nghia",children:[(0,a.jsxs)("h5",{children:[i.key,"/ ",g]}),(0,a.jsx)("hr",{}),(0,a.jsxs)("h4",{className:"tumoi-nghia-shower",children:["Nghĩa ",n+1,": ",d]}),l&&l.map((e,t)=>{let n=o[e.key],c=r[e.key],s=h[e.key];return u||0===t?(0,a.jsxs)("div",{className:"tumoi-vidu",children:[(0,a.jsxs)("h5",{children:["V\xed dụ ",t+1]}),(0,a.jsx)("p",{children:b(n,i.key)}),(0,a.jsx)("p",{children:s}),(0,a.jsx)("p",{children:c})]},t):null}),u?(0,a.jsx)(s.Z,{variant:"warning",onClick:()=>P(i.key,t.key),children:"Ẩn bớt v\xed dụ"}):(0,a.jsx)(s.Z,{variant:"info",onClick:()=>T(i.key,t.key),children:"Hiển thị th\xeam v\xed dụ"})]},n)})]})},l)}):null})()]})}),p?(0,a.jsx)(v,{getData:w}):null]})]}),g?(0,a.jsx)(u.Z,{}):null]})})}},2258:function(i,e,t){"use strict";var a=t(7437);t(2265),e.Z=function(i){return(0,a.jsxs)("div",{className:"form-group dichthuat-formInput",children:[(0,a.jsx)("label",{htmlFor:"",children:i.title}),(0,a.jsx)("input",{type:"text",className:"form-control",name:i.name,id:"","aria-describedby":"helpId",placeholder:i.placeHolder,onChange:i.onChangeHandle,value:i.value})]})}},8833:function(i,e,t){"use strict";var a=t(7437),n=t(2265),c=t(6648);let s=(0,n.memo)(i=>(0,a.jsxs)("div",{className:"itemCard-container",onClick:i.cardClick,onMouseEnter:i.cardClick,children:[(0,a.jsxs)("div",{className:"itemCard-title",children:[(0,a.jsx)("div",{className:"itemCard-img-des"}),(0,a.jsx)(l,{link:i.videoLink})]}),(0,a.jsxs)("div",{className:"itemCard-content",children:[(0,a.jsx)("h3",{className:"itemCard-content-title",children:i.title}),(0,a.jsx)("h4",{className:"itemCard-content-description",children:i.tieudeTiengTrung}),(0,a.jsx)("div",{className:"itemCard-content-author",children:(0,a.jsxs)("div",{className:"itemCard-content-author-container",children:[(0,a.jsx)(c.default,{src:i.imgAuthor||"https://yt3.googleusercontent.com/ytc/AIdro_nevnvE7nYPdcdQLMZgoxJsx1g62U2soHKg3PAG3rQE0g=s160-c-k-c0x00ffffff-no-rj",alt:"img",width:50,height:50}),(0,a.jsx)("a",{href:i.webLink,target:"_blank",rel:"noreferrer",children:(0,a.jsx)("h4",{children:i.author})})]})})]})]}));function l(i){return(0,a.jsx)(n.Suspense,{fallback:(0,a.jsx)("div",{children:"Loading..."}),children:(0,a.jsx)("iframe",{ref:i.iframeRef,height:i.height,src:i.link,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})}s.displayName="ItemCardYoutube",e.Z=s},495:function(i,e){"use strict";e.Z=function(i){return i=(i="@"+(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=i.toLowerCase()).replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi,"a")).replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi,"e")).replace(/i|í|ì|ỉ|ĩ|ị/gi,"i")).replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi,"o")).replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi,"u")).replace(/ý|ỳ|ỷ|ỹ|ỵ/gi,"y")).replace(/đ/gi,"d")).replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,"")).replace(/ /gi,"-")).replace(/\-\-\-\-\-/gi,"-")).replace(/\-\-\-\-/gi,"-")).replace(/\-\-\-/gi,"-")).replace(/\-\-/gi,"-"))+"@").replace(/\@\-|\-\@|\@/gi,"")}},9768:function(i,e,t){"use strict";t.d(e,{Z:function(){return l}});var a=t(7437),n=t(2265);t(4779);var c={src:"/_next/static/media/Loading.3170e5c7.gif",height:480,width:475,blurWidth:0,blurHeight:0},s=t(6648);class l extends n.Component{render(){return(0,a.jsx)("div",{className:"loadingData",children:(0,a.jsxs)("div",{className:"loadingData-container",children:[(0,a.jsx)(s.default,{src:c,alt:"Loading...",width:100,height:100}),(0,a.jsx)("h2",{children:"Website đang tải dữ liệu, xin vui l\xf2ng chờ trong gi\xe2y l\xe1t"})]})})}}},4819:function(){},4779:function(){}},function(i){i.O(0,[555,890,296,461,481,138,885,648,808,574,971,23,744],function(){return i(i.s=923)}),_N_E=i.O()}]);