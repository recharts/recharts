import{r as f,R as e}from"./iframe-BGeanFOP.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-nfM60xrE.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DNSx6PWp.js";import{C as k}from"./ComposedChart-jKIfad3O.js";import{X as K}from"./XAxis-DgRdCkIO.js";import{L as v}from"./Legend-W3eeAJ18.js";import{B as s}from"./Bar-CWAiWPCm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-74Zc7Ouu.js";import"./CartesianAxis-BCs8btUF.js";import"./Layer-D0e6T1oI.js";import"./resolveDefaultProps-fa-Aou02.js";import"./Text-B_9O6xoI.js";import"./DOMUtils-CoWv9FZp.js";import"./isWellBehavedNumber-BHEyknYr.js";import"./Label-CBWHmy26.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-gVlIv7an.js";import"./index-ywOkgYAE.js";import"./index-D4eYnHXo.js";import"./types-Uf272Grm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CZmWC0Pi.js";import"./immer-Ba__3GQM.js";import"./RechartsWrapper-CglI8KYy.js";import"./index-Be2A9QLd.js";import"./index-DMs8Ncya.js";import"./axisSelectors-B9MbVKUE.js";import"./d3-scale-DG6z6DUu.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Da0n2f02.js";import"./chartDataContext-itTBInKu.js";import"./CategoricalChart-K-eTl3yz.js";import"./Symbols-D3KDRtFF.js";import"./symbol-DYZKPaAC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-uPFxcMrP.js";import"./uniqBy-DSO5Q0bs.js";import"./iteratee-DXgvlm8k.js";import"./tooltipContext-Cf4HIy64.js";import"./AnimatedItems-C1hTs3HP.js";import"./index-BPJnJB5S.js";import"./useAnimationId-Cqn1EcvY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BfTmTDK0.js";import"./ActiveShapeUtils-CNEGy-9v.js";import"./RegisterGraphicalItemId-DsxBoKW-.js";import"./ErrorBarContext-BGfqcTM-.js";import"./GraphicalItemClipPath-Rse-X5zx.js";import"./SetGraphicalItem-BEY5qE9v.js";import"./getZIndexFromUnknown-DpuEwmLU.js";import"./graphicalItemSelectors-BRplbNr6.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
