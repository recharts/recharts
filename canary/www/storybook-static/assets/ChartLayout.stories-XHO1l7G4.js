import{e}from"./iframe-yr43iL0r.js";import{h as m,i as h,b as d,E as u}from"./arrayEqualityCheck-CCQ3u8Vd.js";import{C as g}from"./ChartSizeDimensions-DVhO3wZZ.js";import{C as c}from"./ComposedChart-1KeYqgHX.js";import{R as f}from"./RechartsHookInspector-DBIDewuF.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dq1WM_rK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CBwzaw9q.js";import"./hooks-DV8SPP2s.js";import"./axisSelectors-CxU8esto.js";import"./zIndexSlice-BFVNfIo_.js";import"./renderedTicksSlice-C-Ibv-v0.js";import"./CartesianChart-XyvFTYw0.js";import"./chartDataContext-CzToVTlc.js";import"./CategoricalChart-NU99wwp5.js";import"./index-BF6TeZpk.js";import"./OffsetShower-po89n_GW.js";import"./PlotAreaShower-uj30a7QU.js";function x(){const s=m(),r=h(),p=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${p}`))}const F={component:c,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(c,{...s},e.createElement(g,null),e.createElement(x,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.description}}};const B=["WithAbsolutePositionAndFlexboxParents"];export{t as WithAbsolutePositionAndFlexboxParents,B as __namedExportsOrder,F as default};
