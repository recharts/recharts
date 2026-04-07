import{e}from"./iframe-u6iaaRfQ.js";import{f as m,h,b as d,A as u}from"./arrayEqualityCheck-CLYylJu6.js";import{C as f}from"./ChartSizeDimensions-CsL5LAMT.js";import{C as p}from"./ComposedChart-CnJe6xFk.js";import{R as g}from"./RechartsHookInspector-ChFSzWj0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-IMCpx0Yt.js";import"./immer-2VVJTBUN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxKNS5Rk.js";import"./index-CIiFpIIw.js";import"./hooks-Dssc-Fg7.js";import"./axisSelectors-krUy4F6I.js";import"./d3-scale-Bj-ttDNW.js";import"./zIndexSlice-DWVvwkZr.js";import"./renderedTicksSlice-B-DvccZo.js";import"./CartesianChart-Dljgkd1w.js";import"./chartDataContext-CfRwcYbq.js";import"./CategoricalChart-CFZJD47L.js";import"./index-BOENtfhc.js";import"./OffsetShower-D3fuh2M8.js";import"./PlotAreaShower-FynNvHOc.js";function x(){const r=m(),s=h(),c=d(u);return r==null||s==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:s*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const $={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(f,null),e.createElement(x,null),e.createElement(g,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
