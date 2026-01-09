import{e}from"./iframe-cTJex_Gl.js";import{e as m,f as h,b as d,B as u}from"./arrayEqualityCheck-D0_WBn0Z.js";import{C as f}from"./ChartSizeDimensions-tHZb_dEK.js";import{C as c}from"./ComposedChart-vrFxLduB.js";import{R as g}from"./RechartsHookInspector-BIilfS59.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-GZGysWVv.js";import"./PolarUtils-B2tM_qUT.js";import"./RechartsWrapper-Bm4mCVnL.js";import"./hooks-JY4JcvJg.js";import"./axisSelectors-DKP4jhQb.js";import"./zIndexSlice-o0TZ72x9.js";import"./CartesianChart-sbYYv-2G.js";import"./chartDataContext-CUgM-3fT.js";import"./CategoricalChart-czES7GN9.js";import"./index-DuBUoeGC.js";import"./OffsetShower-DB87M8KV.js";import"./PlotAreaShower-D22yshvn.js";function x(){const s=m(),r=h(),p=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${p}`))}const B={component:c,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(c,{...s},e.createElement(f,null),e.createElement(x,null),e.createElement(g,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
            </ComposedChart>
          </div>
        </div>
      </div>;
  },
  args: {
    width: 500,
    height: 500
  }
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.description}}};const D=["WithAbsolutePositionAndFlexboxParents"];export{t as WithAbsolutePositionAndFlexboxParents,D as __namedExportsOrder,B as default};
