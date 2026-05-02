import{e as t}from"./iframe-BBzssXFz.js";import{R as c}from"./arrayEqualityCheck-Bjl1KGHu.js";import{C as d}from"./ComposedChart-BNnTKuEE.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Cv8DqpzB.js";import{R as u}from"./RechartsHookInspector-Cq_u8Fnd.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Csr8SK85.js";import"./immer-7XFVXXFB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsBkMUfg.js";import"./index-CafXZux5.js";import"./hooks-Cdjbv1yZ.js";import"./axisSelectors-CFvd2CpI.js";import"./d3-scale-CV33LrVl.js";import"./zIndexSlice-BlJdEm2b.js";import"./renderedTicksSlice-D_eYSGtp.js";import"./CartesianChart-D4Tq8Mp4.js";import"./chartDataContext-DUrxX3r4.js";import"./CategoricalChart-B-bxACDj.js";import"./Curve-Dzo1_9a0.js";import"./types-CER3-J_V.js";import"./step-Dmy2-h0-.js";import"./Layer-CAh1Kgp_.js";import"./ReactUtils-CabJhVob.js";import"./Label-B9ZSBmHd.js";import"./Text-Boz5VXT5.js";import"./DOMUtils-DJmkFWFo.js";import"./ZIndexLayer-C1_Q11sr.js";import"./ActivePoints-DCbS44DF.js";import"./Dot-BOUDlr0E.js";import"./RegisterGraphicalItemId-5EdXQ8V-.js";import"./GraphicalItemClipPath-DFMtaTzW.js";import"./SetGraphicalItem-C2_0J6B5.js";import"./useAnimationId-G1z57dIT.js";import"./getRadiusAndStrokeWidthFromDot-DBbOA2H8.js";import"./graphicalItemSelectors-22dngLJU.js";import"./index-BMusN9RV.js";import"./ChartSizeDimensions-DX20IRBn.js";import"./OffsetShower-0ikHXz0q.js";import"./PlotAreaShower-ddoTAOnv.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
