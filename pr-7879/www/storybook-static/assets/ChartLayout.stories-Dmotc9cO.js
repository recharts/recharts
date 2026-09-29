import{R as e}from"./iframe-VTxubO5w.js";import{u as m,a as h,d,G as u}from"./zIndexSlice-BFYFcuFW.js";import{C as g}from"./ChartSizeDimensions-BhjbrsQ2.js";import{C as p}from"./ComposedChart-CdaYpXwX.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bj7f8bZe.js";import"./index-4Jh92J2Q.js";import"./index-DdjkBMS_.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BFp7OOq4.js";import"./isWellBehavedNumber-yx76n7CA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bsatjkvb.js";import"./axisSelectors-CvnfJ2AM.js";import"./d3-scale-BMdsVvRJ.js";import"./index-DtWT2JaI.js";import"./index-Cr87dMf9.js";import"./renderedTicksSlice-BrmgGQgk.js";import"./index-1-3dFAhM.js";import"./CartesianChart-BDdGXWds.js";import"./chartDataContext-DH5kQpc3.js";import"./CategoricalChart-DxD0BnY1.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const H={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},L=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.description}}};export{t as WithAbsolutePositionAndFlexboxParents,L as __namedExportsOrder,H as default};
