import{r as f,R as e}from"./iframe-BKSHRT_S.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DQujYqlQ.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BLeuW80U.js";import{C as k}from"./ComposedChart-CD-HLwTO.js";import{X as K}from"./XAxis-BuoXjJQH.js";import{L as v}from"./Legend-CGFvr50A.js";import{B as a}from"./Bar-DAcYmQcN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DbF58v67.js";import"./Text-B6tKJAid.js";import"./resolveDefaultProps-DcYWqzkb.js";import"./pageBackground-DKWjelca.js";import"./useId-PjG3o87t.js";import"./ZIndexLayer-Dc3T9ZED.js";import"./index-D7MQE7Za.js";import"./index-D-jrioKU.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CQ3ogHuY.js";import"./throttle-BkygAiqr.js";import"./dataEntryStyles-DoThh5sG.js";import"./axisSelectors-8rGbG1Qd.js";import"./d3-scale-A-Zbe_Tu.js";import"./CartesianAxis-D2IkBv7G.js";import"./Layer-BzU6Nn69.js";import"./types-DNwq_ZGY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-uVEXaARu.js";import"./index-rcRigKCu.js";import"./index-D9GCJXOs.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BDEQp4gV.js";import"./index-Cjyk5lan.js";import"./CartesianChart-Bg8a12nJ.js";import"./chartDataContext-vZViOemf.js";import"./CategoricalChart-rdB1CfJb.js";import"./Symbols-DA0cR1nt.js";import"./symbol-D6nHcF92.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Db2Vff8q.js";import"./uniqBy-BAvd38-h.js";import"./iteratee-Cs7UoLYE.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-BKkkdbj0.js";import"./useAnimationId-Nyn64y9A.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-MxzM-nYG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DPuoYgwg.js";import"./tooltipContext-DVEHwG57.js";import"./RegisterGraphicalItemId-D_NDQyK2.js";import"./ErrorBarContext-DwEbbuob.js";import"./SetGraphicalItem-DaNVol4K.js";import"./getZIndexFromUnknown-zY_U1eep.js";import"./useEffectiveDataKey-B8W36a2Q.js";import"./omit-DsdLshTs.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
