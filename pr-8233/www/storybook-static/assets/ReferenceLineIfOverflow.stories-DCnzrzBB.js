import{R as e}from"./iframe-C_daZv7l.js";import{R as a}from"./zIndexSlice-Dlp28lA6.js";import{C as p}from"./ComposedChart-bOkTSI7z.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D6XqE57d.js";import{X as f}from"./XAxis-zsBA2PQk.js";import{Y as l}from"./YAxis-DVc3O9Qy.js";import{L as d}from"./Line-IPpA0euf.js";import{R as h}from"./ReferenceLine-CQJPLKd6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CWP-gMuW.js";import"./throttle-BHZ2wlOs.js";import"./index-7cXIOsrg.js";import"./index-D1CrGIf7.js";import"./RechartsWrapper-CgMr-Xnd.js";import"./axisSelectors-BlfT440m.js";import"./polarAxisSelectors-CT8xWjbN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dz0Pmj0c.js";import"./index-CJJC3II6.js";import"./index-DBxUtF6C.js";import"./renderedTicksSlice-CyloxQ1c.js";import"./index-CEW7yT3i.js";import"./fillDefinitions-BNbyE3VE.js";import"./CartesianChart-a1M-eJU5.js";import"./chartDataContext-D1D0-RnX.js";import"./CategoricalChart-D48joeLJ.js";import"./CartesianAxis-CWZlckQG.js";import"./Layer-WPlXRukA.js";import"./Text-DFRkhFZm.js";import"./ZIndexLayer-CwM562V-.js";import"./Label-DbTfJXbl.js";import"./types-BRKFz9xC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DDXeNIWC.js";import"./step-CfMQYX2G.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BrtwCCRb.js";import"./ActivePoints-Hq6VNZIp.js";import"./Dot-BjcrnH2C.js";import"./activeStyles-DqPxAQkX.js";import"./useAnimationId-BeVDdEFy.js";import"./Symbols-3hlYR6yc.js";import"./symbol-C8mAwliN.js";import"./ErrorBarContext-Cc5g1M1Q.js";import"./SetGraphicalItem-C7RTXSJB.js";import"./getRadiusAndStrokeWidthFromDot-DS_16ujn.js";import"./ActiveShapeUtils-DH0fW0Mt.js";import"./useEffectiveDataKey-CLct0de8.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ve as __namedExportsOrder,we as default};
