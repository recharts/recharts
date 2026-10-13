import{R as t}from"./iframe-HQzZVjBz.js";import{e as a}from"./RechartsWrapper-CHbQgt_R.js";import{R as p}from"./zIndexSlice-CGQ7Au-h.js";import{C as n}from"./ComposedChart-CL_dGEsU.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CkvZUxt9.js";import{X as l}from"./XAxis-DRgGc3zf.js";import{Y as h}from"./YAxis-B3rEjge7.js";import{L as c}from"./Legend-BkWpFG1S.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-FnTseFp7.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Pv4KR-zj.js";import"./throttle-CBKyBD78.js";import"./index-B-hjV7sb.js";import"./index-CoahYeeF.js";import"./isWellBehavedNumber-CcswNJGt.js";import"./d3-scale-Bm5seH5s.js";import"./index-Du00f8Ig.js";import"./index-Cd4WuegV.js";import"./renderedTicksSlice-CBd_vSTQ.js";import"./index-DBkbRNLm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CBFKxon3.js";import"./chartDataContext-B1WnW-uC.js";import"./CategoricalChart-CFFTEefl.js";import"./Layer-CZF3Yvdy.js";import"./Curve-CCST94p6.js";import"./types-Bq-isVxM.js";import"./step-mtRqlT_G.js";import"./path-DyVhHtw_.js";import"./activeStyles-Ctuz9FGV.js";import"./Label-CkcS20G_.js";import"./Text-BOeOqlf9.js";import"./pageBackground-BMzh5QHA.js";import"./useId-CLiKfQI1.js";import"./useBackwardsCompatibleTheme-BydTEdxL.js";import"./ZIndexLayer-B9EFhzLD.js";import"./useAnimationId-D_-yy58E.js";import"./dataEntryStyles-CrN8We-Y.js";import"./ActivePoints-B2Wdpvql.js";import"./Dot-CrUvj508.js";import"./ErrorBarContext-D0G_BuSS.js";import"./GraphicalItemClipPath-CmI_2v97.js";import"./SetGraphicalItem-CCrIsVeT.js";import"./getRadiusAndStrokeWidthFromDot-DJSL-cTD.js";import"./ActiveShapeUtils-BYEpmP72.js";import"./useEffectiveDataKey-DU6QRSRw.js";import"./CartesianAxis-DqRUh5Lc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-_dnyJZ42.js";import"./symbol-BbltfI5F.js";import"./useElementOffset-BHmZojEb.js";import"./uniqBy-Cq2YPL4f.js";import"./iteratee-CWwfWNkd.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
