import{R as t}from"./iframe-CpWBjTvp.js";import{R as p}from"./zIndexSlice-DUDjamRK.js";import{C as m}from"./ComposedChart-BVHJhCwJ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BsjJZXAv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-NIjw2OgC.js";import"./throttle-D3Uoll6g.js";import"./index-BsKHwb8S.js";import"./index-BEj8e0rp.js";import"./RechartsWrapper-DxDmVade.js";import"./axisSelectors-DP-Cq8x3.js";import"./polarAxisSelectors-Cbbt3MrT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-9EE4QQRc.js";import"./index-BKdflUfl.js";import"./index-mAc_XfwU.js";import"./renderedTicksSlice-DvLiRaDl.js";import"./index-xtKZJIPQ.js";import"./CartesianChart-2SX8QMEH.js";import"./ZIndexPortal-D23JLhQd.js";import"./CategoricalChart-tOUFzxMq.js";import"./Layer-DcRKRX6x.js";import"./LabelList-B0vE2GKD.js";import"./Label-BHRweOLu.js";import"./Text-BafsCBcm.js";import"./pageBackground-CKOzv8y-.js";import"./ZIndexLayer-BbGGEaTO.js";import"./ActivePoints-CWRCwq-4.js";import"./Dot-D1fFPcbO.js";import"./types-BKpcX7F2.js";import"./activeStyles-CPrr7d0w.js";import"./useAnimationId-qe3YUtTg.js";import"./dataEntryStyles-BMyxGDVI.js";import"./Symbols-D-1GfXlL.js";import"./symbol-C1ODNnyl.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-Bf14-AlA.js";import"./getRadiusAndStrokeWidthFromDot-BkVlgOSF.js";import"./ActiveShapeUtils-DpSDZTd0.js";import"./Curve-DzwEiiyx.js";import"./step-D2PoiFak.js";import"./useEffectiveDataKey-CmhiZ1Bu.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
