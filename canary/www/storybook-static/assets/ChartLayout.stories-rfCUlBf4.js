import{R as e}from"./iframe-BkOwE2GN.js";import{u as c,a as h,d,r as u}from"./zIndexSlice-Chy-hne0.js";import{C as g}from"./ChartSizeDimensions-DlfCe6fC.js";import{C as p}from"./ComposedChart-BhRq4U8z.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-NLCauKH2.js";import"./get-CjriyByo.js";import"./throttle-DAc5l_dD.js";import"./index-CH1j1Fpi.js";import"./index-ByxKcjsQ.js";import"./RechartsWrapper-CXzR8xrS.js";import"./axisSelectors-DGKEku6n.js";import"./polarAxisSelectors-BvSTSSsq.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-CTw2DMEK.js";import"./index-DLZbiRz5.js";import"./index-B_P6uzST.js";import"./renderedTicksSlice-Dl3anyA4.js";import"./index-nwTT5isQ.js";import"./fillDefinitions-l_67yLXZ.js";import"./CartesianChart-CPFxyOEU.js";import"./chartDataContext-DkGjRnrU.js";import"./CategoricalChart-6jzkaSCX.js";function f(){const r=c(),s=h(),m=d(u);return r==null||s==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:s*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${m}`))}const O={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},$=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
