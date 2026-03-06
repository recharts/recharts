import{e as t}from"./iframe-BB4UUGL6.js";import{R as c}from"./arrayEqualityCheck-BYmPeJrr.js";import{C as d}from"./ComposedChart-C2BzGzPZ.js";import{A as l}from"./Area-CUCk_STT.js";import{R as h}from"./RechartsHookInspector-Bh0xNYsg.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dwn4tBVe.js";import"./immer-CGr0ptDX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D-mKRVYc.js";import"./index-DU7ieidm.js";import"./hooks-DFTFZ2_R.js";import"./axisSelectors-xhLV-t5X.js";import"./d3-scale-T-qah3ml.js";import"./zIndexSlice-CuyQJUW0.js";import"./renderedTicksSlice-lC7cSHHa.js";import"./CartesianChart-BRe-Cj4k.js";import"./chartDataContext-zlvG9ShK.js";import"./CategoricalChart-Ct_zc7o_.js";import"./Curve--7RAEkWQ.js";import"./types-DX1g5Szp.js";import"./step-BIZ2Vv4e.js";import"./Layer-CzRXBUT9.js";import"./ReactUtils-C_PCtVqv.js";import"./Label-BuQHIgdG.js";import"./Text-xAwQNVqR.js";import"./DOMUtils-DBhHNbvA.js";import"./ZIndexLayer-C40yFkyN.js";import"./ActivePoints-qho3Mxiu.js";import"./Dot-BGQcGA8a.js";import"./RegisterGraphicalItemId-DlFEoDs3.js";import"./GraphicalItemClipPath-Y2-czyRy.js";import"./SetGraphicalItem-Da_W53nM.js";import"./useAnimationId-CR73Z47T.js";import"./getRadiusAndStrokeWidthFromDot-DX4q2mcQ.js";import"./graphicalItemSelectors-BlHR2ggU.js";import"./index-UCZ6NmO8.js";import"./ChartSizeDimensions-Dx8qGUZW.js";import"./OffsetShower-6Dk3TPlH.js";import"./PlotAreaShower-CdNqGPUL.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
