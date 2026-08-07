import{R as e}from"./iframe-DQ5pdRpT.js";import{u as m,a as h,d,H as u}from"./zIndexSlice-DQojUU3D.js";import{C as g}from"./ChartSizeDimensions-CqRQu84P.js";import{C as p}from"./ComposedChart-4NtsiuE-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-j7vxqIWJ.js";import"./index-B42gFx1y.js";import"./index-CKPKUGRw.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C2j2eShk.js";import"./isWellBehavedNumber-DO3SFpF7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper--EivWNjp.js";import"./index-CUdIWJWE.js";import"./index-CUVFW2Mq.js";import"./axisSelectors-BLoeM8Ql.js";import"./d3-scale-CzelId51.js";import"./renderedTicksSlice-DZuwhgdB.js";import"./CartesianChart-DCEWo6vx.js";import"./chartDataContext-BANEa2Gn.js";import"./CategoricalChart-DmEP8iSm.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const B={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
