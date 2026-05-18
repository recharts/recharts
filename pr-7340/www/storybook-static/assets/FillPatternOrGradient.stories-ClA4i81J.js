import{e as t}from"./iframe-CVCS2awI.js";import{g as s}from"./arrayEqualityCheck-BScHcl7E.js";import{C as m}from"./ComposedChart-CZbWLpnK.js";import{p as l}from"./Page-DPte-9pC.js";import{B as e}from"./Bar-BnlxcmWI.js";import{R as c}from"./RechartsHookInspector-3dEt4e8Z.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ByXJQ66f.js";import"./immer-BGDSirDa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsYjkcUu.js";import"./index-DBY1MSkk.js";import"./hooks-DdU_FuUR.js";import"./axisSelectors-Ci1MJvZY.js";import"./d3-scale-BXP4l8lb.js";import"./zIndexSlice-CYiE3KZh.js";import"./renderedTicksSlice-DEe4uQXq.js";import"./CartesianChart-g3EB1H8Z.js";import"./chartDataContext-CE4uM-kC.js";import"./CategoricalChart-DjXgWEwo.js";import"./Layer-ByxoiXYR.js";import"./tooltipContext-3_9FdrlK.js";import"./ReactUtils-rjXWPyV6.js";import"./Label-DaKOoJ3c.js";import"./Text-CDmz-7H5.js";import"./DOMUtils-DM2Mtfvr.js";import"./ZIndexLayer-qvuGpwS0.js";import"./types-Dgqt75FW.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-B0Gi97Qx.js";import"./isPlainObject-C1Vy2OK5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DLDHpE0T.js";import"./useAnimationId-B8F28VZa.js";import"./Trapezoid-Drv7mFxs.js";import"./Sector-C1cGt--Q.js";import"./Symbols-Dz4m2MlL.js";import"./symbol-DdzOPpJh.js";import"./step-3E9Doowe.js";import"./Curve-CrfOdonX.js";import"./RegisterGraphicalItemId-DdbYzmem.js";import"./ErrorBarContext-DiMABLnG.js";import"./GraphicalItemClipPath-_oXfIigP.js";import"./SetGraphicalItem-2oqi_YeH.js";import"./getZIndexFromUnknown-MJ3xxZ0v.js";import"./graphicalItemSelectors-CGc9iKmK.js";import"./index-D6BiGzwv.js";import"./ChartSizeDimensions-Cz6I6g2_.js";import"./OffsetShower-mSbEp68m.js";import"./PlotAreaShower-Bh-nVQY_.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
