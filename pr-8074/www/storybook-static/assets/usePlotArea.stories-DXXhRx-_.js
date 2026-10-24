import{R as t}from"./iframe-B4_QwD1D.js";import{z as p}from"./RechartsWrapper-D2uM5dQm.js";import{R as a}from"./zIndexSlice-CBhoAbgS.js";import{C as n}from"./ComposedChart-BYrbpJyI.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B7tq3Xvl.js";import{X as l}from"./XAxis-ClMwOqtx.js";import{Y as h}from"./YAxis-BXoC-zzw.js";import{L as c}from"./Legend-DI9r16Hx.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DIsbUszc.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BPJ5zN30.js";import"./throttle-CoBiCp2n.js";import"./index-D1txtwQs.js";import"./index-BIeiuwDH.js";import"./isWellBehavedNumber-D8aaIUAh.js";import"./d3-scale-DbsLf6d-.js";import"./index-DyH5gF1W.js";import"./index-BNmMl_IP.js";import"./renderedTicksSlice-Wvzb8C7M.js";import"./index-D5vd9j9o.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CP9pEwgo.js";import"./chartDataContext-CzT92l_t.js";import"./CategoricalChart-B_jNXI9Q.js";import"./Layer-Bwh0wvH7.js";import"./Curve-BO_4liKv.js";import"./types-OK8mrrgc.js";import"./step-ChTc0MMg.js";import"./path-DyVhHtw_.js";import"./activeStyles-B6_AFvwr.js";import"./Label-bs3lrZa-.js";import"./Text-D60EpHHD.js";import"./pageBackground-BarjFxCc.js";import"./useId-BGuiMtTj.js";import"./useBackwardsCompatibleTheme-Dg3tMWv0.js";import"./ZIndexLayer-DLJnSwwV.js";import"./dataEntryStyles-C6hQpsCt.js";import"./useAnimationId-Dxw2C04Y.js";import"./ActivePoints-BjOHnkRU.js";import"./Dot-5O5duGce.js";import"./RegisterGraphicalItemId-bXaHC85L.js";import"./ErrorBarContext-pg2dj6kz.js";import"./SetGraphicalItem-rmoRgud5.js";import"./getRadiusAndStrokeWidthFromDot-CaBRrUqE.js";import"./ActiveShapeUtils-Db0-CW4c.js";import"./useEffectiveDataKey-CJ0a7aYn.js";import"./CartesianAxis-Bl0Fh-eW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Ci7sUahQ.js";import"./symbol-45SraHnz.js";import"./useElementOffset-BsVVqcI3.js";import"./uniqBy-Cr-9UYKs.js";import"./iteratee-HAqVuPyF.js";import"./isArguments-yB-y1yaH.js";const ft={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},o={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},yt=["UsePlotArea"];var e,i,m;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{o as UsePlotArea,yt as __namedExportsOrder,ft as default};
