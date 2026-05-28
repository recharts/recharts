import{u as f,e}from"./iframe-nKBNN5B0.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-FQ23aVkz.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-CxT-wzVL.js";import{C}from"./ComposedChart-CMimiTb9.js";import{X as K}from"./XAxis-DU_guq9x.js";import{L as v}from"./Legend-DHZMD3TY.js";import{B as s}from"./Bar-U0SeXCuz.js";import{R as x}from"./RechartsHookInspector-sGkexO-0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Bnh1LK4J.js";import"./Layer-Dlo03F9V.js";import"./resolveDefaultProps-B1K37wAO.js";import"./Text-DB5b8CCD.js";import"./DOMUtils-B7v60ynE.js";import"./Label-CsEI_R5F.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C2zC9czD.js";import"./zIndexSlice-D0XiDET1.js";import"./immer-CyCHtQC_.js";import"./types-DsvdP6xG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CO8dGGel.js";import"./hooks-D9IV7SS_.js";import"./axisSelectors-Ce9ynWe4.js";import"./d3-scale-BkKzcfBn.js";import"./RechartsWrapper-CtYT8XrE.js";import"./index-92xVHDbu.js";import"./CartesianChart-B93j2FVh.js";import"./chartDataContext-C9hfLHwH.js";import"./CategoricalChart-DseIVHYy.js";import"./Symbols-xmaVfyL9.js";import"./symbol-BlBeMTm8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DCLSj0kl.js";import"./uniqBy-DFrX51Ib.js";import"./iteratee-CGccbjb5.js";import"./tooltipContext-CIH-lCeo.js";import"./ReactUtils-DZyDsCqU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BECvYQY2.js";import"./useAnimationId-C5EqhcJr.js";import"./ActiveShapeUtils-ZBGHGQd-.js";import"./RegisterGraphicalItemId-DX6ZWJJQ.js";import"./ErrorBarContext-DtqQSr6r.js";import"./GraphicalItemClipPath-DenedrNc.js";import"./SetGraphicalItem-v3AApP2y.js";import"./getZIndexFromUnknown-BtKlQv7j.js";import"./graphicalItemSelectors-CUjB3OpX.js";import"./index-zSDCnArX.js";import"./ChartSizeDimensions-NMIHm-Kh.js";import"./OffsetShower-6NeAlfeU.js";import"./PlotAreaShower-DGsJDI99.js";const He={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,He as default};
