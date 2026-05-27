import{u as f,e}from"./iframe-FqQriuOU.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-Bx3kycjW.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-D81yCQ_E.js";import{C}from"./ComposedChart-C8Wy7GrP.js";import{X as K}from"./XAxis-rE-0ziVR.js";import{L as v}from"./Legend-BZ5lxXMe.js";import{B as s}from"./Bar-D8rEXjHU.js";import{R as x}from"./RechartsHookInspector-Bzl8PNqn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BeuIWSvD.js";import"./Layer-dRSSbr5y.js";import"./resolveDefaultProps-CH-QvTob.js";import"./Text-DPCTz-gd.js";import"./DOMUtils-BuFom25w.js";import"./Label-CKdOaAhH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C869JS3k.js";import"./zIndexSlice-f7paLzdj.js";import"./immer-majn-qZf.js";import"./types-CfmOzYIG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C4IzMNte.js";import"./hooks-B_UbI8Xu.js";import"./axisSelectors-_fK9ZDWF.js";import"./d3-scale-i74XhqWc.js";import"./string-yHBgcFlJ.js";import"./RechartsWrapper-CApzUvyj.js";import"./index-B7L9uR1Y.js";import"./CartesianChart-DL9N19jV.js";import"./chartDataContext-8vaUd_eG.js";import"./CategoricalChart-D0upkKoq.js";import"./Symbols-DAX_okS0.js";import"./symbol-B9MBbnrG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B8C7PBsW.js";import"./uniqBy-B2F8-yBK.js";import"./iteratee-ZukpjJzA.js";import"./tooltipContext-BWLcIPAX.js";import"./AnimatedItems-BOrN0e6v.js";import"./useAnimationId-CwJGQlGj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CJeUHGgv.js";import"./ActiveShapeUtils-DpMDeTgr.js";import"./RegisterGraphicalItemId-W17uiJWi.js";import"./ErrorBarContext-BDkPCebh.js";import"./GraphicalItemClipPath-BYvnIWBH.js";import"./SetGraphicalItem-w0uUjr7L.js";import"./getZIndexFromUnknown-DBqQ8oVq.js";import"./graphicalItemSelectors-BMPXa5If.js";import"./index-FNdgkUyx.js";import"./ChartSizeDimensions-BmkjlCCd.js";import"./OffsetShower-6wrSmmyT.js";import"./PlotAreaShower-MAtCIzZg.js";const Ye={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,Ye as default};
