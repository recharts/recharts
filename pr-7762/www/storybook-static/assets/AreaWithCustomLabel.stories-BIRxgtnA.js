import{R as r}from"./iframe-BAkJeTr4.js";import{R as c}from"./zIndexSlice-CKNgQ3a1.js";import{C as d}from"./ComposedChart-BuIARBZ7.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BfoVmG7g.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dv1aPsuB.js";import"./index-DjVuoFnH.js";import"./index-XgffbxYa.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-5cpPAvAv.js";import"./isWellBehavedNumber-tRFPHljB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-EWDb0L0f.js";import"./axisSelectors-CSrb8LKj.js";import"./d3-scale-CDR0rKSq.js";import"./index-DAtUpVNY.js";import"./index-D15jXgP1.js";import"./renderedTicksSlice-BJEMwp3X.js";import"./index-I2U5t58b.js";import"./CartesianChart-DDPBhM-t.js";import"./chartDataContext-BT4eLMiU.js";import"./CategoricalChart-BbbjbFxH.js";import"./Layer-CKQWhaEi.js";import"./AnimatedItems-DuF6Bkm2.js";import"./Label-Dc3MUSo6.js";import"./Text-CbVPJcpZ.js";import"./DOMUtils-Cq0_H_rP.js";import"./useId-Dap1RfTv.js";import"./useBackwardsCompatibleTheme-sM5V7IYB.js";import"./ZIndexLayer-D5m0oF5l.js";import"./useAnimationId-CvTUgOKN.js";import"./ActivePoints-AYIQDcyP.js";import"./Dot-CleLxuMG.js";import"./types-HIIkAPMh.js";import"./RegisterGraphicalItemId-Bt_uVbrn.js";import"./GraphicalItemClipPath-Bys_fmGG.js";import"./SetGraphicalItem-BwMH--N4.js";import"./getRadiusAndStrokeWidthFromDot-BNUuDnnH.js";import"./ActiveShapeUtils-EPv0ZgAx.js";import"./Curve-BVog-1mq.js";import"./step-C9hVegCW.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CktYr9Sc.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
