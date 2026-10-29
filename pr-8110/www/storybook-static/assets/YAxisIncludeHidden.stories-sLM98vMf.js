import{r as f,R as e}from"./iframe-oYyBRks2.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CQwSDKOg.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CbmXT1dz.js";import{C as k}from"./ComposedChart-B-eq2Fp1.js";import{X as K}from"./XAxis-DvAGam0D.js";import{L as v}from"./Legend-D5cNAlWP.js";import{B as a}from"./Bar-Dg4fxgNN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-D2Ghzufd.js";import"./Text-BTTN-58y.js";import"./resolveDefaultProps-lgcxhifZ.js";import"./DOMUtils-oL4xRmBr.js";import"./ZIndexLayer-D9yXy4ut.js";import"./index-uP8uPv2q.js";import"./index-C0E8rQWU.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-FwVZQ2F9.js";import"./throttle-teQP-xJt.js";import"./axisSelectors-CzrEReB-.js";import"./d3-scale-Dsmu7PfS.js";import"./CartesianAxis-C0SgAXkt.js";import"./Layer-CyxA7s2s.js";import"./types-C_jjefDJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-PDwTct7N.js";import"./index-CorLv6ho.js";import"./index-DI7MM_Df.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BEJButs1.js";import"./index-DhsLJ5T7.js";import"./CartesianChart-Bd-kZVr0.js";import"./ZIndexPortal-B7800aDw.js";import"./CategoricalChart-DoegTXhB.js";import"./Symbols-DyH8vTj1.js";import"./symbol-DfdL_uUz.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-BuAadA4s.js";import"./dataEntryStyles-C_5MqVGt.js";import"./useElementOffset-DYKRqk9h.js";import"./uniqBy-DpT0Q-qD.js";import"./iteratee-6fmcBfsh.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-D0at5SMs.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-8sd_KAoB.js";import"./useAnimationId-C-eWMsqK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BUKShifC.js";import"./tooltipContext-BsFwGvkO.js";import"./ErrorBarContext-CVpEUN9z.js";import"./activeStyles-chOek7GE.js";import"./SetGraphicalItem-CofyTZmK.js";import"./getZIndexFromUnknown-DFrO-Gqk.js";import"./useEffectiveDataKey-BvG_PE5-.js";import"./omit-AsRof3ey.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
