import{c as e}from"./iframe-Dy-e7pIM.js";import{g as c}from"./zIndexSlice-BAzwug6r.js";import{C as d}from"./ComposedChart-CBoFwAQh.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-CAbJVty_.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-kVBDWM7h.js";import"./index-DUyY-sZ6.js";import"./index-B7Kt7cV8.js";import"./get-D_U-7Kmb.js";import"./resolveDefaultProps-BOUnRnbS.js";import"./isWellBehavedNumber-Bj92k7jm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D0mQ-9Gw.js";import"./index-SXoyUqv9.js";import"./index-rCxGgy9o.js";import"./renderedTicksSlice-D80uYtAJ.js";import"./axisSelectors-DHlr3EdZ.js";import"./d3-scale-MtjUkFvo.js";import"./CartesianChart-Cf77c1Wa.js";import"./chartDataContext-HpYadsZ6.js";import"./CategoricalChart-Csue9Qd9.js";import"./Curve-rRxZ5v9J.js";import"./types-B745wbwD.js";import"./step-r56XM2D6.js";import"./path-DyVhHtw_.js";import"./Layer-BQggJIEv.js";import"./ReactUtils-DdYRakW1.js";import"./Label-Bd4SV5Lr.js";import"./Text-DrCcB5Q6.js";import"./DOMUtils-CWH-10kL.js";import"./ZIndexLayer-DgxZOhGb.js";import"./ActivePoints-Bnfm65-K.js";import"./Dot-DJgC10rz.js";import"./RegisterGraphicalItemId-CWayAjG_.js";import"./GraphicalItemClipPath-Birlsn4M.js";import"./SetGraphicalItem-rhS26CgA.js";import"./useAnimationId-D1tL6Rir.js";import"./getRadiusAndStrokeWidthFromDot-CBX6IKOe.js";import"./graphicalItemSelectors-CfFMNq7_.js";const rt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ot=["CustomizedLabel"];export{t as CustomizedLabel,ot as __namedExportsOrder,rt as default};
