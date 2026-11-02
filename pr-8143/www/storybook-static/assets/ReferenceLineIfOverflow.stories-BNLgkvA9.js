import{R as e}from"./iframe-DSNXEUn4.js";import{R as a}from"./zIndexSlice-Dz2masNo.js";import{C as p}from"./ComposedChart-CzQ5p_-Z.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CxHGX94q.js";import{X as f}from"./XAxis-BIkQK5N1.js";import{Y as l}from"./YAxis--soXrgEQ.js";import{L as d}from"./Line-5dkC5hpH.js";import{R as h}from"./ReferenceLine-Dz9ajYVE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BJdscjTc.js";import"./throttle-Cql2XGyq.js";import"./index-Cw6XMlov.js";import"./index-CTOcRvfR.js";import"./RechartsWrapper-tZbMCMkz.js";import"./axisSelectors-BVWqqaIl.js";import"./polarAxisSelectors-DNTU8wxf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CACIKaWJ.js";import"./index-DdyQ4Lu6.js";import"./index-C8EE5WMp.js";import"./renderedTicksSlice-cMVgg74g.js";import"./index-OleNvKsM.js";import"./fillDefinitions-C4gnViBV.js";import"./CartesianChart-BNpv4aK0.js";import"./ZIndexPortal-Gym7d-4C.js";import"./CategoricalChart-D3zd10d6.js";import"./CartesianAxis-2YdOU3ps.js";import"./Layer-0vZKA5Ep.js";import"./Text-Dh3TMTW4.js";import"./DOMUtils-DYnHuNon.js";import"./ZIndexLayer-C5-QklmA.js";import"./Label-CjMpSSpc.js";import"./types-CuvQqVdH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DnME_alY.js";import"./step-DRkdD1F5.js";import"./path-DyVhHtw_.js";import"./LabelList-CdZv6dYa.js";import"./ActivePoints-MPkH3V4_.js";import"./Dot-BLQG3Xnr.js";import"./activeStyles-BwY0V3hq.js";import"./useAnimationId-De32QbAN.js";import"./dataEntryStyles-CrqYJwRR.js";import"./Symbols-B3a4QAq0.js";import"./symbol-DEPa4V4_.js";import"./ErrorBarContext-BvGzHJmi.js";import"./SetGraphicalItem-DTg-QJxg.js";import"./getRadiusAndStrokeWidthFromDot-Bio62kDH.js";import"./ActiveShapeUtils-CnL30Scg.js";import"./useEffectiveDataKey-Bw1Ayo3J.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
