import{R as t}from"./iframe-CsUTfbme.js";import{R as p}from"./zIndexSlice-DJN3Z2tA.js";import{C as m}from"./ComposedChart-CLOI7yF1.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CCErYV-Y.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BS6zuvPx.js";import"./index-CpMCAhl1.js";import"./index-C0tTD0a-.js";import"./get-CGtvq50a.js";import"./resolveDefaultProps-DOSPF-U5.js";import"./isWellBehavedNumber-CaHmgZiw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bz5AtJCZ.js";import"./index-84tIClUK.js";import"./index-CiR04iLY.js";import"./renderedTicksSlice-DKAjtNca.js";import"./axisSelectors-BaY3t_zv.js";import"./d3-scale-D08hqUcH.js";import"./CartesianChart-xV6uxcxT.js";import"./chartDataContext-Dks_l25O.js";import"./CategoricalChart-CDn_aEvK.js";import"./Curve-DdC8EqTQ.js";import"./types-CNmnDBmM.js";import"./step-DsryQMe8.js";import"./path-DyVhHtw_.js";import"./Layer-C0UzjkXP.js";import"./ReactUtils-CIWjNZdp.js";import"./Label-BrqLuQxp.js";import"./Text-1xaaQRGr.js";import"./DOMUtils-CCNMXYAS.js";import"./ZIndexLayer-BszTzZbW.js";import"./ActivePoints-BlInVAX5.js";import"./Dot-BHvXSrDt.js";import"./RegisterGraphicalItemId-Bdk-Jfc1.js";import"./GraphicalItemClipPath-ciWvPzTM.js";import"./SetGraphicalItem-X5S3Yot0.js";import"./useAnimationId-DbHaBqmd.js";import"./getRadiusAndStrokeWidthFromDot-CsCejuOB.js";import"./graphicalItemSelectors-B5605qJb.js";const Y={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const Z=["FillPattern"];export{e as FillPattern,Z as __namedExportsOrder,Y as default};
