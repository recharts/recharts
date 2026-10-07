import{R as r}from"./iframe-B-iIRDdh.js";import{R as c}from"./zIndexSlice-xTQiy-H7.js";import{C as d}from"./ComposedChart-aKLJJf8H.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D3L2bHB1.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DMKMego8.js";import"./index-o1PLWRMQ.js";import"./index-DFxGa3DU.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BKBNf2xS.js";import"./isWellBehavedNumber-B6qwBi4A.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-3KdvU5vS.js";import"./axisSelectors-C60OKlJ4.js";import"./d3-scale-AYUreAhG.js";import"./index-NNc_ZKUS.js";import"./index-D_yufyJF.js";import"./renderedTicksSlice-DkP6y5za.js";import"./index-BazpKZZl.js";import"./CartesianChart-CmApzcJx.js";import"./chartDataContext-CX0jNdXw.js";import"./CategoricalChart-BfBkFmEt.js";import"./Layer-Dt4jm0MX.js";import"./AnimatedItems-WEAzzrlF.js";import"./Label-CwIrwy70.js";import"./Text-CBbsNly8.js";import"./DOMUtils-CixgR7ku.js";import"./useId-D2WPaoHG.js";import"./useBackwardsCompatibleTheme-C-V51dQO.js";import"./ZIndexLayer-CbH1OgN0.js";import"./useAnimationId-CcMpnWIs.js";import"./ActivePoints-D_regA9J.js";import"./Dot-BnQbbHjv.js";import"./types-zJ8KfHt8.js";import"./RegisterGraphicalItemId-B76epDXu.js";import"./GraphicalItemClipPath-DlnJdwTq.js";import"./SetGraphicalItem-BJKoCnbQ.js";import"./getRadiusAndStrokeWidthFromDot-PVXVFp_x.js";import"./ActiveShapeUtils-yQdvWiPD.js";import"./Curve-CjV9ratN.js";import"./step-CLlPrIoa.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-B2EBH6VG.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
