import{e as t}from"./iframe-OJf-GSLb.js";import{g as s}from"./arrayEqualityCheck-2_Nd0mNT.js";import{C as m}from"./ComposedChart-BWezQ33r.js";import{p as l}from"./Page-DPte-9pC.js";import{B as r}from"./Bar-CjlNP4mB.js";import{R as c}from"./RechartsHookInspector-DjyNDFMe.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BhVQCFaS.js";import"./immer-fAzYVHYH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-3Zay038b.js";import"./index-DjZjz4Db.js";import"./hooks-CH3cPIGX.js";import"./axisSelectors-kxctmjqQ.js";import"./d3-scale-DxGCPbiE.js";import"./zIndexSlice-CRdCk5dL.js";import"./renderedTicksSlice-DYga_drD.js";import"./CartesianChart-CJkqFERC.js";import"./chartDataContext-NT00FYUd.js";import"./CategoricalChart-BCcW9_uy.js";import"./Layer-DtNuGt5z.js";import"./tooltipContext-DOsS-G8m.js";import"./ReactUtils-CyupdVou.js";import"./Label-B3MBaUXp.js";import"./Text-ArxOC8oM.js";import"./DOMUtils-CMlg3GAM.js";import"./ZIndexLayer-BJFmSDw9.js";import"./types-DpddDWMl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-5xuYXul5.js";import"./useAnimationId-Dwrr6l_F.js";import"./ActiveShapeUtils-CU2HJa4X.js";import"./RegisterGraphicalItemId-BFbrCMwR.js";import"./ErrorBarContext-A27a6g1h.js";import"./GraphicalItemClipPath-QzIzaY2E.js";import"./SetGraphicalItem-B_Nz5Xvt.js";import"./getZIndexFromUnknown-DZ34GgUD.js";import"./graphicalItemSelectors-C__wdMz-.js";import"./index-DD4xdMms.js";import"./ChartSizeDimensions-CdI027Rl.js";import"./OffsetShower-BkR-_nsI.js";import"./PlotAreaShower-BECDt9HM.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <pattern id="star" width="10" height="10" patternUnits="userSpaceOnUse">
              <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
            </pattern>
            <pattern id="stripe" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="2" height="4" fill="red" />
            </pattern>
          </defs>
          <Bar dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Bar dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#stripe)" />
          <Bar dataKey="amt" stroke="#8884d8" fillOpacity={1} fill="url(#star)" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const rt=["Fill"];export{e as Fill,rt as __namedExportsOrder,et as default};
