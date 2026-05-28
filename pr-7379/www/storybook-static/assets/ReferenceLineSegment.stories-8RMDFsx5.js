import{e}from"./iframe-KzgC6yl3.js";import{g as i}from"./arrayEqualityCheck-CI6mjpz-.js";import{C as a}from"./ComposedChart-Bck7I3Sx.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-GUTxHagB.js";import{X as s}from"./XAxis-CQ-aN71n.js";import{Y as c}from"./YAxis-Dll4Gv0X.js";import{L as d}from"./Line-BcSuBwlL.js";import{R as g}from"./ReferenceLine-fIaU50uh.js";import{R as f}from"./RechartsHookInspector-CbwNoaPW.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DbdijU9i.js";import"./immer-BD-tkhpl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DlAfZ1fX.js";import"./index-D1VqXYN0.js";import"./hooks-Bk-p3SZZ.js";import"./axisSelectors-BGTsJTqw.js";import"./d3-scale-CYshLe_K.js";import"./zIndexSlice-CoKEHAdo.js";import"./renderedTicksSlice-jEvY63xF.js";import"./CartesianChart-B-Y1gwjz.js";import"./chartDataContext-DWNsgPih.js";import"./CategoricalChart-BntpVIm6.js";import"./CartesianAxis-IwDruP1d.js";import"./Layer-LeweOpyN.js";import"./Text-DMdLrMxb.js";import"./DOMUtils-CBtmXe9D.js";import"./Label-DkRj53y4.js";import"./ZIndexLayer-B24S8uuv.js";import"./types-eUgvlmUM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-Q6mWCHhh.js";import"./step-BvMApuT3.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CwLFTC_n.js";import"./ActivePoints-CV8SIXKH.js";import"./Dot-DYstLEu7.js";import"./RegisterGraphicalItemId-C-ghpo4L.js";import"./ErrorBarContext-Ch4fukf7.js";import"./GraphicalItemClipPath-fwgnm59t.js";import"./SetGraphicalItem-D3MvL0nb.js";import"./useAnimationId-Djb8H1Ge.js";import"./getRadiusAndStrokeWidthFromDot-0pa1p6Pi.js";import"./ActiveShapeUtils-C7hoslI5.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BPaFEgS3.js";import"./ChartSizeDimensions-DC6_U8Aq.js";import"./OffsetShower-CrK-LA7q.js";import"./PlotAreaShower-CZGD6-xs.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ge=["Segment"];export{t as Segment,ge as __namedExportsOrder,de as default};
