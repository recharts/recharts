import{R as e}from"./iframe-BB3m-jQ-.js";import{R as s}from"./zIndexSlice-FQKZcMr3.js";import{C as p}from"./ComposedChart-B0LqgEa_.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-D-mGIltq.js";import{X as d}from"./XAxis-pxNAoOYF.js";import{Y as l}from"./YAxis-DFvGwgRl.js";import{R as h}from"./ReferenceArea-46HdK_OV.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Bb2hNnOx.js";import"./index-iRCZcjtj.js";import"./index-B5zT9Os4.js";import"./get-Bu83WliH.js";import"./resolveDefaultProps-D0AMNGzs.js";import"./isWellBehavedNumber-CFV6UIHi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BeVmqhAg.js";import"./index-AMNPHvWI.js";import"./index-CDnCFTh2.js";import"./renderedTicksSlice-eHBrq3FU.js";import"./axisSelectors-D1VEbPH5.js";import"./d3-scale-m2Sr9nLg.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CVsCYNZX.js";import"./chartDataContext-DDcaXf9b.js";import"./CategoricalChart-5b78-xMl.js";import"./CartesianAxis-DNzSt2Ud.js";import"./Layer-Bqk0isqQ.js";import"./Text-CQr6lPUD.js";import"./DOMUtils-v0Nl75wH.js";import"./Label-DntCvjB2.js";import"./ZIndexLayer-BGBP_zx3.js";import"./types-DSXkzfdz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-BZncl5wy.js";import"./useAnimationId-D5BtmEUA.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
