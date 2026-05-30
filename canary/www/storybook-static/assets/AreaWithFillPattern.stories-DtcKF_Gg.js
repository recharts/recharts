import{c as t}from"./iframe-CR5xUcH4.js";import{g as p}from"./zIndexSlice-Coakq-0y.js";import{C as m}from"./ComposedChart-DbazSM9x.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as r}from"./Area--Ktv_cOk.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-MiNeKFai.js";import"./index-vQTj3wjJ.js";import"./index-BwAW1XSH.js";import"./get-CdpBIjqV.js";import"./resolveDefaultProps-Ceeul6CI.js";import"./isWellBehavedNumber-VNzXGTrj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DqbEnq-O.js";import"./index-BL2MNBFa.js";import"./index-C1C-S7u7.js";import"./renderedTicksSlice-BX_9N5fQ.js";import"./axisSelectors-GqEe5nOB.js";import"./d3-scale-Cr_JmSke.js";import"./CartesianChart-C1PsmK-N.js";import"./chartDataContext-YedE8BO5.js";import"./CategoricalChart-DNMItnv2.js";import"./Curve-7AAFvrE4.js";import"./types-vWyLmemb.js";import"./step-CBodA2th.js";import"./path-DyVhHtw_.js";import"./Layer-DDAYqTxx.js";import"./ReactUtils-D5HGwZm0.js";import"./Label-gV3sJO-c.js";import"./Text-Diq_68Pn.js";import"./DOMUtils-HE2atAIH.js";import"./ZIndexLayer-Br2sJvd3.js";import"./ActivePoints-BYKq7ayk.js";import"./Dot-DyT4z2sM.js";import"./RegisterGraphicalItemId-BwAGbVF8.js";import"./GraphicalItemClipPath-BXgSat3L.js";import"./SetGraphicalItem-Duk0nTzk.js";import"./useAnimationId-qfC-4EnL.js";import"./getRadiusAndStrokeWidthFromDot-CVCg-N3i.js";import"./graphicalItemSelectors-BfOvLmPr.js";const Y={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const Z=["FillPattern"];export{e as FillPattern,Z as __namedExportsOrder,Y as default};
