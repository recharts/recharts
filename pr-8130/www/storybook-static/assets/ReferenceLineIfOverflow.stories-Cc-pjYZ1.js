import{R as e}from"./iframe-BmS0ecXK.js";import{R as a}from"./zIndexSlice-ChtzqxIP.js";import{C as p}from"./ComposedChart-DaLh_jdc.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C__yHp3Z.js";import{X as f}from"./XAxis-Bh2usn2R.js";import{Y as l}from"./YAxis-p6gtuiCl.js";import{L as d}from"./Line-Dcfa59Q0.js";import{R as h}from"./ReferenceLine-7E5eE6SA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-L-kb5cDL.js";import"./throttle-OPlZV-qu.js";import"./index-CdWOU_Jt.js";import"./index-CT2dpPb1.js";import"./RechartsWrapper-CUI9gBJC.js";import"./axisSelectors-BzqnuZDm.js";import"./polarAxisSelectors-CE28gFQQ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-3fk2W2Xu.js";import"./index-S9VbsYVM.js";import"./index-B2CB0vSq.js";import"./renderedTicksSlice-DE9Jk9Mo.js";import"./index-B9xLgKg_.js";import"./fillDefinitions-BfTN52CB.js";import"./CartesianChart-MAWW00G9.js";import"./ZIndexPortal-BBTCIcjJ.js";import"./CategoricalChart-Y8ADkKU9.js";import"./CartesianAxis-Brh0Ot5h.js";import"./Layer-BUeogdZj.js";import"./Text-Cy6IgmxI.js";import"./DOMUtils-nGO8S--J.js";import"./ZIndexLayer-CGSpKlNm.js";import"./Label-xOYEqHzO.js";import"./types-BFfgrH_g.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-lc4LP5Ja.js";import"./step-SGVv9xA0.js";import"./path-DyVhHtw_.js";import"./LabelList-HbN4s7ci.js";import"./ActivePoints-DWCg0rgm.js";import"./Dot-D1LmOLCb.js";import"./activeStyles-D5Ig3nSZ.js";import"./useAnimationId-CpCNOV8e.js";import"./dataEntryStyles-BusWIJtt.js";import"./Symbols-D9BPgtte.js";import"./symbol-BAUa8x3O.js";import"./ErrorBarContext-D4UbmXd_.js";import"./SetGraphicalItem-DxeCv-Nd.js";import"./getRadiusAndStrokeWidthFromDot-DJ-NIfPX.js";import"./ActiveShapeUtils-UpE3VQFE.js";import"./useEffectiveDataKey-1aGsCLfO.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{t as IfOverflow,xe as __namedExportsOrder,ye as default};
