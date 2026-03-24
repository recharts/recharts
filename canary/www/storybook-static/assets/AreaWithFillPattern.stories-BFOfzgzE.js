import{e as t}from"./iframe-7k9yEKZX.js";import{R as p}from"./arrayEqualityCheck-DyKOzX9B.js";import{C as m}from"./ComposedChart-BPJ8rB-g.js";import{A as r}from"./Area-n-RpczL2.js";import{R as s}from"./RechartsHookInspector-DG9apDpf.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CcSp36mS.js";import"./immer-CHH-Iajc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BvLvkhZj.js";import"./index-DvINa2Wr.js";import"./hooks-D25WTasM.js";import"./axisSelectors-aGv317tx.js";import"./d3-scale-BRwFQSv2.js";import"./zIndexSlice-CzkFlcL3.js";import"./renderedTicksSlice-B6_Lm1vJ.js";import"./CartesianChart-CbJvKkCN.js";import"./chartDataContext-B5LGZgkJ.js";import"./CategoricalChart-2PgGLAlf.js";import"./Curve-CJBWJgGH.js";import"./types-DqFJB-g8.js";import"./step-D_5WqJsr.js";import"./Layer--w1IvBzA.js";import"./ReactUtils-lnChZv_I.js";import"./Label-CVjnPCaB.js";import"./Text-BUDAKONF.js";import"./DOMUtils-DJqsII1h.js";import"./ZIndexLayer-BBlmEaho.js";import"./ActivePoints-FBue9Ogp.js";import"./Dot-D1SVhtLk.js";import"./RegisterGraphicalItemId-B6g2rW0Q.js";import"./GraphicalItemClipPath-wqgrdPJj.js";import"./SetGraphicalItem-DursPdMk.js";import"./useAnimationId-B6Q9Zk2l.js";import"./getRadiusAndStrokeWidthFromDot-eDGGwMEf.js";import"./graphicalItemSelectors-gKgcr4o0.js";import"./index-BKACCO4D.js";import"./ChartSizeDimensions-D1SSOw56.js";import"./OffsetShower-D7759kd2.js";import"./PlotAreaShower-qx9-nPqs.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
