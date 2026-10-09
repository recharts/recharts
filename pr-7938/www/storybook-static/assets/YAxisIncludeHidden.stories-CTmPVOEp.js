import{r as f,R as e}from"./iframe-DyRGY0m8.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CiOcUDSR.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C8Goqaoo.js";import{C as k}from"./ComposedChart-DeUFnq4z.js";import{X as K}from"./XAxis-ClyuyVSJ.js";import{L as v}from"./Legend-DekGki40.js";import{B as a}from"./Bar-CuSnvdur.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DmSSoRs6.js";import"./Text-BK2IfBRh.js";import"./resolveDefaultProps-CwBj0Vjn.js";import"./pageBackground-BnJW5YJX.js";import"./isWellBehavedNumber-JGpa1dK4.js";import"./useId-DkHD0fqt.js";import"./useBackwardsCompatibleTheme-B8R5ZMSD.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CELDjLLn.js";import"./index-Cv8tkEHt.js";import"./index-DxURkMdl.js";import"./RechartsWrapper-eOw39y0P.js";import"./axisSelectors-DJKcPqvS.js";import"./throttle-D2TCso2q.js";import"./d3-scale-sk2wIxSM.js";import"./index-CzwSuytx.js";import"./index-DSQh__sX.js";import"./renderedTicksSlice-DM2Uh_-7.js";import"./index-BZwbzPta.js";import"./CartesianAxis-C3YZMA4b.js";import"./Layer-Cn0quWvc.js";import"./types-vbUeFItv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B9Ziwbgu.js";import"./chartDataContext-DdROdGCg.js";import"./CategoricalChart-CS-kA2nE.js";import"./Symbols-B9mIS2TB.js";import"./symbol-CPUUWFC3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-fQu1PDa3.js";import"./uniqBy-GFY-aWot.js";import"./iteratee-wH6oTw1B.js";import"./AnimatedItems-B4s4aHQH.js";import"./useAnimationId-DVRsp9Ga.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dw0JBNRA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DW6rbsEP.js";import"./tooltipContext-CrfpOag7.js";import"./dataEntryStyles-BSCSOZbL.js";import"./ErrorBarContext-CkmAHEEl.js";import"./GraphicalItemClipPath-CzHoeJLu.js";import"./SetGraphicalItem-C2wvR06e.js";import"./getZIndexFromUnknown-CyqcnY0q.js";import"./useGraphicalItemIdentity-CI8fdYZe.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
