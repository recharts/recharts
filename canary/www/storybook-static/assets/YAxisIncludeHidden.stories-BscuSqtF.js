import{r as f,R as e}from"./iframe-BBGBS6DV.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-DsrpZZjl.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C7go6sDc.js";import{C as k}from"./ComposedChart-KBOCL7OW.js";import{X as K}from"./XAxis-CMxF0Wjl.js";import{L as v}from"./Legend-BPK4L1Lj.js";import{B as s}from"./Bar-B_2UvRNg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BV7Nc0IZ.js";import"./CartesianAxis-DBDeoTme.js";import"./Layer-C7b9GhMV.js";import"./resolveDefaultProps-CdaEo1sJ.js";import"./Text-CCZTp9OW.js";import"./DOMUtils-Da1klpxA.js";import"./isWellBehavedNumber-DqttSiMx.js";import"./Label-Iqg4BS5e.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-WmfwTIzB.js";import"./index-sfHPztcf.js";import"./index-BfdY1IDa.js";import"./types-Bj7fEVXg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DeFm9vmM.js";import"./immer-u2-xWsf6.js";import"./RechartsWrapper-CZVIAxqy.js";import"./index-CLfBpOwp.js";import"./index-Bl5evuWS.js";import"./axisSelectors-DUU6Ovr8.js";import"./d3-scale-Ceq_dgL5.js";import"./string-B6fdYHAA.js";import"./CartesianChart-8bJyHLLZ.js";import"./chartDataContext-6hP0GYiP.js";import"./CategoricalChart-BNe26d_a.js";import"./Symbols-RhqujVO2.js";import"./symbol-BVubqoOw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BG_pV8kB.js";import"./uniqBy-Bo0b8aJc.js";import"./iteratee-BBXnt8_Z.js";import"./tooltipContext-DwcJ1qdw.js";import"./AnimatedItems-alz79Juh.js";import"./useAnimationId-CCG8jh7R.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-EzzDeVF8.js";import"./ActiveShapeUtils-NLKbpFnA.js";import"./RegisterGraphicalItemId-B9dZ270Y.js";import"./ErrorBarContext-BeUQIIOs.js";import"./GraphicalItemClipPath-CkBiEPpf.js";import"./SetGraphicalItem-QS7NgdyV.js";import"./getZIndexFromUnknown-CFKBgZxf.js";import"./graphicalItemSelectors-7U3n1hMO.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
