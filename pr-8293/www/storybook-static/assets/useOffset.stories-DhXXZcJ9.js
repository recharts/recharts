import{R as t}from"./iframe-BzxAUdBV.js";import{y as p}from"./RechartsWrapper-BCictS_F.js";import{R as a}from"./zIndexSlice-CpYrgVZX.js";import{C as n}from"./ComposedChart-hvP_dJoC.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-C-rr1QKq.js";import{X as d}from"./XAxis-CtYxvtbo.js";import{Y as h}from"./YAxis-DCmm8K7b.js";import{L as g}from"./Legend-B6MIKlcq.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DheJQ_-R.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D1428BGH.js";import"./throttle-C2l7QP8r.js";import"./index-DxuOyH9Y.js";import"./index-5gwlPTJD.js";import"./polarAxisSelectors-CqQp2e17.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BnAxRH73.js";import"./index-DwsBZD05.js";import"./index-D3M5mM9_.js";import"./renderedTicksSlice-DYvam8ud.js";import"./index-CIBNfLVZ.js";import"./fillDefinitions-fx1J2dmJ.js";import"./CartesianChart-Cryci4Uo.js";import"./chartDataContext-CextJDGM.js";import"./CategoricalChart-DzNtI-Go.js";import"./getRadiusAndStrokeWidthFromDot-ZLRSIrH1.js";import"./Layer-Df_NEF0m.js";import"./Curve-DIyQM0l3.js";import"./types-djSleOln.js";import"./step-CAG0Ynz6.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-C-ZfbqEc.js";import"./Label-9brnKF6Z.js";import"./Text-DPkQNMpB.js";import"./ZIndexLayer-BUHaqwT6.js";import"./ActivePoints-B380tDrW.js";import"./Dot-BeK6ZL_a.js";import"./activeStyles-DjlDJ1Rs.js";import"./useAnimationId-CdQeQcKS.js";import"./Symbols-BU2g01-G.js";import"./symbol-DGFVgd7C.js";import"./ErrorBarContext-iCVMvaG7.js";import"./SetGraphicalItem-in8OQb6t.js";import"./ActiveShapeUtils-BTD3-pm6.js";import"./useEffectiveDataKey-BLws13Ws.js";import"./CartesianAxis-C9p6cgyy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DEzR6i3W.js";import"./uniqBy-BHLVblv7.js";import"./iteratee-BJNLYDOc.js";import"./isArguments-yB-y1yaH.js";const ct={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(n,{data:s,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}},lt=["UseOffset"];var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{r as UseOffset,lt as __namedExportsOrder,ct as default};
