import{R as t}from"./iframe-Gdd3jtsk.js";import{R as p}from"./zIndexSlice-CSZDPlYV.js";import{C as m}from"./ComposedChart-wOVymvQS.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-oojDfaJd.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BmbkxDbb.js";import"./index-OXuJkc0G.js";import"./index-BYdAkKa9.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BAx7A2d0.js";import"./isWellBehavedNumber-dcNjbQjU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DHzy1vja.js";import"./axisSelectors-gB1Qysm6.js";import"./d3-scale-CuO1bYlf.js";import"./index-BA4wfNHy.js";import"./index-DLhl39MV.js";import"./renderedTicksSlice-Bnpylx8R.js";import"./index-D3-ryID0.js";import"./CartesianChart-Ddy5lGq_.js";import"./chartDataContext-Cj_vDVUA.js";import"./CategoricalChart-Wstkm_N3.js";import"./Layer-D1lMlbyy.js";import"./AnimatedItems-BmvPvy1l.js";import"./Label-DL60lMB9.js";import"./Text-vzNtnCvi.js";import"./DOMUtils-DsTGrs8B.js";import"./useId-DBiLJeK_.js";import"./useBackwardsCompatibleTheme-vrrckkYj.js";import"./ZIndexLayer-BONCUyCr.js";import"./useAnimationId-DI-q8E5L.js";import"./ActivePoints-DdmI4xi2.js";import"./Dot-BEO0U3qq.js";import"./types-TRPks9BY.js";import"./RegisterGraphicalItemId-BmqdRBnz.js";import"./GraphicalItemClipPath-CxxXrJBj.js";import"./SetGraphicalItem-C6Ve9h1l.js";import"./getRadiusAndStrokeWidthFromDot-Bfe6QX96.js";import"./ActiveShapeUtils-Cb2VhDvv.js";import"./Curve-CY9DQNQA.js";import"./step-Tntu3fQG.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CVTQbG3C.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
