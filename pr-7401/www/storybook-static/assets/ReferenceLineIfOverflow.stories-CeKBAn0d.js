import{c as e}from"./iframe-Bhg7B6nu.js";import{g as n}from"./zIndexSlice-CpfnlaY3.js";import{C as p}from"./ComposedChart-BWL58mxx.js";import{p as s}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-2VeWgHga.js";import{X as f}from"./XAxis-BaFC3En6.js";import{Y as l}from"./YAxis-CDnoamqb.js";import{L as d}from"./Line-DnXTv09L.js";import{R as h}from"./ReferenceLine-DGtiIvIA.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DB_z4hP2.js";import"./index-fTPSImHI.js";import"./index-BeLXdiSX.js";import"./get-Bdfg8b7E.js";import"./resolveDefaultProps-DYGylzt5.js";import"./isWellBehavedNumber-CRt7foTE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BO-9qVe8.js";import"./index-hZ-hNf3X.js";import"./index-LweJEeHr.js";import"./renderedTicksSlice-BWF9zmW-.js";import"./axisSelectors-CdfzhIk0.js";import"./d3-scale-CZa5b7JS.js";import"./CartesianChart-B_99cbzZ.js";import"./chartDataContext-CTHxBaCW.js";import"./CategoricalChart-Dr5hcJGP.js";import"./CartesianAxis-D1bYab0n.js";import"./Layer-CWtBt3tO.js";import"./Text-B3Epq4Nr.js";import"./DOMUtils-umXRQPav.js";import"./Label-g9fCGbFu.js";import"./ZIndexLayer-BLUBt3jh.js";import"./types-CBsC6Zml.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CepT2fcB.js";import"./step-B9W3HLIp.js";import"./path-DyVhHtw_.js";import"./ReactUtils-BhSP1QaD.js";import"./ActivePoints-DopF7LMV.js";import"./Dot-DS4twGmw.js";import"./RegisterGraphicalItemId-BzH-PWzG.js";import"./ErrorBarContext-D0cT0mEH.js";import"./GraphicalItemClipPath-BljaU2rV.js";import"./SetGraphicalItem-DpMnWL3z.js";import"./useAnimationId-CDEhZOSy.js";import"./getRadiusAndStrokeWidthFromDot-CR_o6rYy.js";import"./ActiveShapeUtils-CZOt3Dfh.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const le=["IfOverflow"];export{t as IfOverflow,le as __namedExportsOrder,fe as default};
