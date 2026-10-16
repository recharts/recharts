import{R as e}from"./iframe-83g2bT9h.js";import{R as i}from"./zIndexSlice-CfRH_Gkg.js";import{C as n}from"./ComposedChart-MoKKZ9CA.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CMZ2k9Kj.js";import{X as s}from"./XAxis-CPLb-uD7.js";import{Y as c}from"./YAxis-DKEYM08g.js";import{L as d}from"./Line-D5Z7nKk5.js";import{R as g}from"./ReferenceLine-wriO9DJf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-4AZ4DRQb.js";import"./index-D9-kpgN8.js";import"./index-HFr4exi0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BpxedNkM.js";import"./isWellBehavedNumber-BgkxdIs4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-p2KZrAJR.js";import"./axisSelectors-C8tSZ6WQ.js";import"./d3-scale-CVvcmCdK.js";import"./index-B7VmcSkv.js";import"./index-DLYfmWnd.js";import"./renderedTicksSlice-xHtkKbmz.js";import"./index-D-OQyWuZ.js";import"./CartesianChart-D1Nmaq06.js";import"./chartDataContext-sHdkOGNI.js";import"./CategoricalChart-D7JsCRcw.js";import"./CartesianAxis-DvK2UzOE.js";import"./Layer-B91IFUVw.js";import"./Text-DUBqVL79.js";import"./pageBackground-DKLyt_8U.js";import"./useId-zomQiW43.js";import"./useBackwardsCompatibleTheme-BcLG_xbs.js";import"./Label-DfuHALhb.js";import"./ZIndexLayer-DeHUv8B_.js";import"./types-CMZudBWv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BzUWFYb9.js";import"./step-BklymoVp.js";import"./path-DyVhHtw_.js";import"./activeStyles-CdFniEfO.js";import"./useAnimationId-DUwxwMTt.js";import"./dataEntryStyles-B1gd_eml.js";import"./ActivePoints-DPZpTkVA.js";import"./Dot-CmrA2XZR.js";import"./ErrorBarContext-6HrkNfKi.js";import"./GraphicalItemClipPath-qo2wW-Qb.js";import"./SetGraphicalItem-BS6yKsvN.js";import"./getRadiusAndStrokeWidthFromDot-CQHfNXLK.js";import"./ActiveShapeUtils-CYOV0Fte.js";import"./useEffectiveDataKey-B2aQWgd3.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
