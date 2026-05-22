import{e}from"./iframe-CagDbm-R.js";import{ae as m,ac as h,aa as d,$ as u}from"./arrayEqualityCheck-Bn08yLiN.js";import{C as g}from"./ChartSizeDimensions-DNx0LPdc.js";import{C as p}from"./ComposedChart-CFPuckpi.js";import{R as f}from"./RechartsHookInspector-pMEJlnqX.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BrU5Uy_m.js";import"./immer-DWuco0BF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DdluFIAh.js";import"./index-DXI37oHl.js";import"./hooks-DvlDA_Iq.js";import"./axisSelectors-Cqpe6Z2t.js";import"./d3-scale-BKLsEBZa.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-Tvm87iuX.js";import"./renderedTicksSlice-71Fk0cz1.js";import"./CartesianChart-BXvauOXS.js";import"./chartDataContext-DU5Nphzy.js";import"./CategoricalChart-DAMUlb45.js";import"./index-BDeX6XER.js";import"./OffsetShower-BNTdFgyM.js";import"./PlotAreaShower-B8l1iW5J.js";function x(){const r=m(),o=h(),c=d(u);return r==null||o==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:o*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const q={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(g,null),e.createElement(x,null),e.createElement(f,null))))),args:{width:500,height:500}};var s,i,a,n,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.description}}};const G=["WithAbsolutePositionAndFlexboxParents"];export{t as WithAbsolutePositionAndFlexboxParents,G as __namedExportsOrder,q as default};
