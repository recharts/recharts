import{R as e}from"./iframe-BmCEaXnl.js";import{u as m,a as h,d,t as u}from"./zIndexSlice-CCSErHLO.js";import{C as g}from"./ChartSizeDimensions-DCiigcFW.js";import{C as p}from"./ComposedChart-X5OSzv7C.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CFAPbmi-.js";import"./throttle-qcDxTsLf.js";import"./index-BqP1aJDu.js";import"./index-F6n6DaVK.js";import"./RechartsWrapper-e4k-RA_5.js";import"./axisSelectors-jGKN6-F9.js";import"./polarAxisSelectors-pAXQteq7.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DOe-rCGU.js";import"./index-BTkbJW8j.js";import"./index-B6BvyTbH.js";import"./renderedTicksSlice-2egCQc0E.js";import"./index-C_f_Jppx.js";import"./CartesianChart-r4VMNRon.js";import"./ZIndexPortal-QH_cbCJt.js";import"./CategoricalChart-DB6XzEGw.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const L={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},O=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.description}}};export{t as WithAbsolutePositionAndFlexboxParents,O as __namedExportsOrder,L as default};
