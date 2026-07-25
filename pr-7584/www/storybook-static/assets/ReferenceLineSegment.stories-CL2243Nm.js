import{R as e}from"./iframe-GS6tWWpF.js";import{R as i}from"./zIndexSlice-CiKhndgZ.js";import{C as a}from"./ComposedChart-Dl8H5i_v.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-F-KU-36M.js";import{X as s}from"./XAxis-Bx65GQrC.js";import{Y as c}from"./YAxis-CUfaioHk.js";import{L as d}from"./Line-gVUwMIqe.js";import{R as g}from"./ReferenceLine-liwMzUiZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C-IXy7Zr.js";import"./index-DfG20-Zs.js";import"./index-C2uAvHn9.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BZjeTZ39.js";import"./isWellBehavedNumber-BW5zPDve.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bqosr4xy.js";import"./index-C6xrf2-Z.js";import"./index-Di15QQ8x.js";import"./renderedTicksSlice-BVCAtPIh.js";import"./axisSelectors-yfKyalbW.js";import"./d3-scale-CHW2xi3e.js";import"./CartesianChart-DRtNG600.js";import"./chartDataContext-BZ0W7ETA.js";import"./CategoricalChart-CsHskHmr.js";import"./CartesianAxis-DPqu1YVY.js";import"./Layer-C3MBqN5-.js";import"./Text-CUZPSeM8.js";import"./DOMUtils-cB85CLZU.js";import"./Label--UyVH_YZ.js";import"./ZIndexLayer-CvFwUsq0.js";import"./types-CDHFW4tQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-DDxJXFaA.js";import"./step-DCV2XceF.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DA4k4owl.js";import"./useAnimationId-ZFeP4ddJ.js";import"./ActivePoints-DIXN5qj6.js";import"./Dot-Bv3wAmgY.js";import"./RegisterGraphicalItemId-BRazAOV1.js";import"./ErrorBarContext-D6lw1b7W.js";import"./GraphicalItemClipPath-fALP-Awj.js";import"./SetGraphicalItem-XvYC4EkM.js";import"./getRadiusAndStrokeWidthFromDot-Dd_icqpB.js";import"./ActiveShapeUtils-DTjXKb5y.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
