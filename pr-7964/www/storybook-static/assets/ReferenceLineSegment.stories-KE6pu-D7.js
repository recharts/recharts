import{R as e}from"./iframe-BKHpBCGR.js";import{R as i}from"./zIndexSlice-MbsPskuO.js";import{C as n}from"./ComposedChart-iKWFtV78.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-B5m4_DSs.js";import{X as s}from"./XAxis-DTRZ1dWN.js";import{Y as c}from"./YAxis-BEhxTh9O.js";import{L as d}from"./Line-UOyYMjp1.js";import{R as g}from"./ReferenceLine-BYuNWL84.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-3nfkHG5O.js";import"./index-BGfSAvuv.js";import"./index-AIIPc7Ew.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-LMHkslvY.js";import"./isWellBehavedNumber-DZ2Xn8RG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D-Zfjt-o.js";import"./axisSelectors-CJodVBjM.js";import"./d3-scale-CFmaNxVK.js";import"./index-MJAbFl6s.js";import"./index-D7XXjqey.js";import"./renderedTicksSlice-BZuStCiV.js";import"./index-pfuxfga8.js";import"./CartesianChart-CXURKO2Z.js";import"./chartDataContext-BJRV3EGA.js";import"./CategoricalChart-sVMN8Krq.js";import"./CartesianAxis-mCcuS_Uy.js";import"./Layer-DybYLhVT.js";import"./Text-DYCZls4m.js";import"./pageBackground-CYge6A3w.js";import"./useId-Dt-1BK0Z.js";import"./useBackwardsCompatibleTheme-C46GemJr.js";import"./Label-O1JP__wG.js";import"./ZIndexLayer-BdmXZICd.js";import"./types-Ck1lG8KT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DUSP7h70.js";import"./step-Dts2RvRs.js";import"./path-DyVhHtw_.js";import"./activeStyles-Ciq5Cwqo.js";import"./useAnimationId-yls0YfbP.js";import"./dataEntryStyles-dsuf4aHw.js";import"./ActivePoints-BAFHTjJh.js";import"./Dot-Ba-w2X1N.js";import"./ErrorBarContext-D-66_lvv.js";import"./GraphicalItemClipPath--201yH7F.js";import"./SetGraphicalItem-BcZa1iuc.js";import"./getRadiusAndStrokeWidthFromDot-DBGL35Fg.js";import"./ActiveShapeUtils-DQESG7Jg.js";import"./useEffectiveDataKey-BIsGwEM1.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
