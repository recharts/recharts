import{r as f,R as e}from"./iframe-BaK-xze-.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CUt8Xelm.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DrFw0t7C.js";import{C as k}from"./ComposedChart-DhdbIgqC.js";import{X as K}from"./XAxis-CTevCFW7.js";import{L as v}from"./Legend-B6lWfqzL.js";import{B as a}from"./Bar-Cb4NOXKm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-cKDNSGIr.js";import"./Text-CdbyXNxn.js";import"./resolveDefaultProps-Cil0S8B-.js";import"./pageBackground-CV09xolb.js";import"./isWellBehavedNumber-Bo5UiCAJ.js";import"./useId-s-O1vSWD.js";import"./useBackwardsCompatibleTheme-B3pLDlIF.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Byqn6KnA.js";import"./index-CnYYSSY1.js";import"./index-CtznlYAS.js";import"./axisSelectors-CnfYSHLW.js";import"./throttle-CYt85Ar6.js";import"./d3-scale-_8yp9yQE.js";import"./CartesianAxis-CSk3G5Bd.js";import"./Layer-C6rljEkC.js";import"./types-DSy0pRW3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CNPiGgUW.js";import"./index-Dlm-5Ij4.js";import"./index-Dw-ed78r.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DZM6L-T3.js";import"./index-B4hxfgtn.js";import"./CartesianChart-CGaTNHvY.js";import"./chartDataContext-DqcmhhuQ.js";import"./CategoricalChart-MBo-iukw.js";import"./Symbols-BqROoHzJ.js";import"./symbol-BXhlSx3K.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DuSny-9b.js";import"./uniqBy-FpCdKt82.js";import"./iteratee-COMggJ3D.js";import"./activeStyles-CZlzjGsD.js";import"./useAnimationId-B-391LIn.js";import"./dataEntryStyles-IDu762UD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-2t7WTJbT.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DuzIRyyx.js";import"./tooltipContext-DN8pJewl.js";import"./ErrorBarContext-DndDD6DE.js";import"./GraphicalItemClipPath-BvdkjIlE.js";import"./SetGraphicalItem-BAL-rDyp.js";import"./getZIndexFromUnknown-BYbg0dE8.js";import"./useEffectiveDataKey-lq0ydW3i.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
