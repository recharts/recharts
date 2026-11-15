import{R as e}from"./iframe-BEGj1koH.js";import{R as a}from"./zIndexSlice-CEJVfddR.js";import{C as p}from"./ComposedChart-Bzc4T97f.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CnGKMMdf.js";import{X as f}from"./XAxis-A5l93qYr.js";import{Y as l}from"./YAxis-pWnSqNwD.js";import{L as d}from"./Line-wcAYZAbC.js";import{R as h}from"./ReferenceLine-CzRMJJih.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BYyXPZU-.js";import"./throttle-9RbVUj4o.js";import"./index-DDO4uWer.js";import"./index-DR0rd1FX.js";import"./RechartsWrapper-DyBgNckc.js";import"./axisSelectors-DNGVPDPw.js";import"./polarAxisSelectors-Bip_MddP.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-80plsouy.js";import"./index-BjkAsnz4.js";import"./index-OAXr3uJt.js";import"./renderedTicksSlice-kRCXaW-h.js";import"./index-CMfsitJi.js";import"./fillDefinitions-CBOLnqU9.js";import"./CartesianChart-Ct1jbJB4.js";import"./chartDataContext-CTuyBUPX.js";import"./CategoricalChart-DExcD38L.js";import"./CartesianAxis-DbfSB8D9.js";import"./Layer-C55olOZb.js";import"./Text-DjwfkybI.js";import"./ZIndexLayer-DF1RNmQW.js";import"./Label-D38IadvQ.js";import"./types-DoIEZrXt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-hlvSyv9M.js";import"./step-Cc4Umos1.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-D0L-GBmA.js";import"./ActivePoints-htAl9rci.js";import"./Dot-CF8XQTEk.js";import"./activeStyles-BAv2bBi7.js";import"./useAnimationId-Dz0dpT6V.js";import"./Symbols-B6OXEcw9.js";import"./symbol-Bug6GalK.js";import"./ErrorBarContext-DjI-jDw7.js";import"./SetGraphicalItem-CZ4dqLwM.js";import"./getRadiusAndStrokeWidthFromDot-CkygA61E.js";import"./ActiveShapeUtils-CbYiWbjj.js";import"./useEffectiveDataKey-Dgv3FRKU.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
