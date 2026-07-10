import{R as e}from"./iframe-DfxvUCoY.js";import{R as s}from"./zIndexSlice-a1aajdGJ.js";import{C as p}from"./ComposedChart-C8jbAnB3.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CEYliQmp.js";import{X as d}from"./XAxis-CDwQyzI6.js";import{Y as l}from"./YAxis-CHYqw0Yg.js";import{R as h}from"./ReferenceArea-6fEwkNWn.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CY5RCzqb.js";import"./index-snxaCIu3.js";import"./index-BZyQtlPK.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DkGy9Xqs.js";import"./isWellBehavedNumber-By0pufN4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DKrR_shM.js";import"./index-CFU132wJ.js";import"./index-qAfe5-0Z.js";import"./renderedTicksSlice-D3ObCuZG.js";import"./axisSelectors-XkeOj5U9.js";import"./d3-scale-CsKfZS2s.js";import"./CartesianChart-BqCTaCca.js";import"./chartDataContext-DU69Yd0K.js";import"./CategoricalChart-B1rK5u_C.js";import"./CartesianAxis-BuUJ6A2m.js";import"./Layer-D1z9Z2fI.js";import"./Text-B6Z1U-Hi.js";import"./DOMUtils-DG22iS9R.js";import"./Label-Db_taApy.js";import"./ZIndexLayer-BYPoLUrq.js";import"./types-DZdy7jpS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-Dl1vC_ro.js";import"./useAnimationId-D9BVxJGQ.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
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
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
