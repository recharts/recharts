import{R as t}from"./iframe-n-wQuCBi.js";import{R as p}from"./zIndexSlice-agpgazdg.js";import{C as m}from"./ComposedChart-QtT3UbV6.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BV6kUi_J.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DNZjDlXp.js";import"./index-B670uwrn.js";import"./index-LEpyJ3u4.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DQgAjYOa.js";import"./isWellBehavedNumber-C5T5W5WV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper--hZNEqf5.js";import"./index-Bp8i3QLZ.js";import"./index-ifJ0vXzc.js";import"./renderedTicksSlice-DRvXNutS.js";import"./axisSelectors-DJGA74tj.js";import"./d3-scale-Dq3pQP3q.js";import"./CartesianChart-D1BnCtWc.js";import"./chartDataContext-BUwB3ubO.js";import"./CategoricalChart-Bn54rxv3.js";import"./Layer-q34S3x6j.js";import"./AnimatedItems-CukHfitT.js";import"./Label-1gu4eHha.js";import"./Text-Cnp2kl38.js";import"./DOMUtils-B9ZjPicg.js";import"./ZIndexLayer-CKoiASff.js";import"./useAnimationId-CnnOw5XR.js";import"./ActivePoints-3GB3c-YC.js";import"./Dot-B6zDcllv.js";import"./types-DiIuPkat.js";import"./RegisterGraphicalItemId-DirXNoHy.js";import"./GraphicalItemClipPath-NXqqiVYJ.js";import"./SetGraphicalItem-jej3rFoE.js";import"./getRadiusAndStrokeWidthFromDot-BrX-hwFD.js";import"./ActiveShapeUtils-D_ggCq42.js";import"./Curve-DeDi9IqD.js";import"./step-Cdwz2fUu.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-D5_1BCSw.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
