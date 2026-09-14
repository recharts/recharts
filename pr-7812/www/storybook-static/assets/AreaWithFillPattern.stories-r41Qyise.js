import{R as t}from"./iframe-D6i__LoP.js";import{R as p}from"./zIndexSlice-CyKHeydM.js";import{C as m}from"./ComposedChart-CjSU8WGa.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DKIbp5L5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DZkWvGbR.js";import"./index-DMFV_hOu.js";import"./index--kg1cBe0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CqzBSPJb.js";import"./isWellBehavedNumber-CluTirfv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DCWzk6aO.js";import"./axisSelectors-LrJn1RIt.js";import"./d3-scale-CPAx7ill.js";import"./index-TOqTf9p4.js";import"./index-B0NZAO6k.js";import"./renderedTicksSlice-Cqr2zXs_.js";import"./index-CfSh3_es.js";import"./CartesianChart-SH0Bt_l8.js";import"./chartDataContext-DoSIIG4T.js";import"./CategoricalChart-CQsWyxzZ.js";import"./Layer-g6kXe5Or.js";import"./AnimatedItems-BhOCoOsB.js";import"./Label-CcM-HFI6.js";import"./Text-hZV3tmbb.js";import"./DOMUtils-DeYJTEnJ.js";import"./useId-tMVNWk8Z.js";import"./useBackwardsCompatibleTheme-CQpTINsS.js";import"./ZIndexLayer-Cgr5Sbcn.js";import"./useAnimationId-Bi456v-E.js";import"./ActivePoints-BQ7megxl.js";import"./Dot-M_mEsxZK.js";import"./types-BferblG2.js";import"./RegisterGraphicalItemId-DMF9sTtn.js";import"./GraphicalItemClipPath-C4ZotnNz.js";import"./SetGraphicalItem-B41pEGJW.js";import"./getRadiusAndStrokeWidthFromDot-BXIDSkMw.js";import"./ActiveShapeUtils-p-Z4MyM6.js";import"./Curve-BAgXbvIK.js";import"./step-D_yNlVES.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CVzdXzJV.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
