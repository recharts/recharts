import{R as e}from"./iframe-DWt4J3JN.js";import{R as p}from"./zIndexSlice-NSNONz_v.js";import{C as s}from"./ComposedChart-Dnd49qHa.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CZCTJzkK.js";import{X as d}from"./XAxis-Ct82dr0g.js";import{Y as l}from"./YAxis-CsFlwLse.js";import{R as h}from"./ReferenceArea-CcbSAqGs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D4EpIsqz.js";import"./throttle-Dk5xsQjg.js";import"./index-BdNcxnLc.js";import"./index-C3nO4u5d.js";import"./RechartsWrapper-COqAJslP.js";import"./axisSelectors-BS7avNJg.js";import"./polarAxisSelectors-BNqZLY2c.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BC5jrybd.js";import"./index-FrWa7Exr.js";import"./index-vXblBJSu.js";import"./renderedTicksSlice-C-fcLX-F.js";import"./index-Dvam2yfO.js";import"./fillDefinitions-CXWevUoQ.js";import"./CartesianChart-cgT47Vj6.js";import"./chartDataContext-CFu7cHCJ.js";import"./CategoricalChart-CSFFRE3G.js";import"./ZIndexPortal-CNwyGADw.js";import"./CartesianAxis-Ch6tESXa.js";import"./Layer-D1fzjsCN.js";import"./Text-BH_q_eI2.js";import"./DOMUtils-gLxo7mD7.js";import"./ZIndexLayer-gpvd6E93.js";import"./Label-Bkb0GMep.js";import"./types-BbXG2_az.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-Cd9oJYQg.js";import"./useAnimationId-DaySoH3H.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,ne as __namedExportsOrder,oe as default};
