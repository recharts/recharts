import{R as t}from"./iframe-BqYy1R0H.js";import{R as p}from"./zIndexSlice-V534Dm1F.js";import{C as m}from"./ComposedChart-CrNF5qca.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-D91gZ_Vv.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Bl4OFMGN.js";import"./index-aB2rylH4.js";import"./index-C5sdWpfd.js";import"./get-BmpbLRXi.js";import"./resolveDefaultProps-DF5EmNm0.js";import"./isWellBehavedNumber-Bh7WW-St.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cr-pgoDs.js";import"./index-Bep5EplS.js";import"./index--UqKWgbM.js";import"./renderedTicksSlice-DUFmYLd3.js";import"./axisSelectors-B5gEtu2k.js";import"./d3-scale-x-g3_XS_.js";import"./string-B6fdYHAA.js";import"./CartesianChart-nuuk7Fog.js";import"./chartDataContext-Cg_GXcDk.js";import"./CategoricalChart-DKKEuBf1.js";import"./Layer-FvXx8y_M.js";import"./AnimatedItems-BbE46Kp8.js";import"./Label-NYQMjqVT.js";import"./Text-Bb7f-h23.js";import"./DOMUtils-BM94Xuwo.js";import"./ZIndexLayer-COarhLNo.js";import"./useAnimationId-BGeq3Yxk.js";import"./ActivePoints-CUtjERgT.js";import"./Dot-CRjCuWT2.js";import"./types-CKi3J98u.js";import"./RegisterGraphicalItemId-CLltNWrh.js";import"./GraphicalItemClipPath-CsvgNQl2.js";import"./SetGraphicalItem-CBYRQcWu.js";import"./getRadiusAndStrokeWidthFromDot-C-NmK4oc.js";import"./ActiveShapeUtils--vnzUd2H.js";import"./Curve-CjCX_hKZ.js";import"./step-eDccUZNe.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-HgSZHTXM.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const tt=["FillPattern"];export{e as FillPattern,tt as __namedExportsOrder,$ as default};
