import{e as t}from"./iframe-B5OZyTLO.js";import{R as s}from"./arrayEqualityCheck-CWhdwSDm.js";import{C as m}from"./ComposedChart-DpUDvMYQ.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-PpirKKhv.js";import{R as c}from"./RechartsHookInspector-_hFKO12C.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CAPxLZ6Q.js";import"./immer-TWt97Mx7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CQQb0kbC.js";import"./index-hV-3VpKL.js";import"./hooks-BezBw8uS.js";import"./axisSelectors-ABOgVma3.js";import"./d3-scale-CN5ZQXr4.js";import"./zIndexSlice-BhJZ8kMU.js";import"./renderedTicksSlice-D_AhA4OM.js";import"./CartesianChart-FhsaLguc.js";import"./chartDataContext-B484Lq8t.js";import"./CategoricalChart-zasF99ZZ.js";import"./Layer-DY3DBIYw.js";import"./tooltipContext-DerfmUVJ.js";import"./ReactUtils-50LnJO-z.js";import"./Label-DrAV5Ysg.js";import"./Text-CpciUZWD.js";import"./DOMUtils-CaAH8jO5.js";import"./ZIndexLayer--mzOMN2C.js";import"./types-CBKdJqtE.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-wCZ0vcum.js";import"./isPlainObject-dgzqLzJz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CluG0cnR.js";import"./useAnimationId-C8kgPVjG.js";import"./Trapezoid-DfDBBk_X.js";import"./Sector-DWNWDgn6.js";import"./Symbols-CYtIKOUS.js";import"./symbol-OBCxgJUM.js";import"./step--d94ZHvF.js";import"./Curve-CZezSHJu.js";import"./RegisterGraphicalItemId-DI_yJ9XE.js";import"./ErrorBarContext-Cy-UI2HL.js";import"./GraphicalItemClipPath-DqNQMvK4.js";import"./SetGraphicalItem-DtNxMT9p.js";import"./getZIndexFromUnknown-C5J_WAv-.js";import"./graphicalItemSelectors-VHFRil1c.js";import"./index-1eVRlG7n.js";import"./ChartSizeDimensions-UHLg_21n.js";import"./OffsetShower-C1QQvoSP.js";import"./PlotAreaShower-Bz0iMrs_.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
