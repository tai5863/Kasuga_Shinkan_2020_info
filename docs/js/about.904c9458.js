(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0704":function(t,e,i){},"0845":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"life"}},[i("Header"),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"life_container"}},[t._m(0),i("LifeItem",{attrs:{item_list:t.itemList}})],1),i("div",{attrs:{id:"item_button_container"}},[i("router-link",{attrs:{to:"/study"}},[i("ItemButton01",{staticClass:"item_button"})],1),i("router-link",{attrs:{to:"/senior"}},[i("ItemButton03",{staticClass:"item_button"})],1)],1),i("AddQuestion")],1)],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"life_title_container"},[i("h1",{staticClass:"life_title1"},[t._v("生活")]),i("h2",{staticClass:"life_title2"},[t._v("について")])])}],n=i("0418"),r=i("3971"),o=i("9a68"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"life_item"}},[i("div",{attrs:{id:"item_container"}},t._l(t.itemList,(function(e){return i("div",{key:e.id,staticClass:"topic_container"},[i("label",{attrs:{for:e.id}},[i("h2",{staticClass:"topic"},[t._v(t._s(e.title))])]),i("input",{attrs:{type:"checkbox",id:e.id}}),i("div",{staticClass:"hidden_show"},[i("p",{staticClass:"topic_content"},[t._v(t._s(e.main))]),i("div",{staticClass:"iframe_container"},[e.isYouTube?i("iframe",{attrs:{src:e.youtube_link,frameborder:"0",autoplay:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e()])])])})),0)])},u=[],l={name:"LifeItem",props:{item_list:Array},data:function(){return{itemList:this.item_list}}},d=l,m=(i("6d50"),i("2877")),_=Object(m["a"])(d,c,u,!1,null,"0677f032",null),p=_.exports,h=i("6957"),f={name:"Study",components:{Header:n["a"],ItemButton01:r["a"],ItemButton03:o["a"],LifeItem:p,AddQuestion:h["a"]},props:{life_list:Array},data:function(){return{itemList:this.life_list}},created:function(){this.$router.isPass=!1,this.$router.pass=""}},v=f,y=(i("c202"),Object(m["a"])(v,a,s,!1,null,"6cac85d8",null));e["default"]=y.exports},"0bae":function(t,e,i){},"151c":function(t,e,i){},2243:function(t,e,i){"use strict";var a=i("59e4"),s=i.n(a);s.a},"2fef":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"form"}},[i("Header1",{staticClass:"header"}),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"pass_form_container"}},[i("form",[i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("パスワードを入力してください")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.pass,expression:"pass"}],staticClass:"input1",attrs:{type:"password"},domProps:{value:t.pass},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.next()},input:function(e){e.target.composing||(t.pass=e.target.value)}}})]),i("input",{staticClass:"send",attrs:{value:"送信する",type:"submit"},on:{click:function(e){return t.next()}}})])])])],1)},s=[],n=(i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),i("85ef")),r={name:"Auth",components:{Header1:n["a"]},data:function(){return{pass:""}},methods:{next:function(){var t=this,e=new URLSearchParams;e.append("password",this.pass),this.axios.post("https://kzkymur.com/api/password/",e).then((function(e){t.pass="",t.$router.isPass=e.data.result,t.$router.isPass?(window.alert("正しく認証できました！"),t.$router.pass=e.data.key,t.$router.push("/Authentication_for_committee_member/form")):window.alert("パスワードが正しくありません！")})).catch((function(e){window.alert(e.response.data),t.pass=""}))}}},o=r,c=(i("bfe2"),i("2877")),u=Object(c["a"])(o,a,s,!1,null,"e0c05e3e",null);e["default"]=u.exports},"37ba":function(t,e,i){"use strict";var a=i("b53e"),s=i.n(a);s.a},"48b1":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"senior"}},[i("Header"),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"senior_container"}},[t._m(0),i("SeniorItem",{attrs:{item_list:t.itemList}})],1),i("div",{attrs:{id:"item_button_container"}},[i("router-link",{attrs:{to:"/study"}},[i("ItemButton01",{staticClass:"item_button"})],1),i("router-link",{attrs:{to:"/life"}},[i("ItemButton02",{staticClass:"item_button"})],1)],1),i("AddQuestion")],1)],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"senior_title_container"},[i("h1",{staticClass:"senior_title1"},[t._v("先輩")]),i("h2",{staticClass:"senior_title2"},[t._v("について")])])}],n=i("0418"),r=i("3971"),o=i("d57a"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"senior_item"}},[i("div",{attrs:{id:"item_container"}},t._l(t.itemList,(function(e){return i("div",{key:e.id,staticClass:"topic_container"},[i("label",{attrs:{for:e.id}},[i("h2",{staticClass:"topic"},[t._v(t._s(e.title))])]),i("input",{attrs:{type:"checkbox",id:e.id}}),i("div",{staticClass:"hidden_show"},[i("p",{staticClass:"topic_content"},[t._v(t._s(e.main))]),i("div",{staticClass:"iframe_container"},[e.isYouTube?i("iframe",{attrs:{src:e.youtube_link,frameborder:"0",autoplay:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e()])])])})),0)])},u=[],l={name:"SeniorItem",props:{item_list:Array},data:function(){return{itemList:this.item_list}}},d=l,m=(i("bb30"),i("2877")),_=Object(m["a"])(d,c,u,!1,null,"6ed3aa64",null),p=_.exports,h=i("6957"),f={name:"Study",components:{Header:n["a"],ItemButton01:r["a"],ItemButton02:o["a"],SeniorItem:p,AddQuestion:h["a"]},props:{senior_list:Array},data:function(){return{itemList:this.senior_list}},created:function(){this.$router.isPass=!1,this.$router.pass=""}},v=f,y=(i("7d48"),Object(m["a"])(v,a,s,!1,null,"3b92ec30",null));e["default"]=y.exports},"560f":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"study"}},[i("Header"),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"study_container"}},[t._m(0),i("StudyItem",{attrs:{item_list:t.itemList}})],1),i("div",{attrs:{id:"item_button_container"}},[i("router-link",{attrs:{to:"/life"}},[i("ItemButton02",{staticClass:"item_button"})],1),i("router-link",{attrs:{to:"/senior"}},[i("ItemButton03",{staticClass:"item_button"})],1)],1),i("AddQuestion")],1)],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"study_title_container"},[i("h1",{staticClass:"study_title1"},[t._v("大学")]),i("h2",{staticClass:"study_title2"},[t._v("について")])])}],n=i("0418"),r=i("d57a"),o=i("9a68"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"study_item"}},[i("div",{attrs:{id:"item_container"}},t._l(t.itemList,(function(e){return i("div",{key:e.id,staticClass:"topic_container"},[i("label",{attrs:{for:e.id}},[i("h2",{staticClass:"topic"},[t._v(t._s(e.title))])]),i("input",{attrs:{type:"checkbox",id:e.id}}),i("div",{staticClass:"hidden_show"},[i("p",{staticClass:"topic_content"},[t._v(t._s(e.main))]),i("div",{staticClass:"iframe_container"},[e.isYouTube?i("iframe",{attrs:{src:e.youtube_link,frameborder:"0",autoplay:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e()])])])})),0)])},u=[],l={name:"StudyItem",props:{item_list:Array},data:function(){return{itemList:this.item_list}}},d=l,m=(i("aa1a"),i("2877")),_=Object(m["a"])(d,c,u,!1,null,"2aec3ff4",null),p=_.exports,h=i("6957"),f={name:"Study",components:{Header:n["a"],ItemButton02:r["a"],ItemButton03:o["a"],StudyItem:p,AddQuestion:h["a"]},props:{study_list:Array},data:function(){return{itemList:this.study_list}},created:function(){this.$router.isPass=!1,this.$router.pass=""}},v=f,y=(i("9890"),Object(m["a"])(v,a,s,!1,null,"39da06bd",null));e["default"]=y.exports},"59e4":function(t,e,i){},"6d50":function(t,e,i){"use strict";var a=i("7f5f"),s=i.n(a);s.a},"722b":function(t,e,i){"use strict";var a=i("151c"),s=i.n(a);s.a},"729f":function(t,e,i){},"7d48":function(t,e,i){"use strict";var a=i("82cb"),s=i.n(a);s.a},"7f5f":function(t,e,i){},"82cb":function(t,e,i){},"85ef":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"header1_comp"}},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:i("edbf"),id:"c_logo"}}),a("div",{attrs:{id:"c_page_title_container"}},[a("h2",{attrs:{id:"c_page_title"}},[t._v(t._s(t.title))]),a("h2",{attrs:{id:"c_page_title1"}},[t._v(t._s(t.title1))])])]),a("nav",{staticClass:"nav_for_sections"},[a("ul",{staticClass:"header_ul"},t._l(t.sections,(function(e){return a("li",{key:e.id},[a("router-link",{attrs:{to:"/Authentication_for_committee_member/"+e.class_name,id:e.class_name+"_on"}},[t._v(t._s(e.title))])],1)})),0)])],1)},s=[],n={name:"Header",data:function(){return{title:"春日新歓2020情報Web",title1:"委員会用サイト",sections:[{title:"投稿",class_name:"form"},{title:"質問",class_name:"question"}]}},methods:{}},r=n,o=(i("37ba"),i("2877")),c=Object(o["a"])(r,a,s,!1,null,"70fa5b98",null);e["a"]=c.exports},"8ee5":function(t,e,i){},9890:function(t,e,i){"use strict";var a=i("729f"),s=i.n(a);s.a},aa1a:function(t,e,i){"use strict";var a=i("e2b2"),s=i.n(a);s.a},b53e:function(t,e,i){},bb30:function(t,e,i){"use strict";var a=i("0704"),s=i.n(a);s.a},bfe2:function(t,e,i){"use strict";var a=i("0bae"),s=i.n(a);s.a},c109:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"form"}},[i("Header1",{staticClass:"header"}),i("div",{attrs:{id:"container"}},[t._m(0),i("div",{attrs:{id:"form_container"}},[i("form",[i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("見出し")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input1",attrs:{type:"text",id:"topic",placeholder:"例：履修登録はいつから？"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),i("div",{staticClass:"item_container",attrs:{id:"category_container"}},[i("h2",{staticClass:"form_title"},[t._v("分類")]),i("form",{attrs:{id:"checkbox_container"}},t._l(t.categoryList,(function(e){return i("div",{key:e.key},[i("input",{staticClass:"check",attrs:{type:"radio",name:"category",id:e},domProps:{value:e},on:{click:function(e){return t.judge()}}}),i("p",{staticClass:"category",on:{click:function(i){t.checkControl(e),t.judge()}}},[t._v(t._s(e))])])})),0)]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("本文")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.main,expression:"main"}],staticClass:"input2",attrs:{placeholder:"例 : 16日からです！11日に時間割が出るので、少なくともそれまでは何もしなくてもOK！"},domProps:{value:t.main},on:{input:function(e){e.target.composing||(t.main=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("YouTubeの時間指定付きリンク")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.youtube_link,expression:"youtube_link"}],staticClass:"input1",attrs:{type:"text"},domProps:{value:t.youtube_link},on:{input:function(e){e.target.composing||(t.youtube_link=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("執筆者")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],staticClass:"input1",attrs:{type:"text"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}})]),i("input",{staticClass:"send",attrs:{value:"送信する",type:"submit"},on:{click:function(e){return t.send()}}})])])])],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"explain_container"}},[i("li",[t._v("見出し・項目・本文・執筆者は必須項目です。")]),i("li",[t._v("すでにある見出しを編集または削除したい場合は該当する見出しを入力しeditを選択してください。")]),i("li",[t._v("削除したい場合はもとの本文を削除しdeleteを入力してください。")]),i("li",[t._v("編集・削除いずれの場合も執筆者が一致している必要があります。")]),i("li",[t._v("配信の中で取り上げている内容の場合、そのリンクをYouTubeの時間指定付きリンクに貼ってください。")]),i("li",[t._v("執筆者はフルネームで入力してください。")])])}],n=(i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),i("85ef")),r={name:"Form",components:{Header1:n["a"]},data:function(){return{title:"",category:"",main:"",youtube_link:"",author:"",eCategory:"",pass:this.$router.pass,trueTitle:"",trueAuther:"",categoryList:["大学","生活","先輩","edit"]}},mounted:function(){var t=document.getElementById("topic");t.addEventListener("blur",this.judge)},methods:{checkControl:function(t){var e=document.getElementById(t),i=document.getElementById("category_container"),a=i.category,s=a.value;""!=s&&s==e.value||(e.checked=!e.checked)},setCategory:function(){var t=document.getElementById("checkbox_container"),e=t.category,i=e.value;this.category=i},judge:function(){this.setCategory(),"edit"==this.category&&(""!=this.title?this.searchTitle():window.alert("見出しを入力してください💦"))},searchTitle:function(){var t=this,e=new URLSearchParams;e.append("title",this.title),this.axios.post("https://kzkymur.com/api/topic/",e).then((function(e){t.main=e.data.topic.main,t.trueAuther=e.data.topic.author})).catch((function(){window.alert("この見出しは存在しません😓")}))},send:function(){var t,e=this;if("edit"==this.category&&this.author!=this.trueAuther)return window.alert("執筆者が違います😓"),void(this.author="");if(""!=this.title&&""!=this.category&&""!=this.main&&""!=this.author){if(t="delete"==this.main?confirm("本当に削除しますか？"):confirm("この内容で投稿しますか？"),t){var i=new URLSearchParams;i.append("serial_num",0),i.append("title",this.title),i.append("category",this.category),i.append("main",this.main),i.append("youtube_link",this.youtube_link),i.append("author",this.author),i.append("key",this.pass),this.axios.post("https://kzkymur.com/api/manage_topic/",i).then((function(){"delete"==e.main?window.alert("正しく削除できました！🎉"):window.alert("正しく投稿できました！🎉"),e.title="",e.category="",e.main="",e.youtube_link="",e.author=""})).catch((function(t){window.alert(t)}))}}else window.alert("見出し・分類・本文・執筆者は必須項目です！")}}},o=r,c=(i("2243"),i("2877")),u=Object(c["a"])(o,a,s,!1,null,"282bcbd7",null);e["default"]=u.exports},c202:function(t,e,i){"use strict";var a=i("8ee5"),s=i.n(a);s.a},e254:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"question"}},[i("Header1",{staticClass:"header"}),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"questions_container"}},[i("div",{staticClass:"question",attrs:{id:"study_container"}},[t._m(0),t._l(t.studyList.length,(function(e){return i("div",{key:e,staticClass:"topic_container"},[t.isShow1?i("input",{staticClass:"check",attrs:{type:"checkbox",id:t.studyList[e-1].id}}):t._e(),i("p",{staticClass:"topic_content",on:{click:function(i){return t.checkControl(t.studyList[e-1].id)}}},[t._v(t._s(t.studyList[e-1].main))])])}))],2),i("div",{staticClass:"question",attrs:{id:"life_container"}},[t._m(1),t._l(t.lifeList.length,(function(e){return i("div",{key:e,staticClass:"topic_container"},[t.isShow2?i("input",{staticClass:"check",attrs:{type:"checkbox",id:t.lifeList[e-1].id}}):t._e(),i("p",{staticClass:"topic_content",on:{click:function(i){return t.checkControl(t.lifeList[e-1].id)}}},[t._v(t._s(t.lifeList[e-1].main))])])}))],2),i("div",{staticClass:"question",attrs:{id:"senior_container"}},[t._m(2),t._l(t.seniorList.length,(function(e){return i("div",{key:e,staticClass:"topic_container"},[t.isShow3?i("input",{staticClass:"check",attrs:{type:"checkbox",id:t.seniorList[e-1].id}}):t._e(),i("p",{staticClass:"topic_content",on:{click:function(i){return t.checkControl(t.seniorList[e-1].id)}}},[t._v(t._s(t.seniorList[e-1].main))])])}))],2)]),i("input",{staticClass:"delete",attrs:{value:"削除する",type:"submit"},on:{click:function(e){return t.deleteQuestions()}}}),i("div",{attrs:{id:"form_container"}},[i("form",[i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("見出し")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input1",attrs:{type:"text",placeholder:"例 : 履修はいつから？"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),i("div",{staticClass:"item_container",attrs:{id:"category_container"}},[i("h2",{staticClass:"form_title"},[t._v("分類")]),i("form",{attrs:{id:"checkbox_container"}},t._l(t.categoryList,(function(e){return i("div",{key:e.key},[i("input",{staticClass:"check",attrs:{type:"radio",name:"category",id:e},domProps:{value:e}}),i("p",{staticClass:"category",on:{click:function(i){return t.checkControl(e)}}},[t._v(t._s(e))])])})),0)]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("回答")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.main,expression:"main"}],staticClass:"input2",attrs:{placeholder:"例 : 16日からです！11日に時間割が出るので、少なくともそれまでは何もしなくてもOK！"},domProps:{value:t.main},on:{input:function(e){e.target.composing||(t.main=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("YouTubeの時間指定付きリンク")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.youtube_link,expression:"youtube_link"}],staticClass:"input1",attrs:{type:"text"},domProps:{value:t.youtube_link},on:{input:function(e){e.target.composing||(t.youtube_link=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("執筆者")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],staticClass:"input1",attrs:{type:"text"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}})]),i("input",{staticClass:"send",attrs:{value:"送信する",type:"submit"},on:{click:function(e){return t.send()}}})])])])],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title_container"},[i("h1",{staticClass:"question_title1"},[t._v("大学")]),i("h2",{staticClass:"question_title2"},[t._v("について")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title_container"},[i("h1",{staticClass:"question_title1"},[t._v("生活")]),i("h2",{staticClass:"question_title2"},[t._v("について")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title_container"},[i("h1",{staticClass:"question_title1"},[t._v("先輩")]),i("h2",{staticClass:"question_title2"},[t._v("について")])])}],n=(i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),i("85ef")),r={name:"Question",components:{Header1:n["a"]},data:function(){return{data:"",studyList:[],lifeList:[],seniorList:[],title:"",category:"",main:"",youtube_link:"",author:"",pass:this.$router.pass,isShow1:!1,isShow2:!1,isShow3:!1,deleteArray:[],categoryList:["大学","生活","先輩"]}},created:function(){this.getPost()},methods:{checkControl:function(t){var e=document.getElementById(t),i=document.getElementById("category_container"),a=i.category,s=a.value;""!=s&&s==e.value||(e.checked=!e.checked)},setCategory:function(){var t=document.getElementById("checkbox_container"),e=t.category,i=e.value;this.category=i},judgeChecked:function(t){this.deleteArray=[];for(var e=0;e<t.length;e++){var i=document.getElementById(t[e].id);i.checked&&this.deleteArray.push({main:t[e].main})}},getPost:function(){var t=this;this.axios.get("https://kzkymur.com/api/question/").then((function(e){var i=[],a=[],s=[],n=0,r=0,o=0;t.data=e.data.question;for(var c=0;c<e.data.question.length;c++)"大学"==e.data.question[c].category?(n+=1,i.push(e.data.question[c]),t.studyList=i):"生活"==e.data.question[c].category?(r+=1,a.push(e.data.question[c]),t.lifeList=a):"先輩"==e.data.question[c].category&&(o+=1,s.push(e.data.question[c]),t.seniorList=s);0==n?(t.isShow1=!1,t.studyList=[{main:"質問はありません"}]):t.isShow1=!0,0==r?(t.isShow2=!1,t.lifeList=[{main:"質問はありません"}]):t.isShow2=!0,0==o?(t.isShow3=!1,t.seniorList=[{main:"質問はありません"}]):t.isShow3=!0})).catch((function(t){window.alert(t)}))},selectQuestion:function(t,e){e&&(this.title=t.main,this.category=t.category)},deleteQuestions:function(){var t=this,e=confirm("本当に削除しますか？");if(1==e){this.judgeChecked(this.data);var i=new URLSearchParams;i.append("mode",1),i.append("delete_questions",JSON.stringify(this.deleteArray)),i.append("key",this.pass),this.axios.post("https://kzkymur.com/api/manage_question/",i).then((function(){window.alert("正しく削除できました！😁"),t.getPost()})).catch((function(t){window.alert(t)}))}},send:function(){var t=this;if(this.setCategory(),""!=this.title&&""!=this.category&&""!=this.main&&""!=this.author)if("大学"==this.category||"生活"==this.category||"先輩"==this.category){var e=confirm("この内容で投稿しますか？");if(1==e){var i=new URLSearchParams;i.append("title",this.title),i.append("category",this.category),i.append("question_main",this.title),i.append("main",this.main),i.append("youtube_link",this.youtube_link),i.append("author",this.author),i.append("key",this.pass),this.axios.post("https://kzkymur.com/api/manage_topic/",i).then((function(){window.alert("正しく投稿できました！🎉"),t.title="",t.category="",t.main="",t.youtube_link="",t.author="",t.getPost()})).catch((function(t){window.alert(t)}))}}else window.alert("分類は大学・生活・先輩のいづれかです！");else window.alert("見出し・分類・本文・執筆者は必須項目です！")}}},o=r,c=(i("722b"),i("2877")),u=Object(c["a"])(o,a,s,!1,null,"1c8ad442",null);e["default"]=u.exports},e2b2:function(t,e,i){}}]);
//# sourceMappingURL=about.904c9458.js.map