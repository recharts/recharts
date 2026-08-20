import{R as t}from"./iframe-zwg8Ck3J.js";import{u as a}from"./CategoricalChart-COKLxFKu.js";import{R as p}from"./zIndexSlice-NosrfnoV.js";import{C as s}from"./ComposedChart-B4XJvNSo.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-SbcmXKdw.js";import{X as l}from"./XAxis-DImn2N-Q.js";import{Y as h}from"./YAxis-DeKq7CDg.js";import{L as c}from"./Legend-ITrt0eTY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CJ_EMk4a.js";import"./index-CbO-5G1T.js";import"./index-DgDwqqQh.js";import"./index-IvyDBjKP.js";import"./index-OSBoZXok.js";import"./throttle-Ba88YkIO.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B51wYZzi.js";import"./resolveDefaultProps-DG88vi2D.js";import"./isWellBehavedNumber-CwtCjuBS.js";import"./d3-scale-BoLYoZ-J.js";import"./renderedTicksSlice-Df0H0Vcu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DJ82atYN.js";import"./chartDataContext-BLU5FY0s.js";import"./Layer-BMjk1XnO.js";import"./Curve-DTQAtFrE.js";import"./types-Cw6qbFf6.js";import"./step-CQ4et_T9.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-m2rS7Ine.js";import"./Label-Bd61VRBp.js";import"./Text-B5wvjkWp.js";import"./DOMUtils-DeVFgjhY.js";import"./useId-BhnbWZv2.js";import"./useBackwardsCompatibleTheme-CUoFrMEf.js";import"./ZIndexLayer-B0otcv7p.js";import"./useAnimationId-CNfugt_c.js";import"./ActivePoints-COOLxxHx.js";import"./Dot-Cd6zRWlN.js";import"./RegisterGraphicalItemId-BdhGFYIv.js";import"./ErrorBarContext-DQaSvvRh.js";import"./GraphicalItemClipPath-DzwEZpNn.js";import"./SetGraphicalItem-C-Nezax8.js";import"./getRadiusAndStrokeWidthFromDot-5Aw72VVf.js";import"./ActiveShapeUtils-CVVSTnC5.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-B8LFrX_I.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C-A3ojDn.js";import"./symbol-DekAy-hh.js";import"./useElementOffset-B9wTk-zI.js";import"./uniqBy-Goa-fjnL.js";import"./iteratee-RZACf7Ss.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const At=["UsePlotArea"];export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
