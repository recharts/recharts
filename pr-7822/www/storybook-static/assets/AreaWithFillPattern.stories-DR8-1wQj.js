import{R as t}from"./iframe-W65oqx8q.js";import{R as p}from"./zIndexSlice-9l_Vrwwa.js";import{C as m}from"./ComposedChart-Dg02pqp1.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-eh1Cp6pa.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-JXtXSY4E.js";import"./index-6OGByTjb.js";import"./index-Cot536dN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CwFz2OMw.js";import"./isWellBehavedNumber-BObY9Idx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ClDY-hB5.js";import"./axisSelectors-cQBo3spf.js";import"./d3-scale-BnWVEuzd.js";import"./index-BoHv5hv2.js";import"./index-DKR6QUcv.js";import"./renderedTicksSlice-QXgti3JC.js";import"./index-B3pQb6na.js";import"./CartesianChart-ouG1NDpR.js";import"./chartDataContext-f_o9cnw9.js";import"./CategoricalChart-BwdQTjaO.js";import"./Layer-CHct5fsC.js";import"./AnimatedItems-FyFUBU19.js";import"./Label-Be3blqiA.js";import"./Text-C9pLMK0A.js";import"./DOMUtils-CakF13Ql.js";import"./useId-BxDXx6uj.js";import"./useBackwardsCompatibleTheme-uDuKMgEe.js";import"./ZIndexLayer-C3J7XzqC.js";import"./useAnimationId-CZj4ZR7y.js";import"./ActivePoints-GiGlS0gl.js";import"./Dot-aLSP80WO.js";import"./types-DGC2KXCF.js";import"./RegisterGraphicalItemId-pvmrnM3x.js";import"./GraphicalItemClipPath-CegTcjor.js";import"./SetGraphicalItem-I8O9Dd_O.js";import"./getRadiusAndStrokeWidthFromDot-D_6Md5To.js";import"./ActiveShapeUtils-8OE4Q_dK.js";import"./Curve-DBfMZQpl.js";import"./step-DIoBi2CN.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CZ9WsBDJ.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
