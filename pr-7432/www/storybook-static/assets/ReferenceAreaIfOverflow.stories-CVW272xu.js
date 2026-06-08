import{R as e}from"./iframe-B2GUem4R.js";import{R as s}from"./zIndexSlice-CZi7E6fW.js";import{C as p}from"./ComposedChart-C0b-ufbL.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-H72cR-oI.js";import{X as d}from"./XAxis-CFUeYXnK.js";import{Y as l}from"./YAxis-_CiWUi77.js";import{R as h}from"./ReferenceArea-BBN46FDm.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DXmH-xiw.js";import"./index-8D89370m.js";import"./index-C3eO1gGD.js";import"./get-Dz6Q_sAk.js";import"./resolveDefaultProps-D8aANFv1.js";import"./isWellBehavedNumber-Dny2ojXK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-wIT9NoUO.js";import"./index-CiX8zsFN.js";import"./index-CRfxI4mA.js";import"./renderedTicksSlice-CFEn6KcH.js";import"./axisSelectors-eBcYGUc1.js";import"./d3-scale-BTfuin0j.js";import"./string-B6fdYHAA.js";import"./CartesianChart-B-JFZAz_.js";import"./chartDataContext-CqMqFbwN.js";import"./CategoricalChart-DLExbf-B.js";import"./CartesianAxis-DVMfjDIU.js";import"./Layer-D33k1icw.js";import"./Text-BI7UFZae.js";import"./DOMUtils-Bf1ILi-r.js";import"./Label-BkYexeGT.js";import"./ZIndexLayer-B6ZLwcmD.js";import"./types-D4D5wSub.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-CNlPjGbB.js";import"./useAnimationId-D653EGzA.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
