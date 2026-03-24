import{e as t}from"./iframe-Be0JMHKG.js";import{R as p}from"./arrayEqualityCheck-EyQ3L5Ga.js";import{C as m}from"./ComposedChart-CGSNhVQA.js";import{A as r}from"./Area-CT10AfpL.js";import{R as s}from"./RechartsHookInspector-L4PsTFM9.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-P4FnSb9y.js";import"./immer-CtKQQ-wS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BN1eXA1J.js";import"./index-C3PHkgdT.js";import"./hooks-xrwIZsei.js";import"./axisSelectors-C9mh9qYD.js";import"./d3-scale-DcVoBlH3.js";import"./zIndexSlice-Dprd7Xhy.js";import"./renderedTicksSlice-Z7QNJQ_Y.js";import"./CartesianChart-DHx86xgd.js";import"./chartDataContext-BmO3bTO_.js";import"./CategoricalChart-Cj__GJYp.js";import"./Curve-X4p0VWII.js";import"./types-BE6ispln.js";import"./step-HmHdlQax.js";import"./Layer-Ce00NG_9.js";import"./ReactUtils-BDRjtMGi.js";import"./Label-CgKr6rFd.js";import"./Text-Bbi69GeO.js";import"./DOMUtils-xnRjlpdc.js";import"./ZIndexLayer-C2oM15Rp.js";import"./ActivePoints-HPxaPMrx.js";import"./Dot-LgYL-L_X.js";import"./RegisterGraphicalItemId-B6mWng-O.js";import"./GraphicalItemClipPath-BI28y9oi.js";import"./SetGraphicalItem-owgD-Syr.js";import"./useAnimationId-kpn7-WPo.js";import"./getRadiusAndStrokeWidthFromDot-Cr93TYyi.js";import"./graphicalItemSelectors-j3KvFxjp.js";import"./index-B0wdhlLK.js";import"./ChartSizeDimensions-C6t0D3ol.js";import"./OffsetShower-DAHfT2r_.js";import"./PlotAreaShower-BtjPjtQq.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const et=["FillPattern"];export{e as FillPattern,et as __namedExportsOrder,tt as default};
