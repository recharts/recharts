import{R as t}from"./iframe-CNzr7bRc.js";import{R as p}from"./zIndexSlice-BXquQra7.js";import{C as m}from"./ComposedChart-CHYxJs3d.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-vqxVyrz1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-eALPB1-k.js";import"./throttle-D60XWAz6.js";import"./index-BpBfKZ0c.js";import"./index-7EmzVii1.js";import"./RechartsWrapper-BDCqiBvb.js";import"./axisSelectors-Cj1w7XZO.js";import"./polarAxisSelectors-CghHQQ-X.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BaY54_t1.js";import"./index-vccdfSpl.js";import"./index-DkjLLMk5.js";import"./renderedTicksSlice-DwMt-YUq.js";import"./index-DPDqa0dF.js";import"./CartesianChart-9mx21EaK.js";import"./ZIndexPortal-DSFpx_T8.js";import"./CategoricalChart-B30IE8DU.js";import"./Layer-CQb-3uv7.js";import"./LabelList-BM4oqAMz.js";import"./Label-DK5ffKtI.js";import"./Text-DNGP5VRJ.js";import"./DOMUtils-BNEhIoeS.js";import"./ZIndexLayer-iNGo5aF5.js";import"./ActivePoints-K0chRQ_g.js";import"./Dot-CUKZE6AE.js";import"./types-VNEWdd_i.js";import"./activeStyles-DoMnj4mo.js";import"./useAnimationId-CDC5NaEo.js";import"./dataEntryStyles-fZ5_Gy6u.js";import"./Symbols-CJLh5GL-.js";import"./symbol-CTtPmk_0.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-Dt3t9-Yy.js";import"./getRadiusAndStrokeWidthFromDot-COyF9q3U.js";import"./ActiveShapeUtils-BTkV1P67.js";import"./Curve-BKrC7pl3.js";import"./step-DQr3R_vt.js";import"./useEffectiveDataKey-CeL4hQha.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
