import{e as t}from"./iframe-D_8UNJGJ.js";import{R as s}from"./arrayEqualityCheck-DLi0Ag40.js";import{C as m}from"./ComposedChart-D_1Rjk4a.js";import{B as e}from"./Bar-wx-KcuPZ.js";import{R as l}from"./RechartsHookInspector-DqWSEPyK.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B5V57fEA.js";import"./immer-DgVi67O2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CeUnYUBi.js";import"./index-CjxbrGoj.js";import"./hooks-BZrhZ7vg.js";import"./axisSelectors-CS_KlM3N.js";import"./d3-scale-DRFIPlHa.js";import"./zIndexSlice-B5sMKRff.js";import"./renderedTicksSlice-DMlkCP1f.js";import"./CartesianChart-6BHGgpGM.js";import"./chartDataContext-ClhoRpui.js";import"./CategoricalChart-DcPua93T.js";import"./Layer-CSFY2JoB.js";import"./tooltipContext-eEAXwUon.js";import"./ReactUtils-lBfKzFjL.js";import"./Label-fZtmoCeO.js";import"./Text-BpbKY-ox.js";import"./DOMUtils-Dbz4rk_T.js";import"./ZIndexLayer-B2K1T5O_.js";import"./types-DAVY4nYI.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CXuAv7RR.js";import"./isPlainObject-CmeHN-q2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CviW58v0.js";import"./useAnimationId-BTJ6QCKz.js";import"./Trapezoid-BoP7ymTd.js";import"./Sector-BL-LF7sA.js";import"./Symbols-CHCjzVCk.js";import"./symbol-bY4o9tnw.js";import"./step-CSwA1lmy.js";import"./Curve-ICQj_4TC.js";import"./RegisterGraphicalItemId-DLMmL-q8.js";import"./ErrorBarContext-F8JTwXXl.js";import"./GraphicalItemClipPath-BRXvyRUx.js";import"./SetGraphicalItem-CMT6Fqt6.js";import"./getZIndexFromUnknown-BWHKvXX8.js";import"./graphicalItemSelectors-BOA5vPJ_.js";import"./index-CFdITy7w.js";import"./ChartSizeDimensions-CZ_yFPOk.js";import"./OffsetShower-CkWYNF-8.js";import"./PlotAreaShower-iC8rErQ_.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
