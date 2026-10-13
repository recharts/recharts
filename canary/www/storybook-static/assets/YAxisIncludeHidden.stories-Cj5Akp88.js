import{r as f,R as e}from"./iframe-NhQV4prz.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BZzMEbei.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CfLnBr12.js";import{C as k}from"./ComposedChart-BygaGWnl.js";import{X as K}from"./XAxis-Fp7U60n2.js";import{L as v}from"./Legend-DhXEWDJ9.js";import{B as a}from"./Bar-Bnc6XT1L.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BUAYU6sx.js";import"./Text-BjHxixwZ.js";import"./resolveDefaultProps-DiB_0bHm.js";import"./pageBackground-CDOOBPh1.js";import"./isWellBehavedNumber-CZC1TcYQ.js";import"./useId-BhvwEVie.js";import"./useBackwardsCompatibleTheme-RAZcM6ed.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-L-3od7Tk.js";import"./index-BSL_lC_q.js";import"./index-CDv5DZpz.js";import"./axisSelectors-CI2m5dZK.js";import"./throttle-DIKmaWkS.js";import"./d3-scale-DKOiWQKf.js";import"./CartesianAxis-Brd3Au8o.js";import"./Layer-BBUzG4Ds.js";import"./types-CquoFe81.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C3ai8iRv.js";import"./index-Cmohh-L0.js";import"./index-DaOiqL7H.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BxN86ujp.js";import"./index-Dc9b_9OD.js";import"./CartesianChart-CiIIIaIF.js";import"./chartDataContext-I3KBS5Dn.js";import"./CategoricalChart-BSIFNsGO.js";import"./Symbols-CvvF-3qc.js";import"./symbol-BdliE8yI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DkX5d6Uc.js";import"./uniqBy-eEafSCgx.js";import"./iteratee-1x0B9Dhz.js";import"./activeStyles-DbZl5mD5.js";import"./useAnimationId-CDdHAGde.js";import"./dataEntryStyles-C3Awxqtk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B_Rp6Z4j.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B50xX2fH.js";import"./tooltipContext-8dIBQ8qH.js";import"./ErrorBarContext-C6WKrP5w.js";import"./GraphicalItemClipPath-BZY88hTL.js";import"./SetGraphicalItem-BE6zKb5c.js";import"./getZIndexFromUnknown-BDWbOpYM.js";import"./useEffectiveDataKey-CCR_17cw.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
