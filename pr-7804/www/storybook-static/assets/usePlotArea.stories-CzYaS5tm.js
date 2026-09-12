import{R as t}from"./iframe-CKftEeOR.js";import{j as a}from"./RechartsWrapper-CBr2vBLf.js";import{R as p}from"./zIndexSlice-Rd7CQgQI.js";import{C as n}from"./ComposedChart-D4xLMnX4.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CtyxKqH8.js";import{X as l}from"./XAxis-IahfvaCM.js";import{Y as h}from"./YAxis-DtHNKlU_.js";import{L as c}from"./Legend-ERMTR0gC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CUD-thP6.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DhTPihhT.js";import"./throttle-BNKYmND6.js";import"./index-B3U1nEt0.js";import"./index-CMyqNfgS.js";import"./isWellBehavedNumber-B15AKauy.js";import"./d3-scale-DUU3auep.js";import"./index-CfJyz4zD.js";import"./index-CaONc0yZ.js";import"./renderedTicksSlice-4VCM87iZ.js";import"./index-D3UZJ1g6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-yCMxlTpO.js";import"./chartDataContext-4zvmbyyj.js";import"./CategoricalChart-DGT3qw3A.js";import"./Layer-t7Sk-OLm.js";import"./Curve-DKcxqEob.js";import"./types-CQiiKif5.js";import"./step-Bq5ebvyI.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ePjd4Kgp.js";import"./Label-BtMZmHcU.js";import"./Text-BY0JJbaS.js";import"./DOMUtils-B_LhErBS.js";import"./useId-j7axFfWl.js";import"./useBackwardsCompatibleTheme-BFpC_R2y.js";import"./ZIndexLayer-CfiakTBb.js";import"./useAnimationId-cpDkl9it.js";import"./ActivePoints-D9o__0t3.js";import"./Dot-C7TV-TKY.js";import"./RegisterGraphicalItemId-rDiVUOUt.js";import"./ErrorBarContext-DliiI0LB.js";import"./GraphicalItemClipPath-C7Us-zic.js";import"./SetGraphicalItem-DS6Pgf_p.js";import"./getRadiusAndStrokeWidthFromDot-CeZqJgOi.js";import"./ActiveShapeUtils-B9DHSeBV.js";import"./useGraphicalItemIdentity-C7mRPXGd.js";import"./CartesianAxis-klHqdii2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BqO3Xqua.js";import"./symbol-Dma1RmVC.js";import"./useElementOffset-DJqx9A--.js";import"./uniqBy-CLIdSOOo.js";import"./iteratee-Dl0nvfyM.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
