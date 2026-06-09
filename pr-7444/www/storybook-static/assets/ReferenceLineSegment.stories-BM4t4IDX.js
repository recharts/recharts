import{R as e}from"./iframe-Bvg5iw6Z.js";import{R as i}from"./zIndexSlice-Ds_NjbNn.js";import{C as a}from"./ComposedChart-20ZO85Nl.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-391TdCFj.js";import{X as s}from"./XAxis-DCRWzJVy.js";import{Y as c}from"./YAxis-DfqNaUIm.js";import{L as d}from"./Line-X30bFimQ.js";import{R as g}from"./ReferenceLine-DUw0rha6.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DHoEBynv.js";import"./index-Ce12os93.js";import"./index-C7ALVEHS.js";import"./get-DHB3VUn4.js";import"./resolveDefaultProps-DdhPeWBo.js";import"./isWellBehavedNumber-BfXcmwrI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CHMdqOJQ.js";import"./index-D6uOIfEh.js";import"./index-DjoxYWbz.js";import"./renderedTicksSlice-BOSAcKeB.js";import"./axisSelectors-ChUTyiTu.js";import"./d3-scale-C3JFNDzB.js";import"./string-B6fdYHAA.js";import"./CartesianChart-B5xnpDkJ.js";import"./chartDataContext-C4maze1A.js";import"./CategoricalChart-D7IINMSs.js";import"./CartesianAxis-_p8UXmcr.js";import"./Layer-irp4ME8h.js";import"./Text-DjnMaOWq.js";import"./DOMUtils-DJUlICsZ.js";import"./Label-DkRUWIp2.js";import"./ZIndexLayer-BSVnK8Dt.js";import"./types-C-xtjdCV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-C6rubuUm.js";import"./step-CEyafom-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BUtl3ij7.js";import"./useAnimationId-BOUeGlQ3.js";import"./ActivePoints-DfDHJRbx.js";import"./Dot-dsakJdmW.js";import"./RegisterGraphicalItemId-DtXuMSpf.js";import"./ErrorBarContext-CM-RxSPr.js";import"./GraphicalItemClipPath-VUPv1woh.js";import"./SetGraphicalItem-DwOFrAeq.js";import"./getRadiusAndStrokeWidthFromDot-DrdS8yiS.js";import"./ActiveShapeUtils-DAESvJMs.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
