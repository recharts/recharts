import{R as e}from"./iframe-ByLAgMyT.js";import{R as i}from"./zIndexSlice-DbH_vqN6.js";import{C as n}from"./ComposedChart-CZJUN3bH.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-wfbzDarX.js";import{X as s}from"./XAxis-6YbWYxrg.js";import{Y as c}from"./YAxis-VAKOhZSF.js";import{L as d}from"./Line-CHgQT9HL.js";import{R as g}from"./ReferenceLine-CHkKd2PE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CEah83BE.js";import"./index-Bd0XDIKz.js";import"./index-DQDYz7Kn.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-ZOEnIxye.js";import"./isWellBehavedNumber-ib3lWxb6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8hL2knQK.js";import"./axisSelectors-1NzaQeZW.js";import"./d3-scale-C7CraIkv.js";import"./index-BzVpSiBS.js";import"./index-Dm91Zbdm.js";import"./renderedTicksSlice-Rz2ip3G5.js";import"./index-DiiEfgcg.js";import"./CartesianChart-CKytCKi1.js";import"./chartDataContext-xQwTU35T.js";import"./CategoricalChart-CKR8_K54.js";import"./CartesianAxis-CuUPXULq.js";import"./Layer-g3XAbIKO.js";import"./Text-K2cZEaeG.js";import"./pageBackground-CJjC7Pe6.js";import"./useId-N2SJ_s2K.js";import"./useBackwardsCompatibleTheme-CAGUGjI_.js";import"./Label-DiFVkyKf.js";import"./ZIndexLayer-J8gq1KPk.js";import"./types-B5PcYGv_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CcWf2VYJ.js";import"./step-CewcAd9T.js";import"./path-DyVhHtw_.js";import"./activeStyles-Dj4g-rEk.js";import"./useAnimationId-CBnq7Z5z.js";import"./dataEntryStyles-Cy26GKXH.js";import"./ActivePoints-BaYU0Cf-.js";import"./Dot-C6LI6MNA.js";import"./ErrorBarContext-CBilAMI3.js";import"./GraphicalItemClipPath-Bv7X_kga.js";import"./SetGraphicalItem-BhbU4A3u.js";import"./getRadiusAndStrokeWidthFromDot-RbzC3joP.js";import"./ActiveShapeUtils-C4wijBbi.js";import"./useEffectiveDataKey-DILJl117.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
