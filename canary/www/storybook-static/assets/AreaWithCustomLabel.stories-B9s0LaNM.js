import{e as t}from"./iframe-b3l0oylc.js";import{R as c}from"./arrayEqualityCheck-CjMmMQbn.js";import{C as d}from"./ComposedChart-Ci_ymdae.js";import{A as l}from"./Area-wD3ZU2cz.js";import{R as h}from"./RechartsHookInspector-XGSushi8.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DcvR48Du.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-IoQ4cwV3.js";import"./hooks-oM9vQQeZ.js";import"./axisSelectors-CzoiwyvX.js";import"./zIndexSlice-6dxWRD0w.js";import"./CartesianChart-Cua76ACG.js";import"./chartDataContext-L6gYrL26.js";import"./CategoricalChart-CbwsmCPP.js";import"./Curve-1kQ3M0AJ.js";import"./types-DcS7TQb1.js";import"./Layer-2yxRimi5.js";import"./ReactUtils-BwdRCLdj.js";import"./Label-DllavO7s.js";import"./Text-BgZlmGMw.js";import"./DOMUtils-CVqp0zn7.js";import"./ZIndexLayer-CtStE837.js";import"./ActivePoints-DgMTYwE1.js";import"./Dot-CRE9dNM4.js";import"./RegisterGraphicalItemId-oaPJX1wj.js";import"./GraphicalItemClipPath-DZsikywZ.js";import"./SetGraphicalItem-DuxrODNH.js";import"./useAnimationId-DdymZr7z.js";import"./getRadiusAndStrokeWidthFromDot-BXhx89qn.js";import"./graphicalItemSelectors-DomU9J31.js";import"./index-BKFod4yn.js";import"./ChartSizeDimensions-CUrkzphw.js";import"./OffsetShower-DDSZRjCY.js";import"./PlotAreaShower-BzpNRyRF.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
