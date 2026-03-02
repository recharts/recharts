import{e as t}from"./iframe-DNAE1NhS.js";import{R as c}from"./arrayEqualityCheck-mXK7KdlW.js";import{C as d}from"./ComposedChart-B76NVtIH.js";import{A as l}from"./Area-AOMvuVSy.js";import{R as h}from"./RechartsHookInspector-CXdTs72e.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CjxP23mN.js";import"./immer-CgyYfbuD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BnyLV03c.js";import"./index-zEpWvrsz.js";import"./hooks-D9_8XsUT.js";import"./axisSelectors-CAHD1NoH.js";import"./d3-scale-9rqZbRzS.js";import"./zIndexSlice-Dz-Y6weB.js";import"./renderedTicksSlice-caOf_y68.js";import"./CartesianChart-hy_UmrJw.js";import"./chartDataContext-ugJXSBb3.js";import"./CategoricalChart-B3LDNru7.js";import"./Curve-DnknT2C5.js";import"./types-BvNVkM_d.js";import"./step-DDruULJc.js";import"./Layer-D_bZVw-_.js";import"./ReactUtils-DmdO9I71.js";import"./Label-Czy9EWVi.js";import"./Text-oeG0hSrI.js";import"./DOMUtils-MNEnNJaG.js";import"./ZIndexLayer-NBg0M_kA.js";import"./ActivePoints-DH0GLZdO.js";import"./Dot-Cr144KYy.js";import"./RegisterGraphicalItemId-Bn08OEO8.js";import"./GraphicalItemClipPath-aQHsATLs.js";import"./SetGraphicalItem-1nnxs2qY.js";import"./useAnimationId-BLg_egJR.js";import"./getRadiusAndStrokeWidthFromDot-BEY7eYKz.js";import"./graphicalItemSelectors-CnnCHwYo.js";import"./index-FFJywn3r.js";import"./ChartSizeDimensions-B5bHZnUB.js";import"./OffsetShower-Bw8a_rrw.js";import"./PlotAreaShower-BJMlxwGr.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
