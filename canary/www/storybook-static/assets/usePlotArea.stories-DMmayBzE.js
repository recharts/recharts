import{R as t}from"./iframe-BYFAmtTx.js";import{j as a}from"./RechartsWrapper-gz3ID__y.js";import{R as p}from"./zIndexSlice-Cpa1SLkC.js";import{C as n}from"./ComposedChart-Dn3fezmm.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BJx91oUE.js";import{X as l}from"./XAxis-CrRUVNvL.js";import{Y as h}from"./YAxis-D2uzSmxi.js";import{L as c}from"./Legend-M760yFye.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BRjUIPxP.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Fcxl1qih.js";import"./throttle-BncnDTze.js";import"./index-y_H2sp7r.js";import"./index-BfUFBuzY.js";import"./isWellBehavedNumber-DghiGM0-.js";import"./d3-scale-BWLi0PrL.js";import"./index-2r1iX6kD.js";import"./index-BnUV9qdG.js";import"./renderedTicksSlice-B5lYG2UO.js";import"./index-bDOV_Sp5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CyzDI5B8.js";import"./chartDataContext-Dh2caTLe.js";import"./CategoricalChart-C6KS2LQO.js";import"./Layer-CpiNCVXM.js";import"./Curve-BqZh414E.js";import"./types-CaHoHJJ-.js";import"./step-B_GvmUZd.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BVLC3LcC.js";import"./Label-DbWQNQho.js";import"./Text-BflMB0k7.js";import"./DOMUtils-C-XY0CD-.js";import"./useId-DFIORHHp.js";import"./useBackwardsCompatibleTheme-Bwairpph.js";import"./ZIndexLayer-So4aUaj6.js";import"./useAnimationId-CVJf-EC8.js";import"./ActivePoints-DY3ts7CW.js";import"./Dot-DmxTFD8v.js";import"./RegisterGraphicalItemId-CmRCopob.js";import"./ErrorBarContext-D5SoE2yk.js";import"./GraphicalItemClipPath-xNgZEk9E.js";import"./SetGraphicalItem-DY3wRuGw.js";import"./getRadiusAndStrokeWidthFromDot-cXRduqqB.js";import"./ActiveShapeUtils-Cm0ONgWE.js";import"./useGraphicalItemIdentity-azVLbNjG.js";import"./CartesianAxis-Berywq5j.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-s1P-C1j4.js";import"./symbol-6_mfp67r.js";import"./useElementOffset-_9jVPkcB.js";import"./uniqBy-Cz6dajQ_.js";import"./iteratee-B1BJ9kBw.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
