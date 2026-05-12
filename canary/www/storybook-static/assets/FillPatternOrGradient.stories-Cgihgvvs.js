import{e as t}from"./iframe-1J0v0kJa.js";import{R as s}from"./arrayEqualityCheck-Crr3Dzh6.js";import{C as m}from"./ComposedChart-hk6GI-DP.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-D7KTdFBj.js";import{R as c}from"./RechartsHookInspector-D3XyLt9P.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C05SE_tf.js";import"./immer-ZnQZAws8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-NfAPn5nO.js";import"./index-CooR3W3l.js";import"./hooks-D7UD8X0t.js";import"./axisSelectors-DmWq6GuE.js";import"./d3-scale-WGdCtqiA.js";import"./zIndexSlice-DMwFl-HJ.js";import"./renderedTicksSlice-CcC_3ltP.js";import"./CartesianChart-T051KWch.js";import"./chartDataContext-CLazaXIr.js";import"./CategoricalChart-_SeB5FDZ.js";import"./Layer-BVvsC5_K.js";import"./tooltipContext-DCAa6nAg.js";import"./ReactUtils-DrCtqFWq.js";import"./Label-BoTwLtcO.js";import"./Text-DVd_qj4R.js";import"./DOMUtils-CddqG7G1.js";import"./ZIndexLayer-Bol6PWej.js";import"./types-DbkoSsM0.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DPgm42Av.js";import"./isPlainObject-yfWDawVf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CtnB5yHC.js";import"./useAnimationId-AI_H7XbQ.js";import"./Trapezoid-BQHCtBz1.js";import"./Sector-DrN7HSuk.js";import"./Symbols-B03fqPxI.js";import"./symbol-DdOQHYIO.js";import"./step-D8iwa8wm.js";import"./Curve-MBHSj-Hn.js";import"./RegisterGraphicalItemId-Ds4EEh5p.js";import"./ErrorBarContext-BoDeu_Di.js";import"./GraphicalItemClipPath-AV19Jsyu.js";import"./SetGraphicalItem-CdiSFPyl.js";import"./getZIndexFromUnknown-B-iILyGp.js";import"./graphicalItemSelectors-B5eXLn7d.js";import"./index-tjWZGZoc.js";import"./ChartSizeDimensions-DBgMadMY.js";import"./OffsetShower-L7gF9BZe.js";import"./PlotAreaShower-C_TnXU0T.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
