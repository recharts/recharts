import{R as e}from"./iframe-Ci96e1sZ.js";import{u as m,a as h,d,H as u}from"./zIndexSlice-B1EQFXas.js";import{C as g}from"./ChartSizeDimensions-BFz2whjq.js";import{C as p}from"./ComposedChart-CsnMi2po.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dnh15uFS.js";import"./index-CPCYaABA.js";import"./index-BOr38y8s.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BzIfhmsg.js";import"./isWellBehavedNumber-CF2GCTfq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DZtweL3y.js";import"./index-7lcQp6iI.js";import"./index-DH9mueDN.js";import"./axisSelectors-Bjs83WTa.js";import"./d3-scale-B0NLrUrx.js";import"./renderedTicksSlice-DNsJLMW0.js";import"./CartesianChart-CCAPJMRK.js";import"./chartDataContext-BYKHEhUl.js";import"./CategoricalChart--GJhAkst.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const B={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.description}}};const L=["WithAbsolutePositionAndFlexboxParents"];export{t as WithAbsolutePositionAndFlexboxParents,L as __namedExportsOrder,B as default};
