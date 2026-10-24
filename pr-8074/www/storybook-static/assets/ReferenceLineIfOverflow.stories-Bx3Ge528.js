import{R as e}from"./iframe-B4_QwD1D.js";import{R as a}from"./zIndexSlice-CBhoAbgS.js";import{C as p}from"./ComposedChart-BYrbpJyI.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C1yY00qO.js";import{X as f}from"./XAxis-ClMwOqtx.js";import{Y as l}from"./YAxis-BXoC-zzw.js";import{L as d}from"./Line-B7tq3Xvl.js";import{R as h}from"./ReferenceLine-OzaUL-kB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CoBiCp2n.js";import"./index-D1txtwQs.js";import"./index-BIeiuwDH.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DIsbUszc.js";import"./isWellBehavedNumber-D8aaIUAh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D2uM5dQm.js";import"./axisSelectors-BPJ5zN30.js";import"./d3-scale-DbsLf6d-.js";import"./index-DyH5gF1W.js";import"./index-BNmMl_IP.js";import"./renderedTicksSlice-Wvzb8C7M.js";import"./index-D5vd9j9o.js";import"./CartesianChart-CP9pEwgo.js";import"./chartDataContext-CzT92l_t.js";import"./CategoricalChart-B_jNXI9Q.js";import"./CartesianAxis-Bl0Fh-eW.js";import"./Layer-Bwh0wvH7.js";import"./Text-D60EpHHD.js";import"./pageBackground-BarjFxCc.js";import"./useId-BGuiMtTj.js";import"./useBackwardsCompatibleTheme-Dg3tMWv0.js";import"./Label-bs3lrZa-.js";import"./ZIndexLayer-DLJnSwwV.js";import"./dataEntryStyles-C6hQpsCt.js";import"./types-OK8mrrgc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BO_4liKv.js";import"./step-ChTc0MMg.js";import"./path-DyVhHtw_.js";import"./activeStyles-B6_AFvwr.js";import"./useAnimationId-Dxw2C04Y.js";import"./ActivePoints-BjOHnkRU.js";import"./Dot-5O5duGce.js";import"./RegisterGraphicalItemId-bXaHC85L.js";import"./ErrorBarContext-pg2dj6kz.js";import"./SetGraphicalItem-rmoRgud5.js";import"./getRadiusAndStrokeWidthFromDot-CaBRrUqE.js";import"./ActiveShapeUtils-Db0-CW4c.js";import"./useEffectiveDataKey-CJ0a7aYn.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
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
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
