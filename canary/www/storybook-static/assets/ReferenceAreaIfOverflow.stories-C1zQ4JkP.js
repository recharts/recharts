import{R as e}from"./iframe-D6azDvqV.js";import{R as p}from"./zIndexSlice-CJI37Eji.js";import{C as s}from"./ComposedChart-CmwmgTBj.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-ur55bmy2.js";import{X as d}from"./XAxis-Cf0m1xXe.js";import{Y as l}from"./YAxis-ltpxfQ5a.js";import{R as h}from"./ReferenceArea-BpaMQXiY.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-9sEg-owe.js";import"./index-De2T6Rdx.js";import"./index-CHbhJf8u.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-MMJ4Hspi.js";import"./isWellBehavedNumber-zgmweQfq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CvaooULl.js";import"./index-8WeBRwf8.js";import"./index-CdRGzAoJ.js";import"./axisSelectors-Cuma3wLU.js";import"./d3-scale-BukzO1yu.js";import"./renderedTicksSlice-CP9ELeUi.js";import"./CartesianChart-DKfnJK9b.js";import"./chartDataContext-E0nEwP5U.js";import"./CategoricalChart-BwNlWuS2.js";import"./CartesianAxis-CnIKHaJW.js";import"./Layer-Dd-QkUnw.js";import"./Text-7Emw6cxV.js";import"./DOMUtils-ChR8PpsJ.js";import"./useId-D_J3zHys.js";import"./useBackwardsCompatibleTheme-Btt6Zxb8.js";import"./Label-Bq-FSxS9.js";import"./ZIndexLayer-BMP0BbGV.js";import"./types-ArXcJt3v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-D0LhkaJ7.js";import"./useAnimationId-B0HxjIs3.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};
