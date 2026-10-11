import{R as t}from"./iframe-B5nqGCFx.js";import{j as a}from"./RechartsWrapper-Ba7GDCRC.js";import{R as p}from"./zIndexSlice-fA6rJzVB.js";import{C as n}from"./ComposedChart-DwtG5NiV.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-rcGSoU24.js";import{X as l}from"./XAxis-BbfaJWKY.js";import{Y as h}from"./YAxis-BgoYMJlL.js";import{L as c}from"./Legend-DbTPlpw_.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DTwkyIYB.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DRuLrEYP.js";import"./throttle-8usPf-nG.js";import"./index-COQrJFEi.js";import"./index-BRJwV6Tu.js";import"./isWellBehavedNumber-CTlIu6VQ.js";import"./d3-scale-Cvdyq6r4.js";import"./index-D7H2LPLl.js";import"./index-C0uKubiT.js";import"./renderedTicksSlice-D3liRtIY.js";import"./index-DNc7GpB0.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bo-Bdmuv.js";import"./chartDataContext-BLw5SzU5.js";import"./CategoricalChart-BPnw4lhz.js";import"./Layer-SWDQGPXc.js";import"./Curve-CUMSQUCB.js";import"./types-CilMbPhc.js";import"./step-Bc1udJt4.js";import"./path-DyVhHtw_.js";import"./activeStyles-LGVgbHeS.js";import"./Label-Dboddtc6.js";import"./Text-D2l9VyZ3.js";import"./pageBackground-Do8lEaLA.js";import"./useId-D5UXkky-.js";import"./useBackwardsCompatibleTheme-DdYC-jFL.js";import"./ZIndexLayer-udH7BH-f.js";import"./useAnimationId-DegqvOnN.js";import"./dataEntryStyles-CA9fGSl9.js";import"./ActivePoints-BouQ6dSD.js";import"./Dot-CdI0Le8G.js";import"./ErrorBarContext-BKhVL6zW.js";import"./GraphicalItemClipPath-RjRlios3.js";import"./SetGraphicalItem-B1zewZJg.js";import"./getRadiusAndStrokeWidthFromDot-CpJam9J5.js";import"./ActiveShapeUtils-BaXicK3x.js";import"./useGraphicalItemIdentity-C3gqRS6g.js";import"./CartesianAxis-nGdi1wTE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DHtTH7TJ.js";import"./symbol-daI3B66U.js";import"./useElementOffset-C7bOm6Io.js";import"./uniqBy-BrQ249xF.js";import"./iteratee-D4GTaDc4.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
