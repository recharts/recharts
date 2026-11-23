import{R as t}from"./iframe-B5lEY8zD.js";import{R as p}from"./zIndexSlice-BgROAb6p.js";import{C as m}from"./ComposedChart-Bet3bhVW.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DA2G0ZMj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bw4esZyQ.js";import"./throttle-B3jfQssg.js";import"./index-DOD6pO5N.js";import"./index-CrxBt4o0.js";import"./RechartsWrapper-Dry7ZWQ8.js";import"./axisSelectors-BghrQiEU.js";import"./polarAxisSelectors-CnEvxLcF.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Be2MBhun.js";import"./index-DK10suvB.js";import"./index-C_OJiFXB.js";import"./renderedTicksSlice-BBBAmkst.js";import"./index-DxvEKk7O.js";import"./fillDefinitions-BYW3BXfQ.js";import"./CartesianChart-BJrH5JsN.js";import"./chartDataContext-BJNaOkd4.js";import"./CategoricalChart-DELNesLI.js";import"./getRadiusAndStrokeWidthFromDot-DgSQ364K.js";import"./Layer-DvqCln2S.js";import"./dataEntryStyles-XQ5o-AIv.js";import"./Label-BcoGvPAa.js";import"./Text-Bpx0HJU1.js";import"./ZIndexLayer-BKjofHlF.js";import"./ActivePoints-BD_17PNW.js";import"./Dot-qGe_2cJR.js";import"./types-DtlUuq-f.js";import"./activeStyles-CCUgVOTa.js";import"./useAnimationId-BR63270P.js";import"./Symbols-CpkCeDJ9.js";import"./symbol-CumbrPds.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-BlbgEltH.js";import"./ActiveShapeUtils-BtGosP0P.js";import"./Curve-Be0fUfaD.js";import"./step-C6UNokWX.js";import"./useEffectiveDataKey-TbJa30kz.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
