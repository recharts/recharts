import{R as t}from"./iframe-DehjRTS0.js";import{z as a}from"./RechartsWrapper-CRtSS_eM.js";import{R as p}from"./zIndexSlice-Or93N-XC.js";import{C as n}from"./ComposedChart-9t6iBSgP.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-5vGDPRrb.js";import{X as l}from"./XAxis-Cg2bfD3w.js";import{Y as h}from"./YAxis-BGtv0j9s.js";import{L as c}from"./Legend-BNPrBsNu.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CMD_wJjc.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DZdKwAWL.js";import"./throttle-DesffiZ0.js";import"./index-DETf35J4.js";import"./index-CwuhsW6L.js";import"./polarAxisSelectors-Ka3IcW3O.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C22MolAx.js";import"./index-CXT-2IyT.js";import"./index-KpNlVNDm.js";import"./renderedTicksSlice-Ct6BbSAX.js";import"./index-kCr6N--m.js";import"./fillDefinitions-DhW3x4ou.js";import"./CartesianChart-CgHz7Gaf.js";import"./chartDataContext-BjcKNpHZ.js";import"./CategoricalChart-DkUvkRm5.js";import"./Layer-DlT20hA_.js";import"./Curve-D6YGUkKE.js";import"./types-Be7PvpBk.js";import"./step-BGdpfV3H.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-DzT0ep5z.js";import"./Label-D6Z-0Dfn.js";import"./Text-CTuG3Uwk.js";import"./ZIndexLayer-DkIV4AJ1.js";import"./ActivePoints-CFvg43Jt.js";import"./Dot-DF2koN3g.js";import"./activeStyles-CTG2KgqA.js";import"./useAnimationId-DcJ3b19B.js";import"./Symbols-C5Duu2Up.js";import"./symbol-CWMlQuGp.js";import"./ErrorBarContext-CF1ouw75.js";import"./SetGraphicalItem-Doit17ow.js";import"./getRadiusAndStrokeWidthFromDot-B4Nwvyfh.js";import"./ActiveShapeUtils-D-equOl3.js";import"./useEffectiveDataKey-7YBRaAIn.js";import"./CartesianAxis-CwmDOfi4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DLrTCfvS.js";import"./uniqBy-B1en0uiU.js";import"./iteratee-BJM6y6Dd.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
