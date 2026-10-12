import{R as t}from"./iframe-BqTe2UMP.js";import{e as a}from"./RechartsWrapper-CWqjI8ow.js";import{R as p}from"./zIndexSlice-GTynhOsS.js";import{C as n}from"./ComposedChart-BWB9SKNi.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-wMnln6I9.js";import{X as l}from"./XAxis-BFKvA3gZ.js";import{Y as h}from"./YAxis-D_xFHHwS.js";import{L as c}from"./Legend-D3wLugUj.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-1c7_8SpD.js";import"./get-C2VjdU0L.js";import"./axisSelectors-lM2vG64O.js";import"./throttle-PmeTbXwQ.js";import"./index-CM2oe_lg.js";import"./index-CG7aEEME.js";import"./isWellBehavedNumber-BqrJeuDz.js";import"./d3-scale-DWaVLjKI.js";import"./index-DCgfcJWI.js";import"./index-CwY_lGiF.js";import"./renderedTicksSlice-CNIelq8e.js";import"./index-2KC7EUkH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BNeCXpfh.js";import"./chartDataContext-Bf8mKNm_.js";import"./CategoricalChart-D6_cM4w9.js";import"./Layer-BZqCsxZY.js";import"./Curve-DW1_vQIY.js";import"./types-YR4m-55g.js";import"./step-BBQ8ZX6a.js";import"./path-DyVhHtw_.js";import"./activeStyles-A8WZQcUr.js";import"./Label-C4tYPzVx.js";import"./Text-DWSqExsy.js";import"./pageBackground-CkUHzRfu.js";import"./useId-C8HkpFIm.js";import"./useBackwardsCompatibleTheme-B_ORpNqj.js";import"./ZIndexLayer-CvPcnuan.js";import"./useAnimationId-D1_C1lZo.js";import"./dataEntryStyles-jb_0UPIc.js";import"./ActivePoints-B0febV6B.js";import"./Dot-jbPDGXVe.js";import"./ErrorBarContext-D6ZWbiIN.js";import"./GraphicalItemClipPath-B2ZrWFWd.js";import"./SetGraphicalItem-BGuonubA.js";import"./getRadiusAndStrokeWidthFromDot-Ddhrr2Nr.js";import"./ActiveShapeUtils-gWmw8qk4.js";import"./useEffectiveDataKey-x1RSS2yk.js";import"./CartesianAxis-DbBZeFb1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C4ho6aIk.js";import"./symbol-C3UkLHRc.js";import"./useElementOffset-DTVIROjS.js";import"./uniqBy-BdijKGgA.js";import"./iteratee-quGzdlB-.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
