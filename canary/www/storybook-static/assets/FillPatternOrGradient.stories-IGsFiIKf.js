import{e as t}from"./iframe-tCDnQpzm.js";import{g as s}from"./arrayEqualityCheck-BqXouEks.js";import{C as m}from"./ComposedChart-Cfho0nKw.js";import{p as l}from"./Page-DPte-9pC.js";import{B as r}from"./Bar-BBUyAmyG.js";import{R as c}from"./RechartsHookInspector-BX_0sbG1.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D6_84qa3.js";import"./immer-BCZknwAa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DYnmCVjv.js";import"./index-CHnjtEz6.js";import"./hooks-WR0dNOnI.js";import"./axisSelectors-Bvp9z5f_.js";import"./d3-scale-QLPPlH86.js";import"./zIndexSlice-1EM6QKoG.js";import"./renderedTicksSlice-CYtMAut8.js";import"./CartesianChart-DTQQkyNB.js";import"./chartDataContext-D8A6GgIn.js";import"./CategoricalChart-9BDeQmwn.js";import"./Layer-DztRGY_N.js";import"./tooltipContext-Do9d3_Hn.js";import"./ReactUtils-C9ZM0Mib.js";import"./Label--ydmIzGM.js";import"./Text-BLCv1zgM.js";import"./DOMUtils-Dbb4XIEW.js";import"./ZIndexLayer-DKwmZsVD.js";import"./types-vkQzCy74.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BJE-jfve.js";import"./useAnimationId-DsF55F49.js";import"./ActiveShapeUtils-fioPLRDw.js";import"./isPlainObject-DxYEqwrD.js";import"./isPlainObject-BSutPv-K.js";import"./RegisterGraphicalItemId-D4uIuwhl.js";import"./ErrorBarContext-NilxMudN.js";import"./GraphicalItemClipPath-BzZEJgMk.js";import"./SetGraphicalItem-DtCToAmA.js";import"./getZIndexFromUnknown-KyVhBI0-.js";import"./graphicalItemSelectors-DN6xgKz8.js";import"./index-CXC3XglB.js";import"./ChartSizeDimensions-CSUyRejl.js";import"./OffsetShower-J7wedS7V.js";import"./PlotAreaShower-DWpQD4iq.js";const it={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const ot=["Fill"];export{e as Fill,ot as __namedExportsOrder,it as default};
