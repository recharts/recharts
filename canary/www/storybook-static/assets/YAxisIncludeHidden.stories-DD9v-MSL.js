import{r as f,R as e}from"./iframe-CcyN1ZV1.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DQC0nPlg.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DWTF0hX9.js";import{C as k}from"./ComposedChart-BIM71YL9.js";import{X as K}from"./XAxis-6LjH0TsS.js";import{L as v}from"./Legend--RziHhKA.js";import{B as a}from"./Bar-DNXzfDPP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DeeiGPOy.js";import"./Text-GXnWYGAc.js";import"./resolveDefaultProps-CTY6OgJi.js";import"./pageBackground-D_UkCcJZ.js";import"./isWellBehavedNumber-CnBZkqHG.js";import"./useId-C9u3rAWe.js";import"./useBackwardsCompatibleTheme-BdBaTXYz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CpLPcSfq.js";import"./index-Dyila60U.js";import"./index-AJQJO5x9.js";import"./axisSelectors-B4ReTl4S.js";import"./throttle-B9Dwf27c.js";import"./d3-scale-BxouAPuB.js";import"./CartesianAxis-DnpMFCoE.js";import"./Layer-cvLVo1Gu.js";import"./types-U4cAvHsY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bjh8Fjbe.js";import"./index-B2XcMOi-.js";import"./index-BVkJtaEu.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-C-9S0sCc.js";import"./index-_YIGzYhu.js";import"./CartesianChart-B3SfFTfT.js";import"./chartDataContext-BSpB3ZZP.js";import"./CategoricalChart-CXFsQjCx.js";import"./Symbols-CekAX86v.js";import"./symbol-DsGNj27r.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B2YA_4mp.js";import"./uniqBy-Ddp6Bm8x.js";import"./iteratee-KZVFWJDs.js";import"./activeStyles-CeU8zAVc.js";import"./useAnimationId-J9w0IkU1.js";import"./dataEntryStyles-VGeW2eAl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DdGfQr7e.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D6VvEytF.js";import"./tooltipContext-CcDYFQ4J.js";import"./ErrorBarContext-1RRlDzY7.js";import"./GraphicalItemClipPath-BRUG8_Yr.js";import"./SetGraphicalItem-CtBWbyZo.js";import"./getZIndexFromUnknown-qyJrGT0U.js";import"./useEffectiveDataKey-D_8eHxuE.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
