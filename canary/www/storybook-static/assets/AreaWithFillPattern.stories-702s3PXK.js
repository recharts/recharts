import{R as t}from"./iframe-B4kUD3F_.js";import{R as p}from"./zIndexSlice-DRZxBlWj.js";import{C as m}from"./ComposedChart-Bn7ITjo8.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Cs5tveSE.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DI7Qg7MS.js";import"./index-CYqd0Uq6.js";import"./index-BV_azGi8.js";import"./get-SuicBCAy.js";import"./resolveDefaultProps-DRQB4Pss.js";import"./isWellBehavedNumber-Bmjbb00R.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C0Rch8-X.js";import"./index-DCwDzrBS.js";import"./index-C-xuAHoJ.js";import"./renderedTicksSlice-DO7nzrZX.js";import"./axisSelectors-7DMUz--h.js";import"./d3-scale-CJLHhLGS.js";import"./CartesianChart-DZtIiDJu.js";import"./chartDataContext-hd9fJl9r.js";import"./CategoricalChart-DUPJdAnz.js";import"./Layer-Dsy9hdjd.js";import"./AnimatedItems-DHDZsGIH.js";import"./Label-Ckw8TK4e.js";import"./Text-79gK0PXl.js";import"./DOMUtils-D7Mb2TVV.js";import"./ZIndexLayer-B7kHgW_5.js";import"./useAnimationId-DS8iKUy9.js";import"./ActivePoints-H5S3JmFF.js";import"./Dot-eB8aq2hu.js";import"./types-7cnic641.js";import"./RegisterGraphicalItemId-Ci8r16YO.js";import"./GraphicalItemClipPath-BXEDANj9.js";import"./SetGraphicalItem-CcBXcnnP.js";import"./getRadiusAndStrokeWidthFromDot-DOq9cCaw.js";import"./ActiveShapeUtils-BYIaqgjd.js";import"./Curve-CthZ8FHS.js";import"./step-DrWCufuT.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-D9BOovhm.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
