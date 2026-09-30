import{R as e}from"./iframe-qocy1DQe.js";import{R as i}from"./zIndexSlice-3RvOLzet.js";import{C as n}from"./ComposedChart-RUoVj2HF.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Bn_feOmx.js";import{X as s}from"./XAxis-DVDwgnrS.js";import{Y as c}from"./YAxis-BEBc8eQo.js";import{L as d}from"./Line-DzOEwxYP.js";import{R as g}from"./ReferenceLine-CDqo-W1P.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DL_zA7f1.js";import"./index-D6IIus7-.js";import"./index-BPqPq_lE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CJBSV8gq.js";import"./isWellBehavedNumber-BIQIJEIr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Br0BGP0j.js";import"./axisSelectors-DDRTV0S0.js";import"./d3-scale-D0IFI5Iu.js";import"./index-CS-NV7Zp.js";import"./index-C4gwL4-s.js";import"./renderedTicksSlice-BgKiD8FK.js";import"./index-DYvx6oZP.js";import"./CartesianChart-DQFc2W7b.js";import"./chartDataContext-kqjRO4tk.js";import"./CategoricalChart-DuhZERvG.js";import"./CartesianAxis-MlycpDsd.js";import"./Layer-B3KOyccU.js";import"./Text-Da9B2kdK.js";import"./DOMUtils-6qqCmkCb.js";import"./useId-HrwTNVuH.js";import"./useBackwardsCompatibleTheme-IgaWvrkn.js";import"./Label-CT_NLtkb.js";import"./ZIndexLayer-CFBos5HM.js";import"./types-Bss1IWFA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DAl3IIzp.js";import"./step-nn4oKmLh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-NvJhAvIW.js";import"./useAnimationId-BzcHu7-i.js";import"./ActivePoints-DmiMFqmD.js";import"./Dot-j6skezxs.js";import"./RegisterGraphicalItemId-CjOhDwU5.js";import"./ErrorBarContext-B1oojupg.js";import"./GraphicalItemClipPath-CyLjJqVx.js";import"./SetGraphicalItem-CzGt4YnL.js";import"./getRadiusAndStrokeWidthFromDot-B1njTj3P.js";import"./ActiveShapeUtils-BsQ4rgbJ.js";import"./useGraphicalItemIdentity-Cs7JOztK.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
