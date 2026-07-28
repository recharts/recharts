import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{Kn as r,Rn as i,dr as a,qn as o,t as s,u as c,ur as l,zn as u}from"./iframe-BiMB5Acc.js";import{n as d,t as f}from"./ChartSizeDimensions-D_dRh6oU.js";function p(){let e=u(),t=i(),n=a(o);return e==null||t==null?null:m.createElement(`svg`,{width:`100%`,height:`100%`,style:{position:`absolute`,top:0,left:0}},m.createElement(`text`,{x:e*.9,y:t*.9,textAnchor:`end`,dominantBaseline:`hanging`,stroke:`black`},`scale: ${n}`))}var m,h,g,_;e((()=>{m=t(n()),s(),r(),l(),d(),h={component:c,docs:{autodocs:!1},parameters:{docs:{source:{type:`code`}}}},g={render:e=>m.createElement(`div`,{style:{display:`flex`,height:`100vh`}},m.createElement(`div`,{style:{flex:1,display:`flex`,alignItems:`center`,justifyContent:`center`,position:`relative`},className:`spacer-top`},m.createElement(`div`,{style:{position:`absolute`,height:`100%`,width:`100%`,top:`100px`},className:`spacer-left`},m.createElement(c,e,m.createElement(f,null),m.createElement(p,null))))),args:{width:500,height:500}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`https://github.com/recharts/recharts/issues/5477`,...g.parameters?.docs?.description}}},_=[`WithAbsolutePositionAndFlexboxParents`]}))();export{g as WithAbsolutePositionAndFlexboxParents,_ as __namedExportsOrder,h as default};