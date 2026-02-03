import{e as t}from"./iframe-Bsm65lpu.js";import{R as c}from"./arrayEqualityCheck-pVpwfhw9.js";import{C as d}from"./ComposedChart-DLKCNB3k.js";import{A as l}from"./Area-DKoP-o48.js";import{R as h}from"./RechartsHookInspector-Clmx80vb.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-rxG_-3GU.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-De8mSPBF.js";import"./hooks-C8-QiYSZ.js";import"./axisSelectors-BL5_jCnI.js";import"./zIndexSlice-CyooY4AF.js";import"./CartesianChart-COAh2GwA.js";import"./chartDataContext-BzZNyNeo.js";import"./CategoricalChart-CpYGwsdd.js";import"./Curve-Dwdi27bs.js";import"./types-DNFwz7vs.js";import"./Layer-wMrNll4f.js";import"./ReactUtils-Dg23rHrH.js";import"./Label-BJg3D3z3.js";import"./Text-qBvU-JXf.js";import"./DOMUtils-D61cKDLm.js";import"./ZIndexLayer-B9ntexjH.js";import"./ActivePoints-RliMcJhX.js";import"./Dot-Cn8YAJTC.js";import"./RegisterGraphicalItemId-D7Q-Ng9s.js";import"./GraphicalItemClipPath-DmxStlHE.js";import"./SetGraphicalItem-BK1cbA1C.js";import"./useAnimationId-dI2bK3sU.js";import"./getRadiusAndStrokeWidthFromDot-DbjDS3xp.js";import"./graphicalItemSelectors-DbjNkkTF.js";import"./index-CU5fePgk.js";import"./ChartSizeDimensions-CraFDmRl.js";import"./OffsetShower-Cb2JVvak.js";import"./PlotAreaShower-Bu5CsAfQ.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
