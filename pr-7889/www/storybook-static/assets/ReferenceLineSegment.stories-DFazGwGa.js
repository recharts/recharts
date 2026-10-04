import{R as e}from"./iframe-C55SonNK.js";import{R as i}from"./zIndexSlice-DasulNlo.js";import{C as n}from"./ComposedChart-DRtqau9M.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-PAdKFLq1.js";import{X as s}from"./XAxis-BWJ2ABmI.js";import{Y as c}from"./YAxis-C3mB-_5C.js";import{L as d}from"./Line-BH0-Ovp4.js";import{R as g}from"./ReferenceLine-D4KMIQE3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-G3ECa8tr.js";import"./index-DlZLgaYD.js";import"./index-BwYupLtq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BmNtE2rS.js";import"./isWellBehavedNumber-hNTnQGF2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BfpEIOv-.js";import"./axisSelectors-pQ0Se0UH.js";import"./d3-scale-BMtFe6cd.js";import"./index-ConF1OJd.js";import"./index-BPMo8MBn.js";import"./renderedTicksSlice-LEZPKkpV.js";import"./index-Czl7SMar.js";import"./CartesianChart-BihUZ5nW.js";import"./chartDataContext-CzjQbFCV.js";import"./CategoricalChart-BO0KKDhg.js";import"./CartesianAxis-Sfv4H3gX.js";import"./Layer-Bpfyjb4F.js";import"./Text-BGO9kFr7.js";import"./DOMUtils-B--wunTb.js";import"./useId-Ph5cHYEn.js";import"./useBackwardsCompatibleTheme-CMxCV-uY.js";import"./Label-XuIK8xgk.js";import"./ZIndexLayer-xKUTxtZr.js";import"./types-DWD7ie2J.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-cqh3GTlE.js";import"./step-Da31Aboz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-mUQIEGKr.js";import"./useAnimationId-Dfy40kVz.js";import"./ActivePoints-BhFZHI7X.js";import"./Dot-CxsnkucE.js";import"./RegisterGraphicalItemId-CAAWrCM1.js";import"./ErrorBarContext-K46B69nM.js";import"./GraphicalItemClipPath-5x7FHKUZ.js";import"./SetGraphicalItem-CASyq9nQ.js";import"./getRadiusAndStrokeWidthFromDot-CCMPBL5C.js";import"./ActiveShapeUtils-CaNZ8cmS.js";import"./useGraphicalItemIdentity-DFmFmERc.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
