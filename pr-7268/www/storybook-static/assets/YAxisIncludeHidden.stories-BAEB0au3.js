import{r as f,e}from"./iframe-ARz8mg4k.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-nFfmrEBY.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-DrcNi_LJ.js";import{C}from"./ComposedChart-DRBeqEP-.js";import{X as K}from"./XAxis-BTtzk9-i.js";import{L as v}from"./Legend-B9KXuqvN.js";import{B as s}from"./Bar-CxO79dc1.js";import{R as x}from"./RechartsHookInspector-BQqyZpBz.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BXpWNIc5.js";import"./Layer-DVzuE_pH.js";import"./resolveDefaultProps-B-6s3uHj.js";import"./Text-D-6uYGdc.js";import"./DOMUtils-CE-5408s.js";import"./Label-Cu7mDpGK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C2oPn4PG.js";import"./zIndexSlice-DS03Ah9k.js";import"./immer-DTctj60x.js";import"./types-DqkCHGa8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CVTh0NIO.js";import"./hooks-BYzsfUc2.js";import"./axisSelectors-BVUGHvar.js";import"./d3-scale-C0EL32h-.js";import"./RechartsWrapper-Blzvisg2.js";import"./index-rdZdQMAv.js";import"./CartesianChart-BUThqtKP.js";import"./chartDataContext-DOtajESI.js";import"./CategoricalChart-B_WLpA_O.js";import"./Symbols-DEV19KB2.js";import"./symbol-DfbaKguC.js";import"./step-CP_r1PA8.js";import"./useElementOffset-CSKRZ4dE.js";import"./uniqBy-ASh7y_L6.js";import"./iteratee-BNnjrYcR.js";import"./tooltipContext-CPRY119m.js";import"./ReactUtils-hXOLhjEf.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-wYDV2nzn.js";import"./isPlainObject-B1moSef3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle--sGlWkza.js";import"./useAnimationId-C0fVDb8C.js";import"./Trapezoid-Cyk80hbt.js";import"./Sector-DhlBySFK.js";import"./Curve-BzlOSzH0.js";import"./RegisterGraphicalItemId-BXvuLG6J.js";import"./ErrorBarContext-DDh6r-dJ.js";import"./GraphicalItemClipPath-Bz4PQaQE.js";import"./SetGraphicalItem-CxI49ViB.js";import"./getZIndexFromUnknown-CHBkh563.js";import"./graphicalItemSelectors-D6Aw6mIu.js";import"./index-L5czeD9H.js";import"./ChartSizeDimensions-CD-DU66p.js";import"./OffsetShower-IkmwAKSt.js";import"./PlotAreaShower-atAkjEbW.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
