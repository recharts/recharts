import{e as t}from"./iframe-BlWijLqW.js";import{R as c}from"./arrayEqualityCheck-wpbGPGp4.js";import{C as d}from"./ComposedChart-Bvywwt59.js";import{A as l}from"./Area-CMZWAoN1.js";import{R as h}from"./RechartsHookInspector-DmBYfqJt.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BXixkRdf.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DVoFofdD.js";import"./hooks-Bq9gEA3Y.js";import"./axisSelectors-BcyrPMqb.js";import"./zIndexSlice-CAH7mPZ1.js";import"./CartesianChart-B-NzXiwJ.js";import"./chartDataContext-Bi-RwErn.js";import"./CategoricalChart-yeAYRiqJ.js";import"./Curve-DR-_MvJg.js";import"./types-CMl5R0ed.js";import"./Layer-3MYXWHxJ.js";import"./ReactUtils-CbcjOK7p.js";import"./Label-Df_5RPeD.js";import"./Text-zHguMFUU.js";import"./DOMUtils-DB8eToSF.js";import"./ZIndexLayer-CJd84X-g.js";import"./ActivePoints-JWw26lZk.js";import"./Dot-D4efsgOa.js";import"./RegisterGraphicalItemId-CGPZoT1R.js";import"./GraphicalItemClipPath-C9wWAhjz.js";import"./SetGraphicalItem-UAqbhtt1.js";import"./useAnimationId-B1CL6Xpk.js";import"./getRadiusAndStrokeWidthFromDot-CWn6u2wW.js";import"./graphicalItemSelectors-BsNSgCuD.js";import"./index-BlR-9DJp.js";import"./ChartSizeDimensions-CSi05Yh4.js";import"./OffsetShower-C6MwKWid.js";import"./PlotAreaShower-BWRdXOpl.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
