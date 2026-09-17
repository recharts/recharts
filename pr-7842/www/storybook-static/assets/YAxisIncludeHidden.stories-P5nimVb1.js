import{r as f,R as e}from"./iframe-CChz1bjN.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D3lxiiSv.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-J8dqmnLP.js";import{C as k}from"./ComposedChart-CYDZ6cYR.js";import{X as K}from"./XAxis-Dz7Mu1Ti.js";import{L as v}from"./Legend-icxTpVXe.js";import{B as a}from"./Bar-jD4Q7hGC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BPWxH0ZN.js";import"./Text-BrAnNoDm.js";import"./resolveDefaultProps-DJguzPnh.js";import"./DOMUtils--GcIornt.js";import"./isWellBehavedNumber-PtazZpkz.js";import"./useId-K9oYYmyx.js";import"./useBackwardsCompatibleTheme-BGpxY7da.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CPJzWnIR.js";import"./index-CoE7QQC7.js";import"./index-CtYYpEHs.js";import"./RechartsWrapper-ChebgGg6.js";import"./axisSelectors-Bb5mJC8T.js";import"./throttle-DthdhVSw.js";import"./d3-scale-DDBYxdkW.js";import"./index-CFolhqr8.js";import"./index-By2IEA6Z.js";import"./renderedTicksSlice-CR60wYV2.js";import"./index-DDJfRyTp.js";import"./CartesianAxis-DfCGaEVk.js";import"./Layer-CvQSqWng.js";import"./types-7thkXqxr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DkExCOrE.js";import"./chartDataContext-QAaM8qFu.js";import"./CategoricalChart-9EjbSGzt.js";import"./Symbols-BdWwIbai.js";import"./symbol-CytgmwlT.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DnV8f39A.js";import"./uniqBy-CPev9fIs.js";import"./iteratee-Bo1K-GJU.js";import"./AnimatedItems-BIr5SWwF.js";import"./useAnimationId-q2i8nWUT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DohuQVgo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DRMRiarj.js";import"./tooltipContext-T5Np760b.js";import"./RegisterGraphicalItemId-Bv9eLHhO.js";import"./ErrorBarContext-DOiMkOOX.js";import"./GraphicalItemClipPath-Dod_0DGM.js";import"./SetGraphicalItem-N_7Gn5e1.js";import"./getZIndexFromUnknown-BI92rzQK.js";import"./useGraphicalItemIdentity-DNZCCG3V.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
