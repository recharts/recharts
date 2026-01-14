import{r as f,e}from"./iframe-0lTGunMW.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CtpClMsJ.js";import{Y as c}from"./YAxis-lXYEyZz1.js";import{R as A}from"./arrayEqualityCheck-BcVHM6kB.js";import{C}from"./ComposedChart-B3dKlHYG.js";import{X as K}from"./XAxis-Cfcoth7C.js";import{L as v}from"./Legend-Dhq_oTRt.js";import{B as a}from"./Bar-CS8vgPJn.js";import{R as x}from"./RechartsHookInspector-Dk1C8jj5.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Hv7UJc4Y.js";import"./CartesianAxis-Co_LHUOm.js";import"./Layer-BnXp22uo.js";import"./Text-bhqNXfXh.js";import"./DOMUtils-B5DHQ51j.js";import"./Label-CODe3zwa.js";import"./PolarUtils-mWliNy-S.js";import"./ZIndexLayer-DWGlhSed.js";import"./zIndexSlice-D-YSqdMJ.js";import"./types-WsTRE19v.js";import"./hooks-CXPWyfRe.js";import"./axisSelectors-Djz2yXUi.js";import"./RechartsWrapper-CnzobKYl.js";import"./CartesianChart-CMMpVnoF.js";import"./chartDataContext-Cyqtlzkq.js";import"./CategoricalChart-CV-slYuT.js";import"./Symbols-DWUe3itn.js";import"./Curve-DZsm4o-J.js";import"./useElementOffset-CU9yJrDm.js";import"./iteratee-Bod8Xpm-.js";import"./tooltipContext-PVr3o7WU.js";import"./ReactUtils-CXVPwG-V.js";import"./ActiveShapeUtils-CKfXoaq0.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BCh8wZqF.js";import"./useAnimationId-D9Wpr36K.js";import"./Trapezoid-Tsb3ohUM.js";import"./Sector-Doli5igL.js";import"./RegisterGraphicalItemId-BjD0GJz1.js";import"./ErrorBarContext-ADLH_OpK.js";import"./GraphicalItemClipPath-DvXQ6fJn.js";import"./SetGraphicalItem-j4NHyBYf.js";import"./getZIndexFromUnknown-YuXuJ5q7.js";import"./graphicalItemSelectors-132llaWu.js";import"./index-DjmMVEJp.js";import"./ChartSizeDimensions-C9nZfRd3.js";import"./OffsetShower-ZX4tabc8.js";import"./PlotAreaShower-BEMT4keu.js";const Ce={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ke=["WithIncludeHidden"];export{t as WithIncludeHidden,Ke as __namedExportsOrder,Ce as default};
