import{r as f,R as e}from"./iframe-B6gM4DBh.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-d65xn9J2.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B4H70akx.js";import{C as k}from"./ComposedChart-DAUNCbv-.js";import{X as K}from"./XAxis-BPzJdn5a.js";import{L as v}from"./Legend-qAXQw7-7.js";import{B as s}from"./Bar-BfAue5Wl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-uI-6_naX.js";import"./Text-D8H4cfwv.js";import"./resolveDefaultProps-HOpiV2UA.js";import"./DOMUtils-BD82E1of.js";import"./isWellBehavedNumber-oWfLE68q.js";import"./useId-DmdpXOpx.js";import"./useBackwardsCompatibleTheme-9Vtrcjiv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C4neE0Nt.js";import"./index-CaHvefGu.js";import"./index-DbvGR5AH.js";import"./RechartsWrapper-D2vZVe4g.js";import"./axisSelectors-D78GfHI7.js";import"./throttle-CinY1Cg6.js";import"./d3-scale-CI-CA5sR.js";import"./index-kpSUoDvk.js";import"./index-8y1uh0JJ.js";import"./renderedTicksSlice-C9ov5r2C.js";import"./index-CgCBhtWH.js";import"./CartesianAxis-BQyu91wk.js";import"./Layer-BvISteiU.js";import"./types-B56u5L7u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DHo5twJf.js";import"./chartDataContext-SMCrbflL.js";import"./CategoricalChart-COvMpWfW.js";import"./Symbols-B96vx3HZ.js";import"./symbol-DjIioEey.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B_AujER3.js";import"./uniqBy-gLmjoiP9.js";import"./iteratee-DAM7e3NH.js";import"./AnimatedItems-DoXh_8P-.js";import"./useAnimationId-B9APFvDh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BJ2YLML2.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DnLJRiwf.js";import"./tooltipContext-C_v9qMgk.js";import"./RegisterGraphicalItemId-Bqoy6nT5.js";import"./ErrorBarContext-BH6HTwRn.js";import"./GraphicalItemClipPath-BlpQx9et.js";import"./SetGraphicalItem-CtntmLYm.js";import"./getZIndexFromUnknown-BiMpKIFg.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CO1r96aW.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Re=["WithIncludeHidden"];export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
