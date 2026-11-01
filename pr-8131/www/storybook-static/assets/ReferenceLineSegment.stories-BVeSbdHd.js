import{R as e}from"./iframe-Dt9aG847.js";import{R as i}from"./zIndexSlice-C3sOwbsK.js";import{C as n}from"./ComposedChart-CpvmmgfC.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CtFay-Af.js";import{X as s}from"./XAxis-ChVo-6Tw.js";import{Y as c}from"./YAxis-AwRjL7js.js";import{L as d}from"./Line-CQGFi5Sl.js";import{R as g}from"./ReferenceLine-BzKUiLPs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cnn2TL20.js";import"./throttle-DjDKvtka.js";import"./index-Ckb0wJr8.js";import"./index-ZaO1fpAq.js";import"./RechartsWrapper-CgsNUza7.js";import"./axisSelectors-Bm-O_fE3.js";import"./polarAxisSelectors-BE-JLCIi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DLGbz4xh.js";import"./index-DaFKSt3L.js";import"./index-C7FBrTyJ.js";import"./renderedTicksSlice-CiUiD4jz.js";import"./index-Cy9hP7c-.js";import"./fillDefinitions-Cturf6E_.js";import"./CartesianChart-ZS3wTvyi.js";import"./ZIndexPortal-C6GfDihg.js";import"./CategoricalChart-CcRrPC5A.js";import"./CartesianAxis-DnXkFBgJ.js";import"./Layer-Z8zmzF48.js";import"./Text-6YRDeSKh.js";import"./DOMUtils-DacRhvVS.js";import"./ZIndexLayer-D4w_arr1.js";import"./Label-0OpL57DR.js";import"./types-CAYyOejn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BqouQalk.js";import"./step-J3DdjOPx.js";import"./path-DyVhHtw_.js";import"./LabelList-Dmjy57ut.js";import"./ActivePoints-Djx8G9q2.js";import"./Dot-B7i9JEY2.js";import"./activeStyles-D2EMNXIV.js";import"./useAnimationId-CJa-E4MR.js";import"./dataEntryStyles-V0ugCGFO.js";import"./Symbols-VXtPO39-.js";import"./symbol-6_lKArhi.js";import"./ErrorBarContext-BlC639ix.js";import"./SetGraphicalItem-KzVnPo4P.js";import"./getRadiusAndStrokeWidthFromDot-BIO0J0B_.js";import"./ActiveShapeUtils-BCHVEK9a.js";import"./useEffectiveDataKey-DvT2OXI-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
