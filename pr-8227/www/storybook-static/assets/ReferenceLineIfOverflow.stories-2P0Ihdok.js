import{R as e}from"./iframe-BaiXEn0-.js";import{R as a}from"./zIndexSlice-CSqAGFLj.js";import{C as p}from"./ComposedChart-DKPCp_TU.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BRsC9J5q.js";import{X as f}from"./XAxis-BhEilA83.js";import{Y as l}from"./YAxis-DuwRFPvA.js";import{L as d}from"./Line-CDkCfB7G.js";import{R as h}from"./ReferenceLine-CEcvaL-0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CefoQJzZ.js";import"./throttle-D7xKVZuZ.js";import"./index-BK6mpLXi.js";import"./index-BrUJM5DD.js";import"./RechartsWrapper-BRQNcvpu.js";import"./axisSelectors-s8isxUHu.js";import"./polarAxisSelectors-Com92wlg.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bpc0urwb.js";import"./index-CGBcSxqi.js";import"./index-YBD3MlPN.js";import"./renderedTicksSlice-GEdADU7H.js";import"./index-BuGbfhN1.js";import"./fillDefinitions-mAC2wE0k.js";import"./CartesianChart-DzuueLPv.js";import"./chartDataContext-DoyYqW6X.js";import"./CategoricalChart-D2YsyGqx.js";import"./CartesianAxis-CXgLYYat.js";import"./Layer-Dc68LG4Z.js";import"./Text-Dz83mHfX.js";import"./ZIndexLayer-BmwEMujN.js";import"./Label-CWe40LeI.js";import"./types-C6nAEk1h.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-Dg6PTrHd.js";import"./step-Csdb5mG5.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CA2v1itW.js";import"./ActivePoints-Dk_HtJnf.js";import"./Dot-CesDwFF2.js";import"./activeStyles-CYcJyLiS.js";import"./useAnimationId-FtoyJDPN.js";import"./Symbols-cv2IRaTf.js";import"./symbol-CRYIzv0a.js";import"./ErrorBarContext-BDsV7QiN.js";import"./SetGraphicalItem-CuWVAy3A.js";import"./getRadiusAndStrokeWidthFromDot-DS02tJFS.js";import"./ActiveShapeUtils-BRs_VSCT.js";import"./useEffectiveDataKey-l-c80nhy.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
