import{R as e}from"./iframe-D2OYENKH.js";import{R as c}from"./zIndexSlice-D0ZhXs4m.js";import{C as d}from"./ComposedChart-BUAOSrLk.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C5tMSQbJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bn9pRQ9R.js";import"./index-Dur45csw.js";import"./index-DuPaBThV.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-dYsmKBqC.js";import"./isWellBehavedNumber-CA6K8V7o.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BWgpx-pN.js";import"./index-JR3rJPe5.js";import"./index-CVAOKIGV.js";import"./renderedTicksSlice-CAJ7-KA1.js";import"./axisSelectors-D5cpRxU3.js";import"./d3-scale-BX-yZ5Fv.js";import"./CartesianChart-D90Zb4X0.js";import"./chartDataContext-BdJZhmRg.js";import"./CategoricalChart-UC5rHyt5.js";import"./Layer-D9vccuwA.js";import"./AnimatedItems-DmNuH65D.js";import"./Label-BhTPc9li.js";import"./Text-Dw3wOnD-.js";import"./DOMUtils-DDs_Dfl9.js";import"./ZIndexLayer-Cf4JaxIV.js";import"./useAnimationId-INjmlW7n.js";import"./ActivePoints-BjhdQ6pz.js";import"./Dot-DT2GXuQy.js";import"./types-CP4OIotA.js";import"./RegisterGraphicalItemId-B9FhgBpj.js";import"./GraphicalItemClipPath-BwblPJrN.js";import"./SetGraphicalItem-CS5ycuRe.js";import"./getRadiusAndStrokeWidthFromDot-awhZfjnX.js";import"./ActiveShapeUtils-CzcMe4-S.js";import"./Curve-2nThZew5.js";import"./step-DWDRJwlo.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DRcaZtCR.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
