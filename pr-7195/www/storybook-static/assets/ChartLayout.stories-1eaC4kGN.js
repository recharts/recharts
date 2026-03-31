import{e}from"./iframe-Ch1Isql8.js";import{f as m,h,b as d,A as u}from"./arrayEqualityCheck-BCEbDsDx.js";import{C as f}from"./ChartSizeDimensions-Xxd3TXQk.js";import{C as p}from"./ComposedChart-BG01JFWy.js";import{R as g}from"./RechartsHookInspector-DbN8VMTu.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C2WRALEr.js";import"./immer-BTgrVrx0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BHlnvpBC.js";import"./index-BQodkfcp.js";import"./hooks-DIQ-JHwY.js";import"./axisSelectors-0Ej_8yTo.js";import"./d3-scale-CrbEySHr.js";import"./zIndexSlice-CfYpWTyk.js";import"./renderedTicksSlice-B_3Gl1Hk.js";import"./CartesianChart-CM5Qb5gP.js";import"./chartDataContext-jCxwHdJc.js";import"./CategoricalChart-DFR8bKN5.js";import"./index-B9MqbPA_.js";import"./OffsetShower-CEfGPMuj.js";import"./PlotAreaShower-BXMcaFZq.js";function x(){const r=m(),s=h(),c=d(u);return r==null||s==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:s*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const $={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(f,null),e.createElement(x,null),e.createElement(g,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
            </ComposedChart>
          </div>
        </div>
      </div>;
  },
  args: {
    width: 500,
    height: 500
  }
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.description}}};const q=["WithAbsolutePositionAndFlexboxParents"];export{t as WithAbsolutePositionAndFlexboxParents,q as __namedExportsOrder,$ as default};
