import{R as t}from"./iframe-xbzO8ihI.js";import{R as p}from"./zIndexSlice-DHGEGTXf.js";import{C as m}from"./ComposedChart-D7Lr4F7H.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-B6Isgvvu.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CSfITKZw.js";import"./index-BqW4Uzzs.js";import"./index-Db_N0V-Y.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BksGg43P.js";import"./isWellBehavedNumber-BpEs7sJw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B40yK-0z.js";import"./axisSelectors-D-N5tVUk.js";import"./d3-scale-C-XGUw-P.js";import"./index-Bw8yyLrA.js";import"./index-VAUYyiDQ.js";import"./renderedTicksSlice-BCm2ZtcS.js";import"./index-DNQsy-E5.js";import"./CartesianChart-CVt6roZ8.js";import"./chartDataContext-DjNdQ09m.js";import"./CategoricalChart-Btyj_0ug.js";import"./Layer-CyOAhwla.js";import"./AnimatedItems-GZSCW2O0.js";import"./Label-Db5UOJ54.js";import"./Text-DyvJm0Va.js";import"./DOMUtils-BBUQNy1o.js";import"./useId-BsQI64Io.js";import"./useBackwardsCompatibleTheme-BaDaWPI3.js";import"./ZIndexLayer-CdA1EieN.js";import"./useAnimationId-n5GjykVw.js";import"./ActivePoints-Bo6-hXPj.js";import"./Dot-S_RimJ32.js";import"./types-DVHQQz9N.js";import"./RegisterGraphicalItemId-B8RWrhFG.js";import"./GraphicalItemClipPath-C_jr7WWD.js";import"./SetGraphicalItem-C2V6xjnq.js";import"./getRadiusAndStrokeWidthFromDot-Cf72lShV.js";import"./ActiveShapeUtils-EHYmL-db.js";import"./Curve-D088EVRW.js";import"./step-wFZZajAR.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DeaTRdU-.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const it=["FillPattern"];export{e as FillPattern,it as __namedExportsOrder,rt as default};
