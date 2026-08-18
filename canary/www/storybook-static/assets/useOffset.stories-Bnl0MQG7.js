import{R as t}from"./iframe-BMarL12M.js";import{e as p}from"./CategoricalChart-D3itWTr1.js";import{R as a}from"./zIndexSlice-C3zFoeWv.js";import{C as s}from"./ComposedChart-DmXgJ0VK.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-BwUTPDsI.js";import{X as d}from"./XAxis-HDWpUUwS.js";import{Y as h}from"./YAxis-hUo2hZ05.js";import{L as g}from"./Legend-CLxa5TeL.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C2ncjDjR.js";import"./index-rELjxh9R.js";import"./index-vTpJvilY.js";import"./index-Dlh6vJO1.js";import"./index-D9BBRgqz.js";import"./throttle-szqIxzqv.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DONKf7kg.js";import"./resolveDefaultProps-C6wBzGKi.js";import"./isWellBehavedNumber-DBs0imhW.js";import"./d3-scale-C4M2cZc9.js";import"./renderedTicksSlice-BGVDzAbm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bsi6NNhA.js";import"./chartDataContext-BcZuDILO.js";import"./Layer-DPtUoMDp.js";import"./Curve-CqaRxmR5.js";import"./types-B-ESMolm.js";import"./step-B2Vat6Ch.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BsByAcaR.js";import"./Label-wMX0Bukp.js";import"./Text-CGkcqRdd.js";import"./DOMUtils-DSG72bMg.js";import"./useBackwardsCompatibleTheme-DDTyJRfe.js";import"./ZIndexLayer-4Y9-7gYz.js";import"./useAnimationId-W_lOfRkr.js";import"./ActivePoints-CaZ5IFfg.js";import"./Dot-BRm5AFxN.js";import"./RegisterGraphicalItemId-CxNs_80A.js";import"./ErrorBarContext-GzARO3dP.js";import"./GraphicalItemClipPath-CUFqqD93.js";import"./SetGraphicalItem-B6tJU4_Z.js";import"./getRadiusAndStrokeWidthFromDot-qR9Ssn50.js";import"./ActiveShapeUtils-_BzuEdws.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CxMr6rDg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C84cErrU.js";import"./symbol-haaQYdDX.js";import"./useElementOffset-CbVTphV2.js";import"./uniqBy-CCOUcI7g.js";import"./iteratee-CBPiPp_w.js";const ct={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(s,{data:n,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const lt=["UseOffset"];export{r as UseOffset,lt as __namedExportsOrder,ct as default};
