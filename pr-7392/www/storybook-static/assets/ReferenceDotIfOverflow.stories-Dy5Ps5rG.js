import{c as e}from"./iframe-BLrz4bzL.js";import{g as n}from"./zIndexSlice-c7WW4zRb.js";import{C as s}from"./ComposedChart-CpLjAKKa.js";import{p}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-DCVHdoQU.js";import{X as f}from"./XAxis-B81A99CY.js";import{Y as l}from"./YAxis-7eks4-ql.js";import{R as d}from"./ReferenceDot-D1J9Idab.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Cj0-obxe.js";import"./index-DA1Z20ZR.js";import"./index-B0WUClSq.js";import"./get-CEp8r7kA.js";import"./resolveDefaultProps-NE4wXzst.js";import"./isWellBehavedNumber-Di3xCgEJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B9Liyr6r.js";import"./index-DkCredV6.js";import"./index-CZQ5QhT1.js";import"./renderedTicksSlice-ReLUkucO.js";import"./axisSelectors-DEfJzTHu.js";import"./d3-scale-DXSYU9tD.js";import"./CartesianChart-m5bXXKFS.js";import"./chartDataContext-Bv2SQjN_.js";import"./CategoricalChart-xCWpyDx3.js";import"./CartesianAxis-BoM_TQOb.js";import"./Layer-CRR_7s_x.js";import"./Text-dr0MBeU-.js";import"./DOMUtils-CfWUtkPu.js";import"./Label-cQgelXjE.js";import"./ZIndexLayer-DQpprPKw.js";import"./types-C_iF2heC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-C1lQjxdh.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
