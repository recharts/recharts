import{R as e}from"./iframe-DnRkZCcZ.js";import{R as m}from"./zIndexSlice-DwWcIzrA.js";import{C as s}from"./ComposedChart-DAKOEFgJ.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-hU5F1JD4.js";import{X as f}from"./XAxis-DPYXDMnu.js";import{Y as l}from"./YAxis-CL5uWkoX.js";import{R as d}from"./ReferenceDot-DL5AJyxe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CKyaaGET.js";import"./throttle-bNdHLYfF.js";import"./index-B8arTVtL.js";import"./index-D7PdTPCI.js";import"./RechartsWrapper-B9w9bgII.js";import"./axisSelectors-BG0FGZa0.js";import"./polarAxisSelectors-WP4kwRUA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DjImCkyz.js";import"./index-Cppy_ggM.js";import"./index-BXa8wql-.js";import"./renderedTicksSlice-qkBzJXk3.js";import"./index-BKTGKznB.js";import"./fillDefinitions-B6SeDiRz.js";import"./CartesianChart-lnVa2-zz.js";import"./chartDataContext-C9AcD8jJ.js";import"./CategoricalChart-DJEPvlGT.js";import"./CartesianAxis-CI0fZc9H.js";import"./Layer-ziHQUSdD.js";import"./Text-CdYpRkXo.js";import"./ZIndexLayer-Cfgieq6O.js";import"./Label-DX2yrrpT.js";import"./types-DV0KiZQI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-CK54vFWX.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
