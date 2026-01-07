import{e as t}from"./iframe-VZdOSrkq.js";import{R as c}from"./arrayEqualityCheck-Ba8aNuDT.js";import{C as d}from"./ComposedChart-BhKILeAz.js";import{A as l}from"./Area-CpRcp14M.js";import{R as h}from"./RechartsHookInspector-MoE0nLDg.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CnCOAE1M.js";import"./PolarUtils-CC6VYEjV.js";import"./RechartsWrapper-Dvu2t6Ac.js";import"./hooks-5m2MLZXp.js";import"./axisSelectors-BKO4jsPN.js";import"./zIndexSlice-C3gfI6wW.js";import"./CartesianChart-BoW6sGG3.js";import"./chartDataContext-B6oCj1lT.js";import"./CategoricalChart-Cp_1f-8v.js";import"./Curve-Drsk9B8o.js";import"./types-pQqJf-MX.js";import"./Layer-BsibGM2g.js";import"./ReactUtils-CxvXJs5p.js";import"./Label-wuhIVgaJ.js";import"./Text-C2K_oBbR.js";import"./DOMUtils-CnMWRd9H.js";import"./ZIndexLayer-G2n4L0mz.js";import"./ActivePoints-DULV1Jjf.js";import"./Dot-DlPbxCPd.js";import"./RegisterGraphicalItemId-CqL-lSFz.js";import"./GraphicalItemClipPath-BKYgv61x.js";import"./SetGraphicalItem-B3ZhK10N.js";import"./useAnimationId-DK5gOqc4.js";import"./getRadiusAndStrokeWidthFromDot--5FFHNy4.js";import"./graphicalItemSelectors-Bfxoe3GI.js";import"./index-BmO0aGXh.js";import"./ChartSizeDimensions-D3Cff-Ry.js";import"./OffsetShower-kLJdjlLh.js";import"./PlotAreaShower-zycKA3rU.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const tt=["CustomizedLabel"];export{e as CustomizedLabel,tt as __namedExportsOrder,Z as default};
