import{e as t}from"./iframe-B0wKxNpK.js";import{R as c}from"./arrayEqualityCheck-5nuhtSeT.js";import{C as d}from"./ComposedChart-CLdtbTIL.js";import{A as l}from"./Area-Cb-CUICG.js";import{R as h}from"./RechartsHookInspector-DYn9zJB9.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CIdIqjjC.js";import"./immer-DUb1bWtb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CrtUXLbx.js";import"./index-Cnz4_p8Q.js";import"./hooks-oSTNajEI.js";import"./axisSelectors-C1uueI6X.js";import"./d3-scale-CQFM5VB3.js";import"./zIndexSlice-BcKpuoZl.js";import"./renderedTicksSlice-dfIm6fl5.js";import"./CartesianChart-CLpt04B_.js";import"./chartDataContext-CfWR9eN6.js";import"./CategoricalChart-DBWdCLL2.js";import"./Curve-DiJIjJff.js";import"./types-CYNiifb0.js";import"./step-CkYKWKxI.js";import"./Layer-DSIwel9q.js";import"./ReactUtils-sKOkm0_2.js";import"./Label-BdkcMQDU.js";import"./Text-DlBKXZA-.js";import"./DOMUtils-CSAF-8sx.js";import"./ZIndexLayer-70VD5Z7C.js";import"./ActivePoints-BSvrQoGF.js";import"./Dot-DXpreqzJ.js";import"./RegisterGraphicalItemId-CDkf5IwF.js";import"./GraphicalItemClipPath-BCjuGXXY.js";import"./SetGraphicalItem-Be0sJCS3.js";import"./useAnimationId-BdZ_5XMP.js";import"./getRadiusAndStrokeWidthFromDot-C3Mll_Mr.js";import"./graphicalItemSelectors-wU_IDqMH.js";import"./index-CyRoQl_d.js";import"./ChartSizeDimensions-Bu6AufwQ.js";import"./OffsetShower-Crn6XKfz.js";import"./PlotAreaShower-YsEXXYRG.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
