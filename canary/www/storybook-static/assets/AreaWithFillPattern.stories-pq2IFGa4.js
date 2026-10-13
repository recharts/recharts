import{R as t}from"./iframe-DuosGyDB.js";import{R as p}from"./zIndexSlice-Da09UpSD.js";import{C as m}from"./ComposedChart-kJQ__URY.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DIbNvear.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BFe2F0jb.js";import"./index-BIKpN8wQ.js";import"./index-CkmA4MDq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CFaFAnLx.js";import"./isWellBehavedNumber-BR0iKwBs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DqMyJeth.js";import"./axisSelectors-BhFgqUpp.js";import"./d3-scale-BcfysILW.js";import"./index-Bx3uuCHN.js";import"./index-DB6X8Jkp.js";import"./renderedTicksSlice-Bhnw81l8.js";import"./index-C8gr5WFK.js";import"./CartesianChart-BF7NkNru.js";import"./chartDataContext-Fsi0dBi5.js";import"./CategoricalChart-CnszpMMB.js";import"./Layer-kSYl9qai.js";import"./activeStyles-Cx6m_4O3.js";import"./Label-CD5z-ltE.js";import"./Text-ws-7QaY4.js";import"./pageBackground-BOChA0aI.js";import"./useId-5tXA_KMi.js";import"./useBackwardsCompatibleTheme-EzUoSKUQ.js";import"./ZIndexLayer-B7YuRzj4.js";import"./useAnimationId-DZvkGEgW.js";import"./dataEntryStyles-BoHQtdtS.js";import"./ActivePoints-0tjl7oMt.js";import"./Dot-CVHLTOCE.js";import"./types-DpRgdAcC.js";import"./GraphicalItemClipPath-Bpu4eZkp.js";import"./SetGraphicalItem-Cbz0EDFc.js";import"./getRadiusAndStrokeWidthFromDot-BHE1JVwz.js";import"./ActiveShapeUtils-HElctZzh.js";import"./Curve-BLnV7n0Y.js";import"./step-BE4SoRR0.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-BuRZ7bwL.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
