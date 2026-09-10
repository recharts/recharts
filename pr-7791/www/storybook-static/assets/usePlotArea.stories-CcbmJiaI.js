import{R as t}from"./iframe-BB7QZXLs.js";import{j as a}from"./RechartsWrapper-e66Xzxgl.js";import{R as p}from"./zIndexSlice-tJAM9iWj.js";import{C as n}from"./ComposedChart-D3UkYazW.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DKYrypTN.js";import{X as l}from"./XAxis-XcDOkDmd.js";import{Y as h}from"./YAxis-DSzkAjgg.js";import{L as c}from"./Legend-Dm2xgOuL.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CpmXZA4k.js";import"./get-C2VjdU0L.js";import"./axisSelectors-C9Ww97e2.js";import"./throttle-BIPObZtO.js";import"./index-dVHp78rg.js";import"./index-_M8YNH98.js";import"./isWellBehavedNumber-BJy-JztG.js";import"./d3-scale-iQiKVngo.js";import"./index-VwBP7ySp.js";import"./index-DhA5-aT4.js";import"./renderedTicksSlice-qkMRB7Jj.js";import"./index-qzDpnTu9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D1IApd6R.js";import"./chartDataContext-CBZ7yVc5.js";import"./CategoricalChart-DG2kQqAq.js";import"./Layer-07NELy8e.js";import"./Curve-D5V2G3nc.js";import"./types-D6b6NoLW.js";import"./step-CzTEwmSX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BHb_g3It.js";import"./Label-ssYRudSZ.js";import"./Text-CEEsNHtu.js";import"./DOMUtils-C2ZnKXb0.js";import"./useId-BVIeIeeB.js";import"./useBackwardsCompatibleTheme-BKLDWadY.js";import"./ZIndexLayer-BnNru_wJ.js";import"./useAnimationId-C1x4gWZO.js";import"./ActivePoints-DEZf8Tp_.js";import"./Dot-DKFbKC0m.js";import"./RegisterGraphicalItemId-BrQFxchm.js";import"./ErrorBarContext-Cj0JdL2W.js";import"./GraphicalItemClipPath-DgpfNhEU.js";import"./SetGraphicalItem-BRob5fGw.js";import"./getRadiusAndStrokeWidthFromDot-k1yLnap7.js";import"./ActiveShapeUtils-CHeKF_6U.js";import"./useGraphicalItemIdentity-DsYSBEP4.js";import"./CartesianAxis-ByfKlAGp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-ELAv9C1d.js";import"./symbol-Dtrcmoux.js";import"./useElementOffset-DY1y9jVd.js";import"./uniqBy-D1Ian6I1.js";import"./iteratee-Ch-bm_Fu.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
