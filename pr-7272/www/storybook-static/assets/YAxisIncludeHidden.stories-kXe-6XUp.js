import{r as f,e}from"./iframe-4M-PkSVA.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-C60ythyu.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-9hxUK6as.js";import{C}from"./ComposedChart-BNbX-oyy.js";import{X as K}from"./XAxis-B7sM9A7a.js";import{L as v}from"./Legend-3mUH7dlR.js";import{B as s}from"./Bar-YucOP4EX.js";import{R as x}from"./RechartsHookInspector-Bu2v4BgA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-sJnvrLg-.js";import"./Layer-CSsW14jT.js";import"./resolveDefaultProps-CYaStK-U.js";import"./Text-CVSiM3-K.js";import"./DOMUtils-BLTsClHS.js";import"./Label-HHw2Wo4F.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BqzZgYR4.js";import"./zIndexSlice-Bg894_FJ.js";import"./immer-CY9nZJ0O.js";import"./types-BizJXa69.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BOIzxlRf.js";import"./hooks-0Lo_6wsQ.js";import"./axisSelectors-DzylQYKT.js";import"./d3-scale-CUJe2CI0.js";import"./RechartsWrapper-Ct_1KIIG.js";import"./index-QhWebp7-.js";import"./CartesianChart-Cd9DDcz_.js";import"./chartDataContext-D4ebhXUv.js";import"./CategoricalChart-DBff51gh.js";import"./Symbols-BWbej2Re.js";import"./symbol-gex8G6F3.js";import"./step-r2s_c4Hj.js";import"./useElementOffset-BZIewUIl.js";import"./uniqBy-DPlNb1BK.js";import"./iteratee-Bmve8k8U.js";import"./tooltipContext-D_B82NQG.js";import"./ReactUtils-CI9blSHi.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BtPvL2qu.js";import"./isPlainObject-C0kslINo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B8e1dRmE.js";import"./useAnimationId-AkEyWWXN.js";import"./Trapezoid-DJP_R3rw.js";import"./Sector-DG5p09xu.js";import"./Curve-DGVbHr3U.js";import"./RegisterGraphicalItemId-D74ncS90.js";import"./ErrorBarContext-B-CC6fNm.js";import"./GraphicalItemClipPath-ClTLLJGZ.js";import"./SetGraphicalItem-BO1ROXvb.js";import"./getZIndexFromUnknown-CxMiEiEl.js";import"./graphicalItemSelectors-BTk3Cb8i.js";import"./index-1NSbHYzy.js";import"./ChartSizeDimensions-CyhagkHh.js";import"./OffsetShower-D5VKQHJL.js";import"./PlotAreaShower-CwVyk3um.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
