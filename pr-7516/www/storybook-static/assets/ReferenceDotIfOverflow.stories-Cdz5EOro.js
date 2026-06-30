import{R as e}from"./iframe-CqMmO9Xr.js";import{R as n}from"./zIndexSlice-DFZjSdbQ.js";import{C as s}from"./ComposedChart-uPkxZ6ZI.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BqSYQq_O.js";import{X as f}from"./XAxis-D2oZKEvW.js";import{Y as l}from"./YAxis-saOkQHhA.js";import{R as d}from"./ReferenceDot-FgH94J_w.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-QEuO__ZS.js";import"./index-DM7XJZkc.js";import"./index-C7a4ZWQb.js";import"./get-Bd1LrVMt.js";import"./resolveDefaultProps-B4mfWg2L.js";import"./isWellBehavedNumber-BQfelr5r.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CnEYhKO1.js";import"./index-4Y0h8bRC.js";import"./index-DUkcUndf.js";import"./renderedTicksSlice-CRwA1chB.js";import"./axisSelectors-DNmvLHVP.js";import"./d3-scale-QPfz2uTg.js";import"./CartesianChart-9yjUQzO4.js";import"./chartDataContext-C_w1UWdz.js";import"./CategoricalChart-D2FUAiwR.js";import"./CartesianAxis-CazwgKuv.js";import"./Layer-B_iZYaDE.js";import"./Text-CEmf9w7F.js";import"./DOMUtils-Ds2cGO5I.js";import"./Label-I1gAWal3.js";import"./ZIndexLayer-pq6FNmg5.js";import"./types-DVuTAt9Y.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-DuJvVQ71.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
