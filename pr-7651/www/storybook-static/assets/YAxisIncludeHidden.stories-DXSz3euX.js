import{r as f,R as e}from"./iframe-gJmHOoV1.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BZbOJGmt.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-SLldW8vD.js";import{C as k}from"./ComposedChart-Cjd81jW2.js";import{X as K}from"./XAxis-CL1K5HKB.js";import{L as v}from"./Legend-bxQVu_p9.js";import{B as s}from"./Bar-BQXOTeRW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BW3VHSxT.js";import"./Text-BFMrUcgU.js";import"./resolveDefaultProps-EuD2qw6Y.js";import"./DOMUtils-DoteccEu.js";import"./isWellBehavedNumber-C4nB07Ky.js";import"./useBackwardsCompatibleTheme-t9HOmvr9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cs9adZB_.js";import"./index-BdFJZkPY.js";import"./index-DNgAqdgl.js";import"./RechartsWrapper-uLgma0gs.js";import"./index-D2MlSgDp.js";import"./index-_1fsdksf.js";import"./throttle-C0HH0ZDc.js";import"./axisSelectors-BbNLjq-V.js";import"./d3-scale-SCvl-fAD.js";import"./renderedTicksSlice-DkFdVLqh.js";import"./CartesianAxis-Byci1LgV.js";import"./Layer-DMyVzZAK.js";import"./types-BsPCKB2-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B3NOhLAb.js";import"./chartDataContext-Btj7Fomq.js";import"./CategoricalChart-Bdw8EORd.js";import"./Symbols-z9xxGOoR.js";import"./symbol-CISepo4K.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Y-qWOeHt.js";import"./uniqBy-BvB2bptq.js";import"./iteratee-JebvSegM.js";import"./AnimatedItems-DO16LAh4.js";import"./useAnimationId-BPNuV2bD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CbNU9WCQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D-WSdclC.js";import"./tooltipContext-BZ1i1qvi.js";import"./RegisterGraphicalItemId-ClU1Ba2D.js";import"./ErrorBarContext-Dv7pLviF.js";import"./GraphicalItemClipPath-C8fMELX2.js";import"./SetGraphicalItem-BuXSQ0wS.js";import"./getZIndexFromUnknown-5rr_RI2u.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Cc0yXS9y.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
