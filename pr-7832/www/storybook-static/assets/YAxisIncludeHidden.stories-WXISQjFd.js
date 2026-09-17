import{r as f,R as e}from"./iframe-DmaTyynO.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DzMB2LoA.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C61SZGFC.js";import{C as k}from"./ComposedChart-DrMn_Pg_.js";import{X as K}from"./XAxis-Nv8Uh7AY.js";import{L as v}from"./Legend-BzvPZGhO.js";import{B as a}from"./Bar-CNRM9Zob.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CMdX73k3.js";import"./Text-2AUGODc6.js";import"./resolveDefaultProps-CtyyIUUO.js";import"./DOMUtils-BpsSUmre.js";import"./isWellBehavedNumber-BK90QDph.js";import"./useId-3sGAzHtm.js";import"./useBackwardsCompatibleTheme-DqjXKSq9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cc-SqaEZ.js";import"./index-OHCUWRAn.js";import"./index-V9EvyoG7.js";import"./RechartsWrapper-BGC7v2QA.js";import"./axisSelectors-BM_a9F6K.js";import"./throttle-DMA9KLNR.js";import"./d3-scale-DI5fHYPy.js";import"./index-HETsTNte.js";import"./index-COAu8Zax.js";import"./renderedTicksSlice-DqtLTQXs.js";import"./index-C4wr6Lq-.js";import"./CartesianAxis-CUMWkMKo.js";import"./Layer-CKq6pjpc.js";import"./types-DmC6Y3U4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BKxlRmtn.js";import"./chartDataContext-DAmq05uD.js";import"./CategoricalChart-BUSfmukV.js";import"./Symbols-Ceoa5jAY.js";import"./symbol-DJiPU_Yr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DgjamZIE.js";import"./uniqBy-CTKPSl-J.js";import"./iteratee-CWLa6CO6.js";import"./AnimatedItems-BAF8K0tv.js";import"./useAnimationId-DxNsV_0m.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BZia4JMZ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BIrsW6YR.js";import"./tooltipContext-gafoVliR.js";import"./RegisterGraphicalItemId-CDWIwrm3.js";import"./ErrorBarContext-uI5M5418.js";import"./GraphicalItemClipPath-DsQ7p0LM.js";import"./SetGraphicalItem-D6LEIG6h.js";import"./getZIndexFromUnknown-C7bh6-yo.js";import"./useGraphicalItemIdentity-Cz-Bal4G.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
