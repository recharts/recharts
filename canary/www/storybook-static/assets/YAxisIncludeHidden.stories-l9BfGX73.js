import{r as f,R as e}from"./iframe-R4QFQ0mF.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-D-mO_MPY.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BTkVJube.js";import{C as k}from"./ComposedChart-CPp9Pcna.js";import{X as K}from"./XAxis-ByHGiOU3.js";import{L as v}from"./Legend-CElsNDhX.js";import{B as s}from"./Bar-HlUZVBCp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CX1Ejt3V.js";import"./CartesianAxis-DvCYtJ7x.js";import"./Layer-C8zF3tZM.js";import"./resolveDefaultProps-UuXIKvS7.js";import"./Text-GL96gXYN.js";import"./DOMUtils-_wFbcz4z.js";import"./isWellBehavedNumber-SGwhJUiP.js";import"./Label-gFQEPWtd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D26CDD8U.js";import"./index-BBlWDw9H.js";import"./index-DqGKL0Lc.js";import"./types-CyqiaD7e.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C_2YTMnY.js";import"./immer-C5zbr-FM.js";import"./RechartsWrapper-D9XL2NUc.js";import"./index-C7Ze2qQC.js";import"./index-KYrClEjC.js";import"./axisSelectors-CP1mQpG7.js";import"./d3-scale-CmSi9of_.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BPaTY41c.js";import"./chartDataContext-rpS38Kv6.js";import"./CategoricalChart-19q5KTev.js";import"./Symbols-C4uiRQk0.js";import"./symbol-C_D4j-JV.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B2eBjAqg.js";import"./uniqBy-CBOsBGNk.js";import"./iteratee-Bd9zYSkO.js";import"./tooltipContext-JmuPlMMI.js";import"./AnimatedItems-yF_BXiw0.js";import"./useAnimationId-QtK1xgnL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bd4RpfP5.js";import"./ActiveShapeUtils-BkpD7S65.js";import"./RegisterGraphicalItemId-3Swfrcok.js";import"./ErrorBarContext-lGs_n3Xc.js";import"./GraphicalItemClipPath-DORaDiAV.js";import"./SetGraphicalItem-C97kVeur.js";import"./getZIndexFromUnknown-BV47QAln.js";import"./graphicalItemSelectors-CBUps-IM.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
