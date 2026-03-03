import{r as f,e}from"./iframe-DT_QfCX6.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-8Bgwa54a.js";import{R as A}from"./arrayEqualityCheck-DgclqCQe.js";import{C}from"./ComposedChart-Yu-wXtxo.js";import{X as K}from"./XAxis-BE7dRx6e.js";import{L as v}from"./Legend-1CNKIUyY.js";import{B as a}from"./Bar-CxgD5Vgd.js";import{R as x}from"./RechartsHookInspector-BZlaUGyM.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BXsDKsAg.js";import"./Layer-V2SZsz4R.js";import"./resolveDefaultProps-CM621BjQ.js";import"./Text-Btk8OOuM.js";import"./DOMUtils-CXMayvsd.js";import"./Label-HvHa-kvb.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-LaPkRlL4.js";import"./zIndexSlice-St67sYO3.js";import"./immer-Dm_eTc-x.js";import"./types-BFIPf9k1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C-8YagrD.js";import"./hooks-hb3YajwI.js";import"./axisSelectors-DEJjMxLA.js";import"./d3-scale-DdauB95s.js";import"./RechartsWrapper-BjKAVIgx.js";import"./index-B5fX5g4a.js";import"./CartesianChart-DSP5L81p.js";import"./chartDataContext-CtAEKjsT.js";import"./CategoricalChart-Dym2TIuH.js";import"./Symbols-LHeYuxni.js";import"./symbol-D2MJ3HO9.js";import"./step-BvjBdR90.js";import"./useElementOffset-BKvtVAYG.js";import"./uniqBy-7Wuh8TV7.js";import"./iteratee-BqkoQ9iH.js";import"./tooltipContext-BN5nQaTj.js";import"./ReactUtils-DiJ6wwjh.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-5Z9knZsD.js";import"./isPlainObject-CkHzR63e.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BR7QntkE.js";import"./useAnimationId-Kk_Sm5qp.js";import"./Trapezoid-DBAlB0P9.js";import"./Sector-c2ULWy9q.js";import"./Curve-DVqXjtuH.js";import"./RegisterGraphicalItemId-C3WllrLT.js";import"./ErrorBarContext-DjRWnVpQ.js";import"./GraphicalItemClipPath-CjwarN2Z.js";import"./SetGraphicalItem-DaPsLcNS.js";import"./getZIndexFromUnknown-CDA1UKXp.js";import"./graphicalItemSelectors-YXDpMJDg.js";import"./index-Cn6U4qah.js";import"./ChartSizeDimensions-Dwz-fLgS.js";import"./OffsetShower-BpQcdb8I.js";import"./PlotAreaShower-Bt6tAbug.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
