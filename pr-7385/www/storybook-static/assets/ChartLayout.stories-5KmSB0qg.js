import{c as e}from"./iframe-CmE1Gw1b.js";import{af as m,ad as h,ab as d,Z as u}from"./zIndexSlice-CPvazyt5.js";import{C as g}from"./ChartSizeDimensions-CzeD9T8e.js";import{C as p}from"./ComposedChart-B0hkf2v7.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-D0ucvycs.js";import"./index-Cxu3QwYw.js";import"./index-BRRHmhT0.js";import"./get-Xs9eC5t9.js";import"./resolveDefaultProps-DMnLPor7.js";import"./isWellBehavedNumber-iiy358B8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D8R_Xy2B.js";import"./index-DBnd1KA6.js";import"./index-CVCvCqpB.js";import"./renderedTicksSlice-CPDsz2oQ.js";import"./axisSelectors-DB3YTJ5D.js";import"./d3-scale-CvKKQLFm.js";import"./CartesianChart-CVLVFTZa.js";import"./chartDataContext-BRP4CbYg.js";import"./CategoricalChart-dsp09r-Q.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const L={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.description}}};const O=["WithAbsolutePositionAndFlexboxParents"];export{t as WithAbsolutePositionAndFlexboxParents,O as __namedExportsOrder,L as default};
