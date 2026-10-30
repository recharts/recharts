import{R as e}from"./iframe-jmhe2Qk6.js";import{R as m}from"./zIndexSlice-C_QNUIlg.js";import{C as s}from"./ComposedChart-DDgeQ340.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BhkEKy1o.js";import{X as f}from"./XAxis-BmABHSTj.js";import{Y as l}from"./YAxis-Bwmry524.js";import{R as d}from"./ReferenceDot-ClHZUSO-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CCkzVq5s.js";import"./throttle-DZINazP_.js";import"./index-BadCiZkf.js";import"./index-DMlmY332.js";import"./RechartsWrapper-C_ACRdKM.js";import"./axisSelectors-CTtb55NE.js";import"./polarAxisSelectors-D0zNKA08.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-_kmjLSGJ.js";import"./index-1mWypBK7.js";import"./index-CSauTcUd.js";import"./renderedTicksSlice-DiLJD3iy.js";import"./index-BvBcGY0n.js";import"./fillDefinitions-2mEkHeYa.js";import"./CartesianChart-DW-0hcB8.js";import"./ZIndexPortal-Qo_oHvo4.js";import"./CategoricalChart-clWULlZK.js";import"./CartesianAxis-CTjd-a6A.js";import"./Layer-B39D7NeJ.js";import"./Text-CmetEc_4.js";import"./DOMUtils-DKPcLfF3.js";import"./ZIndexLayer-BifNHCzV.js";import"./Label-Db1KZEia.js";import"./types-Cpf9ifaq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-Oe3PKIgB.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},te=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
