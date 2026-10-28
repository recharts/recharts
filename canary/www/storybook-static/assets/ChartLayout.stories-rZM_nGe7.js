import{R as e}from"./iframe-BmTk4yvk.js";import{u as m,a as h,d,t as u}from"./zIndexSlice-Yn5j7TCZ.js";import{C as g}from"./ChartSizeDimensions-BYP_HAbx.js";import{C as p}from"./ComposedChart-Bc1PW_h6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cn0PCCle.js";import"./throttle-C169ds0A.js";import"./index-iOVTbJVR.js";import"./index-DmmaZxkJ.js";import"./RechartsWrapper-C4oIzQNw.js";import"./axisSelectors-jta8-9EA.js";import"./polarAxisSelectors-DyW5Xsuk.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B_DRoaP4.js";import"./index-D6yCXLHc.js";import"./index-D-9h2rsp.js";import"./renderedTicksSlice-Dl_orwkE.js";import"./index-DOadfo9X.js";import"./CartesianChart-Fep-b6_D.js";import"./ZIndexPortal-CWm5UVGf.js";import"./CategoricalChart-D92RpbLO.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const L={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},O=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
