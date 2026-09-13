import{r as f,R as e}from"./iframe-jjE6mnhE.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-lyfbCDEa.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BF8b2iUS.js";import{C as k}from"./ComposedChart-CT0KVNUw.js";import{X as K}from"./XAxis-BmSvbO1p.js";import{L as v}from"./Legend-DrM0jSD_.js";import{B as a}from"./Bar-CEhwSuW_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CLl4R84L.js";import"./Text-yk6NtqvR.js";import"./resolveDefaultProps-DrW6c44U.js";import"./DOMUtils-ClCL_aT_.js";import"./isWellBehavedNumber-D962mg0S.js";import"./useId-qpgQMwe5.js";import"./useBackwardsCompatibleTheme-UPDRFRx4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-OM7L_4ys.js";import"./index-4Q1Js_Gc.js";import"./index-CHxyqgyq.js";import"./RechartsWrapper-G0-O6wcd.js";import"./axisSelectors-Da2-5Qyb.js";import"./throttle-DkPV1tJ5.js";import"./d3-scale-BsTwUgiH.js";import"./index-wKhQr2dB.js";import"./index-CQ_ODmEo.js";import"./renderedTicksSlice-B5bTJB_6.js";import"./index-SutJufb7.js";import"./CartesianAxis-Ce-_Po8B.js";import"./Layer-DvjfGsuf.js";import"./types-D-bzS3aM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Bv2YRKvd.js";import"./chartDataContext-BtBmRnZH.js";import"./CategoricalChart-CHDbAtKm.js";import"./Symbols-XFhoAaGU.js";import"./symbol-BHFAoXrD.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BncKUbAl.js";import"./uniqBy-BRtWYXzE.js";import"./iteratee-BRoualQB.js";import"./AnimatedItems-CKtAdJL6.js";import"./useAnimationId-B8D6e613.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BtzXAEUx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bi6thO6h.js";import"./tooltipContext-Bk4sh4kD.js";import"./RegisterGraphicalItemId-DLqbcJJV.js";import"./ErrorBarContext-CT6ZQdcj.js";import"./GraphicalItemClipPath-Cb68eAOX.js";import"./SetGraphicalItem-BUG0SFHa.js";import"./getZIndexFromUnknown-B1lKYXZR.js";import"./useGraphicalItemIdentity-D5HmZ81h.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
