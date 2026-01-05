import{e}from"./iframe-Da-M2bw_.js";import{R as s}from"./arrayEqualityCheck-Bu1fao9w.js";import{C as p}from"./ComposedChart-BwnVRCzC.js";import{C as c}from"./CartesianGrid-BeDGJ5q1.js";import{X as f}from"./XAxis-CFyYvsY3.js";import{Y as l}from"./YAxis-u8ljMyRk.js";import{R as h}from"./ReferenceArea-IQvLrFYq.js";import{R as d}from"./RechartsHookInspector-DN6fpuiF.js";import{p as x}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BfdPYxPL.js";import"./PolarUtils-vOe5pdek.js";import"./RechartsWrapper-BUepfen4.js";import"./hooks-CxpugqLJ.js";import"./axisSelectors-B_bauGo8.js";import"./zIndexSlice-CMfC5ktf.js";import"./CartesianChart-DRzmZtVl.js";import"./chartDataContext-Cwbia7-m.js";import"./CategoricalChart-Cqbm4wFz.js";import"./CartesianAxis-CVwu7qOc.js";import"./Layer-DzGabtm5.js";import"./Text-BD5t_Wg6.js";import"./DOMUtils-CQPgEqmB.js";import"./Label-C4t1wGEU.js";import"./ZIndexLayer-C6AjQfxY.js";import"./types-D0tWu2Rj.js";import"./Rectangle-BDQYy-QO.js";import"./useAnimationId-DW2lwLzx.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CVXS9YKr.js";import"./ChartSizeDimensions-BESje7nE.js";import"./OffsetShower-OU7b25r_.js";import"./PlotAreaShower--pkErmR4.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
