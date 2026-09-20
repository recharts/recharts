import{R as e}from"./iframe-CgFNOWkZ.js";import{R as p}from"./zIndexSlice-CnfPauoq.js";import{C as s}from"./ComposedChart-DAjKXGxr.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-B3_ZhlFR.js";import{X as d}from"./XAxis-Bdjd5PBO.js";import{Y as l}from"./YAxis-Bn0ZQNQZ.js";import{R as h}from"./ReferenceArea-Dxzoy2yI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CwNcKmkm.js";import"./index-hYkm-J_b.js";import"./index-DjTwooh3.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B5p3Q00G.js";import"./isWellBehavedNumber-Cr26aOyF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CU75wXMo.js";import"./axisSelectors-CDnWxexV.js";import"./d3-scale-EAUzpRo7.js";import"./index-DlEkrCr0.js";import"./index-CIxokqwK.js";import"./renderedTicksSlice-dpz4HLD4.js";import"./index-BKLtIohb.js";import"./CartesianChart-C2LWrJC3.js";import"./chartDataContext-BPHBCGRy.js";import"./CategoricalChart-DEeDNDbs.js";import"./CartesianAxis-CE5tgyYR.js";import"./Layer-DQEpCXa4.js";import"./Text-BCy-48NS.js";import"./DOMUtils-BuWky4GR.js";import"./useId-Cn22DgH8.js";import"./useBackwardsCompatibleTheme-qMLBJgjs.js";import"./Label-DM_lkfp6.js";import"./ZIndexLayer-ZdAzMWJW.js";import"./types-C1vo7smu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-lr0FbpfG.js";import"./useAnimationId-DZ6wcHPj.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
