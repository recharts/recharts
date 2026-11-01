import{R as e}from"./iframe-D34TH6kS.js";import{u as c,a as h,d,r as u}from"./zIndexSlice-DaIxnBgS.js";import{C as g}from"./ChartSizeDimensions-hWkPF81i.js";import{C as p}from"./ComposedChart-LEsvyFPs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C_e5Jx4S.js";import"./throttle-BpT9ifnU.js";import"./index-CbUl4qJT.js";import"./index-BdPMZI3x.js";import"./RechartsWrapper-Dd_PV6Ah.js";import"./axisSelectors-Dy4Zn44Z.js";import"./polarAxisSelectors-CB23D7zz.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DZnn2eaB.js";import"./index-DmQdJSj7.js";import"./index-x328HEKx.js";import"./renderedTicksSlice-BJ7Rgktl.js";import"./index-B0gBzv4y.js";import"./fillDefinitions-C7IVG_LK.js";import"./CartesianChart-DTsOd4db.js";import"./ZIndexPortal-DFRqCkn0.js";import"./CategoricalChart-DeDW5Ok8.js";function f(){const r=c(),s=h(),m=d(u);return r==null||s==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:s*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${m}`))}const O={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},$=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.description}}};export{t as WithAbsolutePositionAndFlexboxParents,$ as __namedExportsOrder,O as default};
