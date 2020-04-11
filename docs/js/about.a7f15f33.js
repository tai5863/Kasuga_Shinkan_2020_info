(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0704":function(t,e,i){},"0845":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"life"}},[i("Header"),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"life_container"}},[t._m(0),i("LifeItem",{attrs:{item_list:t.itemList}})],1),i("div",{attrs:{id:"item_button_container"}},[i("router-link",{attrs:{to:"/study"}},[i("ItemButton01",{staticClass:"item_button"})],1),i("router-link",{attrs:{to:"/senior"}},[i("ItemButton03",{staticClass:"item_button"})],1)],1),i("AddQuestion")],1)],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"life_title_container"},[i("h1",{staticClass:"life_title1"},[t._v("生活")]),i("h2",{staticClass:"life_title2"},[t._v("について")])])}],n=i("0418"),r=i("3971"),o=i("9a68"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"life_item"}},[i("div",{attrs:{id:"item_container"}},t._l(t.itemList,(function(e){return i("div",{key:e.id,staticClass:"topic_container"},[i("label",{attrs:{for:e.id}},[i("h2",{staticClass:"topic"},[t._v(t._s(e.title))])]),i("input",{attrs:{type:"checkbox",id:e.id}}),i("div",{staticClass:"hidden_show"},[i("p",{staticClass:"topic_content"},[t._v(t._s(e.main))]),i("div",{staticClass:"iframe_container"},[e.isYouTube?i("iframe",{attrs:{src:e.youtube_link,frameborder:"0",autoplay:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e()])])])})),0)])},u=[],l={name:"LifeItem",props:{item_list:Array},data:function(){return{itemList:this.item_list}}},d=l,m=(i("6d50"),i("2877")),p=Object(m["a"])(d,c,u,!1,null,"0677f032",null),_=p.exports,f=i("6957"),h={name:"Study",components:{Header:n["a"],ItemButton01:r["a"],ItemButton03:o["a"],LifeItem:_,AddQuestion:f["a"]},props:{life_list:Array},data:function(){return{itemList:this.life_list}},created:function(){this.$router.isPass=!1,this.$router.pass=""}},v=h,y=(i("c202"),Object(m["a"])(v,s,a,!1,null,"6cac85d8",null));e["default"]=y.exports},1140:function(t,e,i){},"2fef":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"form"}},[i("Header1",{staticClass:"header"}),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"pass_form_container"}},[i("form",[i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("パスワードを入力してください")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.pass,expression:"pass"}],staticClass:"input1",attrs:{type:"password"},domProps:{value:t.pass},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.send()},input:function(e){e.target.composing||(t.pass=e.target.value)}}})]),i("input",{staticClass:"send",attrs:{value:"送信する"},on:{click:function(e){return t.send()}}})])])])],1)},a=[],n=(i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),i("85ef")),r={name:"Form",components:{Header1:n["a"]},data:function(){return{pass:""}},methods:{send:function(){var t=this,e=new URLSearchParams;e.append("password",this.pass),this.axios.post("https://kzkymur.com/api/password/",e).then((function(e){t.pass="",t.$router.isPass=e.data.result,t.$router.isPass?window.alert("正しく認証できました！"):window.alert("パスワードが正しくありません！"),t.$router.pass=e.data.key,t.$router.push("/Authentication_for_committee_member/form")})).catch((function(e){window.alert(e.response.data),t.pass=""}))}}},o=r,c=(i("fd74"),i("2877")),u=Object(c["a"])(o,s,a,!1,null,"43f92641",null);e["default"]=u.exports},"3e48":function(t,e,i){},"48b1":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"senior"}},[i("Header"),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"senior_container"}},[t._m(0),i("SeniorItem",{attrs:{item_list:t.itemList}})],1),i("div",{attrs:{id:"item_button_container"}},[i("router-link",{attrs:{to:"/study"}},[i("ItemButton01",{staticClass:"item_button"})],1),i("router-link",{attrs:{to:"/life"}},[i("ItemButton02",{staticClass:"item_button"})],1)],1),i("AddQuestion")],1)],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"senior_title_container"},[i("h1",{staticClass:"senior_title1"},[t._v("先輩")]),i("h2",{staticClass:"senior_title2"},[t._v("について")])])}],n=i("0418"),r=i("3971"),o=i("d57a"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"senior_item"}},[i("div",{attrs:{id:"item_container"}},t._l(t.itemList,(function(e){return i("div",{key:e.id,staticClass:"topic_container"},[i("label",{attrs:{for:e.id}},[i("h2",{staticClass:"topic"},[t._v(t._s(e.title))])]),i("input",{attrs:{type:"checkbox",id:e.id}}),i("div",{staticClass:"hidden_show"},[i("p",{staticClass:"topic_content"},[t._v(t._s(e.main))]),i("div",{staticClass:"iframe_container"},[e.isYouTube?i("iframe",{attrs:{src:e.youtube_link,frameborder:"0",autoplay:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e()])])])})),0)])},u=[],l={name:"SeniorItem",props:{item_list:Array},data:function(){return{itemList:this.item_list}}},d=l,m=(i("bb30"),i("2877")),p=Object(m["a"])(d,c,u,!1,null,"6ed3aa64",null),_=p.exports,f=i("6957"),h={name:"Study",components:{Header:n["a"],ItemButton01:r["a"],ItemButton02:o["a"],SeniorItem:_,AddQuestion:f["a"]},props:{senior_list:Array},data:function(){return{itemList:this.senior_list}},created:function(){this.$router.isPass=!1,this.$router.pass=""}},v=h,y=(i("7d48"),Object(m["a"])(v,s,a,!1,null,"3b92ec30",null));e["default"]=y.exports},"560f":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"study"}},[i("Header"),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"study_container"}},[t._m(0),i("StudyItem",{attrs:{item_list:t.itemList}})],1),i("div",{attrs:{id:"item_button_container"}},[i("router-link",{attrs:{to:"/life"}},[i("ItemButton02",{staticClass:"item_button"})],1),i("router-link",{attrs:{to:"/senior"}},[i("ItemButton03",{staticClass:"item_button"})],1)],1),i("AddQuestion")],1)],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"study_title_container"},[i("h1",{staticClass:"study_title1"},[t._v("大学")]),i("h2",{staticClass:"study_title2"},[t._v("について")])])}],n=i("0418"),r=i("d57a"),o=i("9a68"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"study_item"}},[i("div",{attrs:{id:"item_container"}},t._l(t.itemList,(function(e){return i("div",{key:e.id,staticClass:"topic_container"},[i("label",{attrs:{for:e.id}},[i("h2",{staticClass:"topic"},[t._v(t._s(e.title))])]),i("input",{attrs:{type:"checkbox",id:e.id}}),i("div",{staticClass:"hidden_show"},[i("p",{staticClass:"topic_content"},[t._v(t._s(e.main))]),i("div",{staticClass:"iframe_container"},[e.isYouTube?i("iframe",{attrs:{src:e.youtube_link,frameborder:"0",autoplay:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e()])])])})),0)])},u=[],l={name:"StudyItem",props:{item_list:Array},data:function(){return{itemList:this.item_list}}},d=l,m=(i("aa1a"),i("2877")),p=Object(m["a"])(d,c,u,!1,null,"2aec3ff4",null),_=p.exports,f=i("6957"),h={name:"Study",components:{Header:n["a"],ItemButton02:r["a"],ItemButton03:o["a"],StudyItem:_,AddQuestion:f["a"]},props:{study_list:Array},data:function(){return{itemList:this.study_list}},created:function(){this.$router.isPass=!1,this.$router.pass=""}},v=h,y=(i("9890"),Object(m["a"])(v,s,a,!1,null,"39da06bd",null));e["default"]=y.exports},"6d50":function(t,e,i){"use strict";var s=i("7f5f"),a=i.n(s);a.a},"729f":function(t,e,i){},"7d48":function(t,e,i){"use strict";var s=i("82cb"),a=i.n(s);a.a},"7f5f":function(t,e,i){},"82cb":function(t,e,i){},"85ef":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"header1_comp"}},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:i("edbf"),id:"c_logo"}}),s("div",{attrs:{id:"c_page_title_container"}},[s("h2",{attrs:{id:"c_page_title"}},[t._v(t._s(t.title))]),s("h2",{attrs:{id:"c_page_title1"}},[t._v(t._s(t.title1))])])]),s("nav",{staticClass:"nav_for_sections"},[s("ul",{staticClass:"header_ul"},t._l(t.sections,(function(e){return s("li",{key:e.id},[s("router-link",{attrs:{to:"/authentication_for_committee_member/"+e.class_name,id:e.class_name+"_on"}},[t._v(t._s(e.title))])],1)})),0)])],1)},a=[],n={name:"Header",data:function(){return{title:"春日新歓2020情報Web",title1:"委員会用サイト",sections:[{title:"投稿",class_name:"form"},{title:"質問",class_name:"question"}]}},methods:{}},r=n,o=(i("d664"),i("2877")),c=Object(o["a"])(r,s,a,!1,null,"3506c614",null);e["a"]=c.exports},"8ee5":function(t,e,i){},"928c":function(t,e,i){},9890:function(t,e,i){"use strict";var s=i("729f"),a=i.n(s);a.a},a19c:function(t,e,i){},aa1a:function(t,e,i){"use strict";var s=i("e2b2"),a=i.n(s);a.a},bb30:function(t,e,i){"use strict";var s=i("0704"),a=i.n(s);a.a},c109:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"form"}},[i("Header1",{staticClass:"header"}),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"form_container"}},[i("form",[i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("トピック")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input1",attrs:{type:"text",id:"topic",placeholder:"例 : 履修はいつから？"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("項目")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"input1",attrs:{type:"text",id:"category",placeholder:"大学・生活・先輩・editのいづれか"},domProps:{value:t.category},on:{input:function(e){e.target.composing||(t.category=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("内容")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.main,expression:"main"}],staticClass:"input2",attrs:{placeholder:"例 : 16日からです！11日に時間割が出るので、少なくともそれまでは何もしなくてもOK！\n\n※トピックを削除したい場合は項目にedit, 内容にdeleteを入力してください。\n※すでにあるトピックの内容を編集したい場合は項目にeditを入力してください。"},domProps:{value:t.main},on:{input:function(e){e.target.composing||(t.main=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("YouTubeの時間指定付きリンク")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.youtube_link,expression:"youtube_link"}],staticClass:"input1",attrs:{type:"text"},domProps:{value:t.youtube_link},on:{input:function(e){e.target.composing||(t.youtube_link=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("執筆者")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],staticClass:"input1",attrs:{type:"text"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}})]),i("input",{staticClass:"send",attrs:{value:"送信する",type:"submit"},on:{click:function(e){return t.send()}}})])])])],1)},a=[],n=(i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),i("85ef")),r={name:"Form",components:{Header1:n["a"]},data:function(){return{title:"",category:"",main:"",youtube_link:"",author:"",eCategory:"",pass:this.$router.pass,trueTitle:"",trueAuther:""}},mounted:function(){this.eCategory=document.getElementById("category"),this.eCategory.addEventListener("blur",this.searchTitle),this.eTopic=document.getElementById("topic"),this.eTopic.addEventListener("blur",this.judge)},methods:{judge:function(){"edit"==this.category&&this.searchTitle()},searchTitle:function(){var t=this;if("edit"==this.category){var e=new URLSearchParams;e.append("title",this.title),this.axios.post("https://kzkymur.com/api/topic/",e).then((function(e){t.main=e.data.topic.main,t.trueAuther=e.data.topic.author})).catch((function(){window.alert("このトピックは存在しません😓")}))}else if("大学"!=this.category&&"生活"!=this.category&&"先輩"!=this.category&&"edit"!=this.category)return window.alert("項目は大学・生活・先輩・editのいづれかです！"),void(this.category="")},send:function(){var t=this;if("edit"==this.category&&this.author!=this.trueAuther)return window.alert("執筆者が違います😓"),void(this.author="");if(""!=this.title&&""!=this.category&&""!=this.main&&""!=this.author)if("大学"==this.category||"生活"==this.category||"先輩"==this.category||"edit"==this.category){var e=confirm("この内容で投稿しますか？");if(1==e){var i=new URLSearchParams;i.append("serial_num",0),i.append("title",this.title),i.append("category",this.category),i.append("main",this.main),i.append("youtube_link",this.youtube_link),i.append("author",this.author),i.append("key",this.pass),this.axios.post("https://kzkymur.com/api/manage_topic/",i).then((function(){window.alert("正しく投稿できました！🎉"),t.title="",t.category="",t.main="",t.youtube_link="",t.author="",t.getPost()})).catch((function(t){window.alert(t)}))}}else window.alert("項目は大学・生活・先輩のいづれかです！");else window.alert("トピック・項目・内容・執筆者は必須項目です！")}}},o=r,c=(i("c6a6"),i("2877")),u=Object(c["a"])(o,s,a,!1,null,"f1b99610",null);e["default"]=u.exports},c202:function(t,e,i){"use strict";var s=i("8ee5"),a=i.n(s);a.a},c6a6:function(t,e,i){"use strict";var s=i("1140"),a=i.n(s);a.a},c709:function(t,e,i){"use strict";var s=i("a19c"),a=i.n(s);a.a},d664:function(t,e,i){"use strict";var s=i("3e48"),a=i.n(s);a.a},e254:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"question"}},[i("Header1",{staticClass:"header"}),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"questions_container"}},[i("div",{staticClass:"question",attrs:{id:"study_container"}},[t._m(0),t._l(t.studyList.length,(function(e){return i("div",{key:e,staticClass:"topic_container"},[i("p",{staticClass:"topic_content",on:{click:function(i){return t.selectQuestion(t.studyList[e-1],t.isShow1)}}},[t._v(t._s(t.studyList[e-1].main))]),t.isShow1?i("input",{staticClass:"delete",attrs:{value:"削除",type:"submit"},on:{click:function(i){return t.deleteQuestion(t.studyList[e-1])}}}):t._e()])}))],2),i("div",{staticClass:"question",attrs:{id:"life_container"}},[t._m(1),t._l(t.lifeList.length,(function(e){return i("div",{key:e,staticClass:"topic_container"},[i("p",{staticClass:"topic_content",on:{click:function(i){return t.selectQuestion(t.lifeList[e-1],t.isShow2)}}},[t._v(t._s(t.lifeList[e-1].main))]),t.isShow2?i("input",{staticClass:"delete",attrs:{value:"削除",type:"submit"},on:{click:function(i){return t.deleteQuestion(t.lifeList[e-1])}}}):t._e()])}))],2),i("div",{staticClass:"question",attrs:{id:"senior_container"}},[t._m(2),t._l(t.seniorList.length,(function(e){return i("div",{key:e,staticClass:"topic_container"},[i("p",{staticClass:"topic_content",on:{click:function(i){return t.selectQuestion(t.seniorList[e-1],t.isShow3)}}},[t._v(t._s(t.seniorList[e-1].main))]),t.isShow3?i("input",{staticClass:"delete",attrs:{value:"削除",type:"submit"},on:{click:function(i){return t.deleteQuestion(t.seniorList[e-1])}}}):t._e()])}))],2)]),i("div",{attrs:{id:"form_container"}},[i("form",[i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("トピック")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input1",attrs:{type:"text",placeholder:"例 : 履修はいつから？"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("項目")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"input1",attrs:{type:"text",placeholder:"大学・生活・先輩のいづれか"},domProps:{value:t.category},on:{input:function(e){e.target.composing||(t.category=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("回答")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.main,expression:"main"}],staticClass:"input2",attrs:{placeholder:"例 : 16日からです！11日に時間割が出るので、少なくともそれまでは何もしなくてもOK！"},domProps:{value:t.main},on:{input:function(e){e.target.composing||(t.main=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("YouTubeの時間指定付きリンク")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.youtube_link,expression:"youtube_link"}],staticClass:"input1",attrs:{type:"text"},domProps:{value:t.youtube_link},on:{input:function(e){e.target.composing||(t.youtube_link=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("執筆者")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],staticClass:"input1",attrs:{type:"text"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}})]),i("input",{staticClass:"send",attrs:{value:"送信する",type:"submit"},on:{click:function(e){return t.send()}}})])])])],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title_container"},[i("h1",{staticClass:"question_title1"},[t._v("大学")]),i("h2",{staticClass:"question_title2"},[t._v("について")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title_container"},[i("h1",{staticClass:"question_title1"},[t._v("生活")]),i("h2",{staticClass:"question_title2"},[t._v("について")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title_container"},[i("h1",{staticClass:"question_title1"},[t._v("先輩")]),i("h2",{staticClass:"question_title2"},[t._v("について")])])}],n=(i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),i("85ef")),r={name:"Question",components:{Header1:n["a"]},data:function(){return{studyList:[],lifeList:[],seniorList:[],title:"",category:"",main:"",youtube_link:"",author:"",pass:this.$router.pass,isShow1:!1,isShow2:!1,isShow3:!1}},created:function(){this.getPost()},methods:{getPost:function(){var t=this;this.axios.get("https://kzkymur.com/api/question/").then((function(e){for(var i=[],s=[],a=[],n=0,r=0,o=0,c=0;c<e.data.question.length;c++)"大学"==e.data.question[c].category?(n+=1,i.push(e.data.question[c]),t.studyList=i):"生活"==e.data.question[c].category?(r+=1,s.push(e.data.question[c]),t.lifeList=s):"先輩"==e.data.question[c].category&&(o+=1,a.push(e.data.question[c]),t.seniorList=a);0==n?(t.isShow1=!1,t.studyList=[{main:"質問はありません"}]):t.isShow1=!0,0==r?(t.isShow2=!1,t.lifeList=[{main:"質問はありません"}]):t.isShow2=!0,0==o?(t.isShow3=!1,t.seniorList=[{main:"質問はありません"}]):t.isShow3=!0})).catch((function(t){window.alert(t)}))},selectQuestion:function(t,e){e&&(this.title=t.main,this.category=t.category)},deleteQuestion:function(t){var e=this,i=confirm("本当に削除しますか？");if(1==i){var s=new URLSearchParams;s.append("mode",1),s.append("category",t.category),s.append("main",t.main),s.append("key",this.pass),this.axios.post("https://kzkymur.com/api/manage_question/",s).then((function(){window.alert("正しく削除できました！😁"),e.getPost()})).catch((function(t){window.alert(t)}))}},send:function(){var t=this;if(""!=this.title&&""!=this.category&&""!=this.main&&""!=this.author)if("大学"==this.category||"生活"==this.category||"先輩"==this.category){var e=confirm("この内容で投稿しますか？");if(1==e){var i=new URLSearchParams;i.append("title",this.title),i.append("category",this.category),i.append("question_main",this.title),i.append("main",this.main),i.append("youtube_link",this.youtube_link),i.append("author",this.author),i.append("key",this.pass),this.axios.post("https://kzkymur.com/api/manage_topic/",i).then((function(){window.alert("正しく投稿できました！🎉"),t.title="",t.category="",t.main="",t.youtube_link="",t.author="",t.getPost()})).catch((function(t){window.alert(t)}))}}else window.alert("項目は大学・生活・先輩のいづれかです！");else window.alert("トピック・項目・内容・執筆者は必須項目です！")}}},o=r,c=(i("c709"),i("2877")),u=Object(c["a"])(o,s,a,!1,null,"cff8100c",null);e["default"]=u.exports},e2b2:function(t,e,i){},fd74:function(t,e,i){"use strict";var s=i("928c"),a=i.n(s);a.a}}]);
//# sourceMappingURL=about.a7f15f33.js.map