import{R as t}from"./iframe-CjAZXmgk.js";import{R as p}from"./zIndexSlice-DZ6wU0kL.js";import{C as m}from"./ComposedChart-C9HbEoPU.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-6eBRDzAZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-aHpS-uJF.js";import"./index-CXqdHhNs.js";import"./index-D72PX-EN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B3dy_A6W.js";import"./isWellBehavedNumber-CbOfPh0Q.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C1tX5Xq9.js";import"./axisSelectors-DVMe8D3h.js";import"./d3-scale-Cdy5oRLL.js";import"./index-CgP4dGwF.js";import"./index-DoglCRE6.js";import"./renderedTicksSlice-DRvvM2hj.js";import"./index-jRxYEVM9.js";import"./CartesianChart-Bi3Tf3h4.js";import"./chartDataContext-Brj1C6P1.js";import"./CategoricalChart-ChU13xsV.js";import"./Layer-CMYvDThQ.js";import"./activeStyles-BjWwonc4.js";import"./Label-DnpXC07H.js";import"./Text-VSZhuuVN.js";import"./pageBackground-CYQU4eM8.js";import"./useId-UofRKXbz.js";import"./useBackwardsCompatibleTheme-C26HYKO8.js";import"./ZIndexLayer-maUeBX7p.js";import"./useAnimationId-BxmhNVS4.js";import"./dataEntryStyles-BHBmvArk.js";import"./ActivePoints-C5jmgdLT.js";import"./Dot-C4dqO9Kj.js";import"./types-BUTy-eCs.js";import"./GraphicalItemClipPath-uyo9nSDN.js";import"./SetGraphicalItem-D6iWzq9o.js";import"./getRadiusAndStrokeWidthFromDot-B3WoL_Uu.js";import"./ActiveShapeUtils-Lt_dXYUR.js";import"./Curve-BAdd7Cc7.js";import"./step-DNHn4BEu.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-NmC8up5p.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
