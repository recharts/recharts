import{r as f,R as e}from"./iframe-BWDwgK_D.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DWY-SSge.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C1O5MBWY.js";import{C as k}from"./ComposedChart-CGi5sLu_.js";import{X as K}from"./XAxis-CrYBQ4mi.js";import{L as v}from"./Legend-BjIejXbm.js";import{B as a}from"./Bar-DzDh8Cjn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BKEGIlSz.js";import"./Text-BizBnj_T.js";import"./resolveDefaultProps-Bp_p1EHk.js";import"./DOMUtils-iBBTwtfH.js";import"./isWellBehavedNumber-WNu-UqrG.js";import"./useId-D1g06gFI.js";import"./useBackwardsCompatibleTheme-BYeMUCh_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DRdRjEOe.js";import"./index-B49xXNHt.js";import"./index-CCaysGPM.js";import"./RechartsWrapper-DvAFqpAd.js";import"./axisSelectors-e9-Lmas5.js";import"./throttle-BcZmZghI.js";import"./d3-scale-BpMJuDGQ.js";import"./index-kktikCBK.js";import"./index-DFG57tTU.js";import"./renderedTicksSlice-xUJav-aw.js";import"./index-y3EgPNWn.js";import"./CartesianAxis-CMJX9mZH.js";import"./Layer-DAcTuudf.js";import"./types-loTHP4vv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B6ulmZoL.js";import"./chartDataContext-D0xRn858.js";import"./CategoricalChart-D3lIPbNt.js";import"./Symbols-DnQfi-OD.js";import"./symbol-CLmAQq4b.js";import"./path-DyVhHtw_.js";import"./useElementOffset-mZsotMeL.js";import"./uniqBy-INJ-naV8.js";import"./iteratee-BX6Ptr7z.js";import"./AnimatedItems-BustB_TV.js";import"./useAnimationId-_CO00dkp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CK5wd433.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CRD4kYgV.js";import"./tooltipContext-DbRiF-PB.js";import"./RegisterGraphicalItemId-DRBnYmKx.js";import"./ErrorBarContext-DvedyHFP.js";import"./GraphicalItemClipPath-BC50Hrc5.js";import"./SetGraphicalItem-CmL2KxpU.js";import"./getZIndexFromUnknown-Duj9bp0k.js";import"./useGraphicalItemIdentity-D6QbUwzB.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
