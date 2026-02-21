import{e as t}from"./iframe-9V8AjEOx.js";import{R as s}from"./arrayEqualityCheck--JByrSZG.js";import{C as m}from"./ComposedChart-IZ3mT89B.js";import{B as e}from"./Bar-w-pI6B_j.js";import{R as l}from"./RechartsHookInspector-BPTP_PJv.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CUsIIFoU.js";import"./immer-GD2CRReg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CqXbC8Hs.js";import"./index-BMXE6tR4.js";import"./hooks-DNt9wj8m.js";import"./axisSelectors-QruKIcBb.js";import"./d3-scale-Bl0aS6m3.js";import"./zIndexSlice-B9w7kjZW.js";import"./renderedTicksSlice-C4Apcjxw.js";import"./CartesianChart-CpyTtyWF.js";import"./chartDataContext-DJ1KYV-U.js";import"./CategoricalChart-dRG2K9eI.js";import"./Layer-BqC-87gq.js";import"./tooltipContext-DhT2eG4F.js";import"./ReactUtils-D2pkvG7O.js";import"./Label-BTjKNwoq.js";import"./Text-Bl4_Rxhh.js";import"./DOMUtils-BsKMkSa3.js";import"./ZIndexLayer-jMQWKp1h.js";import"./types-O5g7_guk.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BMU98mA9.js";import"./isPlainObject-CxfM663_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSXeln9N.js";import"./useAnimationId-DIbwNcNj.js";import"./Trapezoid-A27zrHNd.js";import"./Sector-BmAUhY_Z.js";import"./Symbols-BY884xTp.js";import"./symbol-CSV3itcb.js";import"./step-gLl9sxps.js";import"./Curve-DFGvX__4.js";import"./RegisterGraphicalItemId-CZx2estc.js";import"./ErrorBarContext-DJx-pzZ-.js";import"./GraphicalItemClipPath-C9Ikc3kX.js";import"./SetGraphicalItem-CKCVtDA0.js";import"./getZIndexFromUnknown-DPChMDIe.js";import"./graphicalItemSelectors-BqP8pNCF.js";import"./index-CwQkTyvb.js";import"./ChartSizeDimensions-CbBegVji.js";import"./OffsetShower-BP30_Vv4.js";import"./PlotAreaShower-BGwj-jTe.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const lt=["Fill"];export{r as Fill,lt as __namedExportsOrder,mt as default};
