import{R as e}from"./iframe-DQmeeGiA.js";import{R as n}from"./zIndexSlice-vj7A5RkB.js";import{C as s}from"./ComposedChart-CaXqoiyd.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D1MIA-G4.js";import{X as f}from"./XAxis-CPOb-1qE.js";import{Y as l}from"./YAxis-BSQK2YTa.js";import{R as d}from"./ReferenceDot-B58FfTgW.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CuM-_qKB.js";import"./index-DCJPjZ_f.js";import"./index-D_KMR0re.js";import"./get-D0YgmYSp.js";import"./resolveDefaultProps-CQRwsHO0.js";import"./isWellBehavedNumber-CJ4H_fXR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D3uqokgy.js";import"./index-D1lTGX2z.js";import"./index-ZLNt73_J.js";import"./renderedTicksSlice-CpMyOcpp.js";import"./axisSelectors-Cn3uvYUg.js";import"./d3-scale-B-26TW07.js";import"./CartesianChart-CE19F1By.js";import"./chartDataContext-GPNpGYxg.js";import"./CategoricalChart-D7Ayh5uN.js";import"./CartesianAxis-CsI9VW1t.js";import"./Layer-C92GpBxv.js";import"./Text-CaOtzMPo.js";import"./DOMUtils-D4CFUHQm.js";import"./Label-DLumr0gz.js";import"./ZIndexLayer-LS7m1tXW.js";import"./types-BWqAEvBR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-DKRonFKw.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
