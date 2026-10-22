import{R as e}from"./iframe-BqFv--n0.js";import{R as a}from"./zIndexSlice-CQSP_367.js";import{C as p}from"./ComposedChart-BGPVJCGM.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-tlhXc924.js";import{X as f}from"./XAxis-Dd_n4Mfj.js";import{Y as l}from"./YAxis-C7K0-Kt6.js";import{L as d}from"./Line-Cu7SDvK4.js";import{R as h}from"./ReferenceLine-DFdrV6K8.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-u_PA2Aue.js";import"./index-BLvw7yWi.js";import"./index-Bv6EKtOE.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D0e0pmfJ.js";import"./isWellBehavedNumber-xy8z0j2l.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CRaC0TZF.js";import"./axisSelectors-ZWEeDNRz.js";import"./d3-scale-CFuq5uTk.js";import"./index-CDAyT67T.js";import"./index-BxavCyTA.js";import"./renderedTicksSlice-CjmFqNX-.js";import"./index-3DQVsuvq.js";import"./CartesianChart-CWGitRSv.js";import"./chartDataContext-uAg4LOvf.js";import"./CategoricalChart-LtTngwAd.js";import"./CartesianAxis-CpohuUTj.js";import"./Layer-VP2k7KQb.js";import"./Text-BW5R7YWF.js";import"./pageBackground-B1lJR1Eh.js";import"./useId-Ddcb8ROb.js";import"./useBackwardsCompatibleTheme-NnVOi814.js";import"./Label-DI-ST-i-.js";import"./ZIndexLayer-m5JcFv6F.js";import"./types-A41OMRS1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-B2qT8EGI.js";import"./step-DAllZbzr.js";import"./path-DyVhHtw_.js";import"./activeStyles-C0pD60nL.js";import"./useAnimationId-CZ2QT6KZ.js";import"./dataEntryStyles-Ijd8738K.js";import"./ActivePoints-BuaaOhKZ.js";import"./Dot-Ck25bOyu.js";import"./ErrorBarContext-CHaebdqW.js";import"./GraphicalItemClipPath-DlDw9PG0.js";import"./SetGraphicalItem-DarYZt9y.js";import"./getRadiusAndStrokeWidthFromDot-pw39BaVD.js";import"./ActiveShapeUtils-4w4oDN2L.js";import"./useEffectiveDataKey-B-x1_7m_.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
