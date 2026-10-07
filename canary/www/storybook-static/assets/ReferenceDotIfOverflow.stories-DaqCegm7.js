import{R as e}from"./iframe-D7QPEs6x.js";import{R as m}from"./zIndexSlice-DRJU9auo.js";import{C as p}from"./ComposedChart-DkVpVicC.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Bkf8kTVQ.js";import{X as f}from"./XAxis-CddzMe5D.js";import{Y as l}from"./YAxis-5bCl6v45.js";import{R as d}from"./ReferenceDot-CkDViRlL.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Ct4NpkHt.js";import"./index-CJHqU6XL.js";import"./index-JZUC8P_o.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CRWlv-3y.js";import"./isWellBehavedNumber-DNiV3oks.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-i3bpT-Yu.js";import"./axisSelectors-ApgCgdVz.js";import"./d3-scale-BExrlGPv.js";import"./index-BMjjiw1C.js";import"./index-DHFQnlSZ.js";import"./renderedTicksSlice-laAQTg1Q.js";import"./index-wtCc4zD7.js";import"./CartesianChart-C9MabHj3.js";import"./chartDataContext-B6RxQWBJ.js";import"./CategoricalChart-vhkNV8Yp.js";import"./CartesianAxis-BAfU-RT3.js";import"./Layer-CQuTPpTF.js";import"./Text-DA3gX1pv.js";import"./DOMUtils-D_tBKlm6.js";import"./useId-BXkxS-9S.js";import"./useBackwardsCompatibleTheme-D_0RgBTV.js";import"./Label-Dw5oZdmX.js";import"./ZIndexLayer-BteXgmwI.js";import"./types-2ZxaQrL7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-BIHN86sB.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
