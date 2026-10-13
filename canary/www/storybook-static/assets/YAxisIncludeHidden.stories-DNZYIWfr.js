import{r as f,R as e}from"./iframe-BpQ7m7wo.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DRCAJ4BY.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-MwSCz61s.js";import{C as k}from"./ComposedChart-C-yEvf4A.js";import{X as K}from"./XAxis-DE6o4Zll.js";import{L as v}from"./Legend-Bu_P9EXe.js";import{B as a}from"./Bar-CI3acAoh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BBIpfhf_.js";import"./Text-QB9mhIk2.js";import"./resolveDefaultProps-33rcogn6.js";import"./pageBackground-jCojFoRf.js";import"./isWellBehavedNumber-BVcmp2ni.js";import"./useId-Ba0OHruW.js";import"./useBackwardsCompatibleTheme-BV9LHmnt.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BrTVgKud.js";import"./index-DAB_MUnB.js";import"./index-CD4MTvij.js";import"./axisSelectors-BYDkrwMW.js";import"./throttle-dkzrvgSW.js";import"./d3-scale-Byhs4CrR.js";import"./CartesianAxis-1RRtp3t2.js";import"./Layer-DlRoNKW0.js";import"./types-XUWAitbU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-82sk-Quf.js";import"./index-CXa8VbQ8.js";import"./index-BbHMTUSJ.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BVbz7wfB.js";import"./index-ByFVwCBJ.js";import"./CartesianChart-DMhVIjmV.js";import"./chartDataContext-84s_zl93.js";import"./CategoricalChart-CxhuSAqC.js";import"./Symbols-DkzNgIJq.js";import"./symbol-C9XCxtRU.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CVtmla25.js";import"./uniqBy-dxNZ9HnU.js";import"./iteratee-Cblj0Mci.js";import"./activeStyles-C2IhZeJz.js";import"./useAnimationId-D3uGeL-A.js";import"./dataEntryStyles-CFn7kNor.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DVkCRlhI.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DiATo6ey.js";import"./tooltipContext-DDhPdX-u.js";import"./ErrorBarContext-DyJjK28E.js";import"./GraphicalItemClipPath-CDr7mMLr.js";import"./SetGraphicalItem-FOIPn71v.js";import"./getZIndexFromUnknown-Zpc6D4Is.js";import"./useEffectiveDataKey-yqjBtOm2.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
