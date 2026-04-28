import{e as t}from"./iframe-Duu2ePP2.js";import{P as a}from"./PlotAreaShower-C6jDjqIX.js";import{c as p}from"./hooks-dkH0FbaO.js";import{R as s}from"./arrayEqualityCheck-B-cAi4kL.js";import{C as n}from"./ComposedChart-BGGpT0on.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Dbauye43.js";import{X as h}from"./XAxis-DAA3n7LQ.js";import{Y as c}from"./YAxis-DKXddmVj.js";import{L as g}from"./Legend-smB8ffG_.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-D23mYDM8.js";import"./immer-ON4fWNwQ.js";import"./axisSelectors-RH6y-AiZ.js";import"./d3-scale-yxZwMUWq.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BWiIM3v1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DeZsisyl.js";import"./index-BGitJN2W.js";import"./zIndexSlice-DggUfY4w.js";import"./renderedTicksSlice-Dokw_GUk.js";import"./CartesianChart-D1uig-eX.js";import"./chartDataContext-Z4x7BNXW.js";import"./CategoricalChart-7RYTnCI7.js";import"./Layer-BOJMxATb.js";import"./ReactUtils-4qgrEQeH.js";import"./Label-Bn1yjK4M.js";import"./Text-Cd4yjmCr.js";import"./DOMUtils-3aQ33ho0.js";import"./ZIndexLayer-BJKI90nF.js";import"./ActivePoints-DBsGuqVa.js";import"./Dot-BT4SKcl1.js";import"./types-DgKzbqf0.js";import"./RegisterGraphicalItemId-CR36P_VL.js";import"./ErrorBarContext-q9vP8J6E.js";import"./GraphicalItemClipPath-Bnp8k_2K.js";import"./SetGraphicalItem-BK48IdmH.js";import"./useAnimationId-B0y91bCS.js";import"./getRadiusAndStrokeWidthFromDot-BA08heCI.js";import"./ActiveShapeUtils-rsSi-jmT.js";import"./isPlainObject-YfZdirFW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CChRXwuW.js";import"./Trapezoid-CfCidBHT.js";import"./Sector-Bqlpq4fQ.js";import"./Symbols-BvwbX7uA.js";import"./symbol-BIpvV-Z0.js";import"./step-CeBqx2xf.js";import"./Curve-C4aJqTD7.js";import"./CartesianAxis-0Lljxc4r.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DbwX6Ink.js";import"./uniqBy-C2SKejLS.js";import"./iteratee-BIM71ygM.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
