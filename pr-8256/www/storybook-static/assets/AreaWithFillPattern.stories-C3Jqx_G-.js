import{R as t}from"./iframe-Cd5XZAZS.js";import{R as p}from"./zIndexSlice-DK_btX6x.js";import{C as m}from"./ComposedChart-C4dh_bHB.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CoLCWkEc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-_VGnYbPZ.js";import"./throttle-PHSKRlho.js";import"./index-B-TxKf-H.js";import"./index-Co6Bjw3c.js";import"./RechartsWrapper-m0J5sskz.js";import"./axisSelectors-BHI5fpRs.js";import"./polarAxisSelectors-n6B6BMl9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CgwU88kX.js";import"./index-CvnUfrKo.js";import"./index-DVl92vRy.js";import"./renderedTicksSlice-DPOz0IRP.js";import"./index-xt3fboRF.js";import"./fillDefinitions-DUfOk_XW.js";import"./CartesianChart-DgF2iEt1.js";import"./chartDataContext-BT9LVt8h.js";import"./CategoricalChart-CUQRrDXZ.js";import"./getRadiusAndStrokeWidthFromDot-l9UD6a4a.js";import"./Layer-B_2Ec-2K.js";import"./dataEntryStyles-CotdwlGF.js";import"./Label-DZuK-EQs.js";import"./Text-wtrDapFR.js";import"./ZIndexLayer-CbCfhAbh.js";import"./ActivePoints-BkMJ028i.js";import"./Dot-DRLqVGoB.js";import"./types-GkAdah5a.js";import"./activeStyles-BcTmj77e.js";import"./useAnimationId-_tPgr2CA.js";import"./Symbols-CoJLGMis.js";import"./symbol-ZYu2ZO_N.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-pIsvI9Mb.js";import"./ActiveShapeUtils-ckMpYydv.js";import"./Curve-CXblHPne.js";import"./step-Cqk_pcFb.js";import"./useEffectiveDataKey-Cop8dd2N.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,et as __namedExportsOrder,tt as default};
