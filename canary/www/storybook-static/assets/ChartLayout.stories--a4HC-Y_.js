import{R as e}from"./iframe-7ITK_SeI.js";import{u as c,a as h,d,x as u}from"./zIndexSlice-Bfez01E7.js";import{C as g}from"./ChartSizeDimensions-CfU-dEQ7.js";import{C as p}from"./ComposedChart-CXRmBdio.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DPD-Ehfr.js";import"./throttle-DZAxS36c.js";import"./index-BWOYN4v6.js";import"./index-B6PSRbSm.js";import"./RechartsWrapper-Bg4i1fRK.js";import"./axisSelectors-BYlSNMl6.js";import"./polarAxisSelectors-D1t4qM7h.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CgbIH62T.js";import"./index-CPO6Y0gx.js";import"./index-BX7LvsvC.js";import"./renderedTicksSlice-DWRnvg7c.js";import"./index-icjlISLt.js";import"./fillDefinitions-BLJHfD9l.js";import"./CartesianChart-BIfTf3EX.js";import"./chartDataContext-DsZ1g-wA.js";import"./CategoricalChart-DOHYP0Wg.js";import"./ZIndexPortal-BCW_CUyX.js";function f(){const r=c(),s=h(),m=d(u);return r==null||s==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:s*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${m}`))}const $={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},q=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.description}}};export{t as WithAbsolutePositionAndFlexboxParents,q as __namedExportsOrder,$ as default};
