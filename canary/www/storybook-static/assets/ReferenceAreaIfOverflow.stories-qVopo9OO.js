import{R as e}from"./iframe-BKOly897.js";import{R as p}from"./zIndexSlice-MuW0IoWE.js";import{C as s}from"./ComposedChart-DNIn-1lF.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DzIYFcZw.js";import{X as d}from"./XAxis-CAN01VgH.js";import{Y as l}from"./YAxis-B-vCHNYJ.js";import{R as h}from"./ReferenceArea-BRfInMwH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DBtmfAg5.js";import"./throttle-Dj0bMbq4.js";import"./index-Bgsd-oxC.js";import"./index-CcRpQNf3.js";import"./RechartsWrapper-BR-O-n81.js";import"./axisSelectors-DAovfJtb.js";import"./polarAxisSelectors-Dd8oI3jG.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-FWOlMe5i.js";import"./index-BW-0cZWE.js";import"./index-DAFveYs2.js";import"./renderedTicksSlice-CNCxbMiN.js";import"./index-DlD_trIo.js";import"./CartesianChart-yrdLDQCk.js";import"./ZIndexPortal-DaAvwAYM.js";import"./CategoricalChart-BtQg_BZ4.js";import"./CartesianAxis-B19wq6cj.js";import"./Layer-DdqSdn0F.js";import"./Text-B-p-4nXu.js";import"./pageBackground-ByY2ru8v.js";import"./ZIndexLayer-BgIgZbDQ.js";import"./Label-BqeeWfBr.js";import"./dataEntryStyles-DNa-AVoZ.js";import"./types-BW57dsKE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-dSQZJlx4.js";import"./useAnimationId-Dwkyu_pp.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},oe=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
