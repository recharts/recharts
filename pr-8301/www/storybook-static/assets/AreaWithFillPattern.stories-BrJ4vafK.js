import{R as t}from"./iframe-B6IWu9YI.js";import{R as p}from"./zIndexSlice-CiiKnRRR.js";import{C as m}from"./ComposedChart-7NLEhX0Q.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BI31Vi0z.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D5gBkMry.js";import"./throttle-BURJLM__.js";import"./index-BTlMcQeh.js";import"./index-BGlqIfcK.js";import"./RechartsWrapper-ut8KRm06.js";import"./axisSelectors-DNbDiKxI.js";import"./polarAxisSelectors-sP0_8T_l.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BnDY_Nfy.js";import"./index-D9tAsY9i.js";import"./index-gbAMyFwS.js";import"./renderedTicksSlice-C5_vrS83.js";import"./index-DqMscQEy.js";import"./fillDefinitions-CycD80fW.js";import"./CartesianChart-CXZ1AepY.js";import"./chartDataContext-CXAoEtMH.js";import"./CategoricalChart-dyk1Sqmj.js";import"./getRadiusAndStrokeWidthFromDot-DmFDmFl9.js";import"./Layer-DH6wa-As.js";import"./dataEntryStyles-B1GQ2fCv.js";import"./Label-DTgwgIlk.js";import"./Text-BO6nkoy7.js";import"./ZIndexLayer-6PrGVGr8.js";import"./ActivePoints-CU2VyTBL.js";import"./Dot-Cj5qq7RO.js";import"./types-CluQiZar.js";import"./activeStyles-BITXl8mO.js";import"./useAnimationId-CU9aT4qK.js";import"./Symbols-BCHMzS19.js";import"./symbol-C2WLAmAq.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-BnKu0Jsk.js";import"./ActiveShapeUtils-Bk4aWoxM.js";import"./Curve-BwM0kF7u.js";import"./step-CBaC3nOj.js";import"./useEffectiveDataKey-B8xnYYq1.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
