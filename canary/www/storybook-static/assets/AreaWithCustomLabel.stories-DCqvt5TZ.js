import{e as t}from"./iframe-Drx3sHzD.js";import{R as c}from"./arrayEqualityCheck-Cxh3C5Ut.js";import{C as d}from"./ComposedChart-Cv9ZLW_z.js";import{A as l}from"./Area-Ct6tPxNJ.js";import{R as h}from"./RechartsHookInspector-B47NB8Ba.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DJZRJ_w1.js";import"./immer-CMngUaVZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C25rZHqy.js";import"./index-C1X6dA56.js";import"./hooks-CoGkBA0W.js";import"./axisSelectors-Dvu2n2j0.js";import"./d3-scale-DJsTU-V4.js";import"./zIndexSlice-BtH-N1PM.js";import"./renderedTicksSlice-NaH2qnuB.js";import"./CartesianChart-X3a2_VbG.js";import"./chartDataContext-4c8heGUY.js";import"./CategoricalChart-BH-H9_fa.js";import"./Curve-CWdwiHun.js";import"./types-Dt1v_DFT.js";import"./step-DiiGtOJG.js";import"./Layer-BX4NaN0s.js";import"./ReactUtils-DR-cFl3z.js";import"./Label-BYpXDDHB.js";import"./Text-puWaXg2i.js";import"./DOMUtils-CNGQFx5Q.js";import"./ZIndexLayer-BCRbCnLV.js";import"./ActivePoints-B39TV9kW.js";import"./Dot-DJk_feJD.js";import"./RegisterGraphicalItemId-D_XwV7_H.js";import"./GraphicalItemClipPath-DJ0LBSJn.js";import"./SetGraphicalItem-CaVxJkE3.js";import"./useAnimationId-BvmpUmZ8.js";import"./getRadiusAndStrokeWidthFromDot-DE_8tHNb.js";import"./graphicalItemSelectors-B3D-k-PR.js";import"./index-UsmbSRTd.js";import"./ChartSizeDimensions-DO_eIzzc.js";import"./OffsetShower-C7m1BjsQ.js";import"./PlotAreaShower-BQS_Wf3K.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
