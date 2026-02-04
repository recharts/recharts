import{e as t}from"./iframe-CU9XYLf3.js";import{R as c}from"./arrayEqualityCheck-eFaqPFyI.js";import{C as d}from"./ComposedChart-DmX0UFL1.js";import{A as l}from"./Area-DdJ3qN1I.js";import{R as h}from"./RechartsHookInspector-_W3CqC5M.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bb0L8kLp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CMA78OKy.js";import"./hooks-BpNXzUNL.js";import"./axisSelectors-zUwIil_A.js";import"./zIndexSlice-MqfV_Lfv.js";import"./CartesianChart-C7ozkYMn.js";import"./chartDataContext-eO3XCw92.js";import"./CategoricalChart-CnWZI6Fz.js";import"./Curve-_cbPrSga.js";import"./types-B0qniNwz.js";import"./Layer-DY220JH0.js";import"./ReactUtils-D-xpVFtM.js";import"./Label-DXEyh5i9.js";import"./Text-CY41MgYr.js";import"./DOMUtils-Dak0oEyJ.js";import"./ZIndexLayer-Dc6Gk9II.js";import"./ActivePoints-B2pGhw2h.js";import"./Dot-B5sv6NYe.js";import"./RegisterGraphicalItemId-CSmKkG0q.js";import"./GraphicalItemClipPath-BoX2yUt9.js";import"./SetGraphicalItem-Dr6ZmOI6.js";import"./useAnimationId-VWf3KASX.js";import"./getRadiusAndStrokeWidthFromDot-CFQCYzj3.js";import"./graphicalItemSelectors-CNg_cJMp.js";import"./index-DN73DgGW.js";import"./ChartSizeDimensions-Bvvn8A72.js";import"./OffsetShower-CnaZFh38.js";import"./PlotAreaShower-DsaFxt3j.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
