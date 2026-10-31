import{R as e}from"./iframe-BV4BJT-m.js";import{R as m}from"./zIndexSlice-B-lthx1D.js";import{C as s}from"./ComposedChart-CPNwWKj6.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-6YUfnSB7.js";import{X as f}from"./XAxis-Dddiy3kS.js";import{Y as l}from"./YAxis-DrgVb9Ay.js";import{R as d}from"./ReferenceDot-DrZbF1st.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-cT9z_f7M.js";import"./throttle-2G-03cGC.js";import"./index-BWsZwQHL.js";import"./index-BMMrxHO4.js";import"./RechartsWrapper-BCKkTVf1.js";import"./axisSelectors-DnTNEhev.js";import"./polarAxisSelectors-CB1xu3bt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-9I0ClQu9.js";import"./index-Cwzrr77V.js";import"./index-CwDo1ygF.js";import"./renderedTicksSlice-un3BJh88.js";import"./index-BO-EQm5K.js";import"./fillDefinitions-CsvVa8gn.js";import"./CartesianChart-D730y8QU.js";import"./ZIndexPortal-DvrYxin1.js";import"./CategoricalChart-BPH2EWzV.js";import"./CartesianAxis-D1XYtW-z.js";import"./Layer-C4zlYTAs.js";import"./Text-CO85_-F3.js";import"./DOMUtils-CzRokdgO.js";import"./ZIndexLayer-B03KVd1Z.js";import"./Label-xll97smN.js";import"./types-CgGLncla.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-ChrRm5q7.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},te=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,te as __namedExportsOrder,ee as default};
