import{R as t}from"./iframe-DnRkZCcZ.js";import{y as p}from"./RechartsWrapper-B9w9bgII.js";import{R as a}from"./zIndexSlice-DwWcIzrA.js";import{C as n}from"./ComposedChart-DAKOEFgJ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-B-2uuZK0.js";import{X as d}from"./XAxis-DPYXDMnu.js";import{Y as h}from"./YAxis-CL5uWkoX.js";import{L as g}from"./Legend-CA1OSly7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CKyaaGET.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BG0FGZa0.js";import"./throttle-bNdHLYfF.js";import"./index-B8arTVtL.js";import"./index-D7PdTPCI.js";import"./polarAxisSelectors-WP4kwRUA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DjImCkyz.js";import"./index-Cppy_ggM.js";import"./index-BXa8wql-.js";import"./renderedTicksSlice-qkBzJXk3.js";import"./index-BKTGKznB.js";import"./fillDefinitions-B6SeDiRz.js";import"./CartesianChart-lnVa2-zz.js";import"./chartDataContext-C9AcD8jJ.js";import"./CategoricalChart-DJEPvlGT.js";import"./getRadiusAndStrokeWidthFromDot-CMeF7NbT.js";import"./Layer-ziHQUSdD.js";import"./Curve-QoxdgH9q.js";import"./types-DV0KiZQI.js";import"./step-CKBO-I2d.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BgjT13Al.js";import"./Label-DX2yrrpT.js";import"./Text-CdYpRkXo.js";import"./ZIndexLayer-Cfgieq6O.js";import"./ActivePoints-CRsFnWGy.js";import"./Dot-CK54vFWX.js";import"./activeStyles-DRi4KJX5.js";import"./useAnimationId-p0AfOAw0.js";import"./Symbols-DOGEiW8S.js";import"./symbol-BhVTcXut.js";import"./ErrorBarContext-DvYBBAjF.js";import"./SetGraphicalItem-Cr3rFtC8.js";import"./ActiveShapeUtils-sdvrDPyr.js";import"./useEffectiveDataKey-BIuaq2EX.js";import"./CartesianAxis-CI0fZc9H.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DMMTuYam.js";import"./uniqBy-DI2IzLG0.js";import"./iteratee-guzWnx9p.js";import"./isArguments-yB-y1yaH.js";const ct={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(n,{data:s,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}},lt=["UseOffset"];var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
