import{R as t}from"./iframe-BPne-Hl-.js";import{R as p}from"./zIndexSlice-Vbxajxxh.js";import{C as m}from"./ComposedChart-J8Blu4CC.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BZnbtAtT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bi_zW3_L.js";import"./index-uv_fcL6C.js";import"./index-CwJJwB5T.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DDnfF8y9.js";import"./isWellBehavedNumber-Ct771fgh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D7wPyuzK.js";import"./index-B-eC6RsS.js";import"./index-CxrNEW2y.js";import"./axisSelectors-LTfENhRo.js";import"./d3-scale-DOpYrlme.js";import"./renderedTicksSlice-DT6TytRZ.js";import"./CartesianChart-QFuu_jnw.js";import"./chartDataContext-BudnyF2r.js";import"./CategoricalChart-DWAFRQOx.js";import"./Layer-SpL-rjyd.js";import"./AnimatedItems-BPcfKqDa.js";import"./Label-BrzCwn25.js";import"./Text-C95v_Vb1.js";import"./DOMUtils-J3bqy14P.js";import"./useBackwardsCompatibleTheme-CL2xpGGY.js";import"./ZIndexLayer-DfzxMoSO.js";import"./useAnimationId-Bq5h4Na4.js";import"./ActivePoints-vna83Vpl.js";import"./Dot-_aT20vJp.js";import"./types-BUNHJ5Kw.js";import"./RegisterGraphicalItemId-DLHR3ZEz.js";import"./GraphicalItemClipPath-pLYwGWiU.js";import"./SetGraphicalItem-DdmyrxA9.js";import"./getRadiusAndStrokeWidthFromDot-DdxPvC-_.js";import"./ActiveShapeUtils-IyyDIcQz.js";import"./Curve-DxMSvAJ7.js";import"./step-BuUE8tSH.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Bnvdlidl.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
