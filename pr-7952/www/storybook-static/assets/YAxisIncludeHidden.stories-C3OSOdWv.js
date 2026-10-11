import{r as f,R as e}from"./iframe-W_agkVyV.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BF1PYNAy.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CTdReD9p.js";import{C as k}from"./ComposedChart-C5TkesQ1.js";import{X as K}from"./XAxis-BMo9pONJ.js";import{L as v}from"./Legend-BtXzKbhi.js";import{B as a}from"./Bar-BVKsn0ou.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-ClOsex7o.js";import"./Text-BeEwTqv_.js";import"./resolveDefaultProps-B8X1uEjP.js";import"./pageBackground-BGxpKyNa.js";import"./isWellBehavedNumber-DiRVonYH.js";import"./useId-CJGe-UDk.js";import"./useBackwardsCompatibleTheme-Ctn7xKKB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BRJamsEl.js";import"./index-Bi2SdoGH.js";import"./index-CsXiVSUF.js";import"./axisSelectors-6axja2Em.js";import"./throttle-CA9ZAVQz.js";import"./d3-scale-HrkydzFI.js";import"./CartesianAxis-CPOh9De0.js";import"./Layer-BtznfAPn.js";import"./types-CaM0OvRl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CWlNAShs.js";import"./index-Dt83L4jz.js";import"./index-DIRpvxdg.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-C3mPyrs7.js";import"./index-BqSIxi03.js";import"./CartesianChart-1K0jUxr5.js";import"./chartDataContext-DCJ8bj1E.js";import"./CategoricalChart-Bzn-Gu2q.js";import"./Symbols-CsmzfHDw.js";import"./symbol-Dglao2xo.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DTnjneKq.js";import"./uniqBy-CNAIty-g.js";import"./iteratee-7xt3GUi6.js";import"./activeStyles-BahHAzuq.js";import"./useAnimationId-Bm_zuzY4.js";import"./dataEntryStyles-ubI82mtZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DwOi1yoY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ba2JWET-.js";import"./tooltipContext-D9oUn5TP.js";import"./ErrorBarContext-Bg5MlTZs.js";import"./GraphicalItemClipPath-eVqzfYHN.js";import"./SetGraphicalItem-MNgoA9Pf.js";import"./getZIndexFromUnknown-dwAR1fOo.js";import"./useEffectiveDataKey-Bzuj7hT4.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
