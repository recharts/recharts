import{R as e}from"./iframe-CGtTT9aO.js";import{u as m,a as h,d,t as u}from"./zIndexSlice-DkqERUsC.js";import{C as g}from"./ChartSizeDimensions-BAYdfmzG.js";import{C as p}from"./ComposedChart-CtOwOAMH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BOjz-2GT.js";import"./throttle-Cpyd11_g.js";import"./index-D5qFyhva.js";import"./index-BaBVYkzg.js";import"./RechartsWrapper-Bg-qxCCU.js";import"./axisSelectors-B4GsvVbU.js";import"./polarAxisSelectors-C5R6EJHs.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-HCxTFMcs.js";import"./index-DFHlfpO_.js";import"./index-oOofm89c.js";import"./renderedTicksSlice-CvmQK_hy.js";import"./index-fDgmIFeX.js";import"./CartesianChart-BOnMx4gA.js";import"./ZIndexPortal-CtHFHKQR.js";import"./CategoricalChart-BhkaiiYp.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const L={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},O=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.description}}};export{t as WithAbsolutePositionAndFlexboxParents,O as __namedExportsOrder,L as default};
