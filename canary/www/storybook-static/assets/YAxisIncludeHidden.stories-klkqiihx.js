import{r as f,e}from"./iframe-DOn8u-oa.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-B0Wqs0qU.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-DYxn46f5.js";import{C}from"./ComposedChart-t7zVwPF-.js";import{X as K}from"./XAxis-CWQtfYm8.js";import{L as v}from"./Legend-qa7kbH3a.js";import{B as s}from"./Bar-Dd2seWTH.js";import{R as x}from"./RechartsHookInspector-_EcWBN5R.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BlpnuS68.js";import"./Layer-05H6paB_.js";import"./resolveDefaultProps-Dy27g2E0.js";import"./Text-BwE_mk8T.js";import"./DOMUtils-CpIY6Kx5.js";import"./Label-BcScPf1_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-y8FotD-G.js";import"./zIndexSlice-B2AKnG3y.js";import"./immer-Bn8Wu2FH.js";import"./types-CESDZ_aX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DoBNzF3G.js";import"./hooks-DyTxkSEO.js";import"./axisSelectors-RYA-f3bs.js";import"./d3-scale-CBg01hSj.js";import"./RechartsWrapper-Beeq_QLd.js";import"./index-TviLRVzQ.js";import"./CartesianChart-BOVmLEcH.js";import"./chartDataContext-dTDP7YNY.js";import"./CategoricalChart-Dpd8P6f3.js";import"./Symbols-nNNN-42G.js";import"./symbol-DVcflbh7.js";import"./step-Cq5Zx23d.js";import"./useElementOffset-dL6NMTXG.js";import"./uniqBy-7x81275m.js";import"./iteratee-4veUQO7B.js";import"./tooltipContext-X7ANI5U7.js";import"./ReactUtils-PhcFEJ80.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-heWrq4Qu.js";import"./isPlainObject-c8PgY5v_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DPJuAdjj.js";import"./useAnimationId-DEVWAil3.js";import"./Trapezoid-Bqkv6n3S.js";import"./Sector-BDm--b9P.js";import"./Curve-woVlpOcO.js";import"./RegisterGraphicalItemId-DTK05cjv.js";import"./ErrorBarContext-CXzlZi78.js";import"./GraphicalItemClipPath-BB5-oLdp.js";import"./SetGraphicalItem-BPar8aEt.js";import"./getZIndexFromUnknown-DhZLt9eh.js";import"./graphicalItemSelectors-3hY-3fCN.js";import"./index-DQsTRZku.js";import"./ChartSizeDimensions-C0-3hV0F.js";import"./OffsetShower-CB8ZCxWG.js";import"./PlotAreaShower-B8Dg5b0X.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Oe=["WithIncludeHidden"];export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
