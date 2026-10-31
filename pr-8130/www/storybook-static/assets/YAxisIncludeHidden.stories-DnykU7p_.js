import{r as f,R as e}from"./iframe-DP_a1dmY.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DqctmLMG.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-rjLYhejy.js";import{C as k}from"./ComposedChart-CSr8xtVa.js";import{X as K}from"./XAxis-1vjsoN9j.js";import{L as v}from"./Legend-BZrfV6wX.js";import{B as a}from"./Bar-B2_BGS8-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-ja-Sj5Q7.js";import"./Text-Dp_r5yDX.js";import"./resolveDefaultProps-BUA_ea65.js";import"./DOMUtils-mf3xp45a.js";import"./ZIndexLayer-DlEiCgSn.js";import"./index-Cpxqs5RX.js";import"./index-CZaxsyUC.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C8froBOH.js";import"./throttle-BChPb-_m.js";import"./axisSelectors-DEw1mS80.js";import"./d3-scale-CQwtQXkW.js";import"./CartesianAxis-C1uxWw-Y.js";import"./Layer-CZaWfsGO.js";import"./types-CDz_n5r5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-vKkijtCh.js";import"./index-B7p3ZvHO.js";import"./index-BKlw8SLM.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B4nQvyyr.js";import"./index-CDLzOnEQ.js";import"./fillDefinitions-ClRF1Jdn.js";import"./CartesianChart-BUksmgNb.js";import"./ZIndexPortal-DjdaUnXL.js";import"./CategoricalChart-Cb54doQf.js";import"./Symbols-rf6N_jcM.js";import"./symbol-DeF3ladi.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CYP9m4TG.js";import"./uniqBy-Bwcnbh18.js";import"./iteratee-Doq5RcdM.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DL3Ydiqu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CYUStI_n.js";import"./useAnimationId-CFEdeYhu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DC7CnxCS.js";import"./tooltipContext-Bj28zsI1.js";import"./dataEntryStyles-4JNZcrwL.js";import"./ErrorBarContext-tkKb7Nex.js";import"./activeStyles-BV6CK3cL.js";import"./SetGraphicalItem-5vhsybgs.js";import"./getZIndexFromUnknown-dAQr12f2.js";import"./useEffectiveDataKey-D45Rikd2.js";import"./omit-cE-fDaQb.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
