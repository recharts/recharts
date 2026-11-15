import{R as t}from"./iframe-c26JqrsL.js";import{y as p}from"./RechartsWrapper-C0_ZnG3M.js";import{R as a}from"./zIndexSlice-BkUYlJsZ.js";import{C as n}from"./ComposedChart-CWYwg474.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-CCpKAg6f.js";import{X as d}from"./XAxis-DutmNx-o.js";import{Y as h}from"./YAxis-BMAl-ilQ.js";import{L as g}from"./Legend-B8n_PKuf.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-YkjEKeW8.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Dy58hWsd.js";import"./throttle-B2IvKwW-.js";import"./index-CUwFsdn8.js";import"./index-mm1LjFas.js";import"./polarAxisSelectors-NvwmetH_.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DWhFNlvg.js";import"./index-vwxbY9MG.js";import"./index-DaW3zNl9.js";import"./renderedTicksSlice-DchxVsWm.js";import"./index-CUrdsACp.js";import"./fillDefinitions-OkciRhhD.js";import"./CartesianChart-CNu4n4dr.js";import"./chartDataContext-KJrM16zP.js";import"./CategoricalChart-DQ-Epfo-.js";import"./Layer-vJvTy9Ku.js";import"./Curve-XxFxrIWP.js";import"./types-BkHyLjnw.js";import"./step-CELEtsjP.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-NUuyBQzn.js";import"./Label-U_zx5ZhA.js";import"./Text-DrKUoP8L.js";import"./ZIndexLayer-B-r7bl4K.js";import"./ActivePoints-CT1fm5gU.js";import"./Dot-BhI3xlfW.js";import"./activeStyles-CxWIOF49.js";import"./useAnimationId-s58nu9Pz.js";import"./Symbols-BvzuXAby.js";import"./symbol-DAgH9-Fu.js";import"./ErrorBarContext-Cck_FQwt.js";import"./SetGraphicalItem-Bf7rIr_j.js";import"./getRadiusAndStrokeWidthFromDot-DaLi06Yy.js";import"./ActiveShapeUtils-DUAkL6fN.js";import"./useEffectiveDataKey-BT6_jhIX.js";import"./CartesianAxis-CwL4X3Li.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BmKkIlsV.js";import"./uniqBy-CpoKnfjS.js";import"./iteratee-DEQ9rNns.js";import"./isArguments-yB-y1yaH.js";const ct={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(n,{data:s,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}},lt=["UseOffset"];var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
