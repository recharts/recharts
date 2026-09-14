import{R as t}from"./iframe-bFSgLdPD.js";import{j as a}from"./RechartsWrapper-BY-4gTQl.js";import{R as p}from"./zIndexSlice-D5upya8o.js";import{C as n}from"./ComposedChart-rnVwwIMy.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DgS_baGq.js";import{X as l}from"./XAxis-Bw0rvwCt.js";import{Y as h}from"./YAxis-bnO7DvP4.js";import{L as c}from"./Legend-oLYZNeeg.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dwo3cyUv.js";import"./get-C2VjdU0L.js";import"./axisSelectors-jpWGPgQR.js";import"./throttle-u-v2gKhP.js";import"./index-Dx35Wad7.js";import"./index-Bahp64_w.js";import"./isWellBehavedNumber-CxGT-_DT.js";import"./d3-scale-DJKaPyhK.js";import"./index-CNz3Scut.js";import"./index-XM-eSlQm.js";import"./renderedTicksSlice-BcG7Kuye.js";import"./index-DzQCF7Uo.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-tk8PYi9A.js";import"./chartDataContext-DUbpY4V-.js";import"./CategoricalChart-DBfHTq3P.js";import"./Layer-B9YPmvvS.js";import"./Curve-C65UunW2.js";import"./types-D_jE8zAs.js";import"./step-my7iJLmD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C1Ji84_q.js";import"./Label-CpotZ0Ob.js";import"./Text-BFarDq7U.js";import"./DOMUtils-DvIkXWfS.js";import"./useId-CXlgEyVd.js";import"./useBackwardsCompatibleTheme-DabWIItU.js";import"./ZIndexLayer-B1KbNkPu.js";import"./useAnimationId-C-HuNRtZ.js";import"./ActivePoints-t5f1lIKd.js";import"./Dot-DYaRHvIo.js";import"./RegisterGraphicalItemId-Ch2aaSbQ.js";import"./ErrorBarContext-BTgf3Fn1.js";import"./GraphicalItemClipPath-D0Gpm_sI.js";import"./SetGraphicalItem-BK4LEDF0.js";import"./getRadiusAndStrokeWidthFromDot-BeJ6jSsg.js";import"./ActiveShapeUtils-Tc7vH23C.js";import"./useGraphicalItemIdentity-BF3Qfnje.js";import"./CartesianAxis-CrKpg4w8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BtHF7FpM.js";import"./symbol-q9QkaXHr.js";import"./useElementOffset-DgdUocH5.js";import"./uniqBy-C-W8pKck.js";import"./iteratee-BdAcVhmI.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
