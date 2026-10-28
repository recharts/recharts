import{R as t}from"./iframe-PkW0ejx3.js";import{z as a}from"./RechartsWrapper-DJcwwy7_.js";import{R as p}from"./zIndexSlice-CtEWDdkW.js";import{C as n}from"./ComposedChart-coptphr3.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DzHsVnQW.js";import{X as l}from"./XAxis-CyABI53G.js";import{Y as h}from"./YAxis-B7QgfXKC.js";import{L as c}from"./Legend-DsY3co_s.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CnX9VcG6.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CBaUhvBl.js";import"./throttle-DhIpRp7y.js";import"./index-2kQDiEg9.js";import"./index-CthbcSOz.js";import"./polarAxisSelectors-DErot-vK.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C_GfRdoG.js";import"./index-bhfK5Tel.js";import"./index-DCKddudy.js";import"./renderedTicksSlice-BiYv8y7m.js";import"./index-DIk-TLTX.js";import"./CartesianChart-CtUUiyil.js";import"./ZIndexPortal-DB_x6J9o.js";import"./CategoricalChart-CFsdFZkP.js";import"./Layer-D2wEMTDW.js";import"./Curve-DU0fyPxy.js";import"./types-iBZQammS.js";import"./step-Ckyxmzdw.js";import"./path-DyVhHtw_.js";import"./LabelList-BcjFKpxG.js";import"./Label-V19_IbKL.js";import"./Text-DQ7hgPmk.js";import"./pageBackground-BxU5BZDR.js";import"./ZIndexLayer-wqGg5hkh.js";import"./ActivePoints-DYuBZm8s.js";import"./Dot-ByWXk2hq.js";import"./activeStyles-RIXOH0Ky.js";import"./useAnimationId-JttpOibe.js";import"./dataEntryStyles-BkC7RZGO.js";import"./Symbols-BgSbEpWI.js";import"./symbol-BJli0oSq.js";import"./ErrorBarContext-RvIB7RYt.js";import"./SetGraphicalItem-rvzc4GbA.js";import"./getRadiusAndStrokeWidthFromDot-DFz9CZPw.js";import"./ActiveShapeUtils-hU5Uvesj.js";import"./useEffectiveDataKey-UMh99VlP.js";import"./CartesianAxis-BJQP999U.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset--mFjDBED.js";import"./uniqBy-Bm4ZTWFv.js";import"./iteratee-C7s5c1SC.js";import"./isArguments-yB-y1yaH.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},At=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
