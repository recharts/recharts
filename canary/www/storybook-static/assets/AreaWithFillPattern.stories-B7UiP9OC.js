import{e as t}from"./iframe-Gi8dyZ6e.js";import{R as p}from"./arrayEqualityCheck-DuhG7Z2p.js";import{C as m}from"./ComposedChart-QXz6Q_cE.js";import{A as r}from"./Area-CE7idmNd.js";import{R as s}from"./RechartsHookInspector-xuUFm4Np.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B-oYS9lk.js";import"./immer-D5pmFx9i.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CB2AOINA.js";import"./index-DFJBHj5i.js";import"./hooks-BTT9-kp9.js";import"./axisSelectors-BVT7Qm3f.js";import"./d3-scale-B9haREcB.js";import"./zIndexSlice-DnlbZmgt.js";import"./renderedTicksSlice-C1sYLHQR.js";import"./CartesianChart-BTWnBU7d.js";import"./chartDataContext-a1u8I7YY.js";import"./CategoricalChart-qcsoPY3x.js";import"./Curve-BOJjXgXN.js";import"./types-I1HiLSRe.js";import"./step-fw1t_kgZ.js";import"./Layer-DeXjDdnZ.js";import"./ReactUtils-CMiXbBDc.js";import"./Label-DaPx3_eW.js";import"./Text-BcSPYkwi.js";import"./DOMUtils-D2DkSNEb.js";import"./ZIndexLayer-gbXEsAYB.js";import"./ActivePoints-BT7VY6a-.js";import"./Dot-Bar0xDVX.js";import"./RegisterGraphicalItemId-eSxeD-8T.js";import"./GraphicalItemClipPath-Cze4veVF.js";import"./SetGraphicalItem-CtHZzRYw.js";import"./useAnimationId-DlkxhLWt.js";import"./getRadiusAndStrokeWidthFromDot-ruaZLZ0D.js";import"./graphicalItemSelectors-Dg-F-Cxs.js";import"./index-rE-DaWJc.js";import"./ChartSizeDimensions-zCU3Rmg-.js";import"./OffsetShower-CbBMFbGN.js";import"./PlotAreaShower-BZejz9x4.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
