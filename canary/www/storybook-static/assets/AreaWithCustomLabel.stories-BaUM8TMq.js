import{e as t}from"./iframe-DZKc3wlS.js";import{R as c}from"./arrayEqualityCheck-DjWYx_fN.js";import{C as d}from"./ComposedChart-B72QYvLv.js";import{A as l}from"./Area-CWqCxD8N.js";import{R as h}from"./RechartsHookInspector-Co_Fh5Fl.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CVgEU2hP.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CFmROmVB.js";import"./hooks-DW00eoGN.js";import"./axisSelectors-D0TaSUJl.js";import"./zIndexSlice-B0ARFS3L.js";import"./CartesianChart-EIvq8INt.js";import"./chartDataContext-DWjoQixe.js";import"./CategoricalChart-CckqKMR_.js";import"./Curve-gwVQ8PMT.js";import"./types-CL0cTInA.js";import"./Layer-DH-WpK_h.js";import"./ReactUtils-rr4vsGZe.js";import"./Label-CCWjKoRR.js";import"./Text-D1upxTDv.js";import"./DOMUtils-32kvDN7M.js";import"./ZIndexLayer-DokrlvR2.js";import"./ActivePoints-BuT4hzZo.js";import"./Dot-COwBL4NX.js";import"./RegisterGraphicalItemId-DnhKaSZS.js";import"./GraphicalItemClipPath-7NYVrtJx.js";import"./SetGraphicalItem-DvZbVWHx.js";import"./useAnimationId-NX8Gitos.js";import"./getRadiusAndStrokeWidthFromDot-CDBmxzKc.js";import"./graphicalItemSelectors-MTx4Krmh.js";import"./index-ZKZvtgb5.js";import"./ChartSizeDimensions-Dn532-gh.js";import"./OffsetShower-2bIokmPy.js";import"./PlotAreaShower-FcIufD8Q.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
