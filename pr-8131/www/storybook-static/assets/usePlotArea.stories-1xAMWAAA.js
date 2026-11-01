import{R as t}from"./iframe-OYo09Kjn.js";import{z as a}from"./RechartsWrapper-DDeqrE6g.js";import{R as p}from"./zIndexSlice-C0otV0Tq.js";import{C as n}from"./ComposedChart-O8l7FYsv.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-OzMS9cmg.js";import{X as l}from"./XAxis-C4iNCAUT.js";import{Y as h}from"./YAxis-B9J5xeR5.js";import{L as c}from"./Legend-BAHT8kds.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BV2Pd4xr.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DwbFlqn_.js";import"./throttle-2ukkMEiH.js";import"./index-B1YAqRON.js";import"./index-jR8-nOeq.js";import"./polarAxisSelectors-h48S2J0z.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CkZT7Yna.js";import"./index-D6UCrPx5.js";import"./index-OFmsSHfS.js";import"./renderedTicksSlice-Dj299CQx.js";import"./index-C9mjTPMA.js";import"./fillDefinitions-DyAhyaHy.js";import"./CartesianChart-CU1owHvq.js";import"./ZIndexPortal-THJMy4l1.js";import"./CategoricalChart-reFCYYlz.js";import"./Layer-BKQ7Cq1e.js";import"./Curve-DVj7Kjw7.js";import"./types-CzskQIcv.js";import"./step-DXZ6DTgl.js";import"./path-DyVhHtw_.js";import"./LabelList-D8hIzv9X.js";import"./Label-BLd_HfLL.js";import"./Text-Dl7WOzrI.js";import"./DOMUtils-VDBzCn3R.js";import"./ZIndexLayer-fjsdvpte.js";import"./ActivePoints-YU9mNETr.js";import"./Dot-BVDEoTVF.js";import"./activeStyles-By7c-_I7.js";import"./useAnimationId-Bfw_1I20.js";import"./dataEntryStyles-CwKCb_eK.js";import"./Symbols-DShbzJAN.js";import"./symbol-CmMsv7zq.js";import"./ErrorBarContext-Dht0z-3r.js";import"./SetGraphicalItem-C2cjU4L3.js";import"./getRadiusAndStrokeWidthFromDot-BexLXBfB.js";import"./ActiveShapeUtils-DsFWfn7B.js";import"./useEffectiveDataKey-BkqAzi9W.js";import"./CartesianAxis-Ce7EujIW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DmtR-dee.js";import"./uniqBy-CaC20Hzh.js";import"./iteratee-B2qJ-Z7i.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
