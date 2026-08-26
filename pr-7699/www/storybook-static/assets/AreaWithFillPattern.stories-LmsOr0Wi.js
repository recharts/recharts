import{R as t}from"./iframe-DgQvZQyh.js";import{R as p}from"./zIndexSlice-Btq-n8Y8.js";import{C as m}from"./ComposedChart-BGAWRlKr.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Bz7_-mCT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dk-DfWHx.js";import"./index-Cq8r6DAn.js";import"./index-BZXsqVam.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CgdEm8CY.js";import"./isWellBehavedNumber-1FtJDRA4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQot8Dvj.js";import"./index-Bb9OGTvq.js";import"./index-D86HQKsa.js";import"./axisSelectors-VvYM7u3M.js";import"./d3-scale-uYT3pExD.js";import"./renderedTicksSlice-Cx5LcFk7.js";import"./CartesianChart-CPjqqiaN.js";import"./chartDataContext-CZdqNQBA.js";import"./CategoricalChart-ZwyKDo7N.js";import"./Layer-jy0y6JzX.js";import"./AnimatedItems-CDuN3lv4.js";import"./Label-D7SUzQZZ.js";import"./Text-BCNrLAhU.js";import"./DOMUtils-Dc6imoC2.js";import"./useId-Dpr_zhHQ.js";import"./useBackwardsCompatibleTheme-CyfSeWLo.js";import"./ZIndexLayer-COjkhmxj.js";import"./useAnimationId-CMrpUBKd.js";import"./ActivePoints-Lw7-gIIJ.js";import"./Dot-Cp5LqDbN.js";import"./types-DyDamtmF.js";import"./RegisterGraphicalItemId-CgmuqVKA.js";import"./GraphicalItemClipPath-wWG5NmBB.js";import"./SetGraphicalItem-WfznSmPk.js";import"./getRadiusAndStrokeWidthFromDot-zg-JnYSm.js";import"./ActiveShapeUtils-bdnMAsi3.js";import"./Curve-ihXVzoU6.js";import"./step-ByO1iE7m.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-D9b0UCou.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const rt=["FillPattern"];export{e as FillPattern,rt as __namedExportsOrder,et as default};
