import{R as t}from"./iframe-D3EjTtxy.js";import{e as a}from"./RechartsWrapper-BKqCmNei.js";import{R as p}from"./zIndexSlice-CR47Grm-.js";import{C as n}from"./ComposedChart-DuMK799R.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BwJdDGaV.js";import{X as l}from"./XAxis-CBAr_26y.js";import{Y as h}from"./YAxis-ChbhO02F.js";import{L as c}from"./Legend-xKqboeAU.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CypR0Li3.js";import"./get-C2VjdU0L.js";import"./axisSelectors-2jJKhRaD.js";import"./throttle-EojsqAtG.js";import"./index-BrBaOJJz.js";import"./index-ClKWjY2h.js";import"./isWellBehavedNumber-D6-F1Zhx.js";import"./d3-scale-Bcyj84u8.js";import"./index-CW2m-a8N.js";import"./index-D-PCy9lp.js";import"./renderedTicksSlice-DWYht6zE.js";import"./index-C-LGK5kE.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ClyYLTkq.js";import"./chartDataContext-tvTSeXcP.js";import"./CategoricalChart-D-xvlCPh.js";import"./Layer-CAR2aUbH.js";import"./Curve-DGfDXyXs.js";import"./types-OWn5Mrao.js";import"./step-BpQzdfyO.js";import"./path-DyVhHtw_.js";import"./activeStyles-Celt-13r.js";import"./Label-Cwzl5MfK.js";import"./Text-D8BNDsFW.js";import"./pageBackground-Bgbh54PU.js";import"./useId-CXtTlWvS.js";import"./useBackwardsCompatibleTheme-DShn4Fj5.js";import"./ZIndexLayer-DYrhxp9-.js";import"./useAnimationId-C3lA_xne.js";import"./dataEntryStyles-BOeZ2OB5.js";import"./ActivePoints-BFJ9lPgu.js";import"./Dot-B5LpJNu8.js";import"./ErrorBarContext-D2RzPC2k.js";import"./GraphicalItemClipPath-qNx1D-3O.js";import"./SetGraphicalItem-2Yc4bdBx.js";import"./getRadiusAndStrokeWidthFromDot-O_fwqGez.js";import"./ActiveShapeUtils-DJnsuYPC.js";import"./useEffectiveDataKey-CruL2487.js";import"./CartesianAxis-Mzi-Pwf8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C_eJ930f.js";import"./symbol-Cwu5ve2k.js";import"./useElementOffset-CcOLWzLv.js";import"./uniqBy-BMWd6n_M.js";import"./iteratee-CFhE0l7L.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
