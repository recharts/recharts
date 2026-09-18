import{R as t}from"./iframe-lcK-LQ4H.js";import{j as a}from"./RechartsWrapper-D3b-43EA.js";import{R as p}from"./zIndexSlice-3xiznc3T.js";import{C as n}from"./ComposedChart-CqUZzBcz.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-D4XTruOS.js";import{X as l}from"./XAxis-U3uV11HY.js";import{Y as h}from"./YAxis-BD_opFpC.js";import{L as c}from"./Legend-CY1h17sR.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CrEw_DbM.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BQOoWmyr.js";import"./throttle-obGnf5ET.js";import"./index-BJrdch9J.js";import"./index-DR4LcHaa.js";import"./isWellBehavedNumber-BNK5esbm.js";import"./d3-scale-BGtfSAS2.js";import"./index-Bq7_2YG0.js";import"./index-CO-uW0YU.js";import"./renderedTicksSlice-OgdWdUmt.js";import"./index-PavZfgBD.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DDPqNkhD.js";import"./chartDataContext-JPZtnlxr.js";import"./CategoricalChart-P0fttYEL.js";import"./Layer-BrJH3_5y.js";import"./Curve-CH5D8euf.js";import"./types-iT_AM-R8.js";import"./step-865XHt_v.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BUrFNy4t.js";import"./Label-DdX71Pmy.js";import"./Text-B9QwYOBa.js";import"./DOMUtils-DOyQnx6z.js";import"./useId-BdIxfVgV.js";import"./useBackwardsCompatibleTheme-CRXuFPOK.js";import"./ZIndexLayer-peV_8dsk.js";import"./useAnimationId-CN4TcOgU.js";import"./ActivePoints-B9F3Cvj-.js";import"./Dot-JEYqyfVW.js";import"./RegisterGraphicalItemId-O_HgkeJ0.js";import"./ErrorBarContext-DAMWbZmD.js";import"./GraphicalItemClipPath-oVlg1Xnl.js";import"./SetGraphicalItem-DZtp094S.js";import"./getRadiusAndStrokeWidthFromDot-C4ZSDNB8.js";import"./ActiveShapeUtils-glOfs5rY.js";import"./useGraphicalItemIdentity-MQMbS4BR.js";import"./CartesianAxis-lKQduzRC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-COwk8-Ob.js";import"./symbol-omBsgaNs.js";import"./useElementOffset-XRlntQB2.js";import"./uniqBy-CR5sds_H.js";import"./iteratee-DQhw2g_P.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
