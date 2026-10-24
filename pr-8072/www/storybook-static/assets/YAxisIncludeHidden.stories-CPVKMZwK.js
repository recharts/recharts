import{r as f,R as e}from"./iframe-z3NgSViZ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Cq1FHamq.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BX0CZtnZ.js";import{C as k}from"./ComposedChart-BMGZ_TwG.js";import{X as K}from"./XAxis-6HQNOcHb.js";import{L as v}from"./Legend-Du71ahAl.js";import{B as a}from"./Bar-ny9MIXZN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Cv5DkZGS.js";import"./Text-Bf3Z0ESX.js";import"./resolveDefaultProps-DKxZJqnD.js";import"./pageBackground-SSHR1dqO.js";import"./isWellBehavedNumber-B9JEbcQX.js";import"./useId-BBfhtQXH.js";import"./useBackwardsCompatibleTheme-DpJUriCO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B4GmRtpr.js";import"./index-B3bVO830.js";import"./index-h-xMeUpP.js";import"./dataEntryStyles-C3z4X2RS.js";import"./axisSelectors-CgbkNJhz.js";import"./throttle-CwdrNliT.js";import"./d3-scale-CwYOu9hN.js";import"./CartesianAxis-aatvopbC.js";import"./Layer-DIcps5If.js";import"./types-2rYpOkQj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DYq8RKWJ.js";import"./index-CZd_v0hL.js";import"./index-gkGbSS0A.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D_oQRH40.js";import"./index-bcahlE0Z.js";import"./CartesianChart-BZn7jg65.js";import"./chartDataContext-rha9Z1YY.js";import"./CategoricalChart-DXqdBwWs.js";import"./Symbols-Jw1F6xH7.js";import"./symbol-BJRaGT2z.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CRwL0Zci.js";import"./uniqBy-BT4Juj7F.js";import"./iteratee-DkLC-6Nh.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-CeGdwWio.js";import"./useAnimationId-Cz2G0J8W.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BneWyhZX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CBpakVvV.js";import"./tooltipContext-ByiR1jPw.js";import"./RegisterGraphicalItemId-BSkjC-ao.js";import"./ErrorBarContext-Cu9qYyvb.js";import"./SetGraphicalItem-C6QUze-d.js";import"./getZIndexFromUnknown-Cmh0Tl84.js";import"./useEffectiveDataKey-CRDGSrQh.js";import"./omit-DX_AvoGg.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
