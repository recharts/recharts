import{R as t}from"./iframe-aKV-O9MJ.js";import{z as p}from"./RechartsWrapper-CMYKJCfZ.js";import{R as a}from"./zIndexSlice-BKaqyajB.js";import{C as n}from"./ComposedChart-DApYnnbw.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Cnh90x2U.js";import{X as l}from"./XAxis-lhBNyzg_.js";import{Y as h}from"./YAxis-Ch3CqHid.js";import{L as c}from"./Legend-B_eYmoQf.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-HqSLYtX8.js";import"./get-cF5BDHN6.js";import"./axisSelectors-MbFPBavU.js";import"./throttle-Be3j2pw2.js";import"./index-CgdfyZHj.js";import"./index-CpNUBple.js";import"./isWellBehavedNumber-DhfM3JhV.js";import"./d3-scale-CsyBOG8O.js";import"./index-D1DeZs1S.js";import"./index-HoQ8qajG.js";import"./renderedTicksSlice-WTymoNbk.js";import"./index-C12TwcvC.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C2vgDwW7.js";import"./chartDataContext-DB9-FPl4.js";import"./CategoricalChart-CDZMqsPI.js";import"./Layer-07gJ6FIr.js";import"./Curve-3H4HQJme.js";import"./types-DTpzWv6l.js";import"./step-Bv994rc2.js";import"./path-DyVhHtw_.js";import"./activeStyles-BvRJtjMn.js";import"./Label-zwi5-GQg.js";import"./Text-CopK1C24.js";import"./pageBackground-D0AIP4to.js";import"./useId-CnmqgkQl.js";import"./useBackwardsCompatibleTheme-w5mekw_9.js";import"./ZIndexLayer-A9-ipKwv.js";import"./dataEntryStyles-BzKYf-di.js";import"./useAnimationId-Cb-3p2b2.js";import"./ActivePoints-DBGJodJk.js";import"./Dot-0Wdau4CC.js";import"./RegisterGraphicalItemId-CFnb1OFM.js";import"./ErrorBarContext-Bqn6HxNU.js";import"./SetGraphicalItem-BtHSeMoh.js";import"./getRadiusAndStrokeWidthFromDot-B6-r-w_v.js";import"./ActiveShapeUtils-CDtOvQ0I.js";import"./useEffectiveDataKey-B3-MKjEu.js";import"./CartesianAxis-Dm5On8Gk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Dqx3Vy8L.js";import"./symbol-D9UJ3By9.js";import"./useElementOffset-BKf5VsK_.js";import"./uniqBy-BTRGg67Z.js";import"./iteratee-BvKBaWIX.js";import"./isArguments-yB-y1yaH.js";const ft={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},o={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},yt=["UsePlotArea"];var e,i,m;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{o as UsePlotArea,yt as __namedExportsOrder,ft as default};
