import{r as f,R as e}from"./iframe-tfZrcrMF.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-BOlMvWid.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CC8kCstT.js";import{C as k}from"./ComposedChart-BCjiIJ4o.js";import{X as K}from"./XAxis-DhOgSkqh.js";import{L as v}from"./Legend-B9D1yZE0.js";import{B as a}from"./Bar-BNV61IU6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CrLdB5k3.js";import"./Text-DXjy-RzD.js";import"./resolveDefaultProps-BpCpS2kK.js";import"./ZIndexLayer-DnL-EDkP.js";import"./index-CCpPbL-G.js";import"./index-CQW0Ruw4.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D2vFLO2n.js";import"./throttle-DycvlznN.js";import"./axisSelectors-BkiuLlPZ.js";import"./d3-scale-uLY3we2s.js";import"./CartesianAxis-DHW_9iiH.js";import"./Layer-ru88AdSr.js";import"./types-CWW0D7cm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DCheLSnn.js";import"./index-0VCZupX4.js";import"./index-C00ri7pa.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Mi5m4ATr.js";import"./index-DC_tjhxs.js";import"./fillDefinitions-CQPwZfwM.js";import"./CartesianChart-Cxx6k3Ff.js";import"./chartDataContext-pD1W3H_C.js";import"./CategoricalChart-DGtxkSeD.js";import"./Symbols-yui_aiRC.js";import"./symbol-ru9lBt2i.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BOZs20Ry.js";import"./uniqBy-q1lloGjW.js";import"./iteratee-CDaF10ns.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CpzODNOV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C_wD8Q_z.js";import"./useAnimationId-CiRiV3_R.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Mflib2w7.js";import"./tooltipContext-C0HD_iam.js";import"./ErrorBarContext-5NXkIyss.js";import"./activeStyles-CW3oynl8.js";import"./SetGraphicalItem-BPWS4To0.js";import"./getZIndexFromUnknown-BvChPoEn.js";import"./useEffectiveDataKey-Bate5zYb.js";import"./omit-DRTsLSTe.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
