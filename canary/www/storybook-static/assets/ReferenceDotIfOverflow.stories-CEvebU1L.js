import{R as e}from"./iframe-Dli_FHsd.js";import{R as n}from"./zIndexSlice-BKyYlhak.js";import{C as s}from"./ComposedChart-BEb2rMPq.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BzY3upoB.js";import{X as f}from"./XAxis-CgWc3L0L.js";import{Y as l}from"./YAxis-BgeWKEji.js";import{R as d}from"./ReferenceDot-soScqfYB.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BDVTnirG.js";import"./index-B6ei3fzd.js";import"./index-eEp7ik7X.js";import"./get-D8Bu4bN4.js";import"./resolveDefaultProps-KCoOvOQy.js";import"./isWellBehavedNumber-DwKce9OS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-gcMhRjLK.js";import"./index-654UjlcV.js";import"./index-TBfimrOP.js";import"./renderedTicksSlice-Cr_zgIG9.js";import"./axisSelectors-BOuTa97x.js";import"./d3-scale-BaROhcEs.js";import"./string-B6fdYHAA.js";import"./CartesianChart-B0dTZgGZ.js";import"./chartDataContext-Dh-3jSeu.js";import"./CategoricalChart-YvrRZEH2.js";import"./CartesianAxis-CDtTSBJJ.js";import"./Layer-D_tWiSqM.js";import"./Text-mDBdIk3r.js";import"./DOMUtils-CD-Gvcib.js";import"./Label-BlCBYS7y.js";import"./ZIndexLayer-56CQrnNK.js";import"./types-CxkhEKh5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-C9Ldg7B9.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
