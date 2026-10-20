import{R as t}from"./iframe-CugsIFqT.js";import{R as p}from"./zIndexSlice-DhzbqJ4_.js";import{C as m}from"./ComposedChart-B19W0OVJ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-C5z60D9h.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DcWQ2VKw.js";import"./index-DnmvEXz4.js";import"./index-D41sdL0q.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-SYQsUzr-.js";import"./isWellBehavedNumber-De17yvdK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B8Omcwd_.js";import"./axisSelectors-v31N2mNx.js";import"./d3-scale-BE1RrYdy.js";import"./index-DZRNoO74.js";import"./index-SsBOmTOW.js";import"./renderedTicksSlice-CiqEuPYb.js";import"./index-DwBMtOAp.js";import"./CartesianChart-C9o0hhbA.js";import"./chartDataContext-BvCoW6A3.js";import"./CategoricalChart-B7Q725c1.js";import"./Layer-Cn8FVO5-.js";import"./activeStyles-_GUbXh9K.js";import"./Label-Bo3nl74y.js";import"./Text-B6xMGXMn.js";import"./pageBackground-CAJ4za5K.js";import"./useId-CrLN3MoL.js";import"./useBackwardsCompatibleTheme-IzBt0VQP.js";import"./ZIndexLayer-DwmQuX8A.js";import"./useAnimationId-D9Q9XIBx.js";import"./dataEntryStyles-Be_CuUea.js";import"./ActivePoints-DdTGUghp.js";import"./Dot-CBYwyJvt.js";import"./types-D00HSLdz.js";import"./GraphicalItemClipPath-TUVXgEo2.js";import"./SetGraphicalItem-CIhe_dEk.js";import"./getRadiusAndStrokeWidthFromDot-1Vrisa5h.js";import"./ActiveShapeUtils-5nThOoH4.js";import"./Curve-TcJOrOAj.js";import"./step-B1Iay_8G.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-CDLJWg00.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
