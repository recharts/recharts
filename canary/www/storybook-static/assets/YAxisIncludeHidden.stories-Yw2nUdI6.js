import{r as f,R as e}from"./iframe-DHiXiYOt.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CSlSkAf_.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-K2mOff9O.js";import{C as k}from"./ComposedChart-q17tGP41.js";import{X as K}from"./XAxis-D6ROrCNU.js";import{L as v}from"./Legend-CeWgDI8a.js";import{B as a}from"./Bar-Ba51PmND.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Gr9qDnB4.js";import"./Text-BC_B-bRG.js";import"./resolveDefaultProps-CZL46Cig.js";import"./pageBackground-D2gDVXk4.js";import"./useId-C22RmVdj.js";import"./ZIndexLayer-DeVgP8h4.js";import"./index-Zkovv_Mu.js";import"./index-D_YreF5U.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CfAL7aRK.js";import"./throttle-9IxKLS84.js";import"./dataEntryStyles-CfpC7ekH.js";import"./axisSelectors-BDB90zwk.js";import"./d3-scale-mRNKtGCI.js";import"./CartesianAxis-BSNVQcOz.js";import"./Layer-DJ7NPFY5.js";import"./types-rgikEiEV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bih8KR78.js";import"./index-8ZsYbMQX.js";import"./index-coRvk7yp.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CRTUKx29.js";import"./index-CvPWQYz_.js";import"./CartesianChart-OeiKzUqX.js";import"./chartDataContext-NYE-dDPb.js";import"./CategoricalChart-Ddy3kJ44.js";import"./Symbols-CWw_TPA_.js";import"./symbol-BqJAsPmG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BB2XL7B2.js";import"./uniqBy-Cs-chbgd.js";import"./iteratee-Cq8SxEsF.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-CUDvtf42.js";import"./useAnimationId-Ca9jA2_m.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cnk8SPPS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHG_GvWA.js";import"./tooltipContext-D_8qLvLa.js";import"./RegisterGraphicalItemId-BCzoSTNC.js";import"./ErrorBarContext-CZu1Y3hj.js";import"./SetGraphicalItem-BBSXIdI5.js";import"./getZIndexFromUnknown-BDHhJLHc.js";import"./useEffectiveDataKey-Gb-Ai2uq.js";import"./omit-ktetNWuD.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
