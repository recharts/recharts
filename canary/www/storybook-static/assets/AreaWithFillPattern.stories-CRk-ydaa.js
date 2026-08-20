import{R as t}from"./iframe-BMoFzqLG.js";import{R as p}from"./zIndexSlice-D2eW6ynO.js";import{C as m}from"./ComposedChart--18maMFA.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-D1ZnDDJe.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CMa4JKLf.js";import"./index-DNJh02LB.js";import"./index-CSdHnYZf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-NXPPdTlK.js";import"./isWellBehavedNumber-Cv3QLhUl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BMT8ka8g.js";import"./index-DW75A43Y.js";import"./index-CCv9Fz61.js";import"./axisSelectors-DYuvxT8H.js";import"./d3-scale-CdpdmGXg.js";import"./renderedTicksSlice-DvPuc11_.js";import"./CartesianChart-C7RJi03t.js";import"./chartDataContext-CDnovleA.js";import"./CategoricalChart-e4TDW-CP.js";import"./Layer-BF07rJeJ.js";import"./AnimatedItems-DtpOcSHY.js";import"./Label-C2sliePj.js";import"./Text-CWW6I1yN.js";import"./DOMUtils-zP2FF411.js";import"./useId-Cuy8o_CS.js";import"./useBackwardsCompatibleTheme-CT0hL_b9.js";import"./ZIndexLayer-Bb4jsnOQ.js";import"./useAnimationId-DECqttvr.js";import"./ActivePoints-CGL78uWV.js";import"./Dot-BKpqXb-J.js";import"./types-DnNtWK32.js";import"./RegisterGraphicalItemId-BWT7SWLX.js";import"./GraphicalItemClipPath-4HDTpBwl.js";import"./SetGraphicalItem-4-n_cNOG.js";import"./getRadiusAndStrokeWidthFromDot-Dr3SeLyV.js";import"./ActiveShapeUtils-Deesho2z.js";import"./Curve-Bj9SvhiQ.js";import"./step-CmTsx3cD.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BoSXPO7u.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
