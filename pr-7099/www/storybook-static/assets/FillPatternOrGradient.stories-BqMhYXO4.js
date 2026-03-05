import{e as t}from"./iframe-Bhf_6EYG.js";import{R as s}from"./arrayEqualityCheck-B5hYgnzz.js";import{C as m}from"./ComposedChart-CXm17D-l.js";import{B as e}from"./Bar-BoLotl3d.js";import{R as l}from"./RechartsHookInspector-oY9r6aPa.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CltYoVM3.js";import"./immer-DsnYViPQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BjPXyIC1.js";import"./index-qC7M-hg-.js";import"./hooks-B-MoHLBQ.js";import"./axisSelectors-Dt9F6ywj.js";import"./d3-scale-BxqYPjsE.js";import"./zIndexSlice-C8FzPb5S.js";import"./renderedTicksSlice-DaDN5hFR.js";import"./CartesianChart-CpaNhZA2.js";import"./chartDataContext-D5Z43mUX.js";import"./CategoricalChart-DSURhBZI.js";import"./Layer-XFtQT-yw.js";import"./tooltipContext-DrWjvVZn.js";import"./ReactUtils-BVVOmEmS.js";import"./Label-CzjtkYX8.js";import"./Text-D28roL_s.js";import"./DOMUtils-ribD7pvn.js";import"./ZIndexLayer-B0zk77US.js";import"./types-B1Me3-i2.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-RLHirw82.js";import"./isPlainObject-DTAcdHTW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGAQXYtP.js";import"./useAnimationId-5DionbmP.js";import"./Trapezoid-DB4UfnHe.js";import"./Sector-DbXwqOky.js";import"./Symbols-BWIj5ibB.js";import"./symbol-DrDNfTYd.js";import"./step-B0zDApE1.js";import"./Curve-CcL59NDu.js";import"./RegisterGraphicalItemId-ama1TJ-6.js";import"./ErrorBarContext-CFfHMS1a.js";import"./GraphicalItemClipPath-kNsFQRgF.js";import"./SetGraphicalItem-Ck1k9tQT.js";import"./getZIndexFromUnknown-S-WMpLto.js";import"./graphicalItemSelectors-Nlwl8Y0A.js";import"./index-BqdYNfEr.js";import"./ChartSizeDimensions-BOmMsXET.js";import"./OffsetShower-syHcU848.js";import"./PlotAreaShower-BiEJY1Iw.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
