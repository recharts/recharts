import{R as e}from"./iframe-DEalUshl.js";import{u as m,a as h,d,t as u}from"./zIndexSlice-CAksOI_1.js";import{C as g}from"./ChartSizeDimensions-D8RuJPDN.js";import{C as p}from"./ComposedChart-CdALL1sF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BRTQsXjp.js";import"./throttle-DufRm-wd.js";import"./index-Bi7Cs1mM.js";import"./index-DdKBddy3.js";import"./RechartsWrapper-BK5G7zbx.js";import"./axisSelectors-DjgJ2Mrx.js";import"./polarAxisSelectors-BYiBdmVV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-R09LkYsV.js";import"./index-XZ5w84xu.js";import"./index-C7wIczSG.js";import"./renderedTicksSlice-f1LuiShq.js";import"./index-DCjef1wh.js";import"./CartesianChart-BhhkInk7.js";import"./ZIndexPortal-CZV1ifs7.js";import"./CategoricalChart-pEhIoip4.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const L={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},O=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
