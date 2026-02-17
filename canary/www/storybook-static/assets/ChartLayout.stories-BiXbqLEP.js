import{e}from"./iframe-DCHwmqK8.js";import{h as m,i as h,b as d,E as u}from"./arrayEqualityCheck-PCrDa-mZ.js";import{C as g}from"./ChartSizeDimensions-GkZwO762.js";import{C as c}from"./ComposedChart-cpUGiPkE.js";import{R as f}from"./RechartsHookInspector-DqPpRwC6.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-9mPboPW3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dam48Pnw.js";import"./hooks-C5KjLV4a.js";import"./axisSelectors-tq781mpa.js";import"./zIndexSlice-xa-TURHG.js";import"./renderedTicksSlice-DwhsECxN.js";import"./CartesianChart-BDUX0Tg9.js";import"./chartDataContext-F7_MHoey.js";import"./CategoricalChart-CR27zK7v.js";import"./index-DsiXN0IX.js";import"./OffsetShower-C96P7rJy.js";import"./PlotAreaShower-9zl_p26K.js";function x(){const s=m(),r=h(),p=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${p}`))}const F={component:c,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(c,{...s},e.createElement(g,null),e.createElement(x,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
