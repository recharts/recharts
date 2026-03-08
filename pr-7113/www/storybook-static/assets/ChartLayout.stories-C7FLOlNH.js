import{e}from"./iframe-DujSE0UK.js";import{f as m,h,b as d,A as u}from"./arrayEqualityCheck-D8VjMjvf.js";import{C as f}from"./ChartSizeDimensions-DEiQIg5P.js";import{C as p}from"./ComposedChart-DcASGjDc.js";import{R as g}from"./RechartsHookInspector-CRMB31G9.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C48txAh5.js";import"./immer-DoffRpuJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CZxyCKqo.js";import"./index-BzWEaTVN.js";import"./hooks-BfEZyruk.js";import"./axisSelectors-CplbQtmA.js";import"./d3-scale-DAOxFYCv.js";import"./zIndexSlice-DxmTVpDq.js";import"./renderedTicksSlice-qOFace14.js";import"./CartesianChart-C8FLn_u-.js";import"./chartDataContext-C-qHRTgP.js";import"./CategoricalChart-H-u-kan4.js";import"./index-B_iM8tEy.js";import"./OffsetShower-CF4VV-Vy.js";import"./PlotAreaShower-CLUz5lpa.js";function x(){const r=m(),s=h(),c=d(u);return r==null||s==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:s*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const $={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(f,null),e.createElement(x,null),e.createElement(g,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
