import{r as f,R as e}from"./iframe-CIqnkIPF.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-uqdlbLxE.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C4_auGQK.js";import{C as k}from"./ComposedChart-D4NhPDr5.js";import{X as K}from"./XAxis-B7yx9F7n.js";import{L as v}from"./Legend-CeNhuuzW.js";import{B as a}from"./Bar-BJDiNzT1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Drah4wki.js";import"./Text-DQlwJtIP.js";import"./resolveDefaultProps-BFyfbVPX.js";import"./DOMUtils-DNJKvmAc.js";import"./isWellBehavedNumber-qR6709gc.js";import"./useId-Bxa3d20C.js";import"./useBackwardsCompatibleTheme-tny2gIbf.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CdFbga_E.js";import"./index-9S55HN04.js";import"./index-BLp3voyE.js";import"./RechartsWrapper-BI930gKz.js";import"./axisSelectors-tSjH_GJH.js";import"./throttle-DQoqhRFH.js";import"./d3-scale-Bhl30Eoo.js";import"./index-Dd4tpery.js";import"./index-CmdQhCAH.js";import"./renderedTicksSlice-CvMTSVT4.js";import"./index-DK82_Rv1.js";import"./CartesianAxis-D54rrpy0.js";import"./Layer-BamNj_61.js";import"./types-t2__B9uA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CjwJjVuV.js";import"./chartDataContext-StRUZ171.js";import"./CategoricalChart-kSvqIkP0.js";import"./Symbols-BuldplOI.js";import"./symbol-CEHb0TCd.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DWWrDqts.js";import"./uniqBy-CrC70t5H.js";import"./iteratee-DAHo7lUT.js";import"./AnimatedItems-DeKxEgFK.js";import"./useAnimationId-Cd4eq7V7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-aJg6paiS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BeOi9VVh.js";import"./tooltipContext-ZENdNpmO.js";import"./RegisterGraphicalItemId-CTUnkLRc.js";import"./ErrorBarContext-Ow8l1Zrp.js";import"./GraphicalItemClipPath-Cq4Ga7ez.js";import"./SetGraphicalItem-A5whYu6T.js";import"./getZIndexFromUnknown-CcE74ElB.js";import"./useGraphicalItemIdentity-BPBVnbd3.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
