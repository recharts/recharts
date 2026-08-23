import{R as t}from"./iframe-1Nx1Hwd8.js";import{R as p}from"./zIndexSlice-BPgffy3O.js";import{C as m}from"./ComposedChart-DwgM-9LJ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DmLP-yEc.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BvcOGqjl.js";import"./index-BxODcotD.js";import"./index-BxXrUDFi.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BuS60Zcm.js";import"./isWellBehavedNumber-BZkA4GqO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DOZVWK-P.js";import"./index-DrfO8rcp.js";import"./index-DuNxWLhT.js";import"./axisSelectors-C77-vGCj.js";import"./d3-scale-B_Ed44y-.js";import"./renderedTicksSlice-DdDjPDgD.js";import"./CartesianChart-CfBDZXwX.js";import"./chartDataContext-B9qtLtUj.js";import"./CategoricalChart-CmvqfSaL.js";import"./Layer-CY3HNiYQ.js";import"./AnimatedItems-CvXLsYG2.js";import"./Label-CzY3tv0Q.js";import"./Text-D7Dvlpl9.js";import"./DOMUtils-CyzSDn7U.js";import"./useId-y9Z6ZhpG.js";import"./useBackwardsCompatibleTheme-CJcbMh-P.js";import"./ZIndexLayer-CgXwR33B.js";import"./useAnimationId-BUamwr57.js";import"./ActivePoints-C0mFYRu2.js";import"./Dot-CrNXlHuf.js";import"./types-CW2QSzeT.js";import"./RegisterGraphicalItemId-Ctsh4Fgt.js";import"./GraphicalItemClipPath-l6BikrPU.js";import"./SetGraphicalItem-CfAx1sDn.js";import"./getRadiusAndStrokeWidthFromDot-BvpolENt.js";import"./ActiveShapeUtils-K1kvzU25.js";import"./Curve-BLyT9pX_.js";import"./step-DiCJ9NfT.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CrnNOped.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
