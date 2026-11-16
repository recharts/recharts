import{R as t}from"./iframe-B7zNIrOO.js";import{R as p}from"./zIndexSlice-BrXa08HH.js";import{C as m}from"./ComposedChart-CwA4XzeT.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-wCNoW1P2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DItvlha8.js";import"./throttle-eF_Q2QNr.js";import"./index-DPky1fKm.js";import"./index-DeW5qBsv.js";import"./RechartsWrapper-BpqvgZcQ.js";import"./axisSelectors-BpHmVUrQ.js";import"./polarAxisSelectors-DMv2prKV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ctmq2SXE.js";import"./index-DvJGiIdF.js";import"./index-CSG1xziR.js";import"./renderedTicksSlice-BaWHA44G.js";import"./index-Bmy_tuVE.js";import"./fillDefinitions-BcvXO95l.js";import"./CartesianChart-DD-p_bEO.js";import"./chartDataContext-BXscOHGM.js";import"./CategoricalChart-eJZPSIID.js";import"./Layer-_oO_qD0a.js";import"./dataEntryStyles-m9rMNboQ.js";import"./Label-Chg26k5h.js";import"./Text-RcA031Tp.js";import"./ZIndexLayer-wE65zH98.js";import"./ActivePoints-hyEey0jz.js";import"./Dot-CPebMAD4.js";import"./types-Byak9pOA.js";import"./activeStyles-CDe2Kb4I.js";import"./useAnimationId-kE9HxpHZ.js";import"./Symbols-FG4gFplx.js";import"./symbol-DWqvgSCA.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CoOgwPlc.js";import"./getRadiusAndStrokeWidthFromDot-BxhyxoF6.js";import"./ActiveShapeUtils-CLU25TzO.js";import"./Curve-CzZYT27h.js";import"./step-BjjeCzgq.js";import"./useEffectiveDataKey-CezGQrGJ.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
