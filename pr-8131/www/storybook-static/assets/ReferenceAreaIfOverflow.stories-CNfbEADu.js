import{R as e}from"./iframe-OYo09Kjn.js";import{R as p}from"./zIndexSlice-C0otV0Tq.js";import{C as s}from"./ComposedChart-O8l7FYsv.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DrqfL26O.js";import{X as d}from"./XAxis-C4iNCAUT.js";import{Y as l}from"./YAxis-B9J5xeR5.js";import{R as h}from"./ReferenceArea-B0cNRb5s.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BV2Pd4xr.js";import"./throttle-2ukkMEiH.js";import"./index-B1YAqRON.js";import"./index-jR8-nOeq.js";import"./RechartsWrapper-DDeqrE6g.js";import"./axisSelectors-DwbFlqn_.js";import"./polarAxisSelectors-h48S2J0z.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CkZT7Yna.js";import"./index-D6UCrPx5.js";import"./index-OFmsSHfS.js";import"./renderedTicksSlice-Dj299CQx.js";import"./index-C9mjTPMA.js";import"./fillDefinitions-DyAhyaHy.js";import"./CartesianChart-CU1owHvq.js";import"./ZIndexPortal-THJMy4l1.js";import"./CategoricalChart-reFCYYlz.js";import"./CartesianAxis-Ce7EujIW.js";import"./Layer-BKQ7Cq1e.js";import"./Text-Dl7WOzrI.js";import"./DOMUtils-VDBzCn3R.js";import"./ZIndexLayer-fjsdvpte.js";import"./Label-BLd_HfLL.js";import"./types-CzskQIcv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-Br8BuzQ0.js";import"./useAnimationId-Bfw_1I20.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},oe=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,oe as __namedExportsOrder,re as default};
