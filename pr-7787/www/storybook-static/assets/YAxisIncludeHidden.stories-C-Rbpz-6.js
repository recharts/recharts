import{r as f,R as e}from"./iframe-BkEvAth1.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DLVoYarI.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-nf1W2Gc-.js";import{C as k}from"./ComposedChart-DoYpCRnR.js";import{X as K}from"./XAxis-RdR0TVxW.js";import{L as v}from"./Legend-BXo1MJNw.js";import{B as a}from"./Bar-DWRK7KGu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C6aq5sgc.js";import"./Text-BZ3mS1RC.js";import"./resolveDefaultProps-0lxOPE_6.js";import"./DOMUtils-BcdnRDzA.js";import"./isWellBehavedNumber-CFPi8ujN.js";import"./useId-C4p8DCEP.js";import"./useBackwardsCompatibleTheme-C9UXAGCH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CV-ewbAJ.js";import"./index-WgwKlZAp.js";import"./index-DEguUzrn.js";import"./RechartsWrapper-BQMoxy31.js";import"./axisSelectors-Tv8O7Qi2.js";import"./throttle-D101QSOu.js";import"./d3-scale-CLBHc1rG.js";import"./index-B8WpKNcF.js";import"./index-BRKc8NTQ.js";import"./renderedTicksSlice-DA-CVNBV.js";import"./index-BKOJ-Qmj.js";import"./CartesianAxis-BTQZoIY0.js";import"./Layer-B86MwzYN.js";import"./types-CCpLRaHh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-ByLTz-Wk.js";import"./chartDataContext-DQU-1klM.js";import"./CategoricalChart-CFWcsDQS.js";import"./Symbols-Cfz0iFpH.js";import"./symbol-Cndg8C7R.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CNOTyxbq.js";import"./uniqBy-vII-2Sju.js";import"./iteratee-V58mN6Z0.js";import"./AnimatedItems-DAE7yXHk.js";import"./useAnimationId-BXkgTCLA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CPSx8OX_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-l5lysgay.js";import"./tooltipContext-DSWceIOC.js";import"./RegisterGraphicalItemId-7FSphn26.js";import"./ErrorBarContext-TeZDWbxG.js";import"./GraphicalItemClipPath-B-LRUwBU.js";import"./SetGraphicalItem-CKJc8ABb.js";import"./getZIndexFromUnknown-vhCcbLMS.js";import"./useGraphicalItemIdentity-C648VAOs.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
