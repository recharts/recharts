import{e as t}from"./iframe-bIRDwOrj.js";import{R as c}from"./arrayEqualityCheck-TXFMRjRi.js";import{C as d}from"./ComposedChart-B96jNgZT.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CckYql2D.js";import{R as u}from"./RechartsHookInspector-CVcWeYmF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-hkUJr7lQ.js";import"./immer-BfeMUSMO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D2ef2x-I.js";import"./index-TSn5rXzG.js";import"./hooks-BdMZPZGx.js";import"./axisSelectors-CoyWHGIo.js";import"./d3-scale-CFl6A6_I.js";import"./zIndexSlice-D22DBnXA.js";import"./renderedTicksSlice-DiK-9S0i.js";import"./CartesianChart-EqFxaaEr.js";import"./chartDataContext-O3jargTL.js";import"./CategoricalChart-DI9gh84Y.js";import"./Curve-orFRmx5o.js";import"./types-dvoy8M64.js";import"./step-DQ7wUDFq.js";import"./Layer-IjPfnpTW.js";import"./ReactUtils-CzayGhzm.js";import"./Label-C1RClCIo.js";import"./Text-DzsBbndD.js";import"./DOMUtils-MkU82dM6.js";import"./ZIndexLayer-D7UlnPMP.js";import"./ActivePoints-CJrfz0Fi.js";import"./Dot-BCbECuJO.js";import"./RegisterGraphicalItemId-DCkpRkMi.js";import"./GraphicalItemClipPath-CBXSjVJX.js";import"./SetGraphicalItem-B0eIE6zm.js";import"./useAnimationId-Co08wyJa.js";import"./getRadiusAndStrokeWidthFromDot-C0F5EKdh.js";import"./graphicalItemSelectors-DBAA3x5X.js";import"./index-B6Pu2s-H.js";import"./ChartSizeDimensions-CmmmbIVS.js";import"./OffsetShower-DVm6XnLi.js";import"./PlotAreaShower-8mw46bvb.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
