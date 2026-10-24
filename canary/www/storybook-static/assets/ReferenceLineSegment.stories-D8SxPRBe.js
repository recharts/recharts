import{R as e}from"./iframe-DZbjLUQo.js";import{R as i}from"./zIndexSlice-kNjtHJvr.js";import{C as n}from"./ComposedChart-B2VCtYfx.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DMDlODhK.js";import{X as s}from"./XAxis-Cb9he-VA.js";import{Y as c}from"./YAxis-C0N5iwNJ.js";import{L as d}from"./Line-IagRplkI.js";import{R as g}from"./ReferenceLine-CvU7STkc.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cj_7MghT.js";import"./index--Cvbr4ei.js";import"./index-s3XojKdv.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-7vFM5A8a.js";import"./isWellBehavedNumber-C3IgPBb_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B7gpneaA.js";import"./axisSelectors-SzDg3mS0.js";import"./d3-scale-BGQa_b-A.js";import"./index-Fa7FBVrf.js";import"./index-DZ5C6rYB.js";import"./renderedTicksSlice-Ds3e7SoF.js";import"./index-DGK0wEWr.js";import"./CartesianChart-xRZlZbQd.js";import"./chartDataContext-DvL8FmIv.js";import"./CategoricalChart-D0VTS456.js";import"./CartesianAxis-Bk45HDsq.js";import"./Layer-Dh4rshAh.js";import"./Text-DfE0Fd2l.js";import"./pageBackground-j9oVi7TB.js";import"./useId-uis-dzmY.js";import"./useBackwardsCompatibleTheme-BfjKogZ5.js";import"./Label-QWXq4PsH.js";import"./ZIndexLayer-CKCEdo-g.js";import"./dataEntryStyles-OfgH0EAC.js";import"./types-BIiFdC-Q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-C9le9A2W.js";import"./step-BWJj5B7H.js";import"./path-DyVhHtw_.js";import"./activeStyles-jlHAdlvX.js";import"./useAnimationId-CK6aB1Dm.js";import"./ActivePoints-Dic5JSob.js";import"./Dot-DCKsVFDm.js";import"./RegisterGraphicalItemId-DrXewaeQ.js";import"./ErrorBarContext-BdWQYqFr.js";import"./GraphicalItemClipPath-BDvSZObJ.js";import"./SetGraphicalItem-BJ2EKqIC.js";import"./getRadiusAndStrokeWidthFromDot-ff8SiQS6.js";import"./ActiveShapeUtils-ncETWQyV.js";import"./useEffectiveDataKey-DRn6J3kp.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,he as __namedExportsOrder,fe as default};
