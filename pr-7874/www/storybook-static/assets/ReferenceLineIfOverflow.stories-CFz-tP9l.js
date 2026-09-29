import{R as e}from"./iframe-B8WiTaBv.js";import{R as a}from"./zIndexSlice-D5_q7rMj.js";import{C as p}from"./ComposedChart-CgOoahPV.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BaJfNTjD.js";import{X as f}from"./XAxis-CJ0oEHon.js";import{Y as l}from"./YAxis-BeTfGw8Q.js";import{L as d}from"./Line-Dg3Mfg7R.js";import{R as h}from"./ReferenceLine-LVuVTMue.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bf7HFTSb.js";import"./index-CkpdDqnf.js";import"./index-CK2GwVFT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DE7ai4U1.js";import"./isWellBehavedNumber-BNs6A6nd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D4X8qM3L.js";import"./axisSelectors-fwkbTSQU.js";import"./d3-scale-DPpdjCkc.js";import"./index-BEIQXCWA.js";import"./index-C4vHDdGM.js";import"./renderedTicksSlice-XS0yYXwf.js";import"./index-DFXXQ9h7.js";import"./CartesianChart-Ct7y2r_J.js";import"./chartDataContext-BzLrqzRe.js";import"./CategoricalChart-DNXrcn0T.js";import"./CartesianAxis-B062qB3S.js";import"./Layer-DykiohLY.js";import"./Text-DTdnI9Wt.js";import"./DOMUtils-CVPbEKMw.js";import"./useId-BQjGOdOZ.js";import"./useBackwardsCompatibleTheme--hv8ghFv.js";import"./Label-BgOirL-a.js";import"./ZIndexLayer-Dp2lwUDn.js";import"./types-CBGkJi7-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CzATnpcO.js";import"./step-pDrJKgS7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DoJommjq.js";import"./useAnimationId-BEfI3V-Q.js";import"./ActivePoints-wJ9lpzyc.js";import"./Dot-YjfpD-D0.js";import"./RegisterGraphicalItemId-D1erTERG.js";import"./ErrorBarContext-Bffy1Kmi.js";import"./GraphicalItemClipPath-C1v82me1.js";import"./SetGraphicalItem-CT3FOcLU.js";import"./getRadiusAndStrokeWidthFromDot-CRnyj104.js";import"./ActiveShapeUtils-ccGnTT5q.js";import"./useGraphicalItemIdentity-CGETAvly.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const {
      findByText
    } = within(canvasElement);
    /**
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
