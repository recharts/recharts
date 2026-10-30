import{R as t}from"./iframe-GbU_LfIz.js";import{R as p}from"./zIndexSlice-B-uY-xMG.js";import{C as m}from"./ComposedChart-B3bI5XzW.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CQxFRGPq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DaFP4Osr.js";import"./throttle-lL1L3VRP.js";import"./index-DYswmNhd.js";import"./index-CWvB4q6F.js";import"./RechartsWrapper-CBlrkAx1.js";import"./axisSelectors-plpcnepy.js";import"./polarAxisSelectors-CUkA6wv5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-m-_CTi_p.js";import"./index-Dg1dPLnL.js";import"./index-DZowzVKz.js";import"./renderedTicksSlice-D3e3FCUI.js";import"./index-C9cCXc93.js";import"./CartesianChart-6Jqeuu6_.js";import"./ZIndexPortal-CkMateYW.js";import"./CategoricalChart-C2S0aau2.js";import"./Layer-DZ-BC5fp.js";import"./LabelList-BpWQDUee.js";import"./Label-BKofA95f.js";import"./Text-CcmXBTPp.js";import"./DOMUtils-pcjvu5Mx.js";import"./ZIndexLayer-jPVQwjvI.js";import"./ActivePoints-CJ_A0ZwJ.js";import"./Dot-BZZrGYAN.js";import"./types-D5h1KHjm.js";import"./activeStyles-7gml8bSR.js";import"./useAnimationId-3m5wK_ws.js";import"./dataEntryStyles-C8Sz1tul.js";import"./Symbols-RIc_sULF.js";import"./symbol-B34bQZE8.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-SS1PjTU8.js";import"./getRadiusAndStrokeWidthFromDot-DZIWxG1k.js";import"./ActiveShapeUtils-t8cc3cab.js";import"./Curve-BXWlStzO.js";import"./step-B7eAtOky.js";import"./useEffectiveDataKey-DF49AIat.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
