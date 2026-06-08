import{R as e}from"./iframe-CuVm1Ncb.js";import{R as n}from"./zIndexSlice-BZOjM71k.js";import{C as s}from"./ComposedChart-Jqs4ulRL.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C3fOygfX.js";import{X as f}from"./XAxis-JtvtAXXy.js";import{Y as l}from"./YAxis-BIy4mhNn.js";import{R as d}from"./ReferenceDot-XD91byDD.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-qI_Lx1cT.js";import"./index-DS-VAELW.js";import"./index-ezvYWD77.js";import"./get-mh9AHsYH.js";import"./resolveDefaultProps-DXODA9k0.js";import"./isWellBehavedNumber-Cs5mv3EE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DT5GAsrf.js";import"./index-2Eta-fPv.js";import"./index-CIKLroCx.js";import"./renderedTicksSlice-Cq4cXI7l.js";import"./axisSelectors-BqRugZOv.js";import"./d3-scale-DhSEg32F.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BLDYaQ2w.js";import"./chartDataContext-CM4lnGiM.js";import"./CategoricalChart-BJmxSqzB.js";import"./CartesianAxis-COqdKxvc.js";import"./Layer-CQ8j0Llf.js";import"./Text-LNz2FUpv.js";import"./DOMUtils-C4aU1diQ.js";import"./Label-CyUXMRAJ.js";import"./ZIndexLayer-HG2Tdc6L.js";import"./types-DjM_wMjP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-Dt98x6dx.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
