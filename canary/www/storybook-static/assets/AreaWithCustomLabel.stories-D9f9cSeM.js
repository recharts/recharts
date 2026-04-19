import{e as t}from"./iframe-DnKPxY7a.js";import{R as c}from"./arrayEqualityCheck-BRLe4SS-.js";import{C as d}from"./ComposedChart-CHH2nWqC.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BWPidFuT.js";import{R as u}from"./RechartsHookInspector-C1a5f-X8.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DOqUyIeg.js";import"./immer-D9hLCfsI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-nQtYlSir.js";import"./index-CC8a_PKZ.js";import"./hooks-DeeMtons.js";import"./axisSelectors-BXdD8PxV.js";import"./d3-scale-C2xqHqad.js";import"./zIndexSlice-KD1BDYTU.js";import"./renderedTicksSlice-CFEn4_Md.js";import"./CartesianChart-Coa75cqV.js";import"./chartDataContext-CJJd-wkg.js";import"./CategoricalChart-hpH9n4Dg.js";import"./Curve-Dkc-iOzw.js";import"./types-CYYN-QxE.js";import"./step-xT0L5jQX.js";import"./Layer-DeK52Cv4.js";import"./ReactUtils-4peIRB2B.js";import"./Label-75Lwdv3P.js";import"./Text-CqYxA_ST.js";import"./DOMUtils-0c6Z1U3w.js";import"./ZIndexLayer-BFRrJfPa.js";import"./ActivePoints-DbUAoEhp.js";import"./Dot-CNgvsTba.js";import"./RegisterGraphicalItemId-DwM7Te_7.js";import"./GraphicalItemClipPath-DAZ9bgmo.js";import"./SetGraphicalItem-BlPK52Q_.js";import"./useAnimationId-DEpRCopS.js";import"./getRadiusAndStrokeWidthFromDot-C1w0XMVH.js";import"./graphicalItemSelectors-xl6jxkwV.js";import"./index-CdavTI8c.js";import"./ChartSizeDimensions-CY_4B8hK.js";import"./OffsetShower-BXqoFf7d.js";import"./PlotAreaShower-CJTPHZ_L.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
