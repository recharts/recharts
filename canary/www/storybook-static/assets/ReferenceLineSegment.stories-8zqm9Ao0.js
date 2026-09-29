import{R as e}from"./iframe-CKQALtMh.js";import{R as i}from"./zIndexSlice-DfJvDCP6.js";import{C as n}from"./ComposedChart-B57mEn44.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Bj0blnOP.js";import{X as s}from"./XAxis-B1w-DAje.js";import{Y as c}from"./YAxis-qP5Po20_.js";import{L as d}from"./Line-CTa1vzcP.js";import{R as g}from"./ReferenceLine-daGxt2md.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CNY-gU5B.js";import"./index-DtLHkBI_.js";import"./index-D_AzU2dp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bte-Mlhe.js";import"./isWellBehavedNumber-B4yKamKp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C-mneK7p.js";import"./axisSelectors-BxBnek0X.js";import"./d3-scale-CKl8FJgi.js";import"./index-DzcUKgoB.js";import"./index-B2SRoqlS.js";import"./renderedTicksSlice-CPhSvJpG.js";import"./index-YCl9Eg2B.js";import"./CartesianChart-RyjjLogs.js";import"./chartDataContext-DKpOqV2G.js";import"./CategoricalChart-BidV4bcI.js";import"./CartesianAxis-D4n_YP7-.js";import"./Layer-B9JOU9_x.js";import"./Text-DyEflBvv.js";import"./DOMUtils-CBXByqiO.js";import"./useId-DvyhJk_e.js";import"./useBackwardsCompatibleTheme-Bv93_XfL.js";import"./Label-CkbIGog0.js";import"./ZIndexLayer-Crva3HCE.js";import"./types-CDJ3ls6u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BfhgeL_q.js";import"./step-D4hLR-8L.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DTXdR5ab.js";import"./useAnimationId-CKMmFYBQ.js";import"./ActivePoints-B_BVBzV5.js";import"./Dot-Bwc0vAX6.js";import"./RegisterGraphicalItemId-C8MFR-IS.js";import"./ErrorBarContext-rH9p4zIJ.js";import"./GraphicalItemClipPath-CinvHRPZ.js";import"./SetGraphicalItem-DsCqUb4K.js";import"./getRadiusAndStrokeWidthFromDot-DxuuP8od.js";import"./ActiveShapeUtils-CE5-o2on.js";import"./useGraphicalItemIdentity-DFDwkf_7.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
