import{R as e}from"./iframe-C9xnj3fa.js";import{u as m,a as h,d,r as u}from"./zIndexSlice-CcurngJa.js";import{C as g}from"./ChartSizeDimensions-D3mMZQzI.js";import{C as p}from"./ComposedChart-CPJRa0Xe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Brqxe2vY.js";import"./throttle-Brv_8OQk.js";import"./index-HR2zHK1s.js";import"./index-CGQL5uib.js";import"./RechartsWrapper-BTsf-RRm.js";import"./axisSelectors-Ci_X7Owa.js";import"./polarAxisSelectors-D4sMq_tB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bt8PJZEG.js";import"./index-jCX_JL39.js";import"./index-DsrYsm3j.js";import"./renderedTicksSlice-w5XdGCx4.js";import"./index-HliY0Ktb.js";import"./CartesianChart-ZuYtKyhz.js";import"./ZIndexPortal-CioIZ4EI.js";import"./CategoricalChart-Dkc5AhoM.js";function f(){const r=m(),s=h(),c=d(u);return r==null||s==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:s*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const L={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},O=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
