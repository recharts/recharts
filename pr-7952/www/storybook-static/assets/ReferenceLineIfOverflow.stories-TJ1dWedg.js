import{R as e}from"./iframe-W_agkVyV.js";import{R as a}from"./zIndexSlice-CTdReD9p.js";import{C as p}from"./ComposedChart-C5TkesQ1.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-yMdjK6Cm.js";import{X as f}from"./XAxis-BMo9pONJ.js";import{Y as l}from"./YAxis-BF1PYNAy.js";import{L as d}from"./Line-CHfdY4oG.js";import{R as h}from"./ReferenceLine-CSTcWKrj.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CA9ZAVQz.js";import"./index-Bi2SdoGH.js";import"./index-CsXiVSUF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B8X1uEjP.js";import"./isWellBehavedNumber-DiRVonYH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C3mPyrs7.js";import"./axisSelectors-6axja2Em.js";import"./d3-scale-HrkydzFI.js";import"./index-Dt83L4jz.js";import"./index-DIRpvxdg.js";import"./renderedTicksSlice-CWlNAShs.js";import"./index-BqSIxi03.js";import"./CartesianChart-1K0jUxr5.js";import"./chartDataContext-DCJ8bj1E.js";import"./CategoricalChart-Bzn-Gu2q.js";import"./CartesianAxis-CPOh9De0.js";import"./Layer-BtznfAPn.js";import"./Text-BeEwTqv_.js";import"./pageBackground-BGxpKyNa.js";import"./useId-CJGe-UDk.js";import"./useBackwardsCompatibleTheme-Ctn7xKKB.js";import"./Label-ClOsex7o.js";import"./ZIndexLayer-BRJamsEl.js";import"./types-CaM0OvRl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BtaxSMiV.js";import"./step-DBl9LSRi.js";import"./path-DyVhHtw_.js";import"./activeStyles-BahHAzuq.js";import"./useAnimationId-Bm_zuzY4.js";import"./dataEntryStyles-ubI82mtZ.js";import"./ActivePoints-BV4SsbUp.js";import"./Dot-DTv2KvAS.js";import"./ErrorBarContext-Bg5MlTZs.js";import"./GraphicalItemClipPath-eVqzfYHN.js";import"./SetGraphicalItem-MNgoA9Pf.js";import"./getRadiusAndStrokeWidthFromDot-HZaFqHia.js";import"./ActiveShapeUtils-Ba2JWET-.js";import"./useEffectiveDataKey-Bzuj7hT4.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
