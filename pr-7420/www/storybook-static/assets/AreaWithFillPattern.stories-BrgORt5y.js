import{R as t}from"./iframe-ebWVliJd.js";import{R as p}from"./zIndexSlice-BrrGtknp.js";import{C as m}from"./ComposedChart-BOJ1HV40.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-C0uVqmZP.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-u2yF5cyx.js";import"./index-CMkBnQa6.js";import"./index-Ca07HsLe.js";import"./get-D4k_mNx-.js";import"./resolveDefaultProps-B5O-6-WI.js";import"./isWellBehavedNumber-DRTDdH6f.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DUxjIduK.js";import"./index-DF02JQD9.js";import"./index-r7VIACUV.js";import"./renderedTicksSlice-Ba1ooYto.js";import"./axisSelectors-BiXUDLnL.js";import"./d3-scale-BkusLtz6.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BJML043z.js";import"./chartDataContext-DV3K9IA2.js";import"./CategoricalChart-DdVMa29B.js";import"./Layer-CrSVK8w0.js";import"./AnimatedItems-VPYkwJ4F.js";import"./Label-CEbu9yOv.js";import"./Text-C6J-h8kC.js";import"./DOMUtils-D1VV_WMD.js";import"./ZIndexLayer-DymXXG8t.js";import"./index-BPJnJB5S.js";import"./useAnimationId-n62HywHx.js";import"./ActivePoints-B8szihic.js";import"./Dot-DBDb90gK.js";import"./types-DIjbaJzk.js";import"./RegisterGraphicalItemId-YmUQslDz.js";import"./GraphicalItemClipPath-CLalv2k5.js";import"./SetGraphicalItem-DrFDycKg.js";import"./getRadiusAndStrokeWidthFromDot-viuhEb9q.js";import"./ActiveShapeUtils-WXdDf590.js";import"./Curve-Cnpigwxh.js";import"./step-CrKVzxVu.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-D4vnKPw5.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const et=["FillPattern"];export{e as FillPattern,et as __namedExportsOrder,tt as default};
