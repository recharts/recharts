import{r as f,e}from"./iframe-BaY_xsSZ.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BAjE4AI0.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-Bdjqc4Ae.js";import{C}from"./ComposedChart-4BbEyXcR.js";import{X as K}from"./XAxis-ViYQKBdh.js";import{L as v}from"./Legend-CY2bGr7p.js";import{B as s}from"./Bar-5paKPwFj.js";import{R as x}from"./RechartsHookInspector-BZJAdbFr.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CxJxU8_8.js";import"./Layer-04iznQcl.js";import"./resolveDefaultProps-VJ-BUAvR.js";import"./Text-F1Mr-vkp.js";import"./DOMUtils-DVKXUmKU.js";import"./Label-B4b2gNZT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BzH8oXrO.js";import"./zIndexSlice-CtFEU_Ni.js";import"./immer-BxBygCNY.js";import"./types-BZAl2150.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-B0xJlAOa.js";import"./hooks-CRXiVztC.js";import"./axisSelectors-B-OR9MKB.js";import"./d3-scale-DIZez8ZA.js";import"./RechartsWrapper-DGEkw1V9.js";import"./index-BSMrFEqd.js";import"./CartesianChart-D3S0Vg1A.js";import"./chartDataContext-Dfnon4gt.js";import"./CategoricalChart-CR4gEzum.js";import"./Symbols-D6WgJo03.js";import"./symbol-N8c7H1tN.js";import"./step-CLF9a_rc.js";import"./useElementOffset-CP6WPjsc.js";import"./uniqBy-CrxusMQm.js";import"./iteratee-BK5pxv5Q.js";import"./tooltipContext-CdWoiPQq.js";import"./ReactUtils-B7IYIUp3.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CAoRm2wW.js";import"./isPlainObject-DluGOkEU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CHMEhJP1.js";import"./useAnimationId-CntPUL-4.js";import"./Trapezoid-DZ8rNB7q.js";import"./Sector-c_JEoVhU.js";import"./Curve-B7UPBPeR.js";import"./RegisterGraphicalItemId-x5Fjg9Mp.js";import"./ErrorBarContext-hvPjdfRQ.js";import"./GraphicalItemClipPath-C_oN7uRQ.js";import"./SetGraphicalItem-13HzTRgX.js";import"./getZIndexFromUnknown-G4hN38X8.js";import"./graphicalItemSelectors-BJwHUBxW.js";import"./index-D_Zsn0a-.js";import"./ChartSizeDimensions-Tq7694Qh.js";import"./OffsetShower-D7qcdJv9.js";import"./PlotAreaShower-DF_9siN1.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
