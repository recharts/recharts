import{R as e}from"./iframe-qOFEdJsq.js";import{u as m,a as h,d,r as u}from"./zIndexSlice-4ZilFo_n.js";import{C as g}from"./ChartSizeDimensions-Can_aVmu.js";import{C as p}from"./ComposedChart-CIu6IO4X.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CFXMkGAW.js";import"./throttle-Bx7bNNV1.js";import"./index-DTQZl9pi.js";import"./index-BeFiGwAW.js";import"./RechartsWrapper-BNMPtHnU.js";import"./axisSelectors-CB4lGYL3.js";import"./polarAxisSelectors-Dp5ZHRD4.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DLjhRaU2.js";import"./index-BDT2LzEy.js";import"./index-DBlkQQbr.js";import"./renderedTicksSlice-ZmKsBH6-.js";import"./index-CBaY9CWO.js";import"./CartesianChart-D-SoV7is.js";import"./ZIndexPortal-BLQG9CdF.js";import"./CategoricalChart-BGKiqihk.js";function f(){const r=m(),s=h(),c=d(u);return r==null||s==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:s*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const L={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},O=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
