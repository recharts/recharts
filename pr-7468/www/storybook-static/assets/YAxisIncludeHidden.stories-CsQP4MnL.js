import{r as f,R as e}from"./iframe-Bd_RatVP.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-KJSd-Ivi.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bs3cmT56.js";import{C as k}from"./ComposedChart-C0J2irJb.js";import{X as K}from"./XAxis-CxMafso2.js";import{L as v}from"./Legend-9MYXYV6G.js";import{B as s}from"./Bar-CxdHlLTG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-D2eywazJ.js";import"./CartesianAxis-DYnLL5ki.js";import"./Layer-CSKVUvgL.js";import"./resolveDefaultProps-CDT2X36A.js";import"./Text-CID6qmBG.js";import"./DOMUtils-BvIcVirU.js";import"./isWellBehavedNumber-vEzZ_uBL.js";import"./Label-_LaAHgCb.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CW5Q6iO0.js";import"./index-DuMhoHLg.js";import"./index-AIDQn2zy.js";import"./types-B_YM2FYy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BaNjR9ZK.js";import"./immer-K2Jr_glw.js";import"./RechartsWrapper-DoiYSoxN.js";import"./index-CtCj_c9U.js";import"./index-KgYFzznq.js";import"./axisSelectors-iePK0TpX.js";import"./d3-scale-8NOk75ft.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BgWder66.js";import"./chartDataContext-2ZBdxPuo.js";import"./CategoricalChart-B7ZdZ9dp.js";import"./Symbols-BJZoHXe5.js";import"./symbol-BMyvtyS_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BeZVN4uM.js";import"./uniqBy-ROVpOYmf.js";import"./iteratee-CZJ3xSSv.js";import"./tooltipContext-B1X7LxIq.js";import"./AnimatedItems-CTN3MMrY.js";import"./useAnimationId-WD2dkHdB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BiRALYrC.js";import"./ActiveShapeUtils-CKHNZG0U.js";import"./RegisterGraphicalItemId-CSpPBahn.js";import"./ErrorBarContext-CXGw6SKK.js";import"./GraphicalItemClipPath-CqhiUh0n.js";import"./SetGraphicalItem-CCPPdaQB.js";import"./getZIndexFromUnknown-DSNtHs0J.js";import"./graphicalItemSelectors-B_3X-Q6o.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
