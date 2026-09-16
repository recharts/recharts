import{R as t}from"./iframe-CKDPSKer.js";import{j as a}from"./RechartsWrapper-DXJuSLgb.js";import{R as p}from"./zIndexSlice-BPEXBnkz.js";import{C as n}from"./ComposedChart-BRk5rLm3.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CTXdPCxP.js";import{X as l}from"./XAxis-A_9Io6kM.js";import{Y as h}from"./YAxis-aBoPLQiN.js";import{L as c}from"./Legend-Bov7jtG8.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BHhxWlvh.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BCmNu8mb.js";import"./throttle-BxISGQ-D.js";import"./index-b8m7PcKP.js";import"./index-BCb8LTpu.js";import"./isWellBehavedNumber-B7M1fd8R.js";import"./d3-scale-b7USrreT.js";import"./index-Yn8E1RQt.js";import"./index-YNG8abLs.js";import"./renderedTicksSlice-D_KOvBCE.js";import"./index-CdVjfuR9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-8JudaFqK.js";import"./chartDataContext-BPq1GFdD.js";import"./CategoricalChart-C1cfNrgi.js";import"./Layer-B33l4zSF.js";import"./Curve-Blt-RSy4.js";import"./types-CtnAz4fT.js";import"./step-Bgemofkp.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DQZ1vYlx.js";import"./Label-dc-yhDIk.js";import"./Text-C2JOwhg7.js";import"./DOMUtils-YKVjc3tQ.js";import"./useId-Ci63Vlud.js";import"./useBackwardsCompatibleTheme-CrbUBK8p.js";import"./ZIndexLayer-U3HIU8rZ.js";import"./useAnimationId-BJ5AGKlq.js";import"./ActivePoints-BaQ565al.js";import"./Dot-BHyvQM3b.js";import"./RegisterGraphicalItemId-DPP3dtMc.js";import"./ErrorBarContext-DUmIK13m.js";import"./GraphicalItemClipPath-CwqjQ5yI.js";import"./SetGraphicalItem-oK4eoPFb.js";import"./getRadiusAndStrokeWidthFromDot-jgRF4YSW.js";import"./ActiveShapeUtils-Wg41V-yZ.js";import"./useGraphicalItemIdentity-SlGiSA9D.js";import"./CartesianAxis-CjGSghd8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B54QlVgZ.js";import"./symbol-DL-3irLp.js";import"./useElementOffset-D8p3AvLo.js";import"./uniqBy-DYmmQrZx.js";import"./iteratee-DK5B7GVX.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
