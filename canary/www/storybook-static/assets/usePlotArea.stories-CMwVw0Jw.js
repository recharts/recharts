import{R as t}from"./iframe-BjoWmD_2.js";import{j as a}from"./RechartsWrapper-B-Xj9Vy5.js";import{R as p}from"./zIndexSlice-QxL2_XNr.js";import{C as n}from"./ComposedChart-CfdRjNXn.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CzyvQYUG.js";import{X as l}from"./XAxis-D-7vKTCU.js";import{Y as h}from"./YAxis-DcA2RCuj.js";import{L as c}from"./Legend-DQIvgkeJ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CRUAWeqy.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CTjcoI_o.js";import"./throttle-h3rYfSBM.js";import"./index-BRU_7ROE.js";import"./index-rOX-JMdH.js";import"./isWellBehavedNumber-BxmTrUsM.js";import"./d3-scale-kKJuS5hm.js";import"./index-Ctb1uOPb.js";import"./index-Cd4gA8VB.js";import"./renderedTicksSlice-9uvUqonz.js";import"./index-BiJeeMkw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ALqDRU4y.js";import"./chartDataContext-D2tEsWQI.js";import"./CategoricalChart-CU8xgSqQ.js";import"./Layer-BETohxRY.js";import"./Curve-Bi87Df9h.js";import"./types-CwctOhA4.js";import"./step-DbGei3uZ.js";import"./path-DyVhHtw_.js";import"./activeStyles-pw12H8S5.js";import"./Label-Cqr17CGT.js";import"./Text-DoJy0Hms.js";import"./pageBackground-B2WnjK3P.js";import"./useId-CxEr69Iu.js";import"./useBackwardsCompatibleTheme-lRDO5kA2.js";import"./ZIndexLayer-DQXgAxZP.js";import"./useAnimationId-CvgGu5_L.js";import"./dataEntryStyles-M6AZ3Vkx.js";import"./ActivePoints-CbXUnkX6.js";import"./Dot-CwvTlVWs.js";import"./ErrorBarContext-hA9ACwOL.js";import"./GraphicalItemClipPath-CJpx4uWZ.js";import"./SetGraphicalItem-BNR-CUWR.js";import"./getRadiusAndStrokeWidthFromDot-BXg1EUK6.js";import"./ActiveShapeUtils-Ba7sfaWC.js";import"./useGraphicalItemIdentity-D7aL1WKh.js";import"./CartesianAxis-CuhpEa5Q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-9svYQiWP.js";import"./symbol-CtXXRm84.js";import"./useElementOffset-CXh5WHLo.js";import"./uniqBy-BaadcAvx.js";import"./iteratee-B_XLmPV3.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
