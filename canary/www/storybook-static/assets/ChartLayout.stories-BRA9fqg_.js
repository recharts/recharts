import{e}from"./iframe-Cr_9Zxyz.js";import{f as m,h,b as d,A as u}from"./arrayEqualityCheck-C67VePae.js";import{C as f}from"./ChartSizeDimensions-BSIBvgzx.js";import{C as p}from"./ComposedChart-BP3-QQ_Z.js";import{R as g}from"./RechartsHookInspector-CkzoI9c0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-TCwXH7Ec.js";import"./immer-C4QSyCgb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CqKKWRfj.js";import"./index-WCTFjGJ3.js";import"./hooks-BpLTq7P8.js";import"./axisSelectors-B1y7r4Cr.js";import"./d3-scale-BBKGKrVC.js";import"./zIndexSlice-DN_TI4P2.js";import"./renderedTicksSlice-CLpIiVNo.js";import"./CartesianChart-CrypXdK_.js";import"./chartDataContext-B_zHpYbg.js";import"./CategoricalChart-Dwl_niiN.js";import"./index-BCUg-3d0.js";import"./OffsetShower-CxfJShSk.js";import"./PlotAreaShower-28Fi8dPq.js";function x(){const r=m(),s=h(),c=d(u);return r==null||s==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:s*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const $={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(f,null),e.createElement(x,null),e.createElement(g,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
