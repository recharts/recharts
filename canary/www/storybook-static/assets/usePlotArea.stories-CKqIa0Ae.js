import{R as t}from"./iframe-ZxQmCvwy.js";import{j as a}from"./RechartsWrapper-BdNFCoW6.js";import{R as p}from"./zIndexSlice-RPdwBP9f.js";import{C as n}from"./ComposedChart-BATf_pxJ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BzfmnxQQ.js";import{X as l}from"./XAxis-Bl2tbEmW.js";import{Y as h}from"./YAxis-B8sk4GXn.js";import{L as c}from"./Legend-CZaLFHxf.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DpipilcU.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BWbFpFtg.js";import"./throttle-DmwvZWHb.js";import"./index-BPMVDNb6.js";import"./index-BDLiH1an.js";import"./isWellBehavedNumber-sAavL0dG.js";import"./d3-scale-CzTTxW2Z.js";import"./index-BWm52sKa.js";import"./index-BS98XUV2.js";import"./renderedTicksSlice-BYZOrskl.js";import"./index-CABC13wD.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-SPk4tXhy.js";import"./chartDataContext-DINqA_zr.js";import"./CategoricalChart-CFCUhC_p.js";import"./Layer-B0D5UKjQ.js";import"./Curve-Bnqw1l-2.js";import"./types-CAEm0sG6.js";import"./step-BZUQ-l0Y.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DNQqwiG9.js";import"./Label-jkryqT5d.js";import"./Text-BO32xjCe.js";import"./DOMUtils-CnJnyfSI.js";import"./useId-CDbRoZtb.js";import"./useBackwardsCompatibleTheme-rwc4Ui1J.js";import"./ZIndexLayer-CHR5usSt.js";import"./useAnimationId-BzN7QWtj.js";import"./ActivePoints-CZGIVnLi.js";import"./Dot-D5ITAbBb.js";import"./RegisterGraphicalItemId-TiGOVH9L.js";import"./ErrorBarContext-DUW_9KGf.js";import"./GraphicalItemClipPath-BQlyOKfz.js";import"./SetGraphicalItem-BoNO2rRn.js";import"./getRadiusAndStrokeWidthFromDot-DYQBE5cH.js";import"./ActiveShapeUtils-C_YMBjW3.js";import"./useGraphicalItemIdentity-BCt8bdV6.js";import"./CartesianAxis-D6DZF6-J.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DyrvYund.js";import"./symbol-8zizbiR8.js";import"./useElementOffset-CWsrqzYy.js";import"./uniqBy-Blp6aEMv.js";import"./iteratee-C4SJTDea.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
