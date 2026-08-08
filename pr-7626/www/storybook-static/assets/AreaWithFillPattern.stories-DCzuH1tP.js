import{R as t}from"./iframe-rYRmlY_w.js";import{R as p}from"./zIndexSlice-CW9g3Df4.js";import{C as m}from"./ComposedChart-CJWWrFGv.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DYNtPeeR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DMLB0n1a.js";import"./index-C9MyWVnc.js";import"./index-XYmaX6Gc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BpsYi27l.js";import"./isWellBehavedNumber-I3Ct3Qx4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Df0Nzpvc.js";import"./index-LHDP7ZRA.js";import"./index-mkET9CIq.js";import"./axisSelectors-CawrvlcN.js";import"./d3-scale-C-FCD3Na.js";import"./renderedTicksSlice-BaDCcj0z.js";import"./CartesianChart-Di-wUoL0.js";import"./chartDataContext-CUzIUSSV.js";import"./CategoricalChart-BXI0eqUO.js";import"./Layer-Dpa7ZKP5.js";import"./AnimatedItems-CIev447X.js";import"./Label-C_0fnefy.js";import"./Text-yyeh64ow.js";import"./DOMUtils-vuT3ag2A.js";import"./ZIndexLayer-DjuCBj9U.js";import"./useAnimationId-B08Ps5mJ.js";import"./ActivePoints-BM73sJ66.js";import"./Dot-BJyh6EJc.js";import"./types-B2Hj88Lf.js";import"./RegisterGraphicalItemId-CgoQC8_y.js";import"./graphicalItemIdentity-CcyqkVrD.js";import"./SetGraphicalItem-BR2pwaBe.js";import"./getRadiusAndStrokeWidthFromDot-rFO_VTeN.js";import"./ActiveShapeUtils-CwtXXETb.js";import"./Curve-Dde8oLlo.js";import"./step-BmztjEzR.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-C6kBHVPv.js";import"./graphicalItemSelectors-CX8YC0IP.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
