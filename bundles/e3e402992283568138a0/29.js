(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1462:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return g}));var s=t(18),a=t.n(s),i=t(87),o=t.n(i),r=t(90),l=t(91),d=t.n(l),p=t(93),c=t(88),u=t(94),b=t(238),h=t(100),m=t(102);class g extends o.a.Component{constructor(e){super(e),a()(this,"_onDisable",async()=>{this.setState({disabling:!0}),await u.b.setValue("enableEventIndexing",null,m.a.DEVICE,!1),await b.a.deleteEventIndex(),this.props.onFinished(),p.a.fire(h.a.ViewUserSettings)}),this.state={disabling:!1}}render(){const e=r.getComponent("views.dialogs.BaseDialog"),n=r.getComponent("elements.Spinner"),t=r.getComponent("views.elements.DialogButtons");return o.a.createElement(e,{onFinished:this.props.onFinished,title:Object(c.a)("Are you sure?")},Object(c.a)("If disabled, messages from encrypted rooms won't appear in search results."),this.state.disabling?o.a.createElement(n,null):o.a.createElement("div",null),o.a.createElement(t,{primaryButton:Object(c.a)("Disable"),onPrimaryButtonClick:this._onDisable,primaryButtonClass:"danger",cancelButtonClass:"warning",onCancel:this.props.onFinished,disabled:this.state.disabling}))}}a()(g,"propTypes",{onFinished:d.a.func.isRequired})}}]);
//# sourceMappingURL=29.js.map