import{e}from"./iframe-CcieUljj.js";import{f as m,h,b as d,A as u}from"./arrayEqualityCheck-CBSvOn2m.js";import{C as f}from"./ChartSizeDimensions-C-S9llVm.js";import{C as p}from"./ComposedChart-iK8PeiJH.js";import{R as g}from"./RechartsHookInspector-gpfAdvlL.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DtzB7iWl.js";import"./immer-CRL2VYbe.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CNR_n_x6.js";import"./index-Dbc8u9bF.js";import"./hooks-DPwXI4Gw.js";import"./axisSelectors-Pbek4Jez.js";import"./d3-scale-CoPY6zJ-.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-COf-5-fj.js";import"./renderedTicksSlice-OQ158BwU.js";import"./CartesianChart-OaoDdpk7.js";import"./chartDataContext-CVz5YgWY.js";import"./CategoricalChart-B0CWPrGL.js";import"./index-Ca5GsAAq.js";import"./OffsetShower-B6NxlzmC.js";import"./PlotAreaShower-DQmFSr8w.js";function x(){const r=m(),o=h(),c=d(u);return r==null||o==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:o*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const q={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(f,null),e.createElement(x,null),e.createElement(g,null))))),args:{width:500,height:500}};var s,i,a,n,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
