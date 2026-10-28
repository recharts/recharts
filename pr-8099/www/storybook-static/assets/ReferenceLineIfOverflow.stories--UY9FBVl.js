import{R as e}from"./iframe-D0yOAL3n.js";import{R as a}from"./zIndexSlice-Dn2Ys6gV.js";import{C as p}from"./ComposedChart-DzH7Aje-.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DQSXKhES.js";import{X as f}from"./XAxis-ntZPF60e.js";import{Y as l}from"./YAxis-ClNwS6nX.js";import{L as d}from"./Line-CO6xWWXS.js";import{R as h}from"./ReferenceLine-MdJpfW-Q.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cif0RW7j.js";import"./throttle-BrS_cZCp.js";import"./index-D1v08_vM.js";import"./index-ELyMDiEN.js";import"./RechartsWrapper-DwTnzypz.js";import"./axisSelectors-DATXyQCy.js";import"./polarAxisSelectors-aGfpHLq1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-n2sBsRY0.js";import"./index-CwmpmH_i.js";import"./index-CqRNnRSm.js";import"./renderedTicksSlice-Cx7A9Rjk.js";import"./index-BQd9CGB1.js";import"./CartesianChart-DLG1qiqu.js";import"./ZIndexPortal-DWwaC6CZ.js";import"./CategoricalChart-BqkqH0t5.js";import"./CartesianAxis-dbcozJzz.js";import"./Layer-CY7a4PGZ.js";import"./Text-z-sERxAx.js";import"./pageBackground-Cu52DhUW.js";import"./ZIndexLayer-DLelF1L8.js";import"./Label-BzBQuB2T.js";import"./dataEntryStyles-BNyFarFk.js";import"./types-IRHz2iGt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DzBXGra2.js";import"./step-C1lWuIkW.js";import"./path-DyVhHtw_.js";import"./LabelList-CZmttjyK.js";import"./ActivePoints-BljR9_g2.js";import"./Dot-lux40cEN.js";import"./activeStyles-BHH3u2ze.js";import"./useAnimationId-CKYg8A0e.js";import"./Symbols-BGu4wd_L.js";import"./symbol-C_vPW6X7.js";import"./RegisterGraphicalItemId-DVCLPf9f.js";import"./ErrorBarContext-Dnk3UGdS.js";import"./SetGraphicalItem-Co3HUPOs.js";import"./getRadiusAndStrokeWidthFromDot-DLGQUjjw.js";import"./ActiveShapeUtils-CLWTEHLV.js";import"./useEffectiveDataKey-DqoTIDte.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
