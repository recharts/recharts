import{R as t}from"./iframe-B8WiTaBv.js";import{j as a}from"./RechartsWrapper-D4X8qM3L.js";import{R as p}from"./zIndexSlice-D5_q7rMj.js";import{C as n}from"./ComposedChart-CgOoahPV.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Dg3Mfg7R.js";import{X as l}from"./XAxis-CJ0oEHon.js";import{Y as h}from"./YAxis-BeTfGw8Q.js";import{L as c}from"./Legend-BQvP-u9A.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DE7ai4U1.js";import"./get-C2VjdU0L.js";import"./axisSelectors-fwkbTSQU.js";import"./throttle-Bf7HFTSb.js";import"./index-CkpdDqnf.js";import"./index-CK2GwVFT.js";import"./isWellBehavedNumber-BNs6A6nd.js";import"./d3-scale-DPpdjCkc.js";import"./index-BEIQXCWA.js";import"./index-C4vHDdGM.js";import"./renderedTicksSlice-XS0yYXwf.js";import"./index-DFXXQ9h7.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Ct7y2r_J.js";import"./chartDataContext-BzLrqzRe.js";import"./CategoricalChart-DNXrcn0T.js";import"./Layer-DykiohLY.js";import"./Curve-CzATnpcO.js";import"./types-CBGkJi7-.js";import"./step-pDrJKgS7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DoJommjq.js";import"./Label-BgOirL-a.js";import"./Text-DTdnI9Wt.js";import"./DOMUtils-CVPbEKMw.js";import"./useId-BQjGOdOZ.js";import"./useBackwardsCompatibleTheme--hv8ghFv.js";import"./ZIndexLayer-Dp2lwUDn.js";import"./useAnimationId-BEfI3V-Q.js";import"./ActivePoints-wJ9lpzyc.js";import"./Dot-YjfpD-D0.js";import"./RegisterGraphicalItemId-D1erTERG.js";import"./ErrorBarContext-Bffy1Kmi.js";import"./GraphicalItemClipPath-C1v82me1.js";import"./SetGraphicalItem-CT3FOcLU.js";import"./getRadiusAndStrokeWidthFromDot-CRnyj104.js";import"./ActiveShapeUtils-ccGnTT5q.js";import"./useGraphicalItemIdentity-CGETAvly.js";import"./CartesianAxis-B062qB3S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Dw-ATZdW.js";import"./symbol-Cfz1UmnV.js";import"./useElementOffset-JTP_ODLW.js";import"./uniqBy-CnCANcHU.js";import"./iteratee-CdLDDlyj.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
