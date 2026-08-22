import{R as e}from"./iframe-B2LONqI2.js";import{R as i}from"./zIndexSlice-D9n4dMgM.js";import{C as a}from"./ComposedChart-BOAgkMxe.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DICXmCdp.js";import{X as s}from"./XAxis-CrFRKpzA.js";import{Y as c}from"./YAxis-DmtbPyQK.js";import{L as d}from"./Line-DZxFVfIi.js";import{R as g}from"./ReferenceLine-py95MnRj.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CdlfIoiX.js";import"./index-BFHlNwTp.js";import"./index-BJx3ZruJ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-ByqX23gf.js";import"./isWellBehavedNumber-BTg56jQA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Iajo6lbi.js";import"./index-DfifFuyy.js";import"./index-DjdDa-5Q.js";import"./axisSelectors-DBW39Q04.js";import"./d3-scale-BIs2XHGH.js";import"./renderedTicksSlice-BQg4gqwf.js";import"./CartesianChart-CDZJhjlJ.js";import"./chartDataContext-n7-aPmS3.js";import"./CategoricalChart-BjK9U0fb.js";import"./CartesianAxis-CzeVRmKa.js";import"./Layer-Db6cgHvt.js";import"./Text-DImCa3tX.js";import"./DOMUtils-D3RPrc8V.js";import"./useId-BEHZ_Vtx.js";import"./useBackwardsCompatibleTheme-Bt3YMXHU.js";import"./Label-DIFUcr_M.js";import"./ZIndexLayer-CjywmeuP.js";import"./types-B61LwKJ2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-B_IAc-Uw.js";import"./step-BlTk4FPh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DwGSOvtC.js";import"./useAnimationId-Cxf11lMm.js";import"./ActivePoints-qJroTt_-.js";import"./Dot-CF9Y01Yu.js";import"./RegisterGraphicalItemId-C9PI0JLV.js";import"./ErrorBarContext-DheDy1BL.js";import"./GraphicalItemClipPath-bhsI-95T.js";import"./SetGraphicalItem-9JpLqI-V.js";import"./getRadiusAndStrokeWidthFromDot-KnVcOglV.js";import"./ActiveShapeUtils-CWFSVymI.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ge=["Segment"];export{t as Segment,ge as __namedExportsOrder,de as default};
