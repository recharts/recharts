import{e}from"./iframe-C6Uu7pTN.js";import{f as m,h,b as d,A as u}from"./arrayEqualityCheck-CwnCehta.js";import{C as f}from"./ChartSizeDimensions-Bo_lxHZc.js";import{C as p}from"./ComposedChart-ChY5wym6.js";import{R as g}from"./RechartsHookInspector-DK8LEn3K.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BFs3c8XE.js";import"./immer-BQbVNYZa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CGLJriAG.js";import"./index-86WMnZat.js";import"./hooks-CPOFWC30.js";import"./axisSelectors-CvaRXDpT.js";import"./d3-scale-jTFhmIQC.js";import"./zIndexSlice-TqQJPXuj.js";import"./renderedTicksSlice-BbR9AX3S.js";import"./CartesianChart-Df2fxLuG.js";import"./chartDataContext-78iSRkXw.js";import"./CategoricalChart-DiJF7AWc.js";import"./index-Bw3U1Qlv.js";import"./OffsetShower-CHRjZmG4.js";import"./PlotAreaShower-BfZVYUAY.js";function x(){const r=m(),s=h(),c=d(u);return r==null||s==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:s*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const $={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(f,null),e.createElement(x,null),e.createElement(g,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
