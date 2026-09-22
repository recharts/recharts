import{R as e}from"./iframe-DaQbgwSM.js";import{R as a}from"./zIndexSlice-GtlpPVbP.js";import{C as p}from"./ComposedChart-Bbu2Bio2.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BaDvzjUn.js";import{X as f}from"./XAxis-Dwi6B5gb.js";import{Y as l}from"./YAxis-DJNfgCPe.js";import{L as d}from"./Line-BQic4Z5R.js";import{R as h}from"./ReferenceLine-BK3_xBif.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D86JN7dt.js";import"./index-fR-dYqAy.js";import"./index-pcae8h2v.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C03kBNGe.js";import"./isWellBehavedNumber-CF6bOuRt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BMsAihAT.js";import"./axisSelectors-DiPrK3uM.js";import"./d3-scale-C28Mr6C_.js";import"./index-B9PrDzsD.js";import"./index-C_QxJfjv.js";import"./renderedTicksSlice-BBiwG0aF.js";import"./index-DVT6pdU4.js";import"./CartesianChart-DWDjryZ8.js";import"./chartDataContext-C5kvJ464.js";import"./CategoricalChart-D9AKOXtI.js";import"./CartesianAxis-Dd7LPnIK.js";import"./Layer-Dy562RhS.js";import"./Text-6pf8QaaJ.js";import"./DOMUtils-B-aaPPhR.js";import"./useId-C9TE6S2g.js";import"./useBackwardsCompatibleTheme-jIXNHWAs.js";import"./Label-BMF2NwhK.js";import"./ZIndexLayer-e1DF3LHV.js";import"./types-BrU75Oof.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-_5Fn1COl.js";import"./step-C8sn29Vk.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BlzsOhEO.js";import"./useAnimationId-BjF9VJ68.js";import"./ActivePoints-oBCdZOS2.js";import"./Dot-C7TPiZG8.js";import"./RegisterGraphicalItemId-Clsr70g_.js";import"./ErrorBarContext-B2kb74U-.js";import"./GraphicalItemClipPath-D0ATNOOi.js";import"./SetGraphicalItem-HJSDm9m5.js";import"./getRadiusAndStrokeWidthFromDot-3aetdsat.js";import"./ActiveShapeUtils-CrKaudC-.js";import"./useGraphicalItemIdentity-CLitx1ml.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
