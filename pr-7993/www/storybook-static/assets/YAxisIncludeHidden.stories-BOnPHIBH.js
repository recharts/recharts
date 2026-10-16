import{r as f,R as e}from"./iframe-CXO7LpG4.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DOeYdqQk.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DfFYBEeE.js";import{C as k}from"./ComposedChart-CX86GF1x.js";import{X as K}from"./XAxis-BMVFXruj.js";import{L as v}from"./Legend-OHAT7ssA.js";import{B as a}from"./Bar-Bvf-m3_A.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CPCjl1xH.js";import"./Text-CQgXuSK-.js";import"./resolveDefaultProps-C5dcOo8R.js";import"./pageBackground-C22aj54-.js";import"./isWellBehavedNumber-Xxh63OZA.js";import"./useId-CFkdxUsD.js";import"./useBackwardsCompatibleTheme-Cgf-vIhj.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-8oHJlBan.js";import"./index-C7BEDOmI.js";import"./index-dHCi8WFp.js";import"./axisSelectors-PR70UCKy.js";import"./throttle-DaNNjE4n.js";import"./d3-scale-DchtYoFX.js";import"./CartesianAxis-C3NdPzIM.js";import"./Layer-D31-Hvub.js";import"./types-B806ejcH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DvrMDUgG.js";import"./index-BmGLfy3v.js";import"./index-D_a3nOcX.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-sOQIHtEN.js";import"./index-C9lYrgEX.js";import"./CartesianChart-Cr8OfXtw.js";import"./chartDataContext-DJlEdu52.js";import"./CategoricalChart-Du8kaQ2V.js";import"./Symbols-C_oR1yez.js";import"./symbol-D7bf8irw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BfmKGhNj.js";import"./uniqBy-CnxfY6gQ.js";import"./iteratee-DH4OJnDe.js";import"./activeStyles-BJ4YqvBn.js";import"./useAnimationId-BbnDDjkN.js";import"./dataEntryStyles-VHSSmKTo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CsIBLxAK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B5MsqJFC.js";import"./tooltipContext-CDKuN4Ar.js";import"./ErrorBarContext-DEed49-o.js";import"./GraphicalItemClipPath-Bdz9TeZ1.js";import"./SetGraphicalItem-DftB5RCs.js";import"./getZIndexFromUnknown-DjNA_0e7.js";import"./useEffectiveDataKey-B0ZkPejj.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
