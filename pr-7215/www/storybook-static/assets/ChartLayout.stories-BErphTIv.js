import{c as e}from"./iframe-CE1Ai-kZ.js";import{af as m,ad as h,ab as d,Z as u}from"./zIndexSlice-yWbeh4A5.js";import{C as g}from"./ChartSizeDimensions-DWYp87yo.js";import{C as p}from"./ComposedChart-BkL-CQuh.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DgYhOWDS.js";import"./index-Gozxl0v8.js";import"./index-B1iIDv_0.js";import"./get-mVWjURP_.js";import"./resolveDefaultProps-CmEakyQ-.js";import"./isWellBehavedNumber-Bxf6a22g.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-4e423j6r.js";import"./index-DaGE07U6.js";import"./index-DziNllj1.js";import"./renderedTicksSlice-BQLVMwTH.js";import"./axisSelectors-C9KJ0caj.js";import"./d3-scale-BHF3M1h_.js";import"./string-yHBgcFlJ.js";import"./CartesianChart-Cs0xCG0T.js";import"./chartDataContext-Y7cA5Syy.js";import"./CategoricalChart-BlcXzgR0.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const O={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.description}}};const R=["WithAbsolutePositionAndFlexboxParents"];export{t as WithAbsolutePositionAndFlexboxParents,R as __namedExportsOrder,O as default};
