import{e as t}from"./iframe-C3KLAr_X.js";import{R as c}from"./arrayEqualityCheck-DnI1m1N4.js";import{C as d}from"./ComposedChart-DlW39P_1.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-KRTHBepA.js";import{R as u}from"./RechartsHookInspector-CDrt9EHV.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CDRZbdh0.js";import"./immer-7U5Tji_6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CHSmfZwv.js";import"./index-C-7EyPyC.js";import"./hooks-DZuDX4va.js";import"./axisSelectors-CWLPDJ8I.js";import"./d3-scale-ZNDiiXCQ.js";import"./zIndexSlice-Cl9Q2qHp.js";import"./renderedTicksSlice-Y_XNygaP.js";import"./CartesianChart-CwI8QMMb.js";import"./chartDataContext-BIjR8iwE.js";import"./CategoricalChart-CWEKSGB2.js";import"./Curve-DuWzArMY.js";import"./types-CUBBvZMp.js";import"./step-nMlGD7PS.js";import"./Layer-gez65z60.js";import"./ReactUtils-Dl7XDcr4.js";import"./Label-D03TCqMA.js";import"./Text-CKsAfS2q.js";import"./DOMUtils-BTX_GG3X.js";import"./ZIndexLayer-ZwdT_RoZ.js";import"./ActivePoints-C0SjOUTr.js";import"./Dot-b607mIJy.js";import"./RegisterGraphicalItemId-uSngcEvn.js";import"./GraphicalItemClipPath-CrZc4JF3.js";import"./SetGraphicalItem-CgbMvRrw.js";import"./useAnimationId-BHPPVsUk.js";import"./getRadiusAndStrokeWidthFromDot-CfDNziOs.js";import"./graphicalItemSelectors-6HwYnr3b.js";import"./index-D4Ia_Qi8.js";import"./ChartSizeDimensions-BUMoLVC9.js";import"./OffsetShower-Bzqo_bHi.js";import"./PlotAreaShower-9mAhzD5z.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{e as CustomizedLabel,mt as __namedExportsOrder,at as default};
