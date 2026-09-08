import{R as r}from"./iframe-ZGGTKsi4.js";import{R as c}from"./zIndexSlice-DxfJO5SI.js";import{C as d}from"./ComposedChart-HoHDKyYF.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C8quzMPc.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DU3r4hZM.js";import"./index-BPQC-jNG.js";import"./index-HrJWGj9i.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-vV3khv5M.js";import"./isWellBehavedNumber-QCZGXLEu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bhqr1bRq.js";import"./axisSelectors-sP9dBG4h.js";import"./d3-scale-BsspybO2.js";import"./index-BpyhtFRO.js";import"./index-DsBTLunf.js";import"./renderedTicksSlice-BrYwA8bW.js";import"./index-SSLiRbGX.js";import"./CartesianChart-FipRlzk-.js";import"./chartDataContext-CVwvDOw7.js";import"./CategoricalChart-Da_wyX1Y.js";import"./Layer-yZG6HjYa.js";import"./AnimatedItems-B0OCbKtI.js";import"./Label-CuL7W9s2.js";import"./Text-uTHCfqpL.js";import"./DOMUtils-KcdWyv8l.js";import"./useId-BJoAZaHY.js";import"./useBackwardsCompatibleTheme-DiGhz-R4.js";import"./ZIndexLayer-CnUQDGMu.js";import"./useAnimationId-BA-Y1lsT.js";import"./ActivePoints-DW5iFVK5.js";import"./Dot-DrTqTbYy.js";import"./types-Cv_7IfEs.js";import"./RegisterGraphicalItemId-DAVF2joS.js";import"./GraphicalItemClipPath-DOFRcoC3.js";import"./SetGraphicalItem-rcmPBlm0.js";import"./getRadiusAndStrokeWidthFromDot-CtaK0aI-.js";import"./ActiveShapeUtils-CShJY30W.js";import"./Curve-BGLf-py4.js";import"./step-D_M_3p-d.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CdO4AxEG.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,st as __namedExportsOrder,pt as default};
