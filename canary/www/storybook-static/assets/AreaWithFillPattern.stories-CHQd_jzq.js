import{R as t}from"./iframe-CKMzUQLl.js";import{R as p}from"./zIndexSlice-COhM5Ssb.js";import{C as m}from"./ComposedChart-Br4fGf2D.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-D5Qyw-bv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BhXVuCfw.js";import"./throttle-cmQF6pk6.js";import"./index-CnQmPyN6.js";import"./index-Ct96jcIf.js";import"./RechartsWrapper-bg3MvxI9.js";import"./axisSelectors-BSZ3SCPn.js";import"./polarAxisSelectors-BANjW4O_.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-uc_I_mt7.js";import"./index-D6eYg-36.js";import"./index-Cl9-JK-G.js";import"./renderedTicksSlice-C4Psuukl.js";import"./index-ClS1qprr.js";import"./CartesianChart-CPRN1zhJ.js";import"./ZIndexPortal-CMRkqNYv.js";import"./CategoricalChart-DhGyzJYC.js";import"./Layer-VHBsdASS.js";import"./LabelList-DO8MwQV1.js";import"./Label-DwblDDwh.js";import"./Text-CUuCMSti.js";import"./DOMUtils-CShcNi4q.js";import"./pageBackground-DxYgqm3W.js";import"./ZIndexLayer-B6POVY0e.js";import"./ActivePoints-DBk2T96T.js";import"./Dot-Da_BOClg.js";import"./fillDefinitions-D5lwwS81.js";import"./types-DgiI7KOn.js";import"./activeStyles-CT0hkTay.js";import"./useAnimationId-DKuDzs92.js";import"./dataEntryStyles-2pl_sY7K.js";import"./Symbols-Bp34LNU2.js";import"./symbol-FynIgkai.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BAzOwitl.js";import"./getRadiusAndStrokeWidthFromDot-CkpjOgWX.js";import"./ActiveShapeUtils-BQ5N4hNI.js";import"./Curve-B0phiZsH.js";import"./step-Wrr8d7OB.js";import"./useEffectiveDataKey-3-wTW5Lh.js";const it={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},ot=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,ot as __namedExportsOrder,it as default};
