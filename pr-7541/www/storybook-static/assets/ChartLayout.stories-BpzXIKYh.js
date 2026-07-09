import{R as e}from"./iframe-B_vrQl8R.js";import{j as m,k as h,b as d,A as u}from"./zIndexSlice-Cxwz8Tl-.js";import{C as g}from"./ChartSizeDimensions-CcUYrlp5.js";import{C as p}from"./ComposedChart-yc7O9hvj.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dyk5owXH.js";import"./index-C_xOR2HM.js";import"./index-D5WptIo8.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-I1lUK0_w.js";import"./isWellBehavedNumber-CBzBJL74.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-6qr9rM4_.js";import"./index-DskW-dUs.js";import"./index-HEwSZYID.js";import"./renderedTicksSlice-BE8z1LZo.js";import"./axisSelectors-DWL2EjSK.js";import"./d3-scale-ByBkJlb2.js";import"./CartesianChart-48RP5Lhn.js";import"./chartDataContext-sXI4Ore6.js";import"./CategoricalChart-C5bYZX9f.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const H={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.description}}};const L=["WithAbsolutePositionAndFlexboxParents"];export{t as WithAbsolutePositionAndFlexboxParents,L as __namedExportsOrder,H as default};
