import{R as r}from"./iframe-7XJ2xcaa.js";import{z as a,R as p}from"./zIndexSlice-Smyg0ZdR.js";import{C as s}from"./ComposedChart-CsOZpoaR.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as g}from"./Line-D0ZPViAT.js";import{X as d}from"./XAxis-C1fpfCfO.js";import{Y as h}from"./YAxis-BG1hFypZ.js";import{L as c}from"./Legend-BaHRoIPM.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D4811UcH.js";import"./index-2ovstjTu.js";import"./index-TMtczAeJ.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Dm7ujSLB.js";import"./isWellBehavedNumber-C2jdcJtq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-49lbEV7H.js";import"./index-DVTD1Fpd.js";import"./index-WU_oH4BO.js";import"./renderedTicksSlice-C2Tixweq.js";import"./axisSelectors-BEWMGkmB.js";import"./d3-scale-BuuUT6V5.js";import"./CartesianChart-BVaoZCto.js";import"./chartDataContext-hp2Drl2b.js";import"./CategoricalChart-DLU0PYD6.js";import"./Layer-BGcXXZrK.js";import"./Curve-CHo9cgN6.js";import"./types-CCvMXBAG.js";import"./step-CE2G1JBn.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DXPDcN2s.js";import"./Label-kaLCkxIc.js";import"./Text-Dt_HR9_i.js";import"./DOMUtils-DVnhXYtC.js";import"./ZIndexLayer-CzQjP_gg.js";import"./useAnimationId-Bhm-Tg4Q.js";import"./ActivePoints-DwDpt2dv.js";import"./Dot-CdCHNKxE.js";import"./RegisterGraphicalItemId-ezS9CDrB.js";import"./ErrorBarContext-BQCQT8xU.js";import"./GraphicalItemClipPath-8cnbCE1N.js";import"./SetGraphicalItem-BkRk4aVf.js";import"./getRadiusAndStrokeWidthFromDot-DV9FgO6_.js";import"./ActiveShapeUtils-CUzuZPCF.js";import"./CartesianAxis-OiUDsUEB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DQCEJqHR.js";import"./symbol-B0FARq78.js";import"./useElementOffset-C-vskSZV.js";import"./uniqBy-Big4MVsT.js";import"./iteratee-BpHsmV36.js";const dr={title:"API/hooks/useMargin",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},t={name:"useMargin",render:e=>r.createElement(p,{width:e.width,height:e.height},r.createElement(s,{data:n,margin:e.margin},r.createElement(g,{dataKey:"pv"}),r.createElement(d,{dataKey:"name"}),r.createElement(h,null),r.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useMargin',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const hr=["UseMargin"];export{t as UseMargin,hr as __namedExportsOrder,dr as default};
