import{R as e}from"./iframe-CFiYbyYn.js";import{R as i}from"./zIndexSlice-CfnjI_J7.js";import{C as n}from"./ComposedChart-AVSPcUwt.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-C813fyqf.js";import{X as s}from"./XAxis-RpmZ_jE_.js";import{Y as c}from"./YAxis-DQzPAn8l.js";import{L as d}from"./Line-Bdu49nu9.js";import{R as g}from"./ReferenceLine-ec7XKE24.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D5Jgld6M.js";import"./throttle-C32GRzNi.js";import"./index-BgXu95am.js";import"./index-D8Rvzs5o.js";import"./RechartsWrapper-DnJ3Lnfw.js";import"./axisSelectors-ZJRlSH7p.js";import"./polarAxisSelectors-C73NV54c.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BQZOe2uw.js";import"./index-CeN26RCh.js";import"./index-B2eeTemT.js";import"./renderedTicksSlice-DEUuAR6D.js";import"./index-CTcpyI6-.js";import"./fillDefinitions-DQn9hMkI.js";import"./CartesianChart-BI7GK76V.js";import"./chartDataContext-CxLvIdoH.js";import"./CategoricalChart-CA4HG4Fk.js";import"./CartesianAxis-D_9vstbH.js";import"./Layer-BfyvsZKx.js";import"./Text-BvA3DBG3.js";import"./ZIndexLayer-BDfLEL3A.js";import"./Label-BO6v_mC5.js";import"./types-BgyTt6P7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CKgWn92F.js";import"./step-DxzKinYr.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CEdPYhQz.js";import"./ActivePoints-Dj8mj1pc.js";import"./Dot-DG45E_Jc.js";import"./activeStyles-P0GMx-UH.js";import"./useAnimationId-BDSeKkxz.js";import"./Symbols-dPAJMo6f.js";import"./symbol-aLQJyVpc.js";import"./ErrorBarContext-DjJwPTFH.js";import"./SetGraphicalItem-CGu2i_Hy.js";import"./getRadiusAndStrokeWidthFromDot-Ce32xTZu.js";import"./ActiveShapeUtils-CsNOZNpW.js";import"./useEffectiveDataKey-Dy2gs8KS.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,ge as __namedExportsOrder,de as default};
