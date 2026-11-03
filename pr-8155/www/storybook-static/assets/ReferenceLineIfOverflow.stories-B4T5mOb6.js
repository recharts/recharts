import{R as e}from"./iframe-BL3cqs0v.js";import{R as a}from"./zIndexSlice-Bp5UfHlJ.js";import{C as p}from"./ComposedChart-CuwCdTLA.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CmYlMMvz.js";import{X as f}from"./XAxis-B7WybKMv.js";import{Y as l}from"./YAxis-SEmBBB09.js";import{L as d}from"./Line-DBcBAmaO.js";import{R as h}from"./ReferenceLine-BzF_nDkS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BsbZKCB4.js";import"./throttle-CFuBzL7d.js";import"./index-Xo9PhSCx.js";import"./index-M6yM2tbI.js";import"./RechartsWrapper-rjJlKnXT.js";import"./axisSelectors-Df4vXTv0.js";import"./polarAxisSelectors-BgHDg8wg.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DqPJ3v9v.js";import"./index-f4nmOf8P.js";import"./index-BMIlL233.js";import"./renderedTicksSlice-B58pSaah.js";import"./index-DXhLf1tc.js";import"./fillDefinitions-qZuxFB6J.js";import"./CartesianChart-CNDb6X0a.js";import"./ZIndexPortal-Bl3Dp53e.js";import"./CategoricalChart-BgL_VXFO.js";import"./CartesianAxis-Pi3KV9RP.js";import"./Layer-ClHABKOt.js";import"./Text-BwMtBvSi.js";import"./DOMUtils-BPtMjC5_.js";import"./ZIndexLayer-DgWY8WnK.js";import"./Label-DWi9EbQl.js";import"./types-CCfYuf_x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DMXMUvkb.js";import"./step-CWn_2b8s.js";import"./path-DyVhHtw_.js";import"./LabelList-BS_WlUTo.js";import"./ActivePoints-BtVWL3FZ.js";import"./Dot-BjMYYrUI.js";import"./activeStyles-Dkfygl3t.js";import"./useAnimationId-BsAm0EGv.js";import"./dataEntryStyles-Bb2gxxNt.js";import"./Symbols-0PXADWR-.js";import"./symbol-gdXBWq8v.js";import"./ErrorBarContext-D_171Q9R.js";import"./SetGraphicalItem-D9rioP3I.js";import"./getRadiusAndStrokeWidthFromDot-BV_EEgVN.js";import"./ActiveShapeUtils-LmfHqNO3.js";import"./useEffectiveDataKey-BKKoQF-4.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{t as IfOverflow,xe as __namedExportsOrder,ye as default};
