import{R as e}from"./iframe-lcK-LQ4H.js";import{R as i}from"./zIndexSlice-3xiznc3T.js";import{C as n}from"./ComposedChart-CqUZzBcz.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BF4lxnbn.js";import{X as s}from"./XAxis-U3uV11HY.js";import{Y as c}from"./YAxis-BD_opFpC.js";import{L as d}from"./Line-D4XTruOS.js";import{R as g}from"./ReferenceLine-DaP14JRL.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-obGnf5ET.js";import"./index-BJrdch9J.js";import"./index-DR4LcHaa.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CrEw_DbM.js";import"./isWellBehavedNumber-BNK5esbm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D3b-43EA.js";import"./axisSelectors-BQOoWmyr.js";import"./d3-scale-BGtfSAS2.js";import"./index-Bq7_2YG0.js";import"./index-CO-uW0YU.js";import"./renderedTicksSlice-OgdWdUmt.js";import"./index-PavZfgBD.js";import"./CartesianChart-DDPqNkhD.js";import"./chartDataContext-JPZtnlxr.js";import"./CategoricalChart-P0fttYEL.js";import"./CartesianAxis-lKQduzRC.js";import"./Layer-BrJH3_5y.js";import"./Text-B9QwYOBa.js";import"./DOMUtils-DOyQnx6z.js";import"./useId-BdIxfVgV.js";import"./useBackwardsCompatibleTheme-CRXuFPOK.js";import"./Label-DdX71Pmy.js";import"./ZIndexLayer-peV_8dsk.js";import"./types-iT_AM-R8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CH5D8euf.js";import"./step-865XHt_v.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BUrFNy4t.js";import"./useAnimationId-CN4TcOgU.js";import"./ActivePoints-B9F3Cvj-.js";import"./Dot-JEYqyfVW.js";import"./RegisterGraphicalItemId-O_HgkeJ0.js";import"./ErrorBarContext-DAMWbZmD.js";import"./GraphicalItemClipPath-oVlg1Xnl.js";import"./SetGraphicalItem-DZtp094S.js";import"./getRadiusAndStrokeWidthFromDot-C4ZSDNB8.js";import"./ActiveShapeUtils-glOfs5rY.js";import"./useGraphicalItemIdentity-MQMbS4BR.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
