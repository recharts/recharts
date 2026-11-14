import{r as f,R as e}from"./iframe-DtzldFfh.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CQZ6A0GW.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-PhkkSvay.js";import{C as k}from"./ComposedChart-C0Pw1zvu.js";import{X as K}from"./XAxis-BY5CXCjh.js";import{L as v}from"./Legend-CCpYiMhz.js";import{B as a}from"./Bar-CscaL18R.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DAuHelmL.js";import"./Text-BCSLlBnR.js";import"./resolveDefaultProps-u2nTClVy.js";import"./ZIndexLayer-BWdFNyrE.js";import"./index-CCZfAL_G.js";import"./index-CuN-tN9X.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-IPVOZM3m.js";import"./throttle-Drk_UoQx.js";import"./axisSelectors-C2izPxUf.js";import"./d3-scale-BmMEJmfI.js";import"./CartesianAxis-DxmrFkoo.js";import"./Layer-BcJtH6wk.js";import"./types-aakKZZv0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DbXdst8y.js";import"./index-xLc8fata.js";import"./index-6_OYP7D7.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-RpB-MHrg.js";import"./index-OfVoCx4o.js";import"./fillDefinitions-4fWzE3Hc.js";import"./CartesianChart-D8rXmJzw.js";import"./chartDataContext-BNrACUYr.js";import"./CategoricalChart-Bkw2UtyY.js";import"./Symbols-CvrtYxxZ.js";import"./symbol-D-v3LMsn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-0o51WQzY.js";import"./uniqBy-DSURNKI0.js";import"./iteratee-BoqSWeEv.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-kT4_La43.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-sBf3lxLL.js";import"./useAnimationId-Dzlg4g7S.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-lUUDRG4C.js";import"./tooltipContext-uJRo-_HY.js";import"./ErrorBarContext-CFgTAQbG.js";import"./activeStyles-BesdgLFE.js";import"./SetGraphicalItem-31k7kJYq.js";import"./getZIndexFromUnknown-CIvTotf4.js";import"./useEffectiveDataKey-BP-D5MQu.js";import"./omit-B1g3ijZ2.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
