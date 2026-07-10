import{R as e}from"./iframe-GFu4u_Sr.js";import{R as s}from"./zIndexSlice-B5qFJFtI.js";import{C as p}from"./ComposedChart-aZQazbAt.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-B6smzfpZ.js";import{X as d}from"./XAxis-DCmYbaAb.js";import{Y as l}from"./YAxis-DPkQctbd.js";import{R as h}from"./ReferenceArea-VWIwJafT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CQYhSY5q.js";import"./index-J8ff_bgA.js";import"./index-BoT4UeUf.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B2kj8vGo.js";import"./isWellBehavedNumber-BzBjtwBe.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-GJPBo-3J.js";import"./index-fFvV_i1o.js";import"./index-CFslUPNA.js";import"./renderedTicksSlice-Dhv-F3Ii.js";import"./axisSelectors-CITTcs7P.js";import"./d3-scale-XJfpe2FZ.js";import"./CartesianChart-5jGrrHiW.js";import"./chartDataContext-ABcCQ5OY.js";import"./CategoricalChart-DaWqkQxP.js";import"./CartesianAxis-BChvL9JZ.js";import"./Layer-rjKJbMCf.js";import"./Text-CHl4arA0.js";import"./DOMUtils-BV_Da9To.js";import"./Label-DJGaBZN0.js";import"./ZIndexLayer-DO98mi6X.js";import"./types-CpBB06eN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-BEnsF74A.js";import"./useAnimationId-DHrR_uSV.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
