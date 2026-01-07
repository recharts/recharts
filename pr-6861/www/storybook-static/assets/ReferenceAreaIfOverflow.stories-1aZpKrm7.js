import{e}from"./iframe-BzK4IM4O.js";import{R as s}from"./arrayEqualityCheck-DntSlYRe.js";import{C as p}from"./ComposedChart-DeS0V09V.js";import{C as c}from"./CartesianGrid-D-ISYqWZ.js";import{X as f}from"./XAxis-BEioX7l9.js";import{Y as l}from"./YAxis-FFHKkbRQ.js";import{R as h}from"./ReferenceArea-D2_KC6QF.js";import{R as d}from"./RechartsHookInspector-Blpd2IS8.js";import{p as x}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DxvkoyFj.js";import"./PolarUtils-CkcjhAmg.js";import"./RechartsWrapper-G-7uZuvB.js";import"./hooks-VI0oeyv4.js";import"./axisSelectors-FRDErLTA.js";import"./zIndexSlice-CDkWNK3b.js";import"./CartesianChart-LpoIcLQ4.js";import"./chartDataContext-DMRgNTR6.js";import"./CategoricalChart-DIHkHBGg.js";import"./CartesianAxis-Bvc9afGW.js";import"./Layer-D3djBZrj.js";import"./Text-2hmmkMzb.js";import"./DOMUtils-DhJGRkcK.js";import"./Label-Cw9dZn4K.js";import"./ZIndexLayer-CvqQuagi.js";import"./types-CR25OGX1.js";import"./Rectangle-CHjVgmr4.js";import"./useAnimationId-BpCcKQdg.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-977mc2AH.js";import"./ChartSizeDimensions-D2LiT7mU.js";import"./OffsetShower-0fHUvhro.js";import"./PlotAreaShower-DvSB-8u7.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const W=["IfOverflow"];export{t as IfOverflow,W as __namedExportsOrder,V as default};
