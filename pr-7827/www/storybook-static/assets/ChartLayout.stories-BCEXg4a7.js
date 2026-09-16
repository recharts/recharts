import{R as e}from"./iframe-O_zfFb6r.js";import{u as m,a as h,d,G as u}from"./zIndexSlice-CDi6Z2zv.js";import{C as g}from"./ChartSizeDimensions-B5uYQD3g.js";import{C as p}from"./ComposedChart-BifQjRte.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-nfGA0JID.js";import"./index-CpzZNRq1.js";import"./index-F3KKsDmf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cy11K6xZ.js";import"./isWellBehavedNumber-zMKck78V.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DPG1lJEB.js";import"./axisSelectors-Cu-Cxseq.js";import"./d3-scale-CJf0BmNx.js";import"./index-Bs_5gbEM.js";import"./index-6nFN620n.js";import"./renderedTicksSlice-fycCYLaq.js";import"./index-Fqn27s52.js";import"./CartesianChart-DjXROyBm.js";import"./chartDataContext-T_bYBa0C.js";import"./CategoricalChart-Cks6RsKt.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const H={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},L=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
            </ComposedChart>
          </div>
        </div>
      </div>;
  },
  args: {
    width: 500,
    height: 500
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.description}}};export{t as WithAbsolutePositionAndFlexboxParents,L as __namedExportsOrder,H as default};
