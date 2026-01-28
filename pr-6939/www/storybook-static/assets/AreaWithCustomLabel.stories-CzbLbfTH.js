import{e as t}from"./iframe-BQPEMrXd.js";import{R as c}from"./arrayEqualityCheck-CslLKJ6H.js";import{C as d}from"./ComposedChart-CWFkdeSx.js";import{A as l}from"./Area-BGHJGXtL.js";import{R as h}from"./RechartsHookInspector-DspFoKBX.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BDNWBHNP.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DACGaUhd.js";import"./hooks-Bdj8JxEZ.js";import"./axisSelectors-CtzL1lJc.js";import"./zIndexSlice-CdQy2W3n.js";import"./CartesianChart-BMe1DD5u.js";import"./chartDataContext-Bf7gL6YI.js";import"./CategoricalChart-Do_dOtlr.js";import"./Curve-CkSquOYK.js";import"./types-BQWi4mRQ.js";import"./Layer-DxbBzKq7.js";import"./ReactUtils-Ctv4TrHD.js";import"./Label-CJDR703l.js";import"./Text-40tQThuO.js";import"./DOMUtils-CBEPLavF.js";import"./ZIndexLayer-BhdUGqn6.js";import"./ActivePoints-CBPMI_KV.js";import"./Dot-Dad_gt4k.js";import"./RegisterGraphicalItemId-DGfNttgy.js";import"./GraphicalItemClipPath-BhozllE_.js";import"./SetGraphicalItem-Dib0kNEx.js";import"./useAnimationId-BxGZeVYE.js";import"./getRadiusAndStrokeWidthFromDot-DDWPUI43.js";import"./graphicalItemSelectors-CbXQMkVw.js";import"./index-DIjwufBA.js";import"./ChartSizeDimensions-CVrNRa4B.js";import"./OffsetShower-DTE5GBb5.js";import"./PlotAreaShower-6AA0_a8Q.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
