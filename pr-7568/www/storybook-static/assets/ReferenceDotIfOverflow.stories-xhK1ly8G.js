import{R as e}from"./iframe-E9cTKeRE.js";import{R as n}from"./zIndexSlice-DgjoBcM4.js";import{C as s}from"./ComposedChart-Blhk5iCf.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-LVg2aq4e.js";import{X as f}from"./XAxis-rRrOlgKo.js";import{Y as l}from"./YAxis-F7YCqO7L.js";import{R as d}from"./ReferenceDot-DfsvO4pt.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CGWlJj3Y.js";import"./index-CXgkWbkn.js";import"./index-dTe_TrB1.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-VcEXnedp.js";import"./isWellBehavedNumber-CNJuLpb3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1G603CI.js";import"./index-BKdHAXhr.js";import"./index-CCDqlq1e.js";import"./renderedTicksSlice-8_6vlRT3.js";import"./axisSelectors-Cz4e0hh2.js";import"./d3-scale-BKY6FaDv.js";import"./CartesianChart-h93kYpLN.js";import"./chartDataContext-BLSdU0GF.js";import"./CategoricalChart-Dgnr1Z5s.js";import"./CartesianAxis-X6rLp4nN.js";import"./Layer-gCSDlxX6.js";import"./Text-Z5PFJcO5.js";import"./DOMUtils-7h76k5q7.js";import"./Label-BpZfxLrK.js";import"./ZIndexLayer-T104iiSj.js";import"./types-BiCnzAm7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Dot-DCqiO5Z7.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
