import{r as f,R as e}from"./iframe-GoDWXF60.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-oTWrO0dZ.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-rcyByprz.js";import{C as k}from"./ComposedChart-BNv_QKcO.js";import{X as K}from"./XAxis-Sd8wKWiC.js";import{L as v}from"./Legend-BP6P4IAV.js";import{B as a}from"./Bar-ciSgnWhy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-TKBbCyEO.js";import"./Text-DHajDoQn.js";import"./resolveDefaultProps-DtF3WVtu.js";import"./DOMUtils-BcP1iiu3.js";import"./isWellBehavedNumber-DVk2TMuq.js";import"./useId-CHExwNNq.js";import"./useBackwardsCompatibleTheme-C39YasS8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B3yNW9nz.js";import"./index-BMGI6I6X.js";import"./index-B1wbuLB1.js";import"./RechartsWrapper-C5ODBaUh.js";import"./axisSelectors-BMoJ3285.js";import"./throttle-BC2iKf2c.js";import"./d3-scale-Dm23_hA9.js";import"./index-B5osc4Bz.js";import"./index-4L7QbpcF.js";import"./renderedTicksSlice-Cio8NKuI.js";import"./index-b9Wor0gC.js";import"./CartesianAxis-B6o5gRjs.js";import"./Layer-BmsCQfeY.js";import"./types-y5j7YtAw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Ev1lyziP.js";import"./chartDataContext-B5KQQNXg.js";import"./CategoricalChart-Cojbw-YR.js";import"./Symbols-D0gTzOvh.js";import"./symbol-Dc6RLIDR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bn7Vt1QB.js";import"./uniqBy-BARLufVP.js";import"./iteratee-yiiCt5I6.js";import"./AnimatedItems-C_43VQlt.js";import"./useAnimationId-Bb0rmRoM.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CWLgxGci.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BMxJ69jq.js";import"./tooltipContext-dcjrap41.js";import"./RegisterGraphicalItemId-6e9wRMFk.js";import"./ErrorBarContext-RjE2YZS3.js";import"./GraphicalItemClipPath-pySZvy8y.js";import"./SetGraphicalItem-BKw5VKzR.js";import"./getZIndexFromUnknown-xuD5CItG.js";import"./useGraphicalItemIdentity-2iH_0CiR.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
