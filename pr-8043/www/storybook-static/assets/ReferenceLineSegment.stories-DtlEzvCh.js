import{R as e}from"./iframe-prTVX46R.js";import{R as i}from"./zIndexSlice-BBM3QNxr.js";import{C as n}from"./ComposedChart-JM9IJLAu.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-S_RK1IMs.js";import{X as s}from"./XAxis-CAekIzf1.js";import{Y as c}from"./YAxis-BP1gJNh-.js";import{L as d}from"./Line-jTAj4npb.js";import{R as g}from"./ReferenceLine-D6d-xGfC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DvEGNDvN.js";import"./index-DxBxvBWq.js";import"./index-Bh60i1A4.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CgD2AS6S.js";import"./isWellBehavedNumber-sGfX6V07.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D3mCvzlT.js";import"./axisSelectors-C2RKwHTh.js";import"./d3-scale-CFQbB9BF.js";import"./index-BB-SpmyJ.js";import"./index-DnW1VngH.js";import"./renderedTicksSlice-iUiCR_an.js";import"./index-BQtEBMtF.js";import"./CartesianChart-D5BTPRp4.js";import"./chartDataContext-C7eScBxX.js";import"./CategoricalChart-DhkwWrJ_.js";import"./CartesianAxis-vl41q2bl.js";import"./Layer-1a5Zn_r7.js";import"./Text-DjfbNrah.js";import"./pageBackground-DWO83YrS.js";import"./useId-ClNpWPkJ.js";import"./useBackwardsCompatibleTheme-CSXD7-a6.js";import"./Label-CVltcmCw.js";import"./ZIndexLayer-BUy73e0U.js";import"./dataEntryStyles-D6au6UrY.js";import"./types-D57XnYuF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CuhJA6qj.js";import"./step-DkGj8L15.js";import"./path-DyVhHtw_.js";import"./activeStyles-DLUKuBq3.js";import"./useAnimationId-BWMAKk3V.js";import"./ActivePoints-BByUh20Z.js";import"./Dot-B6R-m7zq.js";import"./RegisterGraphicalItemId-Cwh2uO7M.js";import"./ErrorBarContext-Bm4lfbUj.js";import"./GraphicalItemClipPath-BBiEKuCI.js";import"./SetGraphicalItem-FbCkTx_q.js";import"./getRadiusAndStrokeWidthFromDot-GrV3uc-f.js";import"./ActiveShapeUtils-CXxeeNqe.js";import"./useEffectiveDataKey-Byody78s.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
