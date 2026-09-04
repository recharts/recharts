import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{Jt as r,Kt as i,L as a,P as o,gt as s,pt as c,z as l}from"./zIndexSlice-CfT4cgn7.js";import{n as u,t as d}from"./ComposedChart-CZOHGVI-.js";import{n as f,t as p}from"./ChartSizeDimensions-8BJbez5O.js";function m(){let e=l(),t=a(),n=r(s);return e==null||t==null?null:h.createElement(`svg`,{width:`100%`,height:`100%`,style:{position:`absolute`,top:0,left:0}},h.createElement(`text`,{x:e*.9,y:t*.9,textAnchor:`end`,dominantBaseline:`hanging`,stroke:`black`},`scale: ${n}`))}var h,g,_,v;function y(){return(y=t((()=>{h=e(n()),u(),o(),c(),i(),f(),g={component:d,docs:{autodocs:!1},parameters:{docs:{source:{type:`code`}}}},_={render:e=>h.createElement(`div`,{style:{display:`flex`,height:`100vh`}},h.createElement(`div`,{style:{flex:1,display:`flex`,alignItems:`center`,justifyContent:`center`,position:`relative`},className:`spacer-top`},h.createElement(`div`,{style:{position:`absolute`,height:`100%`,width:`100%`,top:`100px`},className:`spacer-left`},h.createElement(d,e,h.createElement(p,null),h.createElement(m,null))))),args:{width:500,height:500}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div style={{
      display: 'flex',
      height: '100vh'
    }}>
        <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }} className="spacer-top">
          <div style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: '100px'
        }} className="spacer-left">
            <ComposedChart {...args}>
              <ChartSizeDimensions />
              <ShowScale />
            </ComposedChart>
          </div>
        </div>
      </div>;
  },
  args: {
    width: 500,
    height: 500
  }
}`,..._.parameters?.docs?.source},description:{story:`https://github.com/recharts/recharts/issues/5477`,..._.parameters?.docs?.description}}},v=[`WithAbsolutePositionAndFlexboxParents`]})))()}y();export{_ as WithAbsolutePositionAndFlexboxParents,v as __namedExportsOrder,g as default};