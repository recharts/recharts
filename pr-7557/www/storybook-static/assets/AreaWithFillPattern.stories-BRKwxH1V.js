import{R as t}from"./iframe-CTZq4wow.js";import{R as p}from"./zIndexSlice-BugLLn2I.js";import{C as m}from"./ComposedChart-B7gp54eM.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CrkU2ySk.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CyDwbdt-.js";import"./index-BsdYqaGf.js";import"./index-CDrnfkiS.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-HvEOYUSi.js";import"./isWellBehavedNumber-o0IYSWOi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DfAH14um.js";import"./index-B4a7aOKY.js";import"./index-C9WAMmaw.js";import"./renderedTicksSlice-CnaOGMsT.js";import"./axisSelectors-CvXoECki.js";import"./d3-scale-oRxS8xLw.js";import"./CartesianChart-D9JMH5Z9.js";import"./chartDataContext-CjbWGJuj.js";import"./CategoricalChart-xMgetrMq.js";import"./Layer-B0eWkEir.js";import"./AnimatedItems-TPOIkuad.js";import"./Label-BA3Mm5Cp.js";import"./Text-Cu7BMLGl.js";import"./DOMUtils-DAhFjHam.js";import"./ZIndexLayer-JO4x2o2R.js";import"./useAnimationId-N1bAbizC.js";import"./ActivePoints-DduaoRit.js";import"./Dot-Ck1gikCj.js";import"./types-Cmo79yaU.js";import"./RegisterGraphicalItemId-CBhnZQJL.js";import"./GraphicalItemClipPath-C2c2EBGK.js";import"./SetGraphicalItem-Dzd1nu2B.js";import"./getRadiusAndStrokeWidthFromDot-DY4tcjGE.js";import"./ActiveShapeUtils-BYg3ncJn.js";import"./Curve-B2-DT88v.js";import"./step-BOqrsqeu.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CB6kf9eg.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const $=["FillPattern"];export{e as FillPattern,$ as __namedExportsOrder,Z as default};
