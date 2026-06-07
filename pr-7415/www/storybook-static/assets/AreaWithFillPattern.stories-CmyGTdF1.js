import{R as t}from"./iframe-dVDPDAoI.js";import{R as p}from"./zIndexSlice-Bsc_tgY7.js";import{C as m}from"./ComposedChart-BPNopFli.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-B9j0oZfN.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BdmkJOJr.js";import"./index-DKbSAh9L.js";import"./index-Dx5dPQRG.js";import"./get-VpXFggwN.js";import"./resolveDefaultProps-B9xmOxzf.js";import"./isWellBehavedNumber-CPNu7XeA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BD3vbn3c.js";import"./index-C_VdjUmv.js";import"./index-CnhhL7Zb.js";import"./renderedTicksSlice-DnkJLQvR.js";import"./axisSelectors-BILy-Fum.js";import"./d3-scale-Dow8MXGl.js";import"./string-B6fdYHAA.js";import"./CartesianChart-rEvqbiLD.js";import"./chartDataContext-CZJe0GvZ.js";import"./CategoricalChart-CZjUsR6e.js";import"./Layer-M7jAw79j.js";import"./AnimatedItems-BynH3EWp.js";import"./Label-BEOAhV_I.js";import"./Text-Bi26GJyN.js";import"./DOMUtils-lc6v0qq-.js";import"./ZIndexLayer-D86eoQTZ.js";import"./useAnimationId-DHcuBUhz.js";import"./ActivePoints-Dsf5E73K.js";import"./Dot-BoVNLJ4n.js";import"./types-jcNKZDcp.js";import"./RegisterGraphicalItemId-BTF8QJ8M.js";import"./GraphicalItemClipPath-DL50SU1R.js";import"./SetGraphicalItem-BvRajfM7.js";import"./getRadiusAndStrokeWidthFromDot-Buc-JRMN.js";import"./ActiveShapeUtils-G5tYFgXR.js";import"./Curve-Bib8lOHe.js";import"./step-BD-4s5qs.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-cLW-ET4H.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
