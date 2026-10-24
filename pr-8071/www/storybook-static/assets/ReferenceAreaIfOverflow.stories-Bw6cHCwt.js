import{R as e}from"./iframe-B1_QfljJ.js";import{R as p}from"./zIndexSlice-Cb-_WhSJ.js";import{C as s}from"./ComposedChart-CmygcsGV.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-cTwLu2NQ.js";import{X as d}from"./XAxis-C5w_o036.js";import{Y as l}from"./YAxis-BOlbfRR9.js";import{R as h}from"./ReferenceArea-C5YnsHMw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D7IvOyg1.js";import"./index-C0R_VbD9.js";import"./index-C4Bv3TLI.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BKBpJeVO.js";import"./isWellBehavedNumber-CjzDakCh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-eNWWZf5L.js";import"./axisSelectors-7XQKMXbV.js";import"./d3-scale-Ch4lSu5M.js";import"./index-DrIBMx-a.js";import"./index-PfBmA6Mj.js";import"./renderedTicksSlice-QhE759w-.js";import"./index-D_5ex_s0.js";import"./CartesianChart-0PUgz-fD.js";import"./chartDataContext-W36SsBCK.js";import"./CategoricalChart-Bnl3KIy2.js";import"./CartesianAxis-Bufnbb1Y.js";import"./Layer-B_0rxCBF.js";import"./Text-l_2w-j-6.js";import"./pageBackground-C2L5RPBY.js";import"./useId-5cvDRGiM.js";import"./useBackwardsCompatibleTheme-Cn0U0gME.js";import"./Label-Dq-PRmXE.js";import"./ZIndexLayer-DCJHrufs.js";import"./dataEntryStyles-DFEzHfWh.js";import"./types-DbTvfnZ9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-CLSVVjg0.js";import"./useAnimationId-g_gs6Adq.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ne={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ae=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,ae as __namedExportsOrder,ne as default};
