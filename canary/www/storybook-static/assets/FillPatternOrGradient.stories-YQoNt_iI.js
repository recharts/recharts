import{e as t}from"./iframe-KW6q1dC8.js";import{R as s}from"./arrayEqualityCheck-CsL9oElz.js";import{C as m}from"./ComposedChart--6sNek95.js";import{B as e}from"./Bar-CGGeXe-5.js";import{R as l}from"./RechartsHookInspector-DHhOwwId.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DHg0Gmry.js";import"./immer-DJQrWxfT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3hZLvHH.js";import"./index-IRfq0wV0.js";import"./hooks-B87Kmuri.js";import"./axisSelectors-CGmw0y2t.js";import"./d3-scale-VvEjRtef.js";import"./zIndexSlice-BRzCHmzO.js";import"./renderedTicksSlice-4nv5xzpG.js";import"./CartesianChart-e0ar_JeY.js";import"./chartDataContext-BSoSHoQo.js";import"./CategoricalChart-DZLAbsgr.js";import"./Layer-6RQ8uR29.js";import"./tooltipContext-Dx_SB0W0.js";import"./ReactUtils-_GmE1-On.js";import"./Label-Bmj0n5iK.js";import"./Text-BNRPp-95.js";import"./DOMUtils-0gZHvISx.js";import"./ZIndexLayer-w4JJl7sJ.js";import"./types-Dwy1lCB-.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CDAKapsu.js";import"./isPlainObject-j8d21_8Z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C2IbtLxi.js";import"./useAnimationId-D6KMdx62.js";import"./Trapezoid-DNVzy1-l.js";import"./Sector-CjdyVVOd.js";import"./Symbols-BNAk55Bs.js";import"./symbol-5c1t0HLC.js";import"./step-B042Wr1e.js";import"./Curve-DF4GvF_O.js";import"./RegisterGraphicalItemId-YsmU15H8.js";import"./ErrorBarContext-DmVYT152.js";import"./GraphicalItemClipPath-C4dlV5mW.js";import"./SetGraphicalItem-BYLwEs4Z.js";import"./getZIndexFromUnknown-BPIwbzfM.js";import"./graphicalItemSelectors-BUu0Du50.js";import"./index-8EwdUQHQ.js";import"./ChartSizeDimensions-RgqfN5JQ.js";import"./OffsetShower-BWgPsPSu.js";import"./PlotAreaShower-BcdTxtG3.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
