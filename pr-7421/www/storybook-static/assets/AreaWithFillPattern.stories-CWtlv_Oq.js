import{R as t}from"./iframe-D2mK0_SY.js";import{R as p}from"./zIndexSlice-CurYRJ-V.js";import{C as m}from"./ComposedChart-FHYKcVPV.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BR8VUwWl.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Cds45GwY.js";import"./index-EKI16Vl3.js";import"./index-c7pUvxdZ.js";import"./get-gd89bvM7.js";import"./resolveDefaultProps-BDJLCGQq.js";import"./isWellBehavedNumber-PwrDSI0r.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Da4b3ttl.js";import"./index-CTpZBZDJ.js";import"./index-DFlAh1f1.js";import"./renderedTicksSlice-Cv_tPpdR.js";import"./axisSelectors-BOYHxsHM.js";import"./d3-scale-D7S-A9mQ.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Dl9STlZO.js";import"./chartDataContext-DcfIEZUC.js";import"./CategoricalChart-DE8yrV95.js";import"./Layer-CVGFJ3pT.js";import"./AnimatedItems-9-Gv8yfc.js";import"./Label-BWAfqYWX.js";import"./Text-Bc_u3T2m.js";import"./DOMUtils-DX7CaFR_.js";import"./ZIndexLayer-Cbwietl0.js";import"./useAnimationId-Bv48rb4m.js";import"./ActivePoints-Dt_rJbE_.js";import"./Dot-CZPOiTTM.js";import"./types-CH3UhPbC.js";import"./RegisterGraphicalItemId-DKtf33UE.js";import"./GraphicalItemClipPath-C_n5kW10.js";import"./SetGraphicalItem-2IunVx_0.js";import"./getRadiusAndStrokeWidthFromDot-3QY54_i-.js";import"./ActiveShapeUtils-C7mnGY80.js";import"./Curve-ByDlF2jD.js";import"./step-CqVmJfXf.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-aGu2s7Mg.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const tt=["FillPattern"];export{e as FillPattern,tt as __namedExportsOrder,$ as default};
