import{R as e}from"./iframe-DnX8r39b.js";import{j as m,k as h,b as d,A as u}from"./zIndexSlice-CdRT6CH7.js";import{C as g}from"./ChartSizeDimensions-CkbCiwpo.js";import{C as p}from"./ComposedChart-B98bfh0U.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-JCKZhQLq.js";import"./index-B59DWSJw.js";import"./index-8CcjFvVe.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-yb31Cz6R.js";import"./isWellBehavedNumber-ChlqVGNf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Sbu3sQZd.js";import"./index-CARiuz8r.js";import"./index-lg-7YqR9.js";import"./renderedTicksSlice-DDGhfVYq.js";import"./axisSelectors-D4OQvXCv.js";import"./d3-scale-B45mdNw5.js";import"./CartesianChart-8TrBr0AL.js";import"./chartDataContext-B2KFL-Nz.js";import"./CategoricalChart-DVOQ2_gX.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const H={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
