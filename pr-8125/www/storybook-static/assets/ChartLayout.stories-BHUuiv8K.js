import{R as e}from"./iframe-B3-vagTW.js";import{u as m,a as h,d,t as u}from"./zIndexSlice-ZzyVUAHl.js";import{C as g}from"./ChartSizeDimensions-CgGaxeZT.js";import{C as p}from"./ComposedChart-DWsqb0Fg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-qRvlmwXA.js";import"./throttle-CY8bAEWp.js";import"./index-SDu6d5_I.js";import"./index-DuceAH_t.js";import"./RechartsWrapper-CddNfr5P.js";import"./axisSelectors-HaoK80F7.js";import"./polarAxisSelectors-D6Jg6oqH.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C4523EFb.js";import"./index-D2TNbHS1.js";import"./index-qrs8hmxN.js";import"./renderedTicksSlice-D2e62elM.js";import"./index-Bf39JYYB.js";import"./CartesianChart-B6mp8hDI.js";import"./ZIndexPortal-C2SecuQr.js";import"./CategoricalChart-xcg0VLQw.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const L={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},O=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
