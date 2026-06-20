import{R as e}from"./iframe-CFGBW6xJ.js";import{u as m,a as h,d,E as u}from"./zIndexSlice-XhnqXoNc.js";import{C as g}from"./ChartSizeDimensions-B7dxXrw9.js";import{C as p}from"./ComposedChart-CKhdd1T_.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DtmFdOpm.js";import"./index-vCzC4pRL.js";import"./index-NCfgaf-E.js";import"./get-mKIhZXA3.js";import"./resolveDefaultProps-i0oJ6jVU.js";import"./isWellBehavedNumber-DJD9cKo6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CeVvleXl.js";import"./index-Ce00Lp11.js";import"./index-DR9UVvVc.js";import"./renderedTicksSlice-C1DK2pZn.js";import"./axisSelectors-DdfSIe4x.js";import"./d3-scale-D5-KS2M5.js";import"./CartesianChart-CwzI3k7V.js";import"./chartDataContext-pI-MCrLM.js";import"./CategoricalChart-BnGkeJlY.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const H={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
