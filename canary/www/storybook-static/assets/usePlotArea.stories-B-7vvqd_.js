import{R as t}from"./iframe-C0BhaIHx.js";import{j as a}from"./RechartsWrapper-BrzF7ifV.js";import{R as p}from"./zIndexSlice-CDOt9hko.js";import{C as n}from"./ComposedChart-Mgrr1vAv.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BrGPisns.js";import{X as l}from"./XAxis-DW1roRyb.js";import{Y as h}from"./YAxis-DxhSN3f3.js";import{L as c}from"./Legend-wiIoOZvZ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DCmLA3K_.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BjRn9Rmb.js";import"./throttle-_kaTGctA.js";import"./index-CHaO9dBD.js";import"./index-uoiqJzNo.js";import"./isWellBehavedNumber-D_-ia2T-.js";import"./d3-scale-m2f7iS2A.js";import"./index-BOsMLxuu.js";import"./index-CxbCOQkV.js";import"./renderedTicksSlice--IxhvHeS.js";import"./index-BnJ9NTOO.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B1wZ3fTU.js";import"./chartDataContext-D3PRni2U.js";import"./CategoricalChart-F9gORHS1.js";import"./Layer-BVz81g-K.js";import"./Curve-BT8Th8L7.js";import"./types-09ibMXDf.js";import"./step-D8qMIOsj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BkfPAPcH.js";import"./Label-BTrm9XD1.js";import"./Text-CsTjolj2.js";import"./DOMUtils-BbiNqhEu.js";import"./useId-DVa-1am7.js";import"./useBackwardsCompatibleTheme-Bm34Q8-P.js";import"./ZIndexLayer-rpRhSNXU.js";import"./useAnimationId-DAQ_cacI.js";import"./ActivePoints-Cer-NR5E.js";import"./Dot-Bi7x9r9p.js";import"./RegisterGraphicalItemId-BZlrZWzc.js";import"./ErrorBarContext-0HaXxMlO.js";import"./GraphicalItemClipPath-puDtay2S.js";import"./SetGraphicalItem-0BPxCGJF.js";import"./getRadiusAndStrokeWidthFromDot-BS0aHfrl.js";import"./ActiveShapeUtils-B0KqHDN3.js";import"./useGraphicalItemIdentity-DRraOtTx.js";import"./CartesianAxis-DAIP3l5S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BvYWP5aa.js";import"./symbol-Bi9q3ZjS.js";import"./useElementOffset-3ZN4wc9L.js";import"./uniqBy-D0MFx9I4.js";import"./iteratee-C079nQ1K.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
