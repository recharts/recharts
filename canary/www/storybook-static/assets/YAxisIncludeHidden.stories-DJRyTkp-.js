import{r as f,R as e}from"./iframe-LXaU_yGQ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CSeoCJK5.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BSsrgEaY.js";import{C as k}from"./ComposedChart-Dk11ZJ3E.js";import{X as K}from"./XAxis-p7HCxuCB.js";import{L as v}from"./Legend-CW4FQckG.js";import{B as a}from"./Bar-vF4XoZWk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DYJ5zyBE.js";import"./Text-B2wTTXhn.js";import"./resolveDefaultProps-DbWwNOSn.js";import"./DOMUtils-wasDQX09.js";import"./ZIndexLayer-D76BtQdI.js";import"./index-DZIymj_T.js";import"./index-C00bVPiJ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bwd8WsKu.js";import"./throttle-ByKIQNrZ.js";import"./axisSelectors-COTFFsL0.js";import"./d3-scale-xVZA29h1.js";import"./CartesianAxis-DZ_FsRV8.js";import"./Layer-CHoN3bhu.js";import"./types-WPs3xsFH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-bFWdrA3f.js";import"./index-Cj2wRU1Y.js";import"./index-DCFuZ4eP.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D3XMumfr.js";import"./index-D3Vd1Yho.js";import"./fillDefinitions-GJQeghKS.js";import"./CartesianChart-BiL3U0u_.js";import"./ZIndexPortal-B1CrZPtb.js";import"./CategoricalChart-DH4yc53T.js";import"./Symbols-DwjhqM4z.js";import"./symbol-BBQKO5RK.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BTM80VK-.js";import"./uniqBy-BQLHmkt7.js";import"./iteratee-CVfcQAqg.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-edsO3Rk5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CE9_TMcs.js";import"./useAnimationId-BI8ofMSC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-57-jWYU2.js";import"./tooltipContext-DgNaqLpi.js";import"./dataEntryStyles-CwUtW2sJ.js";import"./ErrorBarContext-DEyq_U4L.js";import"./activeStyles-PwSBVgUE.js";import"./SetGraphicalItem-GbWatXWt.js";import"./getZIndexFromUnknown-CDDdElLq.js";import"./useEffectiveDataKey-zCOJ1kMm.js";import"./omit-VLbbGC-r.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
