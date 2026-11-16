import{R as t}from"./iframe-B7zNIrOO.js";import{y as p}from"./RechartsWrapper-BpqvgZcQ.js";import{R as a}from"./zIndexSlice-BrXa08HH.js";import{C as n}from"./ComposedChart-CwA4XzeT.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-CDQvgmS5.js";import{X as d}from"./XAxis-vwLDX7Ct.js";import{Y as h}from"./YAxis-DDLRqqCt.js";import{L as g}from"./Legend-BfEcUSQ1.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DItvlha8.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BpHmVUrQ.js";import"./throttle-eF_Q2QNr.js";import"./index-DPky1fKm.js";import"./index-DeW5qBsv.js";import"./polarAxisSelectors-DMv2prKV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ctmq2SXE.js";import"./index-DvJGiIdF.js";import"./index-CSG1xziR.js";import"./renderedTicksSlice-BaWHA44G.js";import"./index-Bmy_tuVE.js";import"./fillDefinitions-BcvXO95l.js";import"./CartesianChart-DD-p_bEO.js";import"./chartDataContext-BXscOHGM.js";import"./CategoricalChart-eJZPSIID.js";import"./Layer-_oO_qD0a.js";import"./Curve-CzZYT27h.js";import"./types-Byak9pOA.js";import"./step-BjjeCzgq.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-m9rMNboQ.js";import"./Label-Chg26k5h.js";import"./Text-RcA031Tp.js";import"./ZIndexLayer-wE65zH98.js";import"./ActivePoints-hyEey0jz.js";import"./Dot-CPebMAD4.js";import"./activeStyles-CDe2Kb4I.js";import"./useAnimationId-kE9HxpHZ.js";import"./Symbols-FG4gFplx.js";import"./symbol-DWqvgSCA.js";import"./ErrorBarContext-Dk6Rlq45.js";import"./SetGraphicalItem-CoOgwPlc.js";import"./getRadiusAndStrokeWidthFromDot-BxhyxoF6.js";import"./ActiveShapeUtils-CLU25TzO.js";import"./useEffectiveDataKey-CezGQrGJ.js";import"./CartesianAxis-_HHYfvE8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Ch1zQzym.js";import"./uniqBy-g_uehvzu.js";import"./iteratee-DcFC9bTU.js";import"./isArguments-yB-y1yaH.js";const ct={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(n,{data:s,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}},lt=["UseOffset"];var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
