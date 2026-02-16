import{e as t}from"./iframe-DvRa5dgx.js";import{R as c}from"./arrayEqualityCheck-Bp8MITA_.js";import{C as d}from"./ComposedChart-BwcJtZel.js";import{A as l}from"./Area-DL78s5FV.js";import{R as h}from"./RechartsHookInspector-BA8H9BQA.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-SoldR4SX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BMf934kH.js";import"./hooks-BvcgOwyj.js";import"./axisSelectors-s-qGbPsD.js";import"./zIndexSlice-DOVBAap6.js";import"./renderedTicksSlice-wIA-0A8I.js";import"./CartesianChart-c-FJQtIa.js";import"./chartDataContext-C7Yjh1uz.js";import"./CategoricalChart-_E9QNV-R.js";import"./Curve-DLYOuSdb.js";import"./types-B9z2jnxG.js";import"./Layer-D1P67DdH.js";import"./ReactUtils-CmHVY68G.js";import"./Label-Btvu6YdH.js";import"./Text-IC-RDuuN.js";import"./DOMUtils-BAfLzr3t.js";import"./ZIndexLayer-DYz5TQmP.js";import"./ActivePoints-BV7tIsyM.js";import"./Dot-DZhZY6Yk.js";import"./RegisterGraphicalItemId-CIANtz7R.js";import"./GraphicalItemClipPath-mIkxvXlB.js";import"./SetGraphicalItem-C9-rzWMm.js";import"./useAnimationId-BFi3XFtV.js";import"./getRadiusAndStrokeWidthFromDot-Djbc36Ny.js";import"./graphicalItemSelectors-BMXMKkAx.js";import"./index-B2ipCF0h.js";import"./ChartSizeDimensions-CDS5iqbY.js";import"./OffsetShower-Dle6B9Mj.js";import"./PlotAreaShower-CGSCgxJv.js";const tt={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const et=["CustomizedLabel"];export{e as CustomizedLabel,et as __namedExportsOrder,tt as default};
