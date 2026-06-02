import{c as t}from"./iframe-Dy-e7pIM.js";import{g as p}from"./zIndexSlice-BAzwug6r.js";import{C as m}from"./ComposedChart-CBoFwAQh.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as r}from"./Area-CAbJVty_.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-kVBDWM7h.js";import"./index-DUyY-sZ6.js";import"./index-B7Kt7cV8.js";import"./get-D_U-7Kmb.js";import"./resolveDefaultProps-BOUnRnbS.js";import"./isWellBehavedNumber-Bj92k7jm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D0mQ-9Gw.js";import"./index-SXoyUqv9.js";import"./index-rCxGgy9o.js";import"./renderedTicksSlice-D80uYtAJ.js";import"./axisSelectors-DHlr3EdZ.js";import"./d3-scale-MtjUkFvo.js";import"./CartesianChart-Cf77c1Wa.js";import"./chartDataContext-HpYadsZ6.js";import"./CategoricalChart-Csue9Qd9.js";import"./Curve-rRxZ5v9J.js";import"./types-B745wbwD.js";import"./step-r56XM2D6.js";import"./path-DyVhHtw_.js";import"./Layer-BQggJIEv.js";import"./ReactUtils-DdYRakW1.js";import"./Label-Bd4SV5Lr.js";import"./Text-DrCcB5Q6.js";import"./DOMUtils-CWH-10kL.js";import"./ZIndexLayer-DgxZOhGb.js";import"./ActivePoints-Bnfm65-K.js";import"./Dot-DJgC10rz.js";import"./RegisterGraphicalItemId-CWayAjG_.js";import"./GraphicalItemClipPath-Birlsn4M.js";import"./SetGraphicalItem-rhS26CgA.js";import"./useAnimationId-D1tL6Rir.js";import"./getRadiusAndStrokeWidthFromDot-CBX6IKOe.js";import"./graphicalItemSelectors-CfFMNq7_.js";const Y={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const Z=["FillPattern"];export{e as FillPattern,Z as __namedExportsOrder,Y as default};
