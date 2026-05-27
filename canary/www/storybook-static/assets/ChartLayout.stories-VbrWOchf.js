import{e}from"./iframe-Yt5kG58B.js";import{ae as m,ac as h,aa as d,$ as u}from"./arrayEqualityCheck-CmivkQHU.js";import{C as g}from"./ChartSizeDimensions-DfUWMKem.js";import{C as p}from"./ComposedChart-hlF-8j9Q.js";import{R as f}from"./RechartsHookInspector-Cviat0cY.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-unPLvkOT.js";import"./immer-CcDOB7WW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CNwUSHj6.js";import"./index-CCn_KrYt.js";import"./hooks-DdT8YGKV.js";import"./axisSelectors-Cu_RAN-5.js";import"./d3-scale-ClNNBzhr.js";import"./zIndexSlice-pBWW2gMH.js";import"./renderedTicksSlice-CAjiTAMh.js";import"./CartesianChart-CbX7HdzJ.js";import"./chartDataContext-D89eDWXB.js";import"./CategoricalChart-LTsMGKb4.js";import"./index-BGUbPMKQ.js";import"./OffsetShower-DwOtQel9.js";import"./PlotAreaShower-C3hlHEsr.js";function x(){const r=m(),s=h(),c=d(u);return r==null||s==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:s*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const O={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(g,null),e.createElement(x,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.description}}};const q=["WithAbsolutePositionAndFlexboxParents"];export{t as WithAbsolutePositionAndFlexboxParents,q as __namedExportsOrder,O as default};
