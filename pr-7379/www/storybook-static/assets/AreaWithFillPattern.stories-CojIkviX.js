import{e as t}from"./iframe-KzgC6yl3.js";import{g as p}from"./arrayEqualityCheck-CI6mjpz-.js";import{C as m}from"./ComposedChart-Bck7I3Sx.js";import{a as s}from"./Coordinate-CcdTesrj.js";import{A as r}from"./Area-DzKbFBaH.js";import{R as l}from"./RechartsHookInspector-CbwNoaPW.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DbdijU9i.js";import"./immer-BD-tkhpl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DlAfZ1fX.js";import"./index-D1VqXYN0.js";import"./hooks-Bk-p3SZZ.js";import"./axisSelectors-BGTsJTqw.js";import"./d3-scale-CYshLe_K.js";import"./zIndexSlice-CoKEHAdo.js";import"./renderedTicksSlice-jEvY63xF.js";import"./CartesianChart-B-Y1gwjz.js";import"./chartDataContext-DWNsgPih.js";import"./CategoricalChart-BntpVIm6.js";import"./Curve-Q6mWCHhh.js";import"./types-eUgvlmUM.js";import"./step-BvMApuT3.js";import"./path-DyVhHtw_.js";import"./Layer-LeweOpyN.js";import"./ReactUtils-CwLFTC_n.js";import"./Label-DkRj53y4.js";import"./Text-DMdLrMxb.js";import"./DOMUtils-CBtmXe9D.js";import"./ZIndexLayer-B24S8uuv.js";import"./ActivePoints-CV8SIXKH.js";import"./Dot-DYstLEu7.js";import"./RegisterGraphicalItemId-C-ghpo4L.js";import"./GraphicalItemClipPath-fwgnm59t.js";import"./SetGraphicalItem-D3MvL0nb.js";import"./useAnimationId-Djb8H1Ge.js";import"./getRadiusAndStrokeWidthFromDot-0pa1p6Pi.js";import"./graphicalItemSelectors-CI7mViEK.js";import"./index-BPaFEgS3.js";import"./ChartSizeDimensions-DC6_U8Aq.js";import"./OffsetShower-CrK-LA7q.js";import"./PlotAreaShower-CZGD6-xs.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const rt=["FillPattern"];export{e as FillPattern,rt as __namedExportsOrder,et as default};
