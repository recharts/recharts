import{R as t}from"./iframe-BNtNFygj.js";import{z as a}from"./RechartsWrapper-CuiNtI3q.js";import{R as p}from"./zIndexSlice-B5_48POF.js";import{C as n}from"./ComposedChart-D__S-XeQ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-jOR65EnP.js";import{X as l}from"./XAxis-CD7gPBRF.js";import{Y as h}from"./YAxis-BOh_LEcr.js";import{L as c}from"./Legend-C7LMyXkq.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DL7SVEd6.js";import"./get-cF5BDHN6.js";import"./axisSelectors-mpzDPz7I.js";import"./throttle-D7zSzoPk.js";import"./index-W1q-JWvv.js";import"./index-Da7ZrvvU.js";import"./polarAxisSelectors-1cb9nRSh.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-AvjMremu.js";import"./index-CfoYvP3O.js";import"./index-BaHcdURT.js";import"./renderedTicksSlice-Gd5JIWsJ.js";import"./index-DIbrCmVg.js";import"./fillDefinitions-DMQk4akV.js";import"./CartesianChart-BuwWmjhG.js";import"./ZIndexPortal-yiaw4zX4.js";import"./CategoricalChart-xvnPgk-J.js";import"./Layer-BWvVPR01.js";import"./Curve-CzR2ia5J.js";import"./types-Bv6DwZgB.js";import"./step-3Vwob_iR.js";import"./path-DyVhHtw_.js";import"./LabelList-BMYELo_i.js";import"./Label-CtODaKOy.js";import"./Text-CVsQWuYy.js";import"./DOMUtils-rxSz7zRH.js";import"./ZIndexLayer-DDjEreuo.js";import"./ActivePoints-CXNwUvpE.js";import"./Dot-DlYRSPs_.js";import"./activeStyles-B8Yp5U6S.js";import"./useAnimationId-DUqQXAVR.js";import"./dataEntryStyles-Bi8dthc7.js";import"./Symbols-DqFb5GoD.js";import"./symbol-z9UqeDk-.js";import"./ErrorBarContext-BnU4GK2I.js";import"./SetGraphicalItem-D8wY5DBd.js";import"./getRadiusAndStrokeWidthFromDot-BCWYzwNk.js";import"./ActiveShapeUtils-BNpZBMKl.js";import"./useEffectiveDataKey-BUQC0_MU.js";import"./CartesianAxis-B0AA9leW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BAzX0SkM.js";import"./uniqBy-dp3XQ01K.js";import"./iteratee-CSMACznW.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
