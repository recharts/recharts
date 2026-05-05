import{e as t}from"./iframe-r2w7kZeJ.js";import{R as s}from"./arrayEqualityCheck-0L0A4nkz.js";import{C as m}from"./ComposedChart-LwEwWDis.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-l8My8NWN.js";import{R as c}from"./RechartsHookInspector-DcB-Xcfd.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-EjMTnW0n.js";import"./immer-CfvCTpDj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-1HJqk7Yh.js";import"./index-W-AgMbp-.js";import"./hooks-B_Z23ri5.js";import"./axisSelectors-CJgn9_ry.js";import"./d3-scale-CTtR7bXz.js";import"./zIndexSlice-DqYPZFIv.js";import"./renderedTicksSlice-B-NBeGNG.js";import"./CartesianChart-BFAKYLf8.js";import"./chartDataContext-BjsyC2cu.js";import"./CategoricalChart-Beyzarg4.js";import"./Layer-CMwqxUY2.js";import"./tooltipContext-BJiqMGI-.js";import"./ReactUtils-BYDoU0L1.js";import"./Label-m6h3W7WS.js";import"./Text-DLc1wT1a.js";import"./DOMUtils-KJq6QJZu.js";import"./ZIndexLayer-CC246p5z.js";import"./types-ywkvGoUt.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Df9SSVU9.js";import"./isPlainObject--i_1cxYd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DvpuUb1d.js";import"./useAnimationId-BkxSeEj0.js";import"./Trapezoid-BCSEHN2t.js";import"./Sector-D4bQnZgU.js";import"./Symbols-CbDfRlok.js";import"./symbol-JIUkL0GL.js";import"./step-CB3ZoZU9.js";import"./Curve-E_V9yRSe.js";import"./RegisterGraphicalItemId-Bf-Aw6v0.js";import"./ErrorBarContext--RrhajOR.js";import"./GraphicalItemClipPath-uc4YpIA_.js";import"./SetGraphicalItem-C7uPVjvE.js";import"./getZIndexFromUnknown-BaIZSRB8.js";import"./graphicalItemSelectors-Ydq13X9y.js";import"./index-Dof6etCE.js";import"./ChartSizeDimensions-lBZtOA5X.js";import"./OffsetShower-vABa0YEq.js";import"./PlotAreaShower-BZ07GFyt.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
