import{R as e}from"./iframe-yFUZOAXo.js";import{u as c,a as h,d,r as u}from"./zIndexSlice-gBXHaIY6.js";import{C as g}from"./ChartSizeDimensions-DAOZD-IC.js";import{C as p}from"./ComposedChart-CLIGRHzc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B2yJhwFE.js";import"./get-CjriyByo.js";import"./redux-toolkit.esm-D_pQmptz.js";import"./index-CHzPnfIT.js";import"./index-5xbZMWg1.js";import"./RechartsWrapper-Bghi6ZRK.js";import"./axisSelectors-EZDSIF5u.js";import"./polarAxisSelectors-CFbKEyZ8.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-BRWdQdSe.js";import"./index-PETS0UhS.js";import"./index-BK6Ilp-H.js";import"./renderedTicksSlice-CilCeieo.js";import"./index-CtXM72i0.js";import"./fillDefinitions-IzAh6C3K.js";import"./CartesianChart-C-z-JDjQ.js";import"./chartDataContext-BbJwl4x7.js";import"./CategoricalChart-D9q-ZVsT.js";function f(){const r=c(),s=h(),m=d(u);return r==null||s==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:s*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${m}`))}const O={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},$=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
