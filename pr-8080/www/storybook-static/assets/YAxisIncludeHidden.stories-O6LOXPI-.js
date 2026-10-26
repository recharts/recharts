import{r as f,R as e}from"./iframe-zw95Jg5I.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DxhDNNfO.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BhhR1tic.js";import{C as k}from"./ComposedChart-CTgj0L1M.js";import{X as K}from"./XAxis-FSNVlg8z.js";import{L as v}from"./Legend-C1xiNV_O.js";import{B as a}from"./Bar-CrGl-kvA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B1gN_1pg.js";import"./Text-d1Lwh7G9.js";import"./resolveDefaultProps-oavmg9-5.js";import"./pageBackground-04zbeTMB.js";import"./useId-CtBeXuXP.js";import"./ZIndexLayer-DT4lNh0N.js";import"./index-CWbrX-i7.js";import"./index-CWy5ARPc.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DUH0PWke.js";import"./throttle-Cgnp6_V2.js";import"./dataEntryStyles-B6Pg3he4.js";import"./axisSelectors-DAhbEMcv.js";import"./d3-scale-BXUDNojI.js";import"./CartesianAxis-Ps3DKwB1.js";import"./Layer-KXbvniH8.js";import"./types-BkYRfFSe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BhGNFZVD.js";import"./index-BPsqxPXN.js";import"./index-BEzQf4L4.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DNF4noKd.js";import"./index-bXT-B2Zu.js";import"./CartesianChart-CAbKVIox.js";import"./chartDataContext-DsEiNuFy.js";import"./CategoricalChart-DSpSOmf_.js";import"./Symbols-g6eOoLF6.js";import"./symbol-D4N1oQUq.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DSktO4lL.js";import"./uniqBy-BGk6LrH6.js";import"./iteratee-Dt64Sdjl.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-Dzq6_wuP.js";import"./useAnimationId-DHyavBGa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B120DpgE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-KL7GHwh1.js";import"./tooltipContext-BlO69eeP.js";import"./RegisterGraphicalItemId-Ci1zbwmF.js";import"./ErrorBarContext-D3KXG5mH.js";import"./SetGraphicalItem-D5SILBm3.js";import"./getZIndexFromUnknown-CtV9dAbo.js";import"./useEffectiveDataKey-ak6DNGcC.js";import"./omit-CK7M7hQH.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
