import{R as e}from"./iframe-BH_ynjC4.js";import{R as i}from"./zIndexSlice-BI1ysfjy.js";import{C as n}from"./ComposedChart-CZ5mgmPm.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Du3PcIBW.js";import{X as s}from"./XAxis-DHYBvz-p.js";import{Y as c}from"./YAxis-zkDdPwB0.js";import{L as d}from"./Line-BbFfXssg.js";import{R as g}from"./ReferenceLine-d4nvDJGE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B92nZ18Y.js";import"./index-RF2vHOS8.js";import"./index-DbazBVJ8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BlxwprZn.js";import"./isWellBehavedNumber-BHoIJZLy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BODbUaHb.js";import"./axisSelectors-BuZGyw5u.js";import"./d3-scale-3O5mTbCq.js";import"./index-C7z_bQHY.js";import"./index-B2CUqXvo.js";import"./renderedTicksSlice-AZvUrajM.js";import"./index-483Wu6hp.js";import"./CartesianChart-x2wpl3h2.js";import"./chartDataContext-D5KYfl9L.js";import"./CategoricalChart-CQ3zK25U.js";import"./CartesianAxis-L0O2lUH5.js";import"./Layer-BZJOgrQn.js";import"./Text-DIx256cP.js";import"./DOMUtils-Cq_tvs96.js";import"./useId-POUb9F1l.js";import"./useBackwardsCompatibleTheme-BDKfSYgg.js";import"./Label-FZu_WDSG.js";import"./ZIndexLayer-DJFUyPkd.js";import"./types-BCqSdCtd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-C9UO5Z1_.js";import"./step-ClVzp-XC.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BzetGmJU.js";import"./useAnimationId-dKpzhWqB.js";import"./ActivePoints-BK4U7PBG.js";import"./Dot-T-B_JEuw.js";import"./RegisterGraphicalItemId-BaYVXJgS.js";import"./ErrorBarContext-C6wSEKqb.js";import"./GraphicalItemClipPath-CJUrTS9M.js";import"./SetGraphicalItem-CVCJo--0.js";import"./getRadiusAndStrokeWidthFromDot-La0lgpRv.js";import"./ActiveShapeUtils-vPOXs-PX.js";import"./useGraphicalItemIdentity-CmFW8bhj.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
