import{r as f,R as e}from"./iframe-CuYkZAih.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-2PiHbRgB.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-0x3uku_R.js";import{C as k}from"./ComposedChart-BkMchBFr.js";import{X as K}from"./XAxis-CuSaxTWM.js";import{L as v}from"./Legend-Ce-6Z8Xs.js";import{B as a}from"./Bar-B0KBQj7N.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DkhadSFF.js";import"./Text-CXyYB23t.js";import"./resolveDefaultProps-B8cjP6Xa.js";import"./DOMUtils-CE__HHZf.js";import"./isWellBehavedNumber-BcDmyfQy.js";import"./useId-m8zXXplu.js";import"./useBackwardsCompatibleTheme-D-5GiVJq.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DhyZBBI_.js";import"./index-D8cZoCL4.js";import"./index-BxmeqXxm.js";import"./RechartsWrapper-COZpTTaF.js";import"./axisSelectors-DIa8K2JO.js";import"./throttle-gMp3XSAK.js";import"./d3-scale-DA_CpRjn.js";import"./index-TSt0tMTq.js";import"./index-27otVVTa.js";import"./renderedTicksSlice-Cf_8fVTa.js";import"./index-C60udeJw.js";import"./CartesianAxis-D3i-DiW_.js";import"./Layer-GHV7gJU9.js";import"./types-CPc5yIEA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-dlpQhUsY.js";import"./chartDataContext-FQ-3D9_1.js";import"./CategoricalChart-CzQsygRV.js";import"./Symbols-Nxac4q2q.js";import"./symbol-CM4B46nT.js";import"./path-DyVhHtw_.js";import"./useElementOffset-tb76Zf_3.js";import"./uniqBy-B5r4YX5y.js";import"./iteratee-CqsXLn41.js";import"./AnimatedItems-B6_FAdg8.js";import"./useAnimationId-CKSd0jBH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CNLbh1Ie.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-48Bcq-tK.js";import"./tooltipContext-DYhRud9e.js";import"./RegisterGraphicalItemId-DI2Sgslq.js";import"./ErrorBarContext-DQRpVtQS.js";import"./GraphicalItemClipPath-BA9HfA5b.js";import"./SetGraphicalItem-Bwlc4Qg6.js";import"./getZIndexFromUnknown-B3sbz4hT.js";import"./useGraphicalItemIdentity-DpHd4fG4.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
