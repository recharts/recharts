import{r as f,R as e}from"./iframe-BehVlOkm.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Ds0Z47iT.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CdmzvBWn.js";import{C as k}from"./ComposedChart-CYwBQNg8.js";import{X as K}from"./XAxis-CQVzim4L.js";import{L as v}from"./Legend-CfuiwBwX.js";import{B as a}from"./Bar-DWpO7HuP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-3Vi5DR-p.js";import"./Text-DdbsBRSW.js";import"./resolveDefaultProps-9hqPoiPG.js";import"./DOMUtils-DRfi6Z_9.js";import"./isWellBehavedNumber-BwNlQ7J1.js";import"./useId-TSoobfid.js";import"./useBackwardsCompatibleTheme-DC96YUQX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C8fMsiAz.js";import"./index-nl04o6LQ.js";import"./index-lttadt3D.js";import"./RechartsWrapper-0yqzaTB4.js";import"./axisSelectors-DyVT26JG.js";import"./throttle-3ebqMYzS.js";import"./d3-scale-DlStqn9j.js";import"./index-CaKklxJL.js";import"./index-BrZJdMim.js";import"./renderedTicksSlice-dw4JvkQu.js";import"./index-BxFZJssh.js";import"./CartesianAxis-Dh9d1hc7.js";import"./Layer-Drrwe-kT.js";import"./types-CAE_u7CX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DZXsAfAP.js";import"./chartDataContext-COawrzjC.js";import"./CategoricalChart-Bb7rG0O4.js";import"./Symbols-DuGenZrt.js";import"./symbol-0ztgqzus.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dm1K4Zpo.js";import"./uniqBy-CS225_ZI.js";import"./iteratee-VXBxxD8z.js";import"./AnimatedItems-DX3Aqvyi.js";import"./useAnimationId-PYM0HN7I.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BUmqWu2s.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DgsGKv18.js";import"./tooltipContext-CNfojh2N.js";import"./RegisterGraphicalItemId-B_HypSlK.js";import"./ErrorBarContext-BsuukL4-.js";import"./GraphicalItemClipPath-DHrIaKZQ.js";import"./SetGraphicalItem-ke9OEdFg.js";import"./getZIndexFromUnknown-BBZUKcgv.js";import"./useGraphicalItemIdentity-CpoXyJzx.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
