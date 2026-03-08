import{e as t}from"./iframe-CLI455N8.js";import{R as c}from"./arrayEqualityCheck-DGATYUvM.js";import{C as d}from"./ComposedChart-BPPpLWby.js";import{A as l}from"./Area-DoX8M0aR.js";import{R as h}from"./RechartsHookInspector-B0jcEhQg.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CegQPTcY.js";import"./immer-DmWp1HVW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BiomK5HP.js";import"./index-BwppRXXR.js";import"./hooks-Doc11HYF.js";import"./axisSelectors-BdO5JamF.js";import"./d3-scale-BI_Xdw0D.js";import"./zIndexSlice-D_mnyKw0.js";import"./renderedTicksSlice-CceCuUpi.js";import"./CartesianChart-Bvwnl3Az.js";import"./chartDataContext-1HoxnSEy.js";import"./CategoricalChart-M5ONOIR4.js";import"./Curve-jc1v2UsA.js";import"./types-BBHZriQH.js";import"./step-Bbb8NlBF.js";import"./Layer-C2gLD8qT.js";import"./ReactUtils-D6yH62ZJ.js";import"./Label-DZ3NTBbi.js";import"./Text-B9IImLk3.js";import"./DOMUtils-DwfKCbJu.js";import"./ZIndexLayer-Bu63NknL.js";import"./ActivePoints-BykxdX5n.js";import"./Dot-DEiLNns9.js";import"./RegisterGraphicalItemId-DhtbT04w.js";import"./GraphicalItemClipPath-5s_f3x1V.js";import"./SetGraphicalItem-MRBrVOH2.js";import"./useAnimationId-CjNefpky.js";import"./getRadiusAndStrokeWidthFromDot-CtHwe_Ur.js";import"./graphicalItemSelectors-CEQRKNVB.js";import"./index-DzCTiCHw.js";import"./ChartSizeDimensions-CHU61BQR.js";import"./OffsetShower-B0bvPXsU.js";import"./PlotAreaShower-wBW1mPFi.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
