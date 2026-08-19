import{r as f,R as e}from"./iframe-TzfrCimv.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B2Z4R-y-.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dp5v9G1Y.js";import{C as k}from"./ComposedChart-0zP4qBoW.js";import{X as K}from"./XAxis-5FjHsuX0.js";import{L as v}from"./Legend-C7LdFeje.js";import{B as s}from"./Bar-CXvna7-5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-ORziBLCU.js";import"./Text-Cq_y2tEB.js";import"./resolveDefaultProps-CsgnMNsn.js";import"./DOMUtils-BXdig0h8.js";import"./isWellBehavedNumber-z9eNMbuG.js";import"./useBackwardsCompatibleTheme-6HIvPrWs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-LDMTKG6P.js";import"./index-31yWppKy.js";import"./index-I3E5SGvw.js";import"./RechartsWrapper-d5Ajpv94.js";import"./index-ououzFTQ.js";import"./index-DNVn7Vry.js";import"./throttle-BM90P8P9.js";import"./axisSelectors-Cg7dZLHA.js";import"./d3-scale-DDwg_EuX.js";import"./renderedTicksSlice-DA0LErEZ.js";import"./CartesianAxis-BGRgt604.js";import"./Layer-D26e-s_C.js";import"./types-GCQJUCAo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CBcHGY17.js";import"./chartDataContext-C9PL5caj.js";import"./CategoricalChart-NmYFScnM.js";import"./Symbols-VpyWRrnw.js";import"./symbol-C_f38eHA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DFpTBv-U.js";import"./uniqBy-C9EHRlA6.js";import"./iteratee-CCNscPsm.js";import"./AnimatedItems-q6ooW_4r.js";import"./useAnimationId-4hu6-jhP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DYFDa40n.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dw86rWrG.js";import"./tooltipContext-NUCe4P_t.js";import"./RegisterGraphicalItemId-ByzXvOvt.js";import"./ErrorBarContext-C3TPTEby.js";import"./GraphicalItemClipPath-DpRNkFFw.js";import"./SetGraphicalItem-B-6zq9YL.js";import"./getZIndexFromUnknown-B0R1yX0s.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DnxSRBj2.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const He=["WithIncludeHidden"];export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
