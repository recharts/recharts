import{R as t}from"./iframe-Xtjdy8K6.js";import{j as a}from"./RechartsWrapper-DLU1mxV-.js";import{R as p}from"./zIndexSlice-Ca3_di9O.js";import{C as n}from"./ComposedChart-By0nh5Tu.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-ClPESsPf.js";import{X as l}from"./XAxis-Dsuy05EW.js";import{Y as h}from"./YAxis-C0P2yrRK.js";import{L as c}from"./Legend-BWy8kwYj.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Boep7u7P.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CubJTdeO.js";import"./throttle-BJfO_UKv.js";import"./index-CD-q9qaf.js";import"./index-I4ONaVXX.js";import"./isWellBehavedNumber-CZ785SIV.js";import"./d3-scale-DZ-m0TzD.js";import"./index-BwTAVpnp.js";import"./index-DLvKfnax.js";import"./renderedTicksSlice-BtArWvvy.js";import"./index-Cf61T-z_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-uyYSGYFX.js";import"./chartDataContext-h8VmgL2W.js";import"./CategoricalChart-BG0XVVA5.js";import"./Layer-FeyHjh4s.js";import"./Curve-_q4HdrfF.js";import"./types-DxDlUmLu.js";import"./step-C43hkdfh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CiMNNQac.js";import"./Label-BQUl4kmN.js";import"./Text-LNKD3nQn.js";import"./DOMUtils-BmMu5huz.js";import"./useId-DBEZo7IS.js";import"./useBackwardsCompatibleTheme-JVp1trOZ.js";import"./ZIndexLayer-B714zacF.js";import"./useAnimationId-CuSCtoXZ.js";import"./ActivePoints-B88QV3Sj.js";import"./Dot-D52dYvYg.js";import"./RegisterGraphicalItemId-5IcKOSXK.js";import"./ErrorBarContext-DcFzK2E8.js";import"./GraphicalItemClipPath-CULhMThP.js";import"./SetGraphicalItem-BUfBrIkK.js";import"./getRadiusAndStrokeWidthFromDot-DLeCgjsD.js";import"./ActiveShapeUtils-kAxIXwKe.js";import"./useGraphicalItemIdentity-BFTytd0c.js";import"./CartesianAxis-CmHtOK-l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BCh1_Gtu.js";import"./symbol-CsXV0QLt.js";import"./useElementOffset-DRzU6VaK.js";import"./uniqBy-C0abLPcx.js";import"./iteratee-CxPVqHqK.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
