import{R as r}from"./iframe-DzEunvJg.js";import{R as c}from"./zIndexSlice-CJoRXBvc.js";import{C as d}from"./ComposedChart-B9Ez2Onq.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Dcjhtksm.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-vVnHJdwk.js";import"./index-CVYp0833.js";import"./index-C0Oun7dU.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D1VbkECB.js";import"./isWellBehavedNumber-CrPdUCJx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DKQAPH3P.js";import"./axisSelectors-BmcAHay7.js";import"./d3-scale-DAMVQCbA.js";import"./index-9AaHNtLQ.js";import"./index-T5bTpYjM.js";import"./renderedTicksSlice-CwBlu1JG.js";import"./index-XWQatYSr.js";import"./CartesianChart-xll3miOv.js";import"./chartDataContext-DrYFcmx6.js";import"./CategoricalChart-Dkc-ZZ1N.js";import"./Layer-Cm7XhTpW.js";import"./AnimatedItems-yUKoBMYs.js";import"./Label-CI5iW8Hf.js";import"./Text-BLWA_Ab4.js";import"./DOMUtils-BmAhd2hZ.js";import"./useId-BuMWUv2m.js";import"./useBackwardsCompatibleTheme-RcberNo1.js";import"./ZIndexLayer-C6u4DcMx.js";import"./useAnimationId-CM641vkV.js";import"./ActivePoints-c4_lMKBx.js";import"./Dot-Dusyebbr.js";import"./types-BCX_XL2l.js";import"./RegisterGraphicalItemId-Yhhjp8dw.js";import"./GraphicalItemClipPath-D_Kf5-kj.js";import"./SetGraphicalItem-XUxLk492.js";import"./getRadiusAndStrokeWidthFromDot-dltGhGap.js";import"./ActiveShapeUtils-1PCMWfFs.js";import"./Curve-DBPbpDEM.js";import"./step-BomzFh0-.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CP3wmpOS.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
