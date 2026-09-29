import{r as f,R as e}from"./iframe-VTxubO5w.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-bVdfj-ty.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BFYFcuFW.js";import{C as k}from"./ComposedChart-CdaYpXwX.js";import{X as K}from"./XAxis-3pFA-Nf-.js";import{L as v}from"./Legend-qtLHfXZy.js";import{B as a}from"./Bar-DfGDyJrk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DNcqVwFA.js";import"./Text-uR2Yj3PM.js";import"./resolveDefaultProps-BFp7OOq4.js";import"./DOMUtils-BAN1xftN.js";import"./isWellBehavedNumber-yx76n7CA.js";import"./useId-DFmSC7ae.js";import"./useBackwardsCompatibleTheme-BYtc2o9v.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-NKRjvkpW.js";import"./index-4Jh92J2Q.js";import"./index-DdjkBMS_.js";import"./RechartsWrapper-Bsatjkvb.js";import"./axisSelectors-CvnfJ2AM.js";import"./throttle-Bj7f8bZe.js";import"./d3-scale-BMdsVvRJ.js";import"./index-DtWT2JaI.js";import"./index-Cr87dMf9.js";import"./renderedTicksSlice-BrmgGQgk.js";import"./index-1-3dFAhM.js";import"./CartesianAxis-C-En2Edk.js";import"./Layer-D1MCI5Ak.js";import"./types-CDzvAUga.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BDdGXWds.js";import"./chartDataContext-DH5kQpc3.js";import"./CategoricalChart-DxD0BnY1.js";import"./Symbols-mnsValfd.js";import"./symbol-v33gieij.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D-QmICBX.js";import"./uniqBy-Ch5xiMZc.js";import"./iteratee-M9ugrzAI.js";import"./AnimatedItems-YcLJd9jr.js";import"./useAnimationId-DPVDnlp2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C-w4cEpw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DG8apj0w.js";import"./tooltipContext-IUJpGMFY.js";import"./RegisterGraphicalItemId-BW5kojHS.js";import"./ErrorBarContext-BlpBbu3_.js";import"./GraphicalItemClipPath-qDNJ-tN3.js";import"./SetGraphicalItem-BqDT3cr3.js";import"./getZIndexFromUnknown-C09cG1lr.js";import"./useGraphicalItemIdentity-jWQRhRf0.js";import"./dataEntryStyles-DvC98tT9.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
