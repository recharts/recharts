import{R as e}from"./iframe-LXaU_yGQ.js";import{u as c,a as h,d,r as u}from"./zIndexSlice-BSsrgEaY.js";import{C as g}from"./ChartSizeDimensions-CVDas7dE.js";import{C as p}from"./ComposedChart-Dk11ZJ3E.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DbWwNOSn.js";import"./throttle-ByKIQNrZ.js";import"./index-DZIymj_T.js";import"./index-C00bVPiJ.js";import"./RechartsWrapper-D3XMumfr.js";import"./axisSelectors-COTFFsL0.js";import"./polarAxisSelectors-Bwd8WsKu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-xVZA29h1.js";import"./index-Cj2wRU1Y.js";import"./index-DCFuZ4eP.js";import"./renderedTicksSlice-bFWdrA3f.js";import"./index-D3Vd1Yho.js";import"./fillDefinitions-GJQeghKS.js";import"./CartesianChart-BiL3U0u_.js";import"./ZIndexPortal-B1CrZPtb.js";import"./CategoricalChart-DH4yc53T.js";function f(){const r=c(),s=h(),m=d(u);return r==null||s==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:s*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${m}`))}const O={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},$=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.description}}};export{t as WithAbsolutePositionAndFlexboxParents,$ as __namedExportsOrder,O as default};
