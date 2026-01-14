import{e}from"./iframe-C4Awkoff.js";import{R as s}from"./arrayEqualityCheck-B4QvsFQi.js";import{C as p}from"./ComposedChart-BcZ2exHk.js";import{C as c}from"./CartesianGrid-BH8aP75T.js";import{X as f}from"./XAxis-BNPVvEKI.js";import{Y as l}from"./YAxis-OmZ5CylP.js";import{R as h}from"./ReferenceArea-DSG37fAQ.js";import{R as d}from"./RechartsHookInspector-C8xIuzm_.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B49yJYL9.js";import"./PolarUtils-CG-ELovL.js";import"./RechartsWrapper-D13K1qt6.js";import"./hooks-Gb_nE6Hc.js";import"./axisSelectors-CRRN5Cb6.js";import"./zIndexSlice-BPscvr6m.js";import"./CartesianChart-DYhYqUl7.js";import"./chartDataContext-BbHvubZk.js";import"./CategoricalChart-CQLlvG-9.js";import"./CartesianAxis-CA9DIeAi.js";import"./Layer-3uSdf7p6.js";import"./Text-C7YJVqE3.js";import"./DOMUtils-sn9DJRHa.js";import"./Label-BgopB1Yd.js";import"./ZIndexLayer-KiDqj_Cd.js";import"./types-BzBfPwET.js";import"./Rectangle-BGrEruZe.js";import"./useAnimationId-BOjGjWHD.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C4xfSpfA.js";import"./ChartSizeDimensions-Bhhb-T47.js";import"./OffsetShower-CHWuz_7E.js";import"./PlotAreaShower-DgnmR6hn.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
