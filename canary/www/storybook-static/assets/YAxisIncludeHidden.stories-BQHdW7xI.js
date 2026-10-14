import{r as f,R as e}from"./iframe-Cy0y2ns8.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CsAJfuiU.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DIpYS2pc.js";import{C as k}from"./ComposedChart-CZFSAvco.js";import{X as K}from"./XAxis-I6ByZryQ.js";import{L as v}from"./Legend-BMezv6hX.js";import{B as a}from"./Bar-DTdmGkz3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-VahG2YbD.js";import"./Text-CR6ssGu_.js";import"./resolveDefaultProps-W2SA8EIl.js";import"./pageBackground-C3xeFLUy.js";import"./isWellBehavedNumber-BHC-xMw7.js";import"./useId-DoEOHgvO.js";import"./useBackwardsCompatibleTheme-DoDvRsUd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DfeIwWxW.js";import"./index-Cannfx1n.js";import"./index-MdLyaQUy.js";import"./axisSelectors-B794UmHN.js";import"./throttle-GHjNdOLX.js";import"./d3-scale-Bptb5_HU.js";import"./CartesianAxis-DZCowAwb.js";import"./Layer-Dt1c85pW.js";import"./types-es-lSoS7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CcSlQNqm.js";import"./index-ed9S2gc_.js";import"./index-DMDvJQSi.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-tnntysZI.js";import"./index-z8Y8cGgG.js";import"./CartesianChart-CkZRPVAF.js";import"./chartDataContext-_Lx0KL5V.js";import"./CategoricalChart-C4X2uKz7.js";import"./Symbols-DCYwnKrZ.js";import"./symbol-CMOY-E8i.js";import"./path-DyVhHtw_.js";import"./useElementOffset-sgSlwsLC.js";import"./uniqBy-9BG5xD31.js";import"./iteratee-D9gJLSIg.js";import"./activeStyles-Cnxc9Yt_.js";import"./useAnimationId-DaE5gtmK.js";import"./dataEntryStyles-D42MsVUE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BAcsN_iB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-XGy6Fbre.js";import"./tooltipContext-GJ6dETi4.js";import"./ErrorBarContext-Cwi5XQfL.js";import"./GraphicalItemClipPath-ANLjpQPo.js";import"./SetGraphicalItem-jtlbfoJE.js";import"./getZIndexFromUnknown-DrdS4TKg.js";import"./useEffectiveDataKey-BEJg52qX.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
