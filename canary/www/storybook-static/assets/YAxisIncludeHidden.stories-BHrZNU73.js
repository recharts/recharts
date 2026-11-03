import{r as f,R as e}from"./iframe-Dveh6XC4.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-w9pVccwz.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CHGKLvUt.js";import{C as k}from"./ComposedChart-BOsUMJ6o.js";import{X as K}from"./XAxis-CRKEYqOq.js";import{L as v}from"./Legend-CQFo3MKV.js";import{B as a}from"./Bar-B48vwr9w.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Vwsx_sp3.js";import"./Text-DDi8tnpk.js";import"./resolveDefaultProps-DuxVF1QF.js";import"./DOMUtils-BsJwiviE.js";import"./ZIndexLayer-DbxRiqCY.js";import"./index-Cbmt_wIf.js";import"./index-CG-oseCj.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DOXrMTYm.js";import"./throttle-CRxbwEvt.js";import"./axisSelectors-BNJiRWtc.js";import"./d3-scale-XJHyjNta.js";import"./CartesianAxis-DUZQMGP0.js";import"./Layer-BJKthE-c.js";import"./types-XJ7-EVuf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cw-0pUCw.js";import"./index-BC5sf_5c.js";import"./index-uMZJip00.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BjJrVVo_.js";import"./index-Fu0XORfS.js";import"./fillDefinitions-BC_l7gtK.js";import"./CartesianChart-DPPEX1sp.js";import"./ZIndexPortal-yJs_hgSa.js";import"./CategoricalChart-BBllviTF.js";import"./Symbols-QXbi9vzZ.js";import"./symbol-CTWslb94.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Diqs6aNv.js";import"./uniqBy-r-8_JOan.js";import"./iteratee-F2t8nio4.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-C0azlQgx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-L-kKC_mf.js";import"./useAnimationId-ClkvXH7X.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CXVbuCLN.js";import"./tooltipContext-CwdmFdSB.js";import"./dataEntryStyles-CX9qr7B-.js";import"./ErrorBarContext-DkBQ5rXz.js";import"./activeStyles-C0UNB_bG.js";import"./SetGraphicalItem-B2n4iSWY.js";import"./getZIndexFromUnknown-DnDKF1zo.js";import"./useEffectiveDataKey-CghzYeW7.js";import"./omit-D9-jmYb8.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
