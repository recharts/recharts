import{r as f,R as e}from"./iframe-BFM8x9PA.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-2TBACSCB.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dx9mYmyj.js";import{C as k}from"./ComposedChart-kK9tUW2C.js";import{X as K}from"./XAxis-sqq-OrNO.js";import{L as v}from"./Legend--gsA69NI.js";import{B as a}from"./Bar-CwVYgJ1R.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Br3cCz6i.js";import"./Text-D2FZ9-P8.js";import"./resolveDefaultProps-Bd_5xcSs.js";import"./DOMUtils-eLbycdkH.js";import"./isWellBehavedNumber-D4sYzu_F.js";import"./useId-BKuqsutR.js";import"./useBackwardsCompatibleTheme-BTrqDtcc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DP5puj9b.js";import"./index-BWGXcjC4.js";import"./index-DVzpkoDY.js";import"./RechartsWrapper-DYXkzF69.js";import"./axisSelectors-DiNaBi7F.js";import"./throttle-DqtHcGYb.js";import"./d3-scale-BV6eo-EO.js";import"./index-CngxH_6L.js";import"./index-BWjxNJoO.js";import"./renderedTicksSlice-CjeZk4XK.js";import"./index-CMQv9dM_.js";import"./CartesianAxis-DRX8HKZ_.js";import"./Layer-Be0Rd-Q7.js";import"./types-CNyTn7M4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CkSZZlig.js";import"./chartDataContext-BTZBL-Eg.js";import"./CategoricalChart-Bte4O3H1.js";import"./Symbols-8NkpZttM.js";import"./symbol-CU5XoSW9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DtoiQLb6.js";import"./uniqBy-CMNVf6Sn.js";import"./iteratee-D0e9_Et7.js";import"./AnimatedItems-B1_R-VqI.js";import"./useAnimationId-B4FOQMwj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cn3rNWTe.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ct3yDoqv.js";import"./tooltipContext-DUWCCZNf.js";import"./RegisterGraphicalItemId-Cv5_OQqk.js";import"./ErrorBarContext-BazLNBpB.js";import"./GraphicalItemClipPath-jUcNwVzc.js";import"./SetGraphicalItem-CfBe4xfA.js";import"./getZIndexFromUnknown-CBMOvbuQ.js";import"./useGraphicalItemIdentity-CRa1F1Pi.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
