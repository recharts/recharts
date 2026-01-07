import{e}from"./iframe-2t9JIeSz.js";import{e as m,f as h,b as d,B as u}from"./arrayEqualityCheck-Ne24Ckb0.js";import{C as f}from"./ChartSizeDimensions-DxYmbnCC.js";import{C as c}from"./ComposedChart-CKj3iGz6.js";import{R as g}from"./RechartsHookInspector-l9P1RfFo.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CwSOlvvS.js";import"./PolarUtils-Bz6vuuVH.js";import"./RechartsWrapper-C_G63Drq.js";import"./hooks-DDv3wssX.js";import"./axisSelectors-ELUvGx1F.js";import"./zIndexSlice-CQpntV3l.js";import"./CartesianChart-DBgS_hM4.js";import"./chartDataContext-CjpiQJqz.js";import"./CategoricalChart-f3TADWMW.js";import"./index-DUuuQEHh.js";import"./OffsetShower-2v-BX8n-.js";import"./PlotAreaShower-D4PK9QSt.js";function x(){const s=m(),r=h(),p=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${p}`))}const B={component:c,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(c,{...s},e.createElement(f,null),e.createElement(x,null),e.createElement(g,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.description}}};const D=["WithAbsolutePositionAndFlexboxParents"];export{t as WithAbsolutePositionAndFlexboxParents,D as __namedExportsOrder,B as default};
