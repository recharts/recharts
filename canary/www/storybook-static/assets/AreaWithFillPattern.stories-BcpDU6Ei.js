import{R as t}from"./iframe-n-o_GhOg.js";import{R as p}from"./zIndexSlice-rH1Vz5Mp.js";import{C as m}from"./ComposedChart-B569yWTF.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-B4Vqip6G.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C59GD_w_.js";import"./index-D3Dxakv3.js";import"./index-chW2YjqO.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CCJ2xkQr.js";import"./isWellBehavedNumber-DnO1JWm3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-_cU67sC5.js";import"./axisSelectors-CZyPeZLC.js";import"./d3-scale-Bnu-nqAj.js";import"./index-DtnTPZuH.js";import"./index-BQjoI2YU.js";import"./renderedTicksSlice-BzxRR8rk.js";import"./index-Dj2q-0Ll.js";import"./CartesianChart-DyFIrny8.js";import"./chartDataContext-DJykTpvv.js";import"./CategoricalChart-BDOiNhZt.js";import"./Layer-DpixjnOX.js";import"./AnimatedItems-BXuL_9-l.js";import"./Label-CNUZ8IJr.js";import"./Text-SNR8n6Fx.js";import"./DOMUtils-c7gF72Lb.js";import"./useId-x_HnpDjM.js";import"./useBackwardsCompatibleTheme-DwZPWCWZ.js";import"./ZIndexLayer-RuyYCT_q.js";import"./useAnimationId-Bs6Pq3h0.js";import"./ActivePoints-fyry5IXw.js";import"./Dot-NFpTkrs-.js";import"./types-D19g2GXX.js";import"./RegisterGraphicalItemId-D70QTB5K.js";import"./GraphicalItemClipPath-Ce-x1jHU.js";import"./SetGraphicalItem-0HQpcTKH.js";import"./getRadiusAndStrokeWidthFromDot-W6nPpsGK.js";import"./ActiveShapeUtils-8hxeMxzA.js";import"./Curve-dJ1hXb5R.js";import"./step-DtRuoLBY.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BKlZkD6N.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
