import{r as f,R as e}from"./iframe-iz9dRDhe.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DtrhiCef.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BdPqcxx_.js";import{C as k}from"./ComposedChart-DjYayHbw.js";import{X as K}from"./XAxis-6Wrkyy5u.js";import{L as v}from"./Legend-DwOR3Z5p.js";import{B as a}from"./Bar-C2QbnzMp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C1iyqFpa.js";import"./Text-CUS7a8VN.js";import"./resolveDefaultProps-DtNPAsTQ.js";import"./DOMUtils-lupu9nOG.js";import"./isWellBehavedNumber--SX7jZAJ.js";import"./useId-HDpOWxLn.js";import"./useBackwardsCompatibleTheme-BDaqedqa.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-TqmbKYqx.js";import"./index-DxHaJGfQ.js";import"./index-Bl-8dy8S.js";import"./RechartsWrapper-CUdNLZqv.js";import"./axisSelectors-2huN7QkS.js";import"./throttle-DE0tlCdA.js";import"./d3-scale-DHC9WiBl.js";import"./index-mn3tws3H.js";import"./index-8jy5f1Un.js";import"./renderedTicksSlice-CEU3EycZ.js";import"./index-Bn7rp-xI.js";import"./CartesianAxis-CdElIjx1.js";import"./Layer-DYGhC4_B.js";import"./types-LFzxVX1I.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DOgw209l.js";import"./chartDataContext-CeQ-Tm4w.js";import"./CategoricalChart-D__Jof4a.js";import"./Symbols-BfhqqNlw.js";import"./symbol-CqpTEBVx.js";import"./path-DyVhHtw_.js";import"./useElementOffset-jd_Y94ov.js";import"./uniqBy-D6bHLL80.js";import"./iteratee-ch_GTcmf.js";import"./AnimatedItems-Dc8Ivobd.js";import"./useAnimationId-7yr0q3Dd.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CC1ns2p9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DFPOUViC.js";import"./tooltipContext-BIyiiZIL.js";import"./RegisterGraphicalItemId-CDExOK2J.js";import"./ErrorBarContext-CNF3begD.js";import"./GraphicalItemClipPath-C5R-amEZ.js";import"./SetGraphicalItem-CMqF7RNk.js";import"./getZIndexFromUnknown-BGBr16x2.js";import"./useGraphicalItemIdentity-MtWjlwkT.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
