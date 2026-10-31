import{R as t}from"./iframe-B0md2XL3.js";import{R as p}from"./zIndexSlice-DA0iP-6p.js";import{C as m}from"./ComposedChart-CunuTAo6.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-C5IqYfeo.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DYFy43g1.js";import"./throttle-Bg4_NSFj.js";import"./index-B6b7n9vZ.js";import"./index-CoDrYRaw.js";import"./RechartsWrapper-CWXf9YtC.js";import"./axisSelectors-CGXaSNKn.js";import"./polarAxisSelectors-EKUmLX1r.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-uqFZU7-w.js";import"./index-B1ySaIl-.js";import"./index-GRpTxPRT.js";import"./renderedTicksSlice-CmqrGULL.js";import"./index-CPY9oK3E.js";import"./fillDefinitions-3Vzegl5l.js";import"./CartesianChart-8QvfRZzW.js";import"./ZIndexPortal-CrQK9kpR.js";import"./CategoricalChart-niTwkvl-.js";import"./Layer-CEcbE5Mj.js";import"./LabelList-CC8uMe5u.js";import"./Label-B4OtwMWB.js";import"./Text-iaFwzHQc.js";import"./DOMUtils-BnN7LMKo.js";import"./ZIndexLayer-n48hyeCj.js";import"./ActivePoints-CQgXp3HY.js";import"./Dot-BK9EjXwp.js";import"./types-k-hf9hch.js";import"./activeStyles-CvpZ-3cp.js";import"./useAnimationId-OzV8hXkE.js";import"./dataEntryStyles-QaPc2U0F.js";import"./Symbols-D_2SQKur.js";import"./symbol-CSqYEM7h.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-fxalM_Sw.js";import"./getRadiusAndStrokeWidthFromDot-Dy9C3gHL.js";import"./ActiveShapeUtils-DacyCGB1.js";import"./Curve-s1Q-eWha.js";import"./step-B9w_ahFS.js";import"./useEffectiveDataKey-B6E0gPoB.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,it as __namedExportsOrder,rt as default};
