import{R as t}from"./iframe-tfZrcrMF.js";import{R as p}from"./zIndexSlice-CC8kCstT.js";import{C as m}from"./ComposedChart-BCjiIJ4o.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BMyj-Gy0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BpCpS2kK.js";import"./throttle-DycvlznN.js";import"./index-CCpPbL-G.js";import"./index-CQW0Ruw4.js";import"./RechartsWrapper-Mi5m4ATr.js";import"./axisSelectors-BkiuLlPZ.js";import"./polarAxisSelectors-D2vFLO2n.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-uLY3we2s.js";import"./index-0VCZupX4.js";import"./index-C00ri7pa.js";import"./renderedTicksSlice-DCheLSnn.js";import"./index-DC_tjhxs.js";import"./fillDefinitions-CQPwZfwM.js";import"./CartesianChart-Cxx6k3Ff.js";import"./chartDataContext-pD1W3H_C.js";import"./CategoricalChart-DGtxkSeD.js";import"./getRadiusAndStrokeWidthFromDot-Ch3PhdMy.js";import"./Layer-ru88AdSr.js";import"./dataEntryStyles-CpzODNOV.js";import"./Label-CrLdB5k3.js";import"./Text-DXjy-RzD.js";import"./ZIndexLayer-DnL-EDkP.js";import"./ActivePoints-BER6C4Du.js";import"./Dot-BulvKgA_.js";import"./types-CWW0D7cm.js";import"./activeStyles-CW3oynl8.js";import"./useAnimationId-CiRiV3_R.js";import"./Symbols-yui_aiRC.js";import"./symbol-ru9lBt2i.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-BPWS4To0.js";import"./ActiveShapeUtils-Mflib2w7.js";import"./Curve-C3wk6TDN.js";import"./step-8uwKBSGh.js";import"./useEffectiveDataKey-Bate5zYb.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
