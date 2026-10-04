import{R as t}from"./iframe-C55SonNK.js";import{j as a}from"./RechartsWrapper-BfpEIOv-.js";import{R as p}from"./zIndexSlice-DasulNlo.js";import{C as n}from"./ComposedChart-DRtqau9M.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BH0-Ovp4.js";import{X as l}from"./XAxis-BWJ2ABmI.js";import{Y as h}from"./YAxis-C3mB-_5C.js";import{L as c}from"./Legend-Bv8o00UU.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BmNtE2rS.js";import"./get-C2VjdU0L.js";import"./axisSelectors-pQ0Se0UH.js";import"./throttle-G3ECa8tr.js";import"./index-DlZLgaYD.js";import"./index-BwYupLtq.js";import"./isWellBehavedNumber-hNTnQGF2.js";import"./d3-scale-BMtFe6cd.js";import"./index-ConF1OJd.js";import"./index-BPMo8MBn.js";import"./renderedTicksSlice-LEZPKkpV.js";import"./index-Czl7SMar.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BihUZ5nW.js";import"./chartDataContext-CzjQbFCV.js";import"./CategoricalChart-BO0KKDhg.js";import"./Layer-Bpfyjb4F.js";import"./Curve-cqh3GTlE.js";import"./types-DWD7ie2J.js";import"./step-Da31Aboz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-mUQIEGKr.js";import"./Label-XuIK8xgk.js";import"./Text-BGO9kFr7.js";import"./DOMUtils-B--wunTb.js";import"./useId-Ph5cHYEn.js";import"./useBackwardsCompatibleTheme-CMxCV-uY.js";import"./ZIndexLayer-xKUTxtZr.js";import"./useAnimationId-Dfy40kVz.js";import"./ActivePoints-BhFZHI7X.js";import"./Dot-CxsnkucE.js";import"./RegisterGraphicalItemId-CAAWrCM1.js";import"./ErrorBarContext-K46B69nM.js";import"./GraphicalItemClipPath-5x7FHKUZ.js";import"./SetGraphicalItem-CASyq9nQ.js";import"./getRadiusAndStrokeWidthFromDot-CCMPBL5C.js";import"./ActiveShapeUtils-CaNZ8cmS.js";import"./useGraphicalItemIdentity-DFmFmERc.js";import"./CartesianAxis-Sfv4H3gX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DUjaqTcm.js";import"./symbol-Cg0CysXg.js";import"./useElementOffset-C-dE2UhQ.js";import"./uniqBy-DOeEc7ZY.js";import"./iteratee-CkjZNHcQ.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
