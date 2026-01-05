import{e}from"./iframe-C75Mon5f.js";import{R as s}from"./arrayEqualityCheck-CCinF1xg.js";import{C as p}from"./ComposedChart-ZGVCoeE1.js";import{C as c}from"./CartesianGrid-q5_-yTof.js";import{X as f}from"./XAxis-D7rtUFHm.js";import{Y as l}from"./YAxis-BkOESioE.js";import{R as h}from"./ReferenceArea-qxAoeUzH.js";import{R as d}from"./RechartsHookInspector-DeYlN7PD.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DdslWj5k.js";import"./PolarUtils-gc7ouCGw.js";import"./RechartsWrapper-DtD9QMMH.js";import"./hooks-CF17bvZj.js";import"./axisSelectors-DwNVm2PQ.js";import"./zIndexSlice-Ch2lslkG.js";import"./CartesianChart-BO0IyvRA.js";import"./chartDataContext-CSddlAqh.js";import"./CategoricalChart-CjaXzYYa.js";import"./CartesianAxis-DsQ2XPjm.js";import"./Layer-DOYjA-jF.js";import"./Text-s5ZlGFzn.js";import"./DOMUtils-Bv5mFBkh.js";import"./Label-BHT6Zr6z.js";import"./ZIndexLayer-1hGb0ezX.js";import"./types-CgyKhdli.js";import"./Rectangle-DTY1SpY4.js";import"./useAnimationId-BM6GD1p3.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B1HMmzG7.js";import"./ChartSizeDimensions-DU3pXVrB.js";import"./OffsetShower-C98qoUcb.js";import"./PlotAreaShower-CzYV5sJZ.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
