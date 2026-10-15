import{R as e}from"./iframe-mtYsn-79.js";import{R as a}from"./zIndexSlice-495T_9tR.js";import{C as p}from"./ComposedChart-CW7X5osA.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B__X8dsu.js";import{X as f}from"./XAxis-DraxbeeJ.js";import{Y as l}from"./YAxis-B8XavvDr.js";import{L as d}from"./Line-BRvqCftx.js";import{R as h}from"./ReferenceLine-BOLjGiFS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BhAErOUJ.js";import"./index-D6LBQYE7.js";import"./index-DsrHO_6p.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dv9djRbQ.js";import"./isWellBehavedNumber-CUExMovG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Lhej2phZ.js";import"./axisSelectors-tcQjfxXW.js";import"./d3-scale-7ZjrAl0H.js";import"./index-NJ5U5ys4.js";import"./index-BrIo2_bc.js";import"./renderedTicksSlice-C9Id8AHg.js";import"./index-UWH5XZiD.js";import"./CartesianChart-C2MjyFSz.js";import"./chartDataContext-BlAChyFk.js";import"./CategoricalChart-DBrto0w2.js";import"./CartesianAxis-BWxlG7ih.js";import"./Layer-K-lH1pk5.js";import"./Text-BJaxenL8.js";import"./pageBackground-CdPwgquz.js";import"./useId-DbxZMBee.js";import"./useBackwardsCompatibleTheme-C2I2obbb.js";import"./Label-L2ne4D-Q.js";import"./ZIndexLayer-C6VGe1nr.js";import"./types-Bj-sAee4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BJLIKK7P.js";import"./step-CZN-eu_K.js";import"./path-DyVhHtw_.js";import"./activeStyles-BxgBaa2U.js";import"./useAnimationId-BOXwxaVr.js";import"./dataEntryStyles-CD4KrGW2.js";import"./ActivePoints-BdGZ5cYI.js";import"./Dot-YCXBT1pk.js";import"./ErrorBarContext-Ek123Dcx.js";import"./GraphicalItemClipPath-c13meIZR.js";import"./SetGraphicalItem-Cc0cHCgq.js";import"./getRadiusAndStrokeWidthFromDot-Fba4Z4SE.js";import"./ActiveShapeUtils-CXyzmERA.js";import"./useEffectiveDataKey-CmlhkQvR.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
