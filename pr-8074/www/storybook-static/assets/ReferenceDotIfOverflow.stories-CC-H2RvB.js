import{R as e}from"./iframe-B4_QwD1D.js";import{R as m}from"./zIndexSlice-CBhoAbgS.js";import{C as p}from"./ComposedChart-BYrbpJyI.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C1yY00qO.js";import{X as f}from"./XAxis-ClMwOqtx.js";import{Y as l}from"./YAxis-BXoC-zzw.js";import{R as d}from"./ReferenceDot-DXhFfoaH.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CoBiCp2n.js";import"./index-D1txtwQs.js";import"./index-BIeiuwDH.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DIsbUszc.js";import"./isWellBehavedNumber-D8aaIUAh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D2uM5dQm.js";import"./axisSelectors-BPJ5zN30.js";import"./d3-scale-DbsLf6d-.js";import"./index-DyH5gF1W.js";import"./index-BNmMl_IP.js";import"./renderedTicksSlice-Wvzb8C7M.js";import"./index-D5vd9j9o.js";import"./CartesianChart-CP9pEwgo.js";import"./chartDataContext-CzT92l_t.js";import"./CategoricalChart-B_jNXI9Q.js";import"./CartesianAxis-Bl0Fh-eW.js";import"./Layer-Bwh0wvH7.js";import"./Text-D60EpHHD.js";import"./pageBackground-BarjFxCc.js";import"./useId-BGuiMtTj.js";import"./useBackwardsCompatibleTheme-Dg3tMWv0.js";import"./Label-bs3lrZa-.js";import"./ZIndexLayer-DLJnSwwV.js";import"./dataEntryStyles-C6hQpsCt.js";import"./types-OK8mrrgc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-5O5duGce.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},oe=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,oe as __namedExportsOrder,re as default};
