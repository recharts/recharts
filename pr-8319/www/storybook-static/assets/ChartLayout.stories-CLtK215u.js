import{R as e}from"./iframe-B9Tl-Ens.js";import{u as c,a as h,d,r as u}from"./zIndexSlice-CeB5DPsb.js";import{C as g}from"./ChartSizeDimensions-SsODyOSd.js";import{C as p}from"./ComposedChart-BkpfzGMq.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dx7qzCwA.js";import"./get-CjriyByo.js";import"./throttle-dfeJw9jR.js";import"./index-DuaVn5It.js";import"./index-DQWwV-s1.js";import"./RechartsWrapper-DeTgaRib.js";import"./axisSelectors-x8C92zXU.js";import"./polarAxisSelectors-C83zEpXU.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Cl0QaiN4.js";import"./index-166nmvSm.js";import"./index-iYKKcn13.js";import"./renderedTicksSlice-BtRpF17f.js";import"./index-fTBi_u0-.js";import"./fillDefinitions-BDEW-tdf.js";import"./CartesianChart-BbmwDwWI.js";import"./chartDataContext-DkV3RH4w.js";import"./CategoricalChart-BLl8H6lt.js";function f(){const r=c(),s=h(),m=d(u);return r==null||s==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:s*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${m}`))}const O={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},$=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
