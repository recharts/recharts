import{e as t}from"./iframe-CE_u6gw7.js";import{R as p}from"./arrayEqualityCheck-DrWQ_zH1.js";import{C as m}from"./ComposedChart-BtdcIjSh.js";import{A as r}from"./Area-BexPlFuD.js";import{R as s}from"./RechartsHookInspector-Dl79BROd.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B_XoAT-1.js";import"./immer-B4lMi1z1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B6u2BPsd.js";import"./index-CxjNEs9W.js";import"./hooks-PVjuMKZG.js";import"./axisSelectors-BIg47fnU.js";import"./d3-scale-DJKgZxBp.js";import"./zIndexSlice-BphKS-MH.js";import"./renderedTicksSlice-PB7f1cWi.js";import"./CartesianChart-Cxn-kkBD.js";import"./chartDataContext-DcP55NXx.js";import"./CategoricalChart-8rYVrRQy.js";import"./Curve-VV1uNtUT.js";import"./types-BY4GBGia.js";import"./step-CYcDECZ0.js";import"./Layer-DWHUvPCA.js";import"./ReactUtils-DKt0JvWb.js";import"./Label-B0RF5qp9.js";import"./Text-CMYMNHqG.js";import"./DOMUtils-BxWdBvEt.js";import"./ZIndexLayer-DmUZ0Rp1.js";import"./ActivePoints-hrEYGtat.js";import"./Dot-CRKbFyPB.js";import"./RegisterGraphicalItemId-CbUb9Psg.js";import"./GraphicalItemClipPath-DEfFS43K.js";import"./SetGraphicalItem-afAcTt-s.js";import"./useAnimationId-Ey9rpLv3.js";import"./getRadiusAndStrokeWidthFromDot-CYfIvNV9.js";import"./graphicalItemSelectors-CjCkaj0B.js";import"./index-BnKoqAo2.js";import"./ChartSizeDimensions-DBXaHco-.js";import"./OffsetShower-Dg42jmMc.js";import"./PlotAreaShower-Dg2xDHUw.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const et=["FillPattern"];export{e as FillPattern,et as __namedExportsOrder,tt as default};
