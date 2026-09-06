import{r as f,R as e}from"./iframe-BxrJSuEo.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CH4Eo4Zq.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BT09z8vD.js";import{C as k}from"./ComposedChart-7h-py7CY.js";import{X as K}from"./XAxis-BWu3iNn9.js";import{L as v}from"./Legend-Dd9f-0e3.js";import{B as a}from"./Bar-BO2PSRtL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DaJavsxU.js";import"./Text-ChzbpadS.js";import"./resolveDefaultProps-vU4RggVs.js";import"./DOMUtils-BV3IXFQQ.js";import"./isWellBehavedNumber-CpUOh-vc.js";import"./useId-D7n7M89L.js";import"./useBackwardsCompatibleTheme-BBdb5Xlh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-K4qh24Ap.js";import"./index-BhD1rzMR.js";import"./index-DGAZ_OJd.js";import"./RechartsWrapper-CWFnbdFS.js";import"./axisSelectors-JUmVyq34.js";import"./throttle-CoaYbzsD.js";import"./d3-scale-B5WK_JhK.js";import"./index-BHq5Sa6E.js";import"./index-CLaZmg3F.js";import"./renderedTicksSlice-CAPgIIpT.js";import"./index-Dd2r1808.js";import"./CartesianAxis-rK53amZo.js";import"./Layer-NfsQLk-M.js";import"./types-DWdcB5KA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D1XAoGxw.js";import"./chartDataContext-BsAxXToq.js";import"./CategoricalChart-Clhvfpfg.js";import"./Symbols-D_fRwM0Z.js";import"./symbol-CXPh_nhc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D8S_6cvI.js";import"./uniqBy-BDPR47By.js";import"./iteratee-kgLyRxOy.js";import"./AnimatedItems-2V-RFRVt.js";import"./useAnimationId-BTkxH0KN.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-f27aWKX5.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CodrMQ8l.js";import"./tooltipContext-B4HvzUEA.js";import"./RegisterGraphicalItemId-BvxwJdeC.js";import"./ErrorBarContext-DuvrknuQ.js";import"./GraphicalItemClipPath-Cu9TKpDv.js";import"./SetGraphicalItem-xqqXYUDX.js";import"./getZIndexFromUnknown-Bml9b-BI.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-hp8xxE1P.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
