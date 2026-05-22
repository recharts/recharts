import{e}from"./iframe-BhUxTtiL.js";import{ae as m,ac as h,aa as d,$ as u}from"./arrayEqualityCheck-DppgWusB.js";import{C as g}from"./ChartSizeDimensions-Bic6l-OJ.js";import{C as p}from"./ComposedChart-BMn_6oDC.js";import{R as f}from"./RechartsHookInspector-JMIq0pQS.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BwRhqspK.js";import"./immer-CHCHxlI3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BR1uoXx0.js";import"./index-XjGx_uyE.js";import"./hooks-DR2LEq6I.js";import"./axisSelectors-CJkBbfZc.js";import"./d3-scale-XHTmrGeR.js";import"./zIndexSlice-nXWOo65n.js";import"./renderedTicksSlice-CYNpjUFM.js";import"./CartesianChart-Bbu5UDic.js";import"./chartDataContext-l2E_xhbE.js";import"./CategoricalChart-BpuJQUho.js";import"./index-6wyw6I_N.js";import"./OffsetShower-CD4roSzf.js";import"./PlotAreaShower-CXgcskuB.js";function x(){const r=m(),s=h(),c=d(u);return r==null||s==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:s*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const O={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(g,null),e.createElement(x,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
