import{R as t}from"./iframe-BMarL12M.js";import{u as a}from"./CategoricalChart-D3itWTr1.js";import{R as p}from"./zIndexSlice-C3zFoeWv.js";import{C as s}from"./ComposedChart-DmXgJ0VK.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BwUTPDsI.js";import{X as l}from"./XAxis-HDWpUUwS.js";import{Y as h}from"./YAxis-hUo2hZ05.js";import{L as c}from"./Legend-CLxa5TeL.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C2ncjDjR.js";import"./index-rELjxh9R.js";import"./index-vTpJvilY.js";import"./index-Dlh6vJO1.js";import"./index-D9BBRgqz.js";import"./throttle-szqIxzqv.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DONKf7kg.js";import"./resolveDefaultProps-C6wBzGKi.js";import"./isWellBehavedNumber-DBs0imhW.js";import"./d3-scale-C4M2cZc9.js";import"./renderedTicksSlice-BGVDzAbm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bsi6NNhA.js";import"./chartDataContext-BcZuDILO.js";import"./Layer-DPtUoMDp.js";import"./Curve-CqaRxmR5.js";import"./types-B-ESMolm.js";import"./step-B2Vat6Ch.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BsByAcaR.js";import"./Label-wMX0Bukp.js";import"./Text-CGkcqRdd.js";import"./DOMUtils-DSG72bMg.js";import"./useBackwardsCompatibleTheme-DDTyJRfe.js";import"./ZIndexLayer-4Y9-7gYz.js";import"./useAnimationId-W_lOfRkr.js";import"./ActivePoints-CaZ5IFfg.js";import"./Dot-BRm5AFxN.js";import"./RegisterGraphicalItemId-CxNs_80A.js";import"./ErrorBarContext-GzARO3dP.js";import"./GraphicalItemClipPath-CUFqqD93.js";import"./SetGraphicalItem-B6tJU4_Z.js";import"./getRadiusAndStrokeWidthFromDot-qR9Ssn50.js";import"./ActiveShapeUtils-_BzuEdws.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CxMr6rDg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C84cErrU.js";import"./symbol-haaQYdDX.js";import"./useElementOffset-CbVTphV2.js";import"./uniqBy-CCOUcI7g.js";import"./iteratee-CBPiPp_w.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
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
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ut=["UsePlotArea"];export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
