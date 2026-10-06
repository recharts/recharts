import{R as e}from"./iframe-CWlxxFHy.js";import{R as m}from"./zIndexSlice-eChv8v5o.js";import{C as p}from"./ComposedChart-euduWCYe.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B69Jsf7O.js";import{X as f}from"./XAxis-CaG1n6yG.js";import{Y as l}from"./YAxis-DLav1J7f.js";import{R as d}from"./ReferenceDot-BRYkZ4rY.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cuwp_Om4.js";import"./index-COS8QMAe.js";import"./index-BmRJ-b8E.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CVJCZaPv.js";import"./isWellBehavedNumber-ChXHiBih.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B211gnQK.js";import"./axisSelectors-CY4U4PmW.js";import"./d3-scale-OLXd5h8I.js";import"./index-CVuc-u2_.js";import"./index-uNGw9-ET.js";import"./renderedTicksSlice-BfstiInC.js";import"./index-C1WwnpLj.js";import"./CartesianChart-3sXmRDbR.js";import"./chartDataContext-tJUp4txc.js";import"./CategoricalChart-D5zBV6NM.js";import"./CartesianAxis-I-oV71yY.js";import"./Layer-bfSBtv71.js";import"./Text-th2Jn0HQ.js";import"./DOMUtils-Cr7AYV1x.js";import"./useId-pWQDKLmz.js";import"./useBackwardsCompatibleTheme-DcL_98G3.js";import"./Label-DN7T9GpD.js";import"./ZIndexLayer-C0s9Ohbn.js";import"./types-CjEkwpQR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-CVl6koMA.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
