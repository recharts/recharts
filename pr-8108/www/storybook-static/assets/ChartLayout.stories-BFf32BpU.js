import{R as e}from"./iframe-D0jufW3D.js";import{u as m,a as h,d,t as u}from"./zIndexSlice-BoierTw-.js";import{C as g}from"./ChartSizeDimensions-Hip5x1Ro.js";import{C as p}from"./ComposedChart-CHSW6wo4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CwNNBflB.js";import"./throttle-BRaHJfbv.js";import"./index-DuN5ZfYO.js";import"./index-CnAESQjM.js";import"./RechartsWrapper-DTMB1NV8.js";import"./axisSelectors-Dx__qMJ7.js";import"./polarAxisSelectors-eVHebS17.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CK6BpS5A.js";import"./index-Bf3oFgb9.js";import"./index-BopMBIHA.js";import"./renderedTicksSlice-CqZoa4E3.js";import"./index-DpQX8-G9.js";import"./CartesianChart-D_2FRpkc.js";import"./ZIndexPortal-B4KRqmjs.js";import"./CategoricalChart-D4TUwcq3.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const L={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},O=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
