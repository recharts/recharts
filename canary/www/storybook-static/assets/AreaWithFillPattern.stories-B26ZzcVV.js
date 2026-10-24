import{R as t}from"./iframe-CQih25KR.js";import{R as p}from"./zIndexSlice-BBwd9R4A.js";import{C as m}from"./ComposedChart-D2Az0r5B.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-49nuCsay.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CYod_o09.js";import"./index-lk52KXx5.js";import"./index-DdtFl0i3.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DZXiBHxq.js";import"./isWellBehavedNumber-BZsUlmxg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCMHJsHG.js";import"./axisSelectors-gqm50JPH.js";import"./d3-scale-C8349dF6.js";import"./index-83zVEPqI.js";import"./index-BX29BXND.js";import"./renderedTicksSlice-TriIcOtn.js";import"./index-DY8NIj0D.js";import"./CartesianChart-D5IyTQPM.js";import"./chartDataContext-SrRPyl9F.js";import"./CategoricalChart-dLpz1ZCk.js";import"./Layer-BzMCwaud.js";import"./activeStyles-BLa_G1fN.js";import"./Label-DtKjJWj0.js";import"./Text-ByeKnFJN.js";import"./pageBackground-B-dTuZL1.js";import"./useId-BUhtjdKT.js";import"./useBackwardsCompatibleTheme-Cv0bY4c1.js";import"./ZIndexLayer-C0V9Q93e.js";import"./dataEntryStyles-BMnqm0mo.js";import"./useAnimationId-BuSk-bLT.js";import"./ActivePoints-Bf_gQQVU.js";import"./Dot-ZqJ7ot6M.js";import"./types-NMZqXy0T.js";import"./RegisterGraphicalItemId-BKvpbBB2.js";import"./SetGraphicalItem-51m-LnYN.js";import"./getRadiusAndStrokeWidthFromDot-F_yGfOhs.js";import"./ActiveShapeUtils-Bl37L_si.js";import"./Curve-BPpaKfS5.js";import"./step-BqUGYyr0.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-BJYzr5Gr.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,rt as __namedExportsOrder,et as default};
