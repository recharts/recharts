import{R as e}from"./iframe-Da76_689.js";import{R as n}from"./zIndexSlice-a0xNinnk.js";import{C as s}from"./ComposedChart--w51xXk6.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CnvFZ9BI.js";import{X as f}from"./XAxis-DepWA4im.js";import{Y as l}from"./YAxis-Dp_F69G6.js";import{R as d}from"./ReferenceDot-C6QDnr_a.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-COYVVxZg.js";import"./index-C8Z1S5Pt.js";import"./index-DUt0bfqM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BpFPYIFo.js";import"./isWellBehavedNumber-CH2-kpaa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJISCefM.js";import"./index-DhFXp8vM.js";import"./index-JDhekbA3.js";import"./renderedTicksSlice-ObOqR6xe.js";import"./axisSelectors-Bw6517Pm.js";import"./d3-scale-DyCdYIOY.js";import"./CartesianChart-Cprw1vi1.js";import"./chartDataContext-BxrKQ5f-.js";import"./CategoricalChart-D82DfAs8.js";import"./CartesianAxis-BQNrFnRM.js";import"./Layer-BItCE877.js";import"./Text-C0rNKqCf.js";import"./DOMUtils-B2_jGy5F.js";import"./Label-BNqYKN1e.js";import"./ZIndexLayer-DP22msHm.js";import"./types-Dy7AAOTV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BbZg4AjH.js";import"./isBuffer-BG75eWKN.js";import"./Dot-Clx9ykW3.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
