import{R as t}from"./iframe-BLwLvMjc.js";import{R as p}from"./zIndexSlice-f39TItqz.js";import{C as m}from"./ComposedChart-CxKCgcGS.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CmuHOpCJ.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-D_8Dczsi.js";import"./index-CX4CypQp.js";import"./index-BMdMuoJa.js";import"./get-BkG6HND6.js";import"./resolveDefaultProps-BYhifOb3.js";import"./isWellBehavedNumber-CptpHwFR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0n9oFWZ.js";import"./index-940TGUxY.js";import"./index-C34Ey_Rg.js";import"./renderedTicksSlice-BqNNgNfR.js";import"./axisSelectors-D58BkBim.js";import"./d3-scale-DDplI62N.js";import"./CartesianChart-C4yu5ilR.js";import"./chartDataContext-B-M33Z7B.js";import"./CategoricalChart-CRVqHKQs.js";import"./Layer-Bt0_PYLT.js";import"./AnimatedItems-BZKtZoic.js";import"./Label-pioiAs6J.js";import"./Text-D72Dyp1P.js";import"./DOMUtils-BokrT3el.js";import"./ZIndexLayer-YEu_ZQSO.js";import"./useAnimationId-CqDdhCYT.js";import"./ActivePoints-DpoXb-Tp.js";import"./Dot-DDBvFNxJ.js";import"./types-WD3PBzf9.js";import"./RegisterGraphicalItemId-BnK-7IkL.js";import"./GraphicalItemClipPath-DiOFFyuB.js";import"./SetGraphicalItem-DSxSXGHZ.js";import"./getRadiusAndStrokeWidthFromDot-BHSa5sI8.js";import"./ActiveShapeUtils-peAesLaa.js";import"./Curve-Bgoi8H0P.js";import"./step-Y_PLHiNv.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DoeQmq6z.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const $=["FillPattern"];export{e as FillPattern,$ as __namedExportsOrder,Z as default};
