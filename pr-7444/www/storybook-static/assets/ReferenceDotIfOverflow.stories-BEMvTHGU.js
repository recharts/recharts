import{R as e}from"./iframe-Bvg5iw6Z.js";import{R as n}from"./zIndexSlice-Ds_NjbNn.js";import{C as s}from"./ComposedChart-20ZO85Nl.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-391TdCFj.js";import{X as f}from"./XAxis-DCRWzJVy.js";import{Y as l}from"./YAxis-DfqNaUIm.js";import{R as d}from"./ReferenceDot-DcpZuabZ.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DHoEBynv.js";import"./index-Ce12os93.js";import"./index-C7ALVEHS.js";import"./get-DHB3VUn4.js";import"./resolveDefaultProps-DdhPeWBo.js";import"./isWellBehavedNumber-BfXcmwrI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CHMdqOJQ.js";import"./index-D6uOIfEh.js";import"./index-DjoxYWbz.js";import"./renderedTicksSlice-BOSAcKeB.js";import"./axisSelectors-ChUTyiTu.js";import"./d3-scale-C3JFNDzB.js";import"./string-B6fdYHAA.js";import"./CartesianChart-B5xnpDkJ.js";import"./chartDataContext-C4maze1A.js";import"./CategoricalChart-D7IINMSs.js";import"./CartesianAxis-_p8UXmcr.js";import"./Layer-irp4ME8h.js";import"./Text-DjnMaOWq.js";import"./DOMUtils-DJUlICsZ.js";import"./Label-DkRUWIp2.js";import"./ZIndexLayer-BSVnK8Dt.js";import"./types-C-xtjdCV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-dsakJdmW.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
