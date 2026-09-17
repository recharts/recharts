import{R as e}from"./iframe-zm2RFiAA.js";import{R as i}from"./zIndexSlice-DqZBLIbU.js";import{C as n}from"./ComposedChart-BtUji9l7.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-_vwIk58n.js";import{X as s}from"./XAxis-BmR_Q4ey.js";import{Y as c}from"./YAxis-QmJ3fv5f.js";import{L as d}from"./Line-BYHn6zsd.js";import{R as g}from"./ReferenceLine-D17LMfX7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-8D1mAr5a.js";import"./index-DYoeUBFv.js";import"./index-C05Q7pAX.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DVyNUYq0.js";import"./isWellBehavedNumber-BsUHNZ1L.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bnt3Xjg2.js";import"./axisSelectors-D_XgtjC9.js";import"./d3-scale-CIfEmdT5.js";import"./index-Cyz_PThi.js";import"./index-0SlDOcWE.js";import"./renderedTicksSlice-DM7SAuzg.js";import"./index-DpXVo8J4.js";import"./CartesianChart-CZZG3tzb.js";import"./chartDataContext-ChtOwbQ7.js";import"./CategoricalChart-Cc-dXh8l.js";import"./CartesianAxis-BTS4yOao.js";import"./Layer-CBvDM-ZR.js";import"./Text-bm4_J_IC.js";import"./DOMUtils-Dj43lFCA.js";import"./useId-DIhnWHEa.js";import"./useBackwardsCompatibleTheme-DTCZ1OkH.js";import"./Label-Dpn-Rbeg.js";import"./ZIndexLayer-fVuj_SHP.js";import"./types-DQCUIdcv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-KfMVJIMR.js";import"./step-BBLL9Nmi.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cn3auVQS.js";import"./useAnimationId-DbteGMIo.js";import"./ActivePoints-Bo7SycvC.js";import"./Dot-DeAdYXSf.js";import"./RegisterGraphicalItemId-CFLy-PgK.js";import"./ErrorBarContext-gzjuFQOm.js";import"./GraphicalItemClipPath-CrDoK_iS.js";import"./SetGraphicalItem-CMYFNCGq.js";import"./getRadiusAndStrokeWidthFromDot-Db_AAYxl.js";import"./ActiveShapeUtils-ClA9znOB.js";import"./useGraphicalItemIdentity-C6EWaBUb.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
