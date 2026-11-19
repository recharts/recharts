import{r as f,R as e}from"./iframe-Cd5XZAZS.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-BKK4Q1hO.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DK_btX6x.js";import{C as k}from"./ComposedChart-C4dh_bHB.js";import{X as K}from"./XAxis-DuodIejs.js";import{L as v}from"./Legend-BlPnQgrE.js";import{B as a}from"./Bar-o2aavwFb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DZuK-EQs.js";import"./Text-wtrDapFR.js";import"./resolveDefaultProps-_VGnYbPZ.js";import"./ZIndexLayer-CbCfhAbh.js";import"./index-B-TxKf-H.js";import"./index-Co6Bjw3c.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-n6B6BMl9.js";import"./throttle-PHSKRlho.js";import"./axisSelectors-BHI5fpRs.js";import"./d3-scale-CgwU88kX.js";import"./CartesianAxis-DJMJDg5E.js";import"./Layer-B_2Ec-2K.js";import"./types-GkAdah5a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DPOz0IRP.js";import"./index-CvnUfrKo.js";import"./index-DVl92vRy.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-m0J5sskz.js";import"./index-xt3fboRF.js";import"./fillDefinitions-DUfOk_XW.js";import"./CartesianChart-DgF2iEt1.js";import"./chartDataContext-BT9LVt8h.js";import"./CategoricalChart-CUQRrDXZ.js";import"./Symbols-CoJLGMis.js";import"./symbol-ZYu2ZO_N.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C_w2V4jv.js";import"./uniqBy-C5fXCJV1.js";import"./iteratee-BY7Di4wg.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CotdwlGF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D-47M3_e.js";import"./useAnimationId-_tPgr2CA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ckMpYydv.js";import"./tooltipContext-C82edudL.js";import"./ErrorBarContext-BXlIU5Wf.js";import"./activeStyles-BcTmj77e.js";import"./SetGraphicalItem-pIsvI9Mb.js";import"./getZIndexFromUnknown-6NoZOlDS.js";import"./useEffectiveDataKey-Cop8dd2N.js";import"./omit-CnZMpust.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
