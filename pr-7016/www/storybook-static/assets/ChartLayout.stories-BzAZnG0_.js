import{e}from"./iframe-Ch6AeBvd.js";import{h as m,i as h,b as d,E as u}from"./arrayEqualityCheck-DGZ3teMN.js";import{C as g}from"./ChartSizeDimensions-DPpuKktz.js";import{C as c}from"./ComposedChart-CZ_B4iUN.js";import{R as f}from"./RechartsHookInspector-B8QYXaP3.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DY5EHtdJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DrY4pfOn.js";import"./hooks-CgjYUNQl.js";import"./axisSelectors-Du_flrq7.js";import"./zIndexSlice-iERq52j6.js";import"./renderedTicksSlice-m0x3riPF.js";import"./CartesianChart-Ash0799N.js";import"./chartDataContext-BY2eQbCt.js";import"./CategoricalChart-DYUSwV_N.js";import"./index-Bzb6Yeqp.js";import"./OffsetShower-BBFXLy0z.js";import"./PlotAreaShower-D4ARrmD5.js";function x(){const s=m(),r=h(),p=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${p}`))}const F={component:c,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(c,{...s},e.createElement(g,null),e.createElement(x,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
