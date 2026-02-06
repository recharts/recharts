import{e}from"./iframe-Isp5DByQ.js";import{R as i}from"./arrayEqualityCheck-DcSZTGrK.js";import{C as a}from"./ComposedChart-8E_kMa2M.js";import{C as p}from"./CartesianGrid-B1FnrzVO.js";import{X as n}from"./XAxis-DbS-5SMi.js";import{Y as s}from"./YAxis-Earp8u6b.js";import{L as c}from"./Line-iXWiESHH.js";import{R as d}from"./ReferenceLine-DX_QBQSl.js";import{R as g}from"./RechartsHookInspector-BcUB3q5g.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CktQcWs0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DJiHoXCP.js";import"./hooks-CPGRTKzd.js";import"./axisSelectors-DKneri-4.js";import"./zIndexSlice-Kir1u83y.js";import"./CartesianChart-Ad36dtSp.js";import"./chartDataContext-CCLXwYwB.js";import"./CategoricalChart-Cd3v81B-.js";import"./CartesianAxis-CtKR5av8.js";import"./Layer-BzTi7EcX.js";import"./Text-B3hJnr-O.js";import"./DOMUtils-DDV6GWvc.js";import"./Label-BIeSPvzh.js";import"./ZIndexLayer-B7yLevK6.js";import"./types-BUXZfUBK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BG9wPH-d.js";import"./ActivePoints-CEokwuvu.js";import"./Dot-CxDulsX9.js";import"./RegisterGraphicalItemId-C0G4e2t3.js";import"./ErrorBarContext-CqPa7Fo7.js";import"./GraphicalItemClipPath-DhI7dbsH.js";import"./SetGraphicalItem-CEyRhP7A.js";import"./useAnimationId-BH36Yv-4.js";import"./getRadiusAndStrokeWidthFromDot-DQQ1a1Ar.js";import"./ActiveShapeUtils-Ch4UNesV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CMTNFeQ6.js";import"./Trapezoid-BhaWvkYr.js";import"./Sector-DXk8yocg.js";import"./Symbols-CRejWEVT.js";import"./Curve-BVujXptJ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DhR5oTPc.js";import"./ChartSizeDimensions-CbTBC7na.js";import"./OffsetShower-34zfbzoW.js";import"./PlotAreaShower-DPXygzPM.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
