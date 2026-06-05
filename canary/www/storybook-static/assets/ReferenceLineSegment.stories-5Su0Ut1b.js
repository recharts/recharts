import{R as e}from"./iframe-BXeHtRRc.js";import{R as i}from"./zIndexSlice-cE44OqOD.js";import{C as a}from"./ComposedChart-CG0nrh_K.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-B491ywc-.js";import{X as s}from"./XAxis-tstPVLiw.js";import{Y as c}from"./YAxis-BMejmk_u.js";import{L as d}from"./Line-Bi2pbqFq.js";import{R as g}from"./ReferenceLine-CIiXKj3M.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DNshJjPH.js";import"./index-DvJ-fn_5.js";import"./index-B4hVWkse.js";import"./get-CJL6L62i.js";import"./resolveDefaultProps-C9hL96mo.js";import"./isWellBehavedNumber-D2wsJvGw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BlW5dnlL.js";import"./index-BDGfSbM8.js";import"./index-Ovc1MJjY.js";import"./renderedTicksSlice-Bxd2HCuP.js";import"./axisSelectors-DwMRPNyX.js";import"./d3-scale-D1ymsn93.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CfUKecxL.js";import"./chartDataContext-Cl-sRnxe.js";import"./CategoricalChart-Dcf-SEqg.js";import"./CartesianAxis-DlPp-Ttd.js";import"./Layer-G87RycP8.js";import"./Text-CgCa4wia.js";import"./DOMUtils-Bki5Qsqq.js";import"./Label-CmgKG_wT.js";import"./ZIndexLayer-CdPLtMFq.js";import"./types-DFlY2any.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DVgI-4Ur.js";import"./step-CWqUN4bQ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cld-WhT6.js";import"./useAnimationId-DKoglaf7.js";import"./ActivePoints-BIzkJXPu.js";import"./Dot-BuBaCmSt.js";import"./RegisterGraphicalItemId-CoToPco7.js";import"./ErrorBarContext-BsZ2YOp7.js";import"./GraphicalItemClipPath-Behn_RHh.js";import"./SetGraphicalItem-DrQ2NJnA.js";import"./getRadiusAndStrokeWidthFromDot-BwFthNRz.js";import"./ActiveShapeUtils-BHpJL8IG.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
