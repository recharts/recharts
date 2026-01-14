import{e}from"./iframe-BtpSaGeD.js";import{R as i}from"./arrayEqualityCheck-csfjq8mV.js";import{C as a}from"./ComposedChart-D3TQl5Wu.js";import{C as p}from"./CartesianGrid-DjzQkRle.js";import{X as n}from"./XAxis-iLH9P-hU.js";import{Y as s}from"./YAxis-Bmepm0jT.js";import{L as c}from"./Line-Cf2UA-3o.js";import{R as d}from"./ReferenceLine-C_Fh8RSq.js";import{R as g}from"./RechartsHookInspector-Dh2n9Wob.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DkARaCDv.js";import"./PolarUtils-5F1_zZA0.js";import"./RechartsWrapper-BQPGXXGO.js";import"./hooks-DULxqo3A.js";import"./axisSelectors-CQvuHlQI.js";import"./zIndexSlice-ydm78BYW.js";import"./CartesianChart-2vMAanpf.js";import"./chartDataContext-D1JeIz7Q.js";import"./CategoricalChart-BIOH4Ga_.js";import"./CartesianAxis-B74-p-s1.js";import"./Layer-CYyvuKkx.js";import"./Text-DH63q3ed.js";import"./DOMUtils-CVzw1QbG.js";import"./Label-BOlhuZqt.js";import"./ZIndexLayer-BcDwNHGX.js";import"./types-245F3-IH.js";import"./ReactUtils-TAFDop8V.js";import"./ActivePoints-Djg9xCE5.js";import"./Dot-BgtKn9fG.js";import"./RegisterGraphicalItemId-CJ_I0CZl.js";import"./ErrorBarContext-D_YNM0zR.js";import"./GraphicalItemClipPath-CmYuvuXv.js";import"./SetGraphicalItem-CMYrG93h.js";import"./useAnimationId-Be_3bM2l.js";import"./getRadiusAndStrokeWidthFromDot-BgQkEg5F.js";import"./ActiveShapeUtils-D3Igja4T.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D3A1KPVj.js";import"./Trapezoid-xDGlDRMK.js";import"./Sector-NNIkOagX.js";import"./Symbols-Dt8Khp4u.js";import"./Curve-BC2lzeAQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-o2N_x1RI.js";import"./ChartSizeDimensions-9kzbcyaa.js";import"./OffsetShower-DBzvXmYz.js";import"./PlotAreaShower-BzkhZKlK.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
