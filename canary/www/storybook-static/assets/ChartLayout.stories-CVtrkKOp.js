import{e}from"./iframe-Dv2EI0Ju.js";import{f as m,h,b as d,A as u}from"./arrayEqualityCheck-D1mGNef5.js";import{C as f}from"./ChartSizeDimensions-BOSou-B6.js";import{C as p}from"./ComposedChart-DAlN2hwo.js";import{R as g}from"./RechartsHookInspector-CyibsFS2.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BAehELTf.js";import"./immer-C8dYrQHT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-bNtyFajX.js";import"./index-Bc1bjXU3.js";import"./hooks-CFaXLGcT.js";import"./axisSelectors-DnSj8kaj.js";import"./d3-scale-Bcv8ayB1.js";import"./zIndexSlice-bRjNTWyo.js";import"./renderedTicksSlice-C1FuEPzK.js";import"./CartesianChart-BH7dqpan.js";import"./chartDataContext-BhR7gaS3.js";import"./CategoricalChart-rOoRnQL6.js";import"./index-BQUBjWw-.js";import"./OffsetShower-Df0dFfne.js";import"./PlotAreaShower-CPcJGB3D.js";function x(){const r=m(),s=h(),c=d(u);return r==null||s==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:s*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const $={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(f,null),e.createElement(x,null),e.createElement(g,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
