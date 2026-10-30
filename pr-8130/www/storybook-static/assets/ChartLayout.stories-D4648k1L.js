import{R as e}from"./iframe-BmKqhsPF.js";import{u as c,a as h,d,r as u}from"./zIndexSlice-CBQM2Gyg.js";import{C as g}from"./ChartSizeDimensions-CnUvtcEQ.js";import{C as p}from"./ComposedChart-DkiFuqQR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BDqp1YKl.js";import"./throttle-DFLwZbH7.js";import"./index-3u8XkdeO.js";import"./index-BGZm-V5p.js";import"./RechartsWrapper-CdEiQwLq.js";import"./axisSelectors-De-QIQw0.js";import"./polarAxisSelectors-3J3j4TTi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-66RSqjvR.js";import"./index-B3BeYDVW.js";import"./index-BlCA3-m5.js";import"./renderedTicksSlice-1_lrB1iK.js";import"./index-CBz7nTI3.js";import"./fillDefinitions-miIei5Ak.js";import"./CartesianChart-DwN6Hmpg.js";import"./ZIndexPortal-DFoHfC3q.js";import"./CategoricalChart-DDmHhC4k.js";function f(){const r=c(),s=h(),m=d(u);return r==null||s==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:s*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${m}`))}const O={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},$=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
