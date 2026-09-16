import{r as f,R as e}from"./iframe-DlBA_NHD.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B5aZasbZ.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BOYVZGeR.js";import{C as k}from"./ComposedChart-C_8xlH-x.js";import{X as K}from"./XAxis-CN5TgDqJ.js";import{L as v}from"./Legend-CLPSwn_J.js";import{B as a}from"./Bar-BTZv4eW8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Bdz7xSee.js";import"./Text-CICH4fLL.js";import"./resolveDefaultProps-C8Ozokz2.js";import"./DOMUtils-B-Y8jIku.js";import"./isWellBehavedNumber-BHQR8F7C.js";import"./useId-DfZYzD58.js";import"./useBackwardsCompatibleTheme-DZYIoyAk.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-R1mFVhfI.js";import"./index-2M50Q2uq.js";import"./index-CsNZB3UM.js";import"./RechartsWrapper-hVJCe5PM.js";import"./axisSelectors-CON7ryxt.js";import"./throttle-EeT9c_n_.js";import"./d3-scale-nBoiSLy0.js";import"./index-Bc4bnspn.js";import"./index-BgT2sRhI.js";import"./renderedTicksSlice-BAGWAjRI.js";import"./index-B9Sew5zo.js";import"./CartesianAxis-C833i1Hp.js";import"./Layer-DLKMiHzQ.js";import"./types-CqsOLULy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DNfpc-WW.js";import"./chartDataContext-Dz5AUJl-.js";import"./CategoricalChart-YMws6pgL.js";import"./Symbols-BgaBOx_k.js";import"./symbol-CzVP89M7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CqxEVlyX.js";import"./uniqBy-1Xh4LtIK.js";import"./iteratee-D-EbqcpX.js";import"./AnimatedItems-KG4Q9B6N.js";import"./useAnimationId-ZOIa2F-P.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-oI5YaF0F.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BF0jq83h.js";import"./tooltipContext-Dmktbw-7.js";import"./RegisterGraphicalItemId-DYXz-Xt3.js";import"./ErrorBarContext-ZM-eyTPM.js";import"./GraphicalItemClipPath-CLhUFps9.js";import"./SetGraphicalItem-0kKuUivG.js";import"./getZIndexFromUnknown-BfBejeMq.js";import"./useGraphicalItemIdentity-DwrMS_39.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
