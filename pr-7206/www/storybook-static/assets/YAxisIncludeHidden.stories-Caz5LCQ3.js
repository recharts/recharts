import{r as f,e}from"./iframe-h6RyBADW.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-D_X1UMSW.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-uwQbgtgj.js";import{C}from"./ComposedChart-TyzmibOv.js";import{X as K}from"./XAxis-C2Gh6oi-.js";import{L as v}from"./Legend-DznoqHxu.js";import{B as s}from"./Bar-DOj26cu-.js";import{R as x}from"./RechartsHookInspector-BC4p3bxF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D_8tywby.js";import"./Layer-CUjlXR2J.js";import"./resolveDefaultProps-B6F9Tq8Y.js";import"./Text-DawNGEOi.js";import"./DOMUtils-CZxQTbW4.js";import"./Label-BhurGsu4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-wKcmD7IL.js";import"./zIndexSlice-CGsXWVT5.js";import"./immer-Bfj3ZeVH.js";import"./types-QtI883v9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CB3omCIm.js";import"./hooks-DTtRusoK.js";import"./axisSelectors-BdNfc6Ph.js";import"./d3-scale-B_V_eZSW.js";import"./RechartsWrapper-jkN30DDj.js";import"./index-D7nUYq7y.js";import"./CartesianChart-MMvNBqn6.js";import"./chartDataContext-CxcxsnMq.js";import"./CategoricalChart-B30uA3Pl.js";import"./Symbols-CkhqMYHd.js";import"./symbol-CuOhUCvG.js";import"./step-BtU2_rsP.js";import"./useElementOffset-B4f3I-gy.js";import"./uniqBy-Czbdu-mV.js";import"./iteratee-Ds-0edgw.js";import"./tooltipContext-D1i3p723.js";import"./ReactUtils-CdvzfmpN.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BzQm0dMt.js";import"./isPlainObject-BxrxHDzC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bxs0ztC_.js";import"./useAnimationId-B4b4HoxB.js";import"./Trapezoid-6Ll4yFmM.js";import"./Sector-Dimczp4z.js";import"./Curve-1roVG56o.js";import"./RegisterGraphicalItemId-IGv_NVoe.js";import"./ErrorBarContext-B3I7qVXU.js";import"./GraphicalItemClipPath-DyVzZO4a.js";import"./SetGraphicalItem-CuEfojVc.js";import"./getZIndexFromUnknown-CVBPiqAI.js";import"./graphicalItemSelectors-a4MLUv04.js";import"./index-DLs_tRY-.js";import"./ChartSizeDimensions-BDuSdsYs.js";import"./OffsetShower-MxH05TXA.js";import"./PlotAreaShower-CRP0xEOQ.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
