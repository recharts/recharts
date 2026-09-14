import{R as t}from"./iframe-CuYkZAih.js";import{R as p}from"./zIndexSlice-0x3uku_R.js";import{C as m}from"./ComposedChart-BkMchBFr.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BIuiAX59.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-gMp3XSAK.js";import"./index-D8cZoCL4.js";import"./index-BxmeqXxm.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B8cjP6Xa.js";import"./isWellBehavedNumber-BcDmyfQy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-COZpTTaF.js";import"./axisSelectors-DIa8K2JO.js";import"./d3-scale-DA_CpRjn.js";import"./index-TSt0tMTq.js";import"./index-27otVVTa.js";import"./renderedTicksSlice-Cf_8fVTa.js";import"./index-C60udeJw.js";import"./CartesianChart-dlpQhUsY.js";import"./chartDataContext-FQ-3D9_1.js";import"./CategoricalChart-CzQsygRV.js";import"./Layer-GHV7gJU9.js";import"./AnimatedItems-B6_FAdg8.js";import"./Label-DkhadSFF.js";import"./Text-CXyYB23t.js";import"./DOMUtils-CE__HHZf.js";import"./useId-m8zXXplu.js";import"./useBackwardsCompatibleTheme-D-5GiVJq.js";import"./ZIndexLayer-DhyZBBI_.js";import"./useAnimationId-CKSd0jBH.js";import"./ActivePoints-989YAHN3.js";import"./Dot-lCEMTHT5.js";import"./types-CPc5yIEA.js";import"./RegisterGraphicalItemId-DI2Sgslq.js";import"./GraphicalItemClipPath-BA9HfA5b.js";import"./SetGraphicalItem-Bwlc4Qg6.js";import"./getRadiusAndStrokeWidthFromDot-C8_uSveN.js";import"./ActiveShapeUtils-48Bcq-tK.js";import"./Curve-C6S_ZKxy.js";import"./step-xkx3tdDV.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DpHd4fG4.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
