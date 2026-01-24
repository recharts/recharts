import{e as t}from"./iframe-BMCIaxKG.js";import{R as c}from"./arrayEqualityCheck--GVOH9-X.js";import{C as d}from"./ComposedChart-BiUrjWP0.js";import{A as l}from"./Area-BaPv58WZ.js";import{R as h}from"./RechartsHookInspector-BEE5VJHB.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DYzg8zSB.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-Bb1gDQXi.js";import"./hooks-DebnH94a.js";import"./axisSelectors-cgl3VJbu.js";import"./zIndexSlice-B9Z5B7ke.js";import"./CartesianChart-B-ZCTtvW.js";import"./chartDataContext-oBen9I8F.js";import"./CategoricalChart-epx7zaIT.js";import"./Curve-B-WNVokC.js";import"./types-CjLOz-vL.js";import"./Layer-MWXbZbYh.js";import"./ReactUtils-5tDB8KCJ.js";import"./Label-DX5r6J7L.js";import"./Text-C3pNOBoN.js";import"./DOMUtils-Bqla5JdC.js";import"./ZIndexLayer-D3DglK0F.js";import"./ActivePoints-3VFSNx0Z.js";import"./Dot-Bk1pRUj2.js";import"./RegisterGraphicalItemId-oN7HBHom.js";import"./GraphicalItemClipPath-B2ari5YW.js";import"./SetGraphicalItem-CcB6KXss.js";import"./useAnimationId-BmU-cqjD.js";import"./getRadiusAndStrokeWidthFromDot-BdARBz_p.js";import"./graphicalItemSelectors-Doxgifoh.js";import"./index-a6yAW-au.js";import"./ChartSizeDimensions-B-pVWfha.js";import"./OffsetShower--s29U8Jg.js";import"./PlotAreaShower-CsN0ehbx.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
