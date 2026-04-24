import{e as t}from"./iframe-4M-PkSVA.js";import{R as s}from"./arrayEqualityCheck-9hxUK6as.js";import{C as m}from"./ComposedChart-BNbX-oyy.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-YucOP4EX.js";import{R as c}from"./RechartsHookInspector-Bu2v4BgA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CYaStK-U.js";import"./immer-CY9nZJ0O.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ct_1KIIG.js";import"./index-QhWebp7-.js";import"./hooks-0Lo_6wsQ.js";import"./axisSelectors-DzylQYKT.js";import"./d3-scale-CUJe2CI0.js";import"./zIndexSlice-Bg894_FJ.js";import"./renderedTicksSlice-BOIzxlRf.js";import"./CartesianChart-Cd9DDcz_.js";import"./chartDataContext-D4ebhXUv.js";import"./CategoricalChart-DBff51gh.js";import"./Layer-CSsW14jT.js";import"./tooltipContext-D_B82NQG.js";import"./ReactUtils-CI9blSHi.js";import"./Label-HHw2Wo4F.js";import"./Text-CVSiM3-K.js";import"./DOMUtils-BLTsClHS.js";import"./ZIndexLayer-BqzZgYR4.js";import"./types-BizJXa69.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BtPvL2qu.js";import"./isPlainObject-C0kslINo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B8e1dRmE.js";import"./useAnimationId-AkEyWWXN.js";import"./Trapezoid-DJP_R3rw.js";import"./Sector-DG5p09xu.js";import"./Symbols-BWbej2Re.js";import"./symbol-gex8G6F3.js";import"./step-r2s_c4Hj.js";import"./Curve-DGVbHr3U.js";import"./RegisterGraphicalItemId-D74ncS90.js";import"./ErrorBarContext-B-CC6fNm.js";import"./GraphicalItemClipPath-ClTLLJGZ.js";import"./SetGraphicalItem-BO1ROXvb.js";import"./getZIndexFromUnknown-CxMiEiEl.js";import"./graphicalItemSelectors-BTk3Cb8i.js";import"./index-1NSbHYzy.js";import"./ChartSizeDimensions-CyhagkHh.js";import"./OffsetShower-D5VKQHJL.js";import"./PlotAreaShower-CwVyk3um.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
