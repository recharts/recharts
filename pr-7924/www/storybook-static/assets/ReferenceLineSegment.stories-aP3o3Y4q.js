import{R as e}from"./iframe-ZTC5pSfT.js";import{R as i}from"./zIndexSlice-CiW62Ghg.js";import{C as n}from"./ComposedChart-COAup3ak.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CdLcLt3z.js";import{X as s}from"./XAxis-Oh1yCkiB.js";import{Y as c}from"./YAxis-bg8Qjeqd.js";import{L as d}from"./Line-Oh1arZa1.js";import{R as g}from"./ReferenceLine-BSOv3mfP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-KrxK4z_U.js";import"./index-CzSCaBER.js";import"./index-B4ZumRW0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BUix77YN.js";import"./isWellBehavedNumber-6xDPwo21.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-mhohCDVl.js";import"./axisSelectors-K6KGYDFF.js";import"./d3-scale-Cpr3RseV.js";import"./index-CIre6itI.js";import"./index-C6jgkA61.js";import"./renderedTicksSlice-2JPEuPfq.js";import"./index-BMMDR1qW.js";import"./CartesianChart-BkfStbLb.js";import"./chartDataContext-CsGZnfHI.js";import"./CategoricalChart-Cp6s7k2U.js";import"./CartesianAxis-CC0XJ4Ez.js";import"./Layer-jaIUArAZ.js";import"./Text-DaoB-dFq.js";import"./DOMUtils-DpY81Anq.js";import"./useId-PK-UNRth.js";import"./useBackwardsCompatibleTheme-DAjVS6k9.js";import"./Label-CMugnJA-.js";import"./ZIndexLayer-ilP_ZZPQ.js";import"./types-C79EZ9QB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DbdnYDgr.js";import"./step-Q9TOfcF_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-sBBBQ_aJ.js";import"./useAnimationId-BB_b0zsq.js";import"./ActivePoints-LVJzz7nF.js";import"./Dot-YLlzKOXh.js";import"./RegisterGraphicalItemId-9ha_OJ2S.js";import"./ErrorBarContext-C3dRgdy-.js";import"./GraphicalItemClipPath-aJ1mq8DH.js";import"./SetGraphicalItem-C-6wJbAO.js";import"./getRadiusAndStrokeWidthFromDot-B8rGLwDc.js";import"./ActiveShapeUtils-D8W511PY.js";import"./useGraphicalItemIdentity-CBZHm2cX.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
