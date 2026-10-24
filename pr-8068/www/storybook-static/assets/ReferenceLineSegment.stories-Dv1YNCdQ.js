import{R as e}from"./iframe-fRQcLAl5.js";import{R as i}from"./zIndexSlice-Dn-AwdFU.js";import{C as n}from"./ComposedChart-EXBPqiIb.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Cm7w7xPd.js";import{X as s}from"./XAxis-YHoN4cJ8.js";import{Y as c}from"./YAxis-B2vH-p_Z.js";import{L as d}from"./Line-DpSpydaT.js";import{R as g}from"./ReferenceLine-D1cnDKnt.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D9yJ7HBS.js";import"./index-k5JxmCtc.js";import"./index-DGdlAhFZ.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BSRNeAis.js";import"./isWellBehavedNumber-D73y1wlb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-UgoWSvvL.js";import"./axisSelectors-BcHvjcBD.js";import"./d3-scale-DfAPImNq.js";import"./index-CvX2HSRN.js";import"./index-BMhLMrsl.js";import"./renderedTicksSlice-B-odeO7S.js";import"./index-0uuwnO43.js";import"./CartesianChart-78VpV4en.js";import"./chartDataContext-DbJ6pwXa.js";import"./CategoricalChart-BOoKbn6G.js";import"./CartesianAxis-KAWGVqFX.js";import"./Layer-CbRW8QEs.js";import"./Text-Cru6BjP5.js";import"./pageBackground-CEHLL-Ei.js";import"./useId-C-HGw4dN.js";import"./useBackwardsCompatibleTheme-BHb08z9X.js";import"./Label-B-GmpToQ.js";import"./ZIndexLayer-Cs8fSrLZ.js";import"./dataEntryStyles-DAJ1H5Ij.js";import"./types-9LI4VHBg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CS-yaUma.js";import"./step-CpSFtT8B.js";import"./path-DyVhHtw_.js";import"./activeStyles-mU47mh7y.js";import"./useAnimationId-BA218cv-.js";import"./ActivePoints-D7vn9lL2.js";import"./Dot-CoF5eEMQ.js";import"./RegisterGraphicalItemId-B0TmU9i7.js";import"./ErrorBarContext-DLnk70v-.js";import"./GraphicalItemClipPath-DvSzn1zw.js";import"./SetGraphicalItem-fs95wN3Y.js";import"./getRadiusAndStrokeWidthFromDot-BW7yBTjT.js";import"./ActiveShapeUtils-DqrHb297.js";import"./useEffectiveDataKey-H8Jal8DL.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
