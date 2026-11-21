import{R as t}from"./iframe-C9RR7JmE.js";import{y as p}from"./RechartsWrapper-Bb98fXCM.js";import{R as a}from"./zIndexSlice-9FgFGtgA.js";import{C as n}from"./ComposedChart-DzefamiH.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-CsoZzsvT.js";import{X as d}from"./XAxis-B6hKXJep.js";import{Y as h}from"./YAxis-Bsmg8WZC.js";import{L as g}from"./Legend-BI4I1MVi.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BS9vZKxy.js";import"./get-cF5BDHN6.js";import"./axisSelectors-TgtedVmF.js";import"./throttle-CSzDQiVS.js";import"./index-C9sROg_Y.js";import"./index-DobETtGM.js";import"./polarAxisSelectors-fbcgHrSa.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CFw4t_7I.js";import"./index-Bp7vSvmR.js";import"./index-C4LPcI60.js";import"./renderedTicksSlice-DG_92KFR.js";import"./index-Dim785Oy.js";import"./fillDefinitions-BD293OF_.js";import"./CartesianChart-bv1G3A4F.js";import"./chartDataContext--IWIWppp.js";import"./CategoricalChart-CUD-tLds.js";import"./getRadiusAndStrokeWidthFromDot-xzaADJd5.js";import"./Layer-CF0GFBX9.js";import"./Curve-Cp4aQ8cc.js";import"./types-DEp2f933.js";import"./step-Sm-51kJi.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-B4uCvMTS.js";import"./Label-BaLJb5QI.js";import"./Text-m7bywbsW.js";import"./ZIndexLayer-CRt4gP-q.js";import"./ActivePoints-BLeTrPjm.js";import"./Dot-B-qNm1bD.js";import"./activeStyles-psvB14ar.js";import"./useAnimationId-P10-1iqt.js";import"./Symbols-DlwZKch0.js";import"./symbol-DWh1oIHF.js";import"./ErrorBarContext-D5q20nPS.js";import"./SetGraphicalItem-D9jhbnIr.js";import"./ActiveShapeUtils-xp9QUtvW.js";import"./useEffectiveDataKey-rhz_g6ic.js";import"./CartesianAxis-DmiMG-c8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-C2cTU9_n.js";import"./uniqBy-DEPl67Hh.js";import"./iteratee-Rk_zuFbj.js";import"./isArguments-yB-y1yaH.js";const ct={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(n,{data:s,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}},lt=["UseOffset"];var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
