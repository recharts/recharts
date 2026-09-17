import{R as t}from"./iframe-o9H8KOy9.js";import{R as p}from"./zIndexSlice-CsgZI5yp.js";import{C as m}from"./ComposedChart-CKiAGi27.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-beYsojPF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-hW6vudhT.js";import"./index-UCkqSDpm.js";import"./index-DST8VIu0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CyRSpMie.js";import"./isWellBehavedNumber-Dwj2svK3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BZ0mtC1D.js";import"./axisSelectors-Cs0jtKkZ.js";import"./d3-scale-DTDNfzi3.js";import"./index-EzgePqD6.js";import"./index-CnuR4GUo.js";import"./renderedTicksSlice-BmkiUxUd.js";import"./index-jpFEenpG.js";import"./CartesianChart-Gd4WSf--.js";import"./chartDataContext-up-x_HqN.js";import"./CategoricalChart-PL_s45W5.js";import"./Layer-C1DHBl04.js";import"./AnimatedItems-eAjckEIy.js";import"./Label-nsqVjfiI.js";import"./Text-CYZhXiJD.js";import"./DOMUtils-S1dn3EjE.js";import"./useId-C6JRG-LM.js";import"./useBackwardsCompatibleTheme-BxxjaG6R.js";import"./ZIndexLayer-DKFjfMYd.js";import"./useAnimationId-BkEDLLv5.js";import"./ActivePoints-DgEMzgoZ.js";import"./Dot-CCkur9hD.js";import"./types-Df3MXzgv.js";import"./RegisterGraphicalItemId-C9q20zyT.js";import"./GraphicalItemClipPath-DTZX6fHd.js";import"./SetGraphicalItem-obUYvC56.js";import"./getRadiusAndStrokeWidthFromDot-_fRFOmw4.js";import"./ActiveShapeUtils-DCctTHnp.js";import"./Curve-3cnVmCNd.js";import"./step-UNDjkb8Y.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CagZ9rA9.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,rt as __namedExportsOrder,et as default};
