import{R as t}from"./iframe-DNntBodD.js";import{R as p}from"./zIndexSlice-DiWKALGY.js";import{C as m}from"./ComposedChart-BH2fklny.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BM78iCoy.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C7dkKHPf.js";import"./index-DJMKHO2r.js";import"./index-Dseq7l94.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BBBno9Vz.js";import"./isWellBehavedNumber-BAVeTOtu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-v1Mup_kK.js";import"./axisSelectors-B-JAPPws.js";import"./d3-scale-B1cdCOGf.js";import"./index-D3OPKtIE.js";import"./index-C8meDON6.js";import"./renderedTicksSlice-CzSTMxGf.js";import"./index-BzMcqiTa.js";import"./CartesianChart-xqtu5zOX.js";import"./chartDataContext-GWmAYxkF.js";import"./CategoricalChart-Bgnt48NN.js";import"./Layer-BJ4Iw8RT.js";import"./AnimatedItems-Dpv_eB7t.js";import"./Label-CCBtX9go.js";import"./Text-CagXdBG4.js";import"./DOMUtils-Dvaq5fYM.js";import"./useId-D2xBfPBM.js";import"./useBackwardsCompatibleTheme-CfEQJ-O-.js";import"./ZIndexLayer-BnBloPVM.js";import"./useAnimationId-CbwNnleB.js";import"./ActivePoints-DsO8E_yf.js";import"./Dot-DwijN6tl.js";import"./types-DE65RlUn.js";import"./RegisterGraphicalItemId-CkaBE6dd.js";import"./GraphicalItemClipPath-BQ6wt6g2.js";import"./SetGraphicalItem-cPTjE6UA.js";import"./getRadiusAndStrokeWidthFromDot-DSbl8OKM.js";import"./ActiveShapeUtils-DL04WIzD.js";import"./Curve-DrKWfUOs.js";import"./step-uR5oqTHC.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C_KRLiX1.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,it as __namedExportsOrder,rt as default};
