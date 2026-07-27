import{R as e}from"./iframe-C_py9VKy.js";import{u as m,a as h,d,H as u}from"./zIndexSlice-CXPNbLh0.js";import{C as g}from"./ChartSizeDimensions-CSn0wYzx.js";import{C as p}from"./ComposedChart-Dh9zcQ5L.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-y-97qzKM.js";import"./index-om3Avrtj.js";import"./index-DFxAgAdx.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DKxyIA_C.js";import"./isWellBehavedNumber-wktK8CV7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CyYB6xNR.js";import"./index-ConrPCjE.js";import"./index-B6PDA8Su.js";import"./renderedTicksSlice-XRbHFGyF.js";import"./axisSelectors-B-GKTKT_.js";import"./d3-scale-pH2VCnNX.js";import"./CartesianChart-Dc2BthVN.js";import"./chartDataContext-CG11iTCQ.js";import"./CategoricalChart-DJCSwk8E.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const B={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
