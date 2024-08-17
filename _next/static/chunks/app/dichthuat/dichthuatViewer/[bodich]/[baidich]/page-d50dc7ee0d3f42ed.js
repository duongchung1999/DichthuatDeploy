(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[794],{923:function(e,i,t){Promise.resolve().then(t.bind(t,3281))},3281:function(e,i,t){"use strict";t.d(i,{default:function(){return p}});var a=t(7437),n=t(2265),c=t(7073),s=t(35),l=t(4379),o=t.n(l),r=t(5606),h=t(8833);t(4819);var d=t(2258),u=t(9768),g=t(8472),m=t(495);class v extends n.Component{componentDidMount(){this.loadLocalData()}render(){return(0,a.jsxs)("div",{className:"col-6",children:[this.state.error&&(0,a.jsxs)("div",{className:"dichthuat-showError",children:['Lỗi: "',this.state.error.message,'"']}),(0,a.jsx)(s.Z,{variant:"info",onClick:this.updateTumoi,children:"Tạo từ mới"}),(0,a.jsx)(s.Z,{variant:"danger",onClick:this.Search,children:"Search"}),(0,a.jsx)(d.Z,{title:"Từ mới",name:"tumoi",placeHolder:"Nhập từ mới",value:this.state.tumoi,onChangeHandle:e=>this.onChangeHandleTuMoi(e,"tumoi")}),(0,a.jsx)(d.Z,{title:"\xc2m H\xe1n Việt",name:"hanviet",placeHolder:"Nhập \xe2m H\xe1n Việt",value:this.state.hanviet,onChangeHandle:e=>this.onChangeHandleTuMoi(e,"hanviet")}),(0,a.jsx)(d.Z,{title:"Pinyin",name:"pinyin",placeHolder:"Nhập pinyin",value:this.state.pinyin,onChangeHandle:e=>this.onChangeHandleTuMoi(e,"pinyin")}),this.state.nghiaList.map((e,i)=>(0,a.jsxs)("div",{className:"nghiaCuaTu card border-primary",children:[(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsx)(d.Z,{title:"Nghĩa ".concat(i+1),name:"nghia",placeHolder:"Nhập nghĩa của từ",value:e.nghia,onChangeHandle:e=>this.onChangeHandle(e,"nghia",i)}),e.vidus.map((e,t)=>(0,a.jsx)("div",{className:"viduCuaTu card border-primary",children:(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsx)(d.Z,{title:"V\xed dụ ".concat(t+1),name:"vidu",placeHolder:"Nhập V\xed dụ",value:e.vidu,onChangeHandle:e=>this.onChangeHandle(e,"vidu",i,t)}),(0,a.jsx)(d.Z,{title:"\xdd nghĩa v\xed dụ ".concat(t+1),name:"nghiaVidu",placeHolder:"Nhập nghĩa của v\xed dụ",value:e.nghiaVidu,onChangeHandle:e=>this.onChangeHandle(e,"nghiaVidu",i,t)}),(0,a.jsx)(d.Z,{title:"pinyin v\xed dụ ".concat(t+1),name:"pinyinVidu",placeHolder:"Nhập nghĩa của v\xed dụ",value:e.pinyinVidu,onChangeHandle:e=>this.onChangeHandle(e,"pinyinVidu",i,t)}),(0,a.jsx)(s.Z,{variant:"warning",onClick:()=>this.removeVidu(i,t),children:"X\xf3a v\xed dụ n\xe0y"})]})},t)),(0,a.jsx)(s.Z,{variant:"info",onClick:()=>this.addVidu(i),children:"Th\xeam v\xed dụ kh\xe1c"})]}),(0,a.jsx)(s.Z,{variant:"danger",onClick:()=>this.removeNghia(i),children:"X\xf3a nghĩa"})]},i)),(0,a.jsx)(s.Z,{variant:"info",onClick:this.addNghia,style:{width:"100%"},children:"Th\xeam nghĩa kh\xe1c"}),this.state.loading?(0,a.jsx)(u.Z,{}):null]})}constructor(e){super(e),this.onChangeHandleTuMoi=(e,i)=>{this.setState({[i]:e.target.value})},this.onChangeHandle=(e,i,t,a)=>{let n=this.state.nghiaList.slice();void 0!==a?n[t].vidus[a][i]=e.target.value:n[t][i]=e.target.value,this.setState({nghiaList:n})},this.updateTumoi=async()=>{this.setState({loading:!0});let{tumoi:e,tumoiFbPath:i,userTuMoiPath:t,nghiaList:a,hanviet:n,pinyin:c}=this.state;try{if(!this.isNhapDayDuText())return;await this.updateTumoiAtPath(t,e,a,n,c),await this.updateTumoiAtPath(i,e,a,n,c),o().fire("Tạo b\xe0i mới th\xe0nh c\xf4ng","","success"),this.setState({nav:!0}),this.props.getData()}catch(e){console.error("Lỗi tạo từ mới:",e),o().fire("Lỗi tạo từ mới: "+e.message,"","info"),this.setState({error:{message:"Lỗi tạo từ mới: "+e.message}})}finally{this.setState({loading:!1})}},this.updateTumoiAtPath=async(e,i,t,a,n)=>{try{if(a){let t="".concat(e,"/").concat(i,"/hanviet"),c="".concat(e,"/").concat(i,"/pinyin");await (0,r.Pf)(t,a),n&&await (0,r.Pf)(c,n)}for(let a=0;a<t.length;a++){let n=t[a],c="".concat(e,"/").concat(i,"/nghia/").concat((0,m.Z)(n.nghia),"/pinyin"),s="".concat(e,"/").concat(i,"/nghia/").concat((0,m.Z)(n.nghia),"/nghia");console.log(c),await (0,r.Pf)(s,n.nghia);for(let t=0;t<n.vidus.length;t++){let a=n.vidus[t],c="".concat(e,"/").concat(i,"/nghia/").concat((0,m.Z)(n.nghia),"/vidu/").concat((0,m.Z)(a.vidu),"/nghia"),s="".concat(e,"/").concat(i,"/nghia/").concat((0,m.Z)(n.nghia),"/vidu/").concat((0,m.Z)(a.vidu),"/pinyin"),l="".concat(e,"/").concat(i,"/nghia/").concat((0,m.Z)(n.nghia),"/vidu/").concat((0,m.Z)(a.vidu),"/vidu");console.log(l),console.log(s),await (0,r.Pf)(c,a.nghiaVidu),await (0,r.Pf)(s,a.pinyinVidu),await (0,r.Pf)(l,a.vidu)}}}catch(i){throw console.error("Lỗi khi cập nhật từ mới tại đường dẫn:",e,i),i}},this.loadLocalData=()=>{let e=localStorage.getItem("dichthuat"),i=localStorage.getItem("video"),t=localStorage.getItem("user"),a="/users/dichthuat/".concat(e,"/listBaihoc/").concat(i),n="/users/tumoi/personal/".concat(t),c="".concat(a,"/").concat(t,"/tumoi");this.setState({userTuMoiPath:c,tumoiFbPath:n})},this.isNhapDayDuText=()=>{let{tumoi:e,nghiaList:i}=this.state;for(let t=0;t<i.length;t++){let a=i[t];if(!e||!a.nghia)return o().fire("Vui l\xf2ng điền đầy đủ th\xf4ng tin v\xe0 thử lại","","info"),this.setState({error:{message:"Vui l\xf2ng điền đầy đủ th\xf4ng tin v\xe0 thử lại"}}),!1;for(let e=0;e<a.vidus.length;e++){let i=a.vidus[e];if(!i.vidu||!i.nghiaVidu)return o().fire("Vui l\xf2ng điền đầy đủ th\xf4ng tin v\xe0 thử lại","","info"),this.setState({error:{message:"Vui l\xf2ng điền đầy đủ th\xf4ng tin v\xe0 thử lại"}}),!1;if(!this.isValidDichThuat(i.vidu))return o().fire("V\xed dụ kh\xf4ng được chứa c\xe1c k\xfd tự: . # $ [ ]","","info"),this.setState({error:{message:"V\xed dụ kh\xf4ng được chứa c\xe1c k\xfd tự: . # $ [ ]"}}),!1}}return!0},this.isValidDichThuat=e=>!/[.#$[\]]/.test(e),this.addNghia=()=>{this.setState(e=>({nghiaList:[...e.nghiaList,{nghia:"",pinyin:"",vidus:[{vidu:"",nghiaVidu:"",pinyinVidu:""}]}]}))},this.removeNghia=e=>{this.setState(i=>{let t=i.nghiaList.slice();return t.splice(e,1),{nghiaList:t}})},this.addVidu=e=>{let i=this.state.nghiaList.slice();i[e].vidus.push({vidu:"",nghiaVidu:"",pinyinVidu:""}),this.setState({nghiaList:i})},this.removeLastVidu=e=>{let i=this.state.nghiaList.slice();i[e].vidus.length>1&&i[e].vidus.pop(),this.setState({nghiaList:i})},this.removeVidu=(e,i)=>{let t=this.state.nghiaList.slice();t[e].vidus.splice(i,1),this.setState({nghiaList:t})},this.Search=async()=>{let{tumoi:e}=this.state,i=encodeURIComponent(e);try{this.setState({loading:!0});let e=await g.Z.get("https://api.hanzii.net/api/search/vi/".concat(i,"?type=word&page=1&limit=50"));if(e.data.found){let i=e.data.result[0].content;console.log(e.data.result);let t=[];i.forEach(e=>{t=t.concat(e.means)});let a=e.data.result[0].cn_vi,n=e.data.result[0].pinyin,c=t.map(e=>({nghia:e.mean,vidus:e.examples.map(e=>({vidu:e.e,pinyinVidu:e.p,nghiaVidu:e.m}))}));this.setState({nghiaList:c,hanviet:a,pinyin:n})}}catch(e){console.error("Lỗi khi t\xecm kiếm:",e),o().fire("Lỗi khi t\xecm kiếm: "+e.message,"","info"),this.setState({error:{message:"Lỗi khi t\xecm kiếm: "+e.message}})}finally{this.setState({loading:!1})}},this.state={dichthuat:null,error:null,nav:!1,userTuMoiPath:null,nghiaList:[{nghia:"",vidus:[{vidu:"",nghiaVidu:"",pinyinVidu:""}]}],loading:!1,tumoi:"",hanviet:""}}}function p(e){let{bodich:i,baidich:t}=e,[l,d]=(0,n.useState)({dichthuat:null,youtubeLink:null,webLink:null,tieude:null,tieudeTiengTrung:null,author:null,imgAuthor:null,id:null,error:null,nav:!1,tuMois:{},tuMoiNghias:{},tuMoiNghiaGets:{},tuMoiPinyins:{},tumoiViduGets:{},tuMoiVidus:{},tuMoiViduDichs:{},tuMoiViduPinyins:{},hanviets:{},baiDich:null}),[g,m]=(0,n.useState)(!0),[p,y]=(0,n.useState)(!1),[x,f]=(0,n.useState)({}),[k,j]=(0,n.useState)({});console.log(i,t),(0,n.useEffect)(()=>{w()},[]);let N=async()=>{m(!0);let e=localStorage.getItem("user"),i=localStorage.getItem("name"),a=localStorage.getItem("userImage"),n="/users/dashboard/".concat(e,"/").concat(t),{tieude:c,baiDich:s,youtubeLink:h,webLink:u,tieudeTiengTrung:g,author:v,imgAuthor:p,embedLink:y}=l,x=new Date().toISOString();try{let e=L(h);await Promise.all([(0,r.Pf)("".concat(n,"/username"),i),(0,r.Pf)("".concat(n,"/weblink"),h),(0,r.Pf)("".concat(n,"/tieudeTiengTrung"),g),(0,r.Pf)("".concat(n,"/tieude"),c),(0,r.Pf)("".concat(n,"/link"),y),(0,r.Pf)("".concat(n,"/author"),v),(0,r.Pf)("".concat(n,"/imgAuthor"),p),(0,r.Pf)("".concat(n,"/baidich"),s),(0,r.Pf)("".concat(n,"/dateTime"),x),(0,r.Pf)("".concat(n,"/id"),e),(0,r.Pf)("".concat(n,"/userImage"),a)]),o().fire("Đăng b\xe0i th\xe0nh c\xf4ng","","Th\xe0nh c\xf4ng"),d(e=>({...e,nav:!0}))}catch(i){console.error("Lỗi tạo b\xe0i mới:",i);let e={message:"Lỗi tạo b\xe0i mới: "+i.message};o().fire(i.message,"","info"),d(i=>({...i,error:e}))}finally{m(!1)}},w=async()=>{m(!0);let e=localStorage.getItem("user"),a="/users/dichthuat/".concat(i),n="/users/dichthuat/".concat(i,"/listBaihoc/").concat(t),c="".concat(n,"/").concat(e,"/baidich"),s="".concat(n,"/").concat(e,"/tumoi"),[l,o,h,u,g,v,p,y,x]=await Promise.all([(0,r.UD)(s),(0,r.eO)("".concat(n,"/tieude")),(0,r.eO)("".concat(n,"/link")),(0,r.eO)("".concat(n,"/weblink")),(0,r.eO)("".concat(n,"/tieudeTiengTrung")),(0,r.eO)("".concat(a,"/author")),(0,r.eO)("".concat(a,"/imgAuthor")),(0,r.eO)(c),(0,r.eO)("".concat(n,"/noidung"))]),f=h?"https://www.youtube.com/embed/".concat(L(h)):null,k={},j={},N={},w={},C={},b={},S={},V={};l&&await Promise.all(l.map(async e=>{k[e.key]=await (0,r.UD)("/".concat(s,"/").concat(e.key,"/nghia")),N[e.key]=await (0,r.eO)("/".concat(s,"/").concat(e.key,"/pinyin")),V[e.key]=await (0,r.eO)("/".concat(s,"/").concat(e.key,"/hanviet")),k[e.key]&&await Promise.all(k[e.key].map(async i=>{j[i.key]=await (0,r.eO)("/".concat(s,"/").concat(e.key,"/nghia/").concat(i.key,"/nghia")),w[i.key]=await (0,r.UD)("/".concat(s,"/").concat(e.key,"/nghia/").concat(i.key,"/vidu")),w[i.key]&&await Promise.all(w[i.key].map(async t=>{b[t.key]=await (0,r.eO)("/".concat(s,"/").concat(e.key,"/nghia/").concat(i.key,"/vidu/").concat(t.key,"/nghia")),C[t.key]=await (0,r.eO)("/".concat(s,"/").concat(e.key,"/nghia/").concat(i.key,"/vidu/").concat(t.key,"/vidu")),S[t.key]=await (0,r.eO)("/".concat(s,"/").concat(e.key,"/nghia/").concat(i.key,"/vidu/").concat(t.key,"/pinyin"))}))}))})),d(i=>({...i,webLink:u,tieudeTiengTrung:g,tieude:o,author:v,imgAuthor:p,youtubeLink:h,noiDungBaiDich:x,user:e,tuMoiNghias:j,tuMoiNghiaGets:k,tuMoiPinyins:N,tuMoiViduPinyins:S,tumoiViduGets:w,tuMoiVidus:C,tuMoiViduDichs:b,tuMois:l,baiDich:y,embedLink:f,hanviets:V})),m(!1)},C=async()=>{m(!0);let{baiDich:e}=l,a=localStorage.getItem("user"),n="/users/dichthuat/".concat(i,"/listBaihoc/").concat(t,"/").concat(a,"/baidich");try{await (0,r.Pf)(n,e),o().fire("Tạo b\xe0i mới th\xe0nh c\xf4ng","","success")}catch(e){console.error("Lỗi tạo b\xe0i mới:",e),o().fire("Lỗi tạo b\xe0i mới: "+e.message,"","info")}finally{m(!1)}},b=(e,i)=>e.split(RegExp("(".concat(i,")"),"gi")).map((e,t)=>e.toLowerCase()===i.toLowerCase()?(0,a.jsx)("span",{style:{color:"red"},children:e},t):e),L=e=>{var i=e.split("=");return i[1]?i[1].split("&")[0]:"null"},S=e=>{d(i=>({...i,baiDich:e.target.value}))},V=()=>{y(!p)},Z=e=>{j({...k,[e]:!k[e]})},T=(e,i)=>{f({...x,[e+"-"+i]:!0})},P=(e,i)=>{f({...x,[e+"-"+i]:!1})},{tieude:H,baiDich:D,webLink:O,tieudeTiengTrung:I,author:M,imgAuthor:_,embedLink:A,noiDungBaiDich:E}=l;return console.log(l),(0,a.jsx)(c.Z,{body:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"dichthuat-container row",children:[(0,a.jsx)("div",{className:"col-4",children:(0,a.jsx)("div",{children:(0,a.jsx)(h.Z,{videoLink:A||null,webLink:O||null,tieudeTiengTrung:I||null,author:M||null,imgAuthor:_||null,title:H||null})})}),(0,a.jsx)("div",{className:"noiDungBaiDich col-4",children:(0,a.jsx)("pre",{children:E||""})}),(0,a.jsx)("div",{className:"col",children:(0,a.jsx)("div",{className:"card border-primary",children:(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsxs)("div",{className:"",style:{display:"flex",justifyContent:"space-between",marginBottom:"10px"},children:[(0,a.jsx)("h4",{className:"card-title",children:"Phần Dịch"}),(0,a.jsxs)("div",{style:{display:"flex"},children:[(0,a.jsx)(s.Z,{className:"button-css",variant:"info",onClick:C,children:"Lưu b\xe0i dịch"}),(0,a.jsx)(s.Z,{className:"button-css",variant:"danger",onClick:N,children:"Đăng b\xe0i"})]})]}),(0,a.jsx)("textarea",{value:D||"",onChange:e=>S(e),placeholder:"Nhập b\xe0i dịch của bạn"})]})})})]}),(0,a.jsxs)("div",{className:"tumoi-area",children:[(0,a.jsxs)("div",{className:"tumoi-area-header",children:[(0,a.jsx)("h2",{className:"card-title",children:"Từ mới"}),p?(0,a.jsx)(s.Z,{variant:"danger",onClick:V,children:"Hủy"}):(0,a.jsx)(s.Z,{variant:"info",onClick:V,children:"Th\xeam từ mới"})]}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col",children:(0,a.jsxs)("div",{className:"tumoi-container",children:[(0,a.jsx)("div",{className:"tumoi-header"}),(()=>{let{tuMois:e,tuMoiNghias:i,tuMoiNghiaGets:t,tuMoiPinyins:n,tumoiViduGets:c,tuMoiVidus:o,tuMoiViduDichs:r,tuMoiViduPinyins:h,hanviets:d}=l;return e&&e.length>0?e.map((e,l)=>{let u=t[e.key],g=n[e.key],m=d[e.key],v=k[e.key];return(0,a.jsx)("div",{className:"tumoi-item",children:(0,a.jsxs)("div",{className:"tumoi-display",children:[(0,a.jsxs)("div",{className:"tumoi-display-header",children:[(0,a.jsxs)("h4",{children:[l+1,", ",e.key,"  【",m,"】"]}),(0,a.jsx)(s.Z,{variant:v?"danger":"warning",onClick:()=>Z(e.key),children:v?"Ẩn bớt nghĩa của từ":"Hiển thị nghĩa của từ"})]}),v&&u&&u.map((t,n)=>{let l=c[t.key],d=i[t.key],u=x[e.key+"-"+t.key];return(0,a.jsxs)("div",{className:"tumoi-nghia",children:[(0,a.jsxs)("h5",{children:[e.key,"/ ",g]}),(0,a.jsx)("hr",{}),(0,a.jsxs)("h4",{className:"tumoi-nghia-shower",children:["Nghĩa ",n+1,": ",d]}),l&&l.map((i,t)=>{let n=o[i.key],c=r[i.key],s=h[i.key];return u||0===t?(0,a.jsxs)("div",{className:"tumoi-vidu",children:[(0,a.jsxs)("h5",{children:["V\xed dụ ",t+1]}),(0,a.jsx)("p",{children:b(n,e.key)}),(0,a.jsx)("p",{children:s}),(0,a.jsx)("p",{children:c})]},t):null}),u?(0,a.jsx)(s.Z,{variant:"warning",onClick:()=>P(e.key,t.key),children:"Ẩn bớt v\xed dụ"}):(0,a.jsx)(s.Z,{variant:"info",onClick:()=>T(e.key,t.key),children:"Hiển thị th\xeam v\xed dụ"})]},n)})]})},l)}):null})()]})}),p?(0,a.jsx)(v,{getData:w}):null]})]}),g?(0,a.jsx)(u.Z,{}):null]})})}},2258:function(e,i,t){"use strict";var a=t(7437);t(2265),i.Z=function(e){return(0,a.jsxs)("div",{className:"form-group dichthuat-formInput",children:[(0,a.jsx)("label",{htmlFor:"",children:e.title}),(0,a.jsx)("input",{type:"text",className:"form-control",name:e.name,id:"","aria-describedby":"helpId",placeholder:e.placeHolder,onChange:e.onChangeHandle,value:e.value})]})}},8833:function(e,i,t){"use strict";var a=t(7437),n=t(2265),c=t(6648);let s=(0,n.memo)(e=>(0,a.jsxs)("div",{className:"itemCard-container",onClick:e.cardClick,onMouseEnter:e.cardClick,children:[(0,a.jsxs)("div",{className:"itemCard-title",children:[(0,a.jsx)("div",{className:"itemCard-img-des"}),(0,a.jsx)(l,{link:e.videoLink})]}),(0,a.jsxs)("div",{className:"itemCard-content",children:[(0,a.jsx)("h3",{className:"itemCard-content-title",children:e.title}),(0,a.jsx)("h4",{className:"itemCard-content-description",children:e.tieudeTiengTrung}),(0,a.jsx)("div",{className:"itemCard-content-author",children:(0,a.jsxs)("div",{className:"itemCard-content-author-container",children:[(0,a.jsx)(c.default,{src:e.imgAuthor||"https://yt3.googleusercontent.com/ytc/AIdro_nevnvE7nYPdcdQLMZgoxJsx1g62U2soHKg3PAG3rQE0g=s160-c-k-c0x00ffffff-no-rj",alt:"img",width:50,height:50}),(0,a.jsx)("a",{href:e.webLink,target:"_blank",rel:"noreferrer",children:(0,a.jsx)("h4",{children:e.author})})]})})]})]}));function l(e){return(0,a.jsx)(n.Suspense,{fallback:(0,a.jsx)("div",{children:"Loading..."}),children:(0,a.jsx)("iframe",{ref:e.iframeRef,height:e.height,src:e.link,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})}s.displayName="ItemCardYoutube",i.Z=s},495:function(e,i){"use strict";i.Z=function(e){return e=(e="@"+(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi,"a")).replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi,"e")).replace(/i|í|ì|ỉ|ĩ|ị/gi,"i")).replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi,"o")).replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi,"u")).replace(/ý|ỳ|ỷ|ỹ|ỵ/gi,"y")).replace(/đ/gi,"d")).replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,"")).replace(/ /gi,"-")).replace(/\-\-\-\-\-/gi,"-")).replace(/\-\-\-\-/gi,"-")).replace(/\-\-\-/gi,"-")).replace(/\-\-/gi,"-"))+"@").replace(/\@\-|\-\@|\@/gi,"")}},9768:function(e,i,t){"use strict";t.d(i,{Z:function(){return l}});var a=t(7437),n=t(2265);t(4779);var c={src:"/_next/static/media/Loading.3170e5c7.gif",height:480,width:475,blurWidth:0,blurHeight:0},s=t(6648);class l extends n.Component{render(){return(0,a.jsx)("div",{className:"loadingData",children:(0,a.jsxs)("div",{className:"loadingData-container",children:[(0,a.jsx)(s.default,{src:c,alt:"Loading...",width:100,height:100}),(0,a.jsx)("h2",{children:"Website đang tải dữ liệu, xin vui l\xf2ng chờ trong gi\xe2y l\xe1t"})]})})}}},4819:function(){},4779:function(){}},function(e){e.O(0,[555,890,296,461,481,138,885,648,808,574,971,23,744],function(){return e(e.s=923)}),_N_E=e.O()}]);