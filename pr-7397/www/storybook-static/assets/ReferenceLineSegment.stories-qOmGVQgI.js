import{c as e}from"./iframe-DCxmmXwr.js";import{g as i}from"./zIndexSlice-D5dh4jLY.js";import{C as a}from"./ComposedChart-CBS3HMO1.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-BiDkRolY.js";import{X as s}from"./XAxis-BjsM6oGC.js";import{Y as c}from"./YAxis-BdatH0tB.js";import{L as d}from"./Line-IALvE5xR.js";import{R as g}from"./ReferenceLine-Bp_9Sj-L.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-SgEFwxUu.js";import"./index-DDgPfSlI.js";import"./index-Mzvapta9.js";import"./get-BGMlQ-Gx.js";import"./resolveDefaultProps-Dbw1fq_o.js";import"./isWellBehavedNumber-CpP0Zk3Z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BIau-2yw.js";import"./index-VwBqvb6i.js";import"./index-DgYh_LA8.js";import"./renderedTicksSlice-DSZVgTAV.js";import"./axisSelectors-dhV3Z94_.js";import"./d3-scale-Bu_zrpDn.js";import"./CartesianChart-D-fZCIkl.js";import"./chartDataContext-PHEEBUXD.js";import"./CategoricalChart-DfNs-HF3.js";import"./CartesianAxis-Bc9Tdb6N.js";import"./Layer-BBh4PyoV.js";import"./Text-BQlyDcDw.js";import"./DOMUtils-BtWg_eMC.js";import"./Label-BxDF9pHP.js";import"./ZIndexLayer-DYE1lO3r.js";import"./types-gNnCO6KJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-lML4pT7n.js";import"./step-BzmHC3AY.js";import"./path-DyVhHtw_.js";import"./ReactUtils-UlfCGyqA.js";import"./ActivePoints-Dyjkd6x5.js";import"./Dot-CpTGA67i.js";import"./RegisterGraphicalItemId-Bf4FTeRp.js";import"./ErrorBarContext-VLRUzxSd.js";import"./GraphicalItemClipPath-BgB5Pb70.js";import"./SetGraphicalItem-CTm0YcCQ.js";import"./useAnimationId-D36I95JC.js";import"./getRadiusAndStrokeWidthFromDot-BV7amyi3.js";import"./ActiveShapeUtils-cF9iV1xd.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ne=["Segment"];export{t as Segment,ne as __namedExportsOrder,pe as default};
