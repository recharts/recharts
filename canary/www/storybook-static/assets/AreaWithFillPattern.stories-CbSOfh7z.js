import{R as t}from"./iframe-COIGCNXI.js";import{R as p}from"./zIndexSlice-SGGyD0oS.js";import{C as m}from"./ComposedChart-BUtbgPw8.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BV-ksWQk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CZS8aiFv.js";import"./throttle-BlyN22Fr.js";import"./index-NGI2UEpG.js";import"./index-CUG4PNHE.js";import"./RechartsWrapper-CSAoBtxd.js";import"./axisSelectors-BNkJw-2U.js";import"./polarAxisSelectors-BmRQgzqt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-VptsFP1A.js";import"./index-C5of7-FY.js";import"./index-C_FuKoEm.js";import"./renderedTicksSlice-BSSoKuOA.js";import"./index-BPTy_Aa_.js";import"./CartesianChart-CrElt8Ki.js";import"./chartDataContext-oGIvKB_Y.js";import"./CategoricalChart-CDhmqNu9.js";import"./Layer-CTEYWFZQ.js";import"./activeStyles-DPX8m1qG.js";import"./Label-BzUBYLaO.js";import"./Text-BbaXzr-_.js";import"./pageBackground-B1zZiLSr.js";import"./useId-uRdV4O5l.js";import"./ZIndexLayer-CkLN3vho.js";import"./dataEntryStyles-lF4b12oa.js";import"./useAnimationId-C1qK0jXb.js";import"./ActivePoints-C-R45DhW.js";import"./Dot-vDehyzRD.js";import"./types-CFJTQnsm.js";import"./RegisterGraphicalItemId-DZ8oXJnI.js";import"./SetGraphicalItem-D643u_Ng.js";import"./getRadiusAndStrokeWidthFromDot-BWolhaji.js";import"./ActiveShapeUtils-DcPjXX29.js";import"./Curve-C5TSA5DD.js";import"./step-C9LyDlWE.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-DqlQcCPn.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,et as __namedExportsOrder,tt as default};
