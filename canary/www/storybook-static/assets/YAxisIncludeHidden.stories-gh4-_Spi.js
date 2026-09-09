import{r as f,R as e}from"./iframe-D3O6io8m.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BzpJJ7qL.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DQB1nost.js";import{C as k}from"./ComposedChart-Cn_VV92w.js";import{X as K}from"./XAxis-DUDfURVS.js";import{L as v}from"./Legend-DR8u6wSa.js";import{B as a}from"./Bar-DfvI3QYm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CWCww6MW.js";import"./Text-De-f5jqv.js";import"./resolveDefaultProps-kP9mtom1.js";import"./DOMUtils-Cvz_isR7.js";import"./isWellBehavedNumber-B1sq1tTx.js";import"./useId-CrZafLfR.js";import"./useBackwardsCompatibleTheme-CHhEQzss.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CNTWWRns.js";import"./index-B0ONpcCM.js";import"./index-5LaKRWmN.js";import"./RechartsWrapper-DlAcodG6.js";import"./axisSelectors-DYaW_3kH.js";import"./throttle-CaEEZkOZ.js";import"./d3-scale-CVKZtCyw.js";import"./index-emaHTIIt.js";import"./index-DdBSGBzR.js";import"./renderedTicksSlice-Do9cyu74.js";import"./index-kC31JoLB.js";import"./CartesianAxis-B7axhf8y.js";import"./Layer-nZxEgPG5.js";import"./types-B4ar_Rgv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-rEbOxYKn.js";import"./chartDataContext-NUXFSw-S.js";import"./CategoricalChart-BslMClSv.js";import"./Symbols-CgmQggkW.js";import"./symbol-BkgXbFHN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-fyOV3B1W.js";import"./uniqBy-D-toxyLD.js";import"./iteratee-BOVM6bQ2.js";import"./AnimatedItems-B5d6Ob4T.js";import"./useAnimationId-Cz9FmiXJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-8bfrkS9P.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CaF-7U2y.js";import"./tooltipContext-UlF4qhSY.js";import"./RegisterGraphicalItemId-JcTZBT0j.js";import"./ErrorBarContext-CYOIqMSi.js";import"./GraphicalItemClipPath-B0houyvR.js";import"./SetGraphicalItem-DB0WYfC5.js";import"./getZIndexFromUnknown-BFGTa6K3.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B6FCrkUh.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
