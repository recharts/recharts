import{e}from"./iframe-BnJtTsiG.js";import{f as m,h,b as d,A as u}from"./arrayEqualityCheck-JqF9arvj.js";import{C as f}from"./ChartSizeDimensions-DdW7v9MQ.js";import{C as p}from"./ComposedChart-Wvhceelx.js";import{R as g}from"./RechartsHookInspector-BUkbtt6T.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CNKXDHIv.js";import"./immer-BilgQS7Z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DnFeqk-S.js";import"./index-BR9ucj69.js";import"./hooks-DgbcPaC5.js";import"./axisSelectors-_uj0cu9d.js";import"./d3-scale-RH1gCsj4.js";import"./zIndexSlice-u5N52emx.js";import"./renderedTicksSlice-C2Lx4sh9.js";import"./CartesianChart-yY9oGGmK.js";import"./chartDataContext-Br9_d6ie.js";import"./CategoricalChart-CVrJtZ9b.js";import"./index-BsJ1xsh-.js";import"./OffsetShower-YcN9xEjX.js";import"./PlotAreaShower-B5YeOyEN.js";function x(){const r=m(),s=h(),c=d(u);return r==null||s==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:s*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const $={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(f,null),e.createElement(x,null),e.createElement(g,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
