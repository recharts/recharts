import{R as e}from"./iframe-wiglGnBh.js";import{R as s}from"./zIndexSlice-DGL63V4L.js";import{C as p}from"./ComposedChart-BkMMlDzm.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DwT7ZCyQ.js";import{X as d}from"./XAxis-DcNyXe69.js";import{Y as l}from"./YAxis-BqO3yae8.js";import{R as h}from"./ReferenceArea-BaLVlfLI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BMNVPqSq.js";import"./index-Mz84GrVY.js";import"./index-s4-LlFgK.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BM8NmOex.js";import"./isWellBehavedNumber-DsqaaTNJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-5SoXlYEo.js";import"./index-WWLocB5H.js";import"./index-1ZP6iUpr.js";import"./renderedTicksSlice-BYFI-WHt.js";import"./axisSelectors-BaS0q6Il.js";import"./d3-scale-Bn4UFc1s.js";import"./CartesianChart-Us5vBUdh.js";import"./chartDataContext-JmkVpeXS.js";import"./CategoricalChart-D2_16EkL.js";import"./CartesianAxis-CUoTvBNy.js";import"./Layer-nH5sm9p4.js";import"./Text-BTuAOKpf.js";import"./DOMUtils-LT1AML3l.js";import"./Label-B3PbOJvm.js";import"./ZIndexLayer-jQgtLS9e.js";import"./types-BoamgyWM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-Bid_fSIj.js";import"./useAnimationId-2tqnpEoJ.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
