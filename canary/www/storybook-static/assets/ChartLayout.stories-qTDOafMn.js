import{R as e}from"./iframe-DmqRNFpA.js";import{u as c,a as h,d,r as u}from"./zIndexSlice-B1K-Cx6E.js";import{C as g}from"./ChartSizeDimensions-DtKimjNK.js";import{C as p}from"./ComposedChart-C16lvRll.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BjqyIxlF.js";import"./throttle-DniwHdPI.js";import"./index-DLLiFttT.js";import"./index-DKIkITg9.js";import"./RechartsWrapper-CTNqlU94.js";import"./axisSelectors-CgQoXC7y.js";import"./polarAxisSelectors-DfZjHeTi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-a0YrBx9c.js";import"./index-DugFJa8I.js";import"./index-D2BlTs7T.js";import"./renderedTicksSlice-rJsNFgC5.js";import"./index-7-eYjlBn.js";import"./fillDefinitions-D0KLDOLI.js";import"./CartesianChart-DvjgB_s_.js";import"./chartDataContext-7iFWy2pv.js";import"./CategoricalChart-BK3tVtDO.js";function f(){const r=c(),s=h(),m=d(u);return r==null||s==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:s*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${m}`))}const O={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},$=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
