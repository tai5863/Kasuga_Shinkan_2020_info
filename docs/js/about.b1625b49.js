(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0845":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"life"}},[i("Header"),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"life_container"}},[t._m(0),i("LifeItem",{attrs:{item_list:t.itemList}})],1),i("div",{attrs:{id:"item_button_container"}},[i("router-link",{attrs:{to:"/study"}},[i("ItemButton01",{staticClass:"item_button"})],1),i("router-link",{attrs:{to:"/senior"}},[i("ItemButton03",{staticClass:"item_button"})],1)],1),i("AddQuestion")],1)],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"life_title_container"},[i("h1",{staticClass:"life_title1"},[t._v("生活")]),i("h2",{staticClass:"life_title2"},[t._v("について")])])}],s=i("0418"),r=i("3971"),o=i("9a68"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"life_item"}},[i("div",{attrs:{id:"item_container"}},t._l(t.itemList,(function(e){return i("div",{key:e.id,staticClass:"topic_container"},[i("label",{attrs:{for:e.id}},[i("h2",{staticClass:"topic",on:{click:function(e){return t.uncheck()}}},[t._v(t._s(e.title))])]),i("input",{attrs:{type:"checkbox",id:e.id}}),i("div",{staticClass:"hidden_show"},[i("p",{staticClass:"topic_content"},[t._v(t._s(e.main))]),t._m(0,!0)])])})),0)])},u=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"iframe_container"},[i("iframe",{attrs:{src:"https://www.youtube.com/embed/crFJLJUGdq0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}],l=(i("c975"),i("a434"),{name:"LifeItem",props:{item_list:Array},data:function(){return{itemList:this.item_list}},mounted:function(){for(var t=0;t<this.itemList.length;t++)this.inputList.push(String(this.itemList[t].id))},methods:{uncheck:function(t){var e=this.inputList.indexOf(t);e>=0&&this.inputList.splice(e,1);for(var i=0;i<this.inputList.length;i++){var a=document.getElementById(this.inputList[i]);a.checked=!1}}}}),d=l,m=(i("1ac1"),i("2877")),p=Object(m["a"])(d,c,u,!1,null,"c4166e1e",null),f=p.exports,v=i("6957"),h={name:"Study",components:{Header:s["a"],ItemButton01:r["a"],ItemButton03:o["a"],LifeItem:f,AddQuestion:v["a"]},props:{life_list:Array},data:function(){return{itemList:this.life_list}}},_=h,y=(i("5449"),Object(m["a"])(_,a,n,!1,null,"78a84360",null));e["default"]=y.exports},"09c8":function(t,e,i){"use strict";var a=i("0b99"),n=i.n(a);n.a},"0b99":function(t,e,i){},1071:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"edit"}},[i("Header1",{staticClass:"header"}),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"form_container"}},[i("form",[i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("トピック")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input1",attrs:{type:"text",placeholder:"例 : 履修はいつから？"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("項目")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"input1",attrs:{type:"text",placeholder:"履修・生活・先輩のいづれか"},domProps:{value:t.type},on:{input:function(e){e.target.composing||(t.type=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("内容")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.main,expression:"main"}],staticClass:"input2",attrs:{placeholder:"例 : 16日からです！11日に時間割が出るので、少なくともそれまでは何もしなくてもOK！"},domProps:{value:t.main},on:{input:function(e){e.target.composing||(t.main=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("YouTubeの時間指定付きリンク")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.youtube,expression:"youtube"}],staticClass:"input1",attrs:{type:"text"},domProps:{value:t.youtube},on:{input:function(e){e.target.composing||(t.youtube=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("執筆者")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],staticClass:"input1",attrs:{type:"text"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}})]),i("input",{staticClass:"send",attrs:{value:"送信する"},on:{click:function(e){return t.send()}}})])])])],1)},n=[],s=(i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),i("85ef")),r={name:"Edit",components:{Header1:s["a"]},data:function(){return{title:"",type:"",main:"",youtube:"",author:""}},methods:{send:function(){var t=new URLSearchParams;t.append("title",this.title),t.append("type",this.type),t.append("main",this.main),t.append("YouTube",this.YouTube),t.append("author",this.author),this.axios.post("https://kzkymur.com/api/topic/",t).then((function(){})).catch((function(t){window.alert(t)}))}}},o=r,c=(i("22bb"),i("2877")),u=Object(c["a"])(o,a,n,!1,null,"d3f85e98",null);e["default"]=u.exports},"1ac1":function(t,e,i){"use strict";var a=i("2f5d"),n=i.n(a);n.a},"1dde":function(t,e,i){var a=i("d039"),n=i("b622"),s=i("2d00"),r=n("species");t.exports=function(t){return s>=51||!a((function(){var e=[],i=e.constructor={};return i[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2022:function(t,e,i){},"22bb":function(t,e,i){"use strict";var a=i("59d8"),n=i.n(a);n.a},"25f3":function(t,e,i){"use strict";var a=i("dfa2"),n=i.n(a);n.a},"2f5d":function(t,e,i){},"2fef":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"form"}},[i("Header1",{staticClass:"header"}),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"pass_form_container"}},[i("form",[i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("パスワードを入力してください")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.pass,expression:"pass"}],staticClass:"input1",attrs:{type:"password"},domProps:{value:t.pass},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.send()},input:function(e){e.target.composing||(t.pass=e.target.value)}}})]),i("input",{staticClass:"send",attrs:{value:"送信する"},on:{click:function(e){return t.send()}}})])])])],1)},n=[],s=(i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),i("85ef")),r={name:"Form",components:{Header1:s["a"]},data:function(){return{pass:""}},methods:{send:function(){var t=this,e=new URLSearchParams;e.append("password",this.pass),this.axios.post("https://kzkymur.com/api/password/",e).then((function(e){t.pass="",t.$router.isPass=e.data.result,t.$router.isPass?window.alert("正しく認証できました！"):window.alert("パスワードが正しくありません！"),t.$router.pass=e.data.key,t.$router.push("/Authentication_for_committee_member/form")})).catch((function(e){window.alert(e.response.data),t.pass=""}))}}},o=r,c=(i("82d4"),i("2877")),u=Object(c["a"])(o,a,n,!1,null,"9704907e",null);e["default"]=u.exports},3265:function(t,e,i){},"3e48":function(t,e,i){},"470c":function(t,e,i){},"48b1":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"senior"}},[i("Header"),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"senior_container"}},[t._m(0),i("SeniorItem",{attrs:{item_list:t.itemList}})],1),i("div",{attrs:{id:"item_button_container"}},[i("router-link",{attrs:{to:"/study"}},[i("ItemButton01",{staticClass:"item_button"})],1),i("router-link",{attrs:{to:"/life"}},[i("ItemButton02",{staticClass:"item_button"})],1)],1),i("AddQuestion")],1)],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"senior_title_container"},[i("h1",{staticClass:"senior_title1"},[t._v("先輩")]),i("h2",{staticClass:"senior_title2"},[t._v("について")])])}],s=i("0418"),r=i("3971"),o=i("d57a"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"senior_item"}},[i("div",{attrs:{id:"item_container"}},t._l(t.itemList,(function(e){return i("div",{key:e.id,staticClass:"topic_container"},[i("label",{attrs:{for:e.id}},[i("h2",{staticClass:"topic",on:{click:function(i){t.back(e.id),t.uncheck(e.id)}}},[t._v(t._s(e.title))])]),i("input",{attrs:{type:"checkbox",id:e.id}}),i("div",{staticClass:"hidden_show"},[i("p",{staticClass:"topic_content"},[t._v(t._s(e.main))]),t._m(0,!0)])])})),0)])},u=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"iframe_container"},[i("iframe",{attrs:{src:"https://www.youtube.com/embed/crFJLJUGdq0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}],l=(i("c975"),i("a434"),{name:"SeniorItem",props:{item_list:Array},data:function(){return{itemList:this.item_list,show:!1,inputList:[],inputList1:[]}},mounted:function(){for(var t=0;t<this.itemList.length;t++)this.inputList.push(String(this.itemList[t].id))},methods:{uncheck:function(t){var e=this.inputList.indexOf(t);e>=0&&this.inputList.splice(e,1);for(var i=0;i<this.inputList.length;i++){var a=document.getElementById(this.inputList[i]);a.checked=!1}}}}),d=l,m=(i("f062"),i("2877")),p=Object(m["a"])(d,c,u,!1,null,"41f60fc1",null),f=p.exports,v=i("6957"),h={name:"Study",components:{Header:s["a"],ItemButton01:r["a"],ItemButton02:o["a"],SeniorItem:f,AddQuestion:v["a"]},props:{senior_list:Array},data:function(){return{itemList:this.senior_list}}},_=h,y=(i("25f3"),Object(m["a"])(_,a,n,!1,null,"697cbd80",null));e["default"]=y.exports},5449:function(t,e,i){"use strict";var a=i("2022"),n=i.n(a);n.a},"560f":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"study"}},[i("Header"),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"study_container"}},[t._m(0),i("StudyItem",{attrs:{item_list:t.itemList}})],1),i("div",{attrs:{id:"item_button_container"}},[i("router-link",{attrs:{to:"/life"}},[i("ItemButton02",{staticClass:"item_button"})],1),i("router-link",{attrs:{to:"/senior"}},[i("ItemButton03",{staticClass:"item_button"})],1)],1),i("AddQuestion")],1)],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"study_title_container"},[i("h1",{staticClass:"study_title1"},[t._v("大学")]),i("h2",{staticClass:"study_title2"},[t._v("について")])])}],s=i("0418"),r=i("d57a"),o=i("9a68"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"study_item"}},[i("div",{attrs:{id:"item_container"}},t._l(t.itemList,(function(e){return i("div",{key:e.id,staticClass:"topic_container"},[i("label",{attrs:{for:e.id}},[i("h2",{staticClass:"topic",on:{click:function(e){return t.uncheck()}}},[t._v(t._s(e.title))])]),i("input",{attrs:{type:"checkbox",id:e.id}}),i("div",{staticClass:"hidden_show"},[i("p",{staticClass:"topic_content"},[t._v(t._s(e.main))]),t._m(0,!0)])])})),0)])},u=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"iframe_container"},[i("iframe",{attrs:{src:"https://www.youtube.com/embed/crFJLJUGdq0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}],l=(i("c975"),i("a434"),{name:"StudyItem",props:{item_list:Array},data:function(){return{itemList:this.item_list}},mounted:function(){for(var t=0;t<this.itemList.length;t++)this.inputList.push(String(this.itemList[t].id))},methods:{uncheck:function(t){var e=this.inputList.indexOf(t);e>=0&&this.inputList.splice(e,1);for(var i=0;i<this.inputList.length;i++){var a=document.getElementById(this.inputList[i]);a.checked=!1}}}}),d=l,m=(i("09c8"),i("2877")),p=Object(m["a"])(d,c,u,!1,null,"443bfb26",null),f=p.exports,v=i("6957"),h={name:"Study",components:{Header:s["a"],ItemButton02:r["a"],ItemButton03:o["a"],StudyItem:f,AddQuestion:v["a"]},props:{study_list:Array},data:function(){return{itemList:this.study_list}}},_=h,y=(i("d1a2"),Object(m["a"])(_,a,n,!1,null,"3966d4c6",null));e["default"]=y.exports},"59d8":function(t,e,i){},"82d4":function(t,e,i){"use strict";var a=i("3265"),n=i.n(a);n.a},"85ef":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"header1_comp"}},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:i("edbf"),id:"c_logo"}}),a("div",{attrs:{id:"c_page_title_container"}},[a("h2",{attrs:{id:"c_page_title"}},[t._v(t._s(t.title))]),a("h2",{attrs:{id:"c_page_title1"}},[t._v(t._s(t.title1))])])]),a("nav",{staticClass:"nav_for_sections"},[a("ul",{staticClass:"header_ul"},t._l(t.sections,(function(e){return a("li",{key:e.id},[a("router-link",{attrs:{to:"/authentication_for_committee_member/"+e.class_name,id:e.class_name+"_on"}},[t._v(t._s(e.title))])],1)})),0)])],1)},n=[],s={name:"Header",data:function(){return{title:"春日新歓2020情報Web",title1:"委員会用サイト",sections:[{title:"投稿",class_name:"form"},{title:"質問",class_name:"question"}]}},methods:{}},r=s,o=(i("d664"),i("2877")),c=Object(o["a"])(r,a,n,!1,null,"3506c614",null);e["a"]=c.exports},a434:function(t,e,i){"use strict";var a=i("23e7"),n=i("23cb"),s=i("a691"),r=i("50c4"),o=i("7b0b"),c=i("65f0"),u=i("8418"),l=i("1dde"),d=i("ae40"),m=l("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,v=Math.min,h=9007199254740991,_="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!m||!p},{splice:function(t,e){var i,a,l,d,m,p,y=o(this),b=r(y.length),g=n(t,b),C=arguments.length;if(0===C?i=a=0:1===C?(i=0,a=b-g):(i=C-2,a=v(f(s(e),0),b-g)),b+i-a>h)throw TypeError(_);for(l=c(y,a),d=0;d<a;d++)m=g+d,m in y&&u(l,d,y[m]);if(l.length=a,i<a){for(d=g;d<b-a;d++)m=d+a,p=d+i,m in y?y[p]=y[m]:delete y[p];for(d=b;d>b-a+i;d--)delete y[d-1]}else if(i>a)for(d=b-a;d>g;d--)m=d+a-1,p=d+i-1,m in y?y[p]=y[m]:delete y[p];for(d=0;d<i;d++)y[d+g]=arguments[d+2];return y.length=b-a+i,l}})},a70a:function(t,e,i){},be46:function(t,e,i){},c109:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"form"}},[i("Header1",{staticClass:"header"}),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"form_container"}},[i("form",[i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("トピック")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input1",attrs:{type:"text",placeholder:"例 : 履修はいつから？"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("項目")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"input1",attrs:{type:"text",id:"category",placeholder:"大学・生活・先輩・editのいづれか"},domProps:{value:t.category},on:{input:function(e){e.target.composing||(t.category=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("内容")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.main,expression:"main"}],staticClass:"input2",attrs:{placeholder:"例 : 16日からです！11日に時間割が出るので、少なくともそれまでは何もしなくてもOK！"},domProps:{value:t.main},on:{input:function(e){e.target.composing||(t.main=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("YouTubeの時間指定付きリンク")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.youtube_link,expression:"youtube_link"}],staticClass:"input1",attrs:{type:"text"},domProps:{value:t.youtube_link},on:{input:function(e){e.target.composing||(t.youtube_link=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("執筆者")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],staticClass:"input1",attrs:{type:"text"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}})]),i("input",{staticClass:"send",attrs:{value:"送信する"},on:{click:function(e){return t.send()}}})])])])],1)},n=[],s=(i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),i("85ef")),r={name:"Form",components:{Header1:s["a"]},data:function(){return{title:"",category:"",main:"",youtube_link:"",author:"",eCategory:"",pass:this.$router.pass}},mounted:function(){this.eCategory=document.getElementById("category"),this.eCategory.addEventListener("blur",this.searchTitle)},methods:{searchTitle:function(){var t=this;if("edit"==this.category){var e=new URLSearchParams;e.append("title",this.title),this.axios.post("https://kzkymur.com/api/topic/",e).then((function(e){t.main=e.data.topic.main})).catch((function(t){window.alert(t)}))}else if("大学"!=this.category&&"生活"!=this.category&&"先輩"!=this.category&&"edit"!=this.category)return void window.alert("項目は大学・生活・先輩・editのいづれかです！")},send:function(){var t=this;if("大学"==this.category||"生活"==this.category||"先輩"==this.category||"edit"==this.category)if(""!=this.topic&&""!=this.main&&""!=this.author){var e=new URLSearchParams;e.append("serial_num",0),e.append("title",this.title),e.append("category",this.category),e.append("main",this.main),e.append("youtube_link",this.youtube_link),e.append("author",this.author),e.append("key",this.pass),this.axios.post("https://kzkymur.com/api/manage_topic/",e).then((function(){window.alert("正しく投稿できました！🎉"),t.title="",t.category="",t.main="",t.youtube_link="",t.author=""})).catch((function(t){window.alert(t)}))}else window.alert("トピック・内容・執筆者は必須項目です！");else window.alert("項目は大学・生活・先輩・editのいづれかです！")}}},o=r,c=(i("e320"),i("2877")),u=Object(c["a"])(o,a,n,!1,null,"0bb532a4",null);e["default"]=u.exports},c975:function(t,e,i){"use strict";var a=i("23e7"),n=i("4d64").indexOf,s=i("a640"),r=i("ae40"),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,u=s("indexOf"),l=r("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:c||!u||!l},{indexOf:function(t){return c?o.apply(this,arguments)||0:n(this,t,arguments.length>1?arguments[1]:void 0)}})},d1a2:function(t,e,i){"use strict";var a=i("470c"),n=i.n(a);n.a},d664:function(t,e,i){"use strict";var a=i("3e48"),n=i.n(a);n.a},dfa2:function(t,e,i){},e254:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"question"}},[i("Header1",{staticClass:"header"}),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"form_container"}},[i("form",[i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("トピック")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input1",attrs:{type:"text",placeholder:"例 : 履修はいつから？"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("項目")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"input1",attrs:{type:"text",placeholder:"履修・生活・先輩のいづれか"},domProps:{value:t.type},on:{input:function(e){e.target.composing||(t.type=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("回答")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.main,expression:"main"}],staticClass:"input2",attrs:{placeholder:"例 : 16日からです！11日に時間割が出るので、少なくともそれまでは何もしなくてもOK！"},domProps:{value:t.main},on:{input:function(e){e.target.composing||(t.main=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("YouTubeの時間指定付きリンク")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.youtube,expression:"youtube"}],staticClass:"input1",attrs:{type:"text"},domProps:{value:t.youtube},on:{input:function(e){e.target.composing||(t.youtube=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("執筆者")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],staticClass:"input1",attrs:{type:"text"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}})]),i("input",{staticClass:"send",attrs:{value:"送信する"},on:{click:function(e){return t.send()}}})])])])],1)},n=[],s=(i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),i("85ef")),r={name:"Question",components:{Header1:s["a"]},data:function(){return{title:"",type:"",main:"",youtube:"",author:""}},methods:{send:function(){var t=new URLSearchParams;t.append("title",this.title),t.append("type",this.type),t.append("main",this.main),t.append("YouTube",this.YouTube),t.append("author",this.author),this.axios.post("https://kzkymur.com/api/topic/",t).then((function(){})).catch((function(t){window.alert(t)}))}}},o=r,c=(i("f7b2"),i("2877")),u=Object(c["a"])(o,a,n,!1,null,"54b2e4c0",null);e["default"]=u.exports},e320:function(t,e,i){"use strict";var a=i("ee38"),n=i.n(a);n.a},ee38:function(t,e,i){},f062:function(t,e,i){"use strict";var a=i("a70a"),n=i.n(a);n.a},f7b2:function(t,e,i){"use strict";var a=i("be46"),n=i.n(a);n.a}}]);
//# sourceMappingURL=about.b1625b49.js.map