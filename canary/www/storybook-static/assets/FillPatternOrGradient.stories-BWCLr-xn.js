import{e as t}from"./iframe-D0SJPJ1y.js";import{R as s}from"./arrayEqualityCheck-CYS0izrw.js";import{C as m}from"./ComposedChart-CGWtCm1x.js";import{B as e}from"./Bar-DMcU348Z.js";import{R as l}from"./RechartsHookInspector-4NIikMun.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CnSf9MnV.js";import"./immer-BFjNfeIQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DR1v2TsK.js";import"./index-CPz14I3O.js";import"./hooks-V_cOlgcg.js";import"./axisSelectors-Bl05SH9I.js";import"./d3-scale-CYyK-SUf.js";import"./zIndexSlice-CqQsXxK3.js";import"./renderedTicksSlice-oZMg51oo.js";import"./CartesianChart-CwFfh_0J.js";import"./chartDataContext-Jo-HA9ql.js";import"./CategoricalChart-FrfPjT_B.js";import"./Layer-Dax6EhgB.js";import"./tooltipContext-BCgsFGCF.js";import"./ReactUtils-a6BVn4Bt.js";import"./Label-Cf3oENl6.js";import"./Text-CvTZwd3j.js";import"./DOMUtils-DfKOz27u.js";import"./ZIndexLayer-DYNk2l8y.js";import"./types-Cyc_Gww5.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CH3V2Gcs.js";import"./isPlainObject-CjD1Y_nD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dj_IkvMc.js";import"./useAnimationId-wUwzbzyQ.js";import"./Trapezoid-Dz2cKjjq.js";import"./Sector-2V2J5PIx.js";import"./Symbols-Doo8obb_.js";import"./symbol--3m7hGn6.js";import"./step-RKAN_I-J.js";import"./Curve-Cx3Ohe6s.js";import"./RegisterGraphicalItemId-CivjBHhq.js";import"./ErrorBarContext-Bzp3Zzcb.js";import"./GraphicalItemClipPath-637j1oGj.js";import"./SetGraphicalItem-C-583XhE.js";import"./getZIndexFromUnknown-DN1MhQT1.js";import"./graphicalItemSelectors-CeFUDeRv.js";import"./index-CBc708fQ.js";import"./ChartSizeDimensions-ChXleD3h.js";import"./OffsetShower-D49YcvPA.js";import"./PlotAreaShower-BqwlsAkt.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
