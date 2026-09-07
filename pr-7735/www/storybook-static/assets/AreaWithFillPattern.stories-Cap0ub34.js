import{R as t}from"./iframe-Bpd2XNWC.js";import{R as p}from"./zIndexSlice-BTu_B7mV.js";import{C as m}from"./ComposedChart-CzZEMv_V.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-PxPiZOWR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CxmKEgMS.js";import"./index-xC6Bkz7H.js";import"./index-DgsoqgCs.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B8bn9Lip.js";import"./isWellBehavedNumber-DYj3VVfL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cs-3N8QT.js";import"./axisSelectors-BrNdfEDm.js";import"./d3-scale-C1KyS_uc.js";import"./index-Bvjdo_xp.js";import"./index-3uQaoJQn.js";import"./renderedTicksSlice-BjQ916I1.js";import"./index-Di8Mdcoc.js";import"./CartesianChart-CGMddJ7u.js";import"./chartDataContext-Ddh2yzQT.js";import"./CategoricalChart-CuTFNTZi.js";import"./Layer-DWU20C-K.js";import"./AnimatedItems-dPJnsYL3.js";import"./Label-CGyNRxJa.js";import"./Text-DXGXVj-Q.js";import"./DOMUtils-CSQS_b5b.js";import"./useId-C9UFJlhx.js";import"./useBackwardsCompatibleTheme-BtLkKBFp.js";import"./ZIndexLayer-BFtSzcZm.js";import"./useAnimationId-DbYR-C-O.js";import"./ActivePoints-1vR13631.js";import"./Dot-7gwjjvvE.js";import"./types-B5zWJp34.js";import"./RegisterGraphicalItemId-DEOSTvja.js";import"./GraphicalItemClipPath-CVghwEWn.js";import"./SetGraphicalItem-FT01QPFF.js";import"./getRadiusAndStrokeWidthFromDot-Bgi6ZhX1.js";import"./ActiveShapeUtils-CE66pmBi.js";import"./Curve-m791ZjIC.js";import"./step-PY4SjMEk.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-IaVESyrB.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
