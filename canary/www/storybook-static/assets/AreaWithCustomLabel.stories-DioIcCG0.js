import{e as t}from"./iframe-DG5XGAD6.js";import{R as c}from"./arrayEqualityCheck-j51cHR5x.js";import{C as d}from"./ComposedChart-CB1EKJXL.js";import{A as l}from"./Area-BoZvMuz4.js";import{R as h}from"./RechartsHookInspector-YgQTDZfw.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DwLx5uNW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwgBVkto.js";import"./hooks-CabgqhJI.js";import"./axisSelectors-pumdcMrp.js";import"./zIndexSlice-DIZTBSXC.js";import"./CartesianChart-DBiWbn6Y.js";import"./chartDataContext-CNLpatE7.js";import"./CategoricalChart-DngyMm0O.js";import"./Curve-BnD4_LTQ.js";import"./types-D0CjTngR.js";import"./Layer-CzlbLnCA.js";import"./ReactUtils-Vfgvf3cC.js";import"./Label-bn2tJ_cj.js";import"./Text-BWrPtZHP.js";import"./DOMUtils-Qi6quj9W.js";import"./ZIndexLayer-CKRqVJn0.js";import"./ActivePoints-Bx-JcGPq.js";import"./Dot-BL1VekhN.js";import"./RegisterGraphicalItemId-BNmuyZFV.js";import"./GraphicalItemClipPath-C48puZ8B.js";import"./SetGraphicalItem-Dt76N-O-.js";import"./useAnimationId-NyrgIauS.js";import"./getRadiusAndStrokeWidthFromDot-CqQuGbib.js";import"./graphicalItemSelectors-BzUP1jgi.js";import"./index-ZiVRns4Q.js";import"./ChartSizeDimensions-C2G7tyo6.js";import"./OffsetShower-BRHEzN4x.js";import"./PlotAreaShower-nvVM3hzT.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
