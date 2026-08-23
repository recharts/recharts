import{r as f,R as e}from"./iframe-J2FnkNkN.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DtzyVJ31.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CIfx3dbz.js";import{C as k}from"./ComposedChart-jyhVlhQd.js";import{X as K}from"./XAxis-9YTS4CGv.js";import{L as v}from"./Legend-D-Zhozxt.js";import{B as s}from"./Bar-BF6f2qeb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Bl3T8NIS.js";import"./Text-DoArQ2iR.js";import"./resolveDefaultProps-C36Ti6I7.js";import"./DOMUtils-DrtZ7889.js";import"./isWellBehavedNumber-Bda2kxwI.js";import"./useId-BqCnyWtn.js";import"./useBackwardsCompatibleTheme-iB5pgxqo.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BcQVAnhI.js";import"./index-DOkoL7Wj.js";import"./index-DRH1Q61C.js";import"./RechartsWrapper-tuonj_dH.js";import"./index-udl5h_c3.js";import"./index-B1zoM-7H.js";import"./throttle-Dd6uK12C.js";import"./axisSelectors-XOgqlW54.js";import"./d3-scale-BnVmKfe4.js";import"./renderedTicksSlice-uiaDKKzv.js";import"./CartesianAxis-yBNynPDV.js";import"./Layer-B9c44e16.js";import"./types-cmsIqA-S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-7orgvIwE.js";import"./chartDataContext-DsIZ8kzc.js";import"./CategoricalChart-Dws3VtHh.js";import"./Symbols-D6nbCmzg.js";import"./symbol-Cnvzar8t.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CcIe0GmH.js";import"./uniqBy-HD7GgsnH.js";import"./iteratee-Bg0tlSUT.js";import"./AnimatedItems-DaE3ZoZL.js";import"./useAnimationId-B8FTTFdD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B_K-GkWm.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DbeW4ISg.js";import"./tooltipContext-entPuZP8.js";import"./RegisterGraphicalItemId-4W54GOXR.js";import"./ErrorBarContext-nAJ3rKAi.js";import"./GraphicalItemClipPath-BR02B87f.js";import"./SetGraphicalItem-B2-Omghc.js";import"./getZIndexFromUnknown-DdfPvwcz.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CfGcF6Eu.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
