import{R as t}from"./iframe-B07BHG7b.js";import{j as a}from"./RechartsWrapper-CbwTx7DF.js";import{R as p}from"./zIndexSlice-DMtdtU0H.js";import{C as n}from"./ComposedChart-VKrjcxhK.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Coltmmom.js";import{X as l}from"./XAxis-CkRNVIdA.js";import{Y as h}from"./YAxis-9CqKZvPs.js";import{L as c}from"./Legend-Cg8WtWtD.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BRBRD9Wj.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Nr5xjaNb.js";import"./throttle-DTIoaHkO.js";import"./index-C_4gdDDP.js";import"./index-OowKJhbY.js";import"./isWellBehavedNumber-BwS8-SkC.js";import"./d3-scale-C1HygQvU.js";import"./index-CnnKafP5.js";import"./index-Ch334nIE.js";import"./renderedTicksSlice-D6Y0A1v8.js";import"./index-Cay4G1Oz.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DjafEMNG.js";import"./chartDataContext-L5OvEFVH.js";import"./CategoricalChart-Dsa2Qc1B.js";import"./Layer-DGsDthuj.js";import"./Curve-Co_OugcN.js";import"./types-BfpKaUoc.js";import"./step-EbjsK9_B.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BPQiX0OY.js";import"./Label-DT0SDRud.js";import"./Text-CNYJT0YU.js";import"./DOMUtils-BYXyET0J.js";import"./useId-DpSDwQO_.js";import"./useBackwardsCompatibleTheme-BSstlxbW.js";import"./ZIndexLayer-BWiNey_Z.js";import"./useAnimationId-D8wc_hUQ.js";import"./ActivePoints-qVEGkbRi.js";import"./Dot-D5b4Rj0p.js";import"./RegisterGraphicalItemId-r8grTaJr.js";import"./ErrorBarContext-CkRF2jvy.js";import"./GraphicalItemClipPath-CDDJymit.js";import"./SetGraphicalItem-CN2Fj3zB.js";import"./getRadiusAndStrokeWidthFromDot-CWtkFiVw.js";import"./ActiveShapeUtils-DunyI-30.js";import"./useGraphicalItemIdentity-BewjVzSI.js";import"./CartesianAxis-Bwpf-6f1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-dpsYkwK3.js";import"./symbol-BrftILDM.js";import"./useElementOffset-DyYSc7X1.js";import"./uniqBy-DWkLQ8w4.js";import"./iteratee-BtatVMfB.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
