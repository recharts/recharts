import{r as f,R as e}from"./iframe-BLIo_1nt.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-B-hKkgmv.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DC3TJ2KH.js";import{C as k}from"./ComposedChart-MrmH01T4.js";import{X as K}from"./XAxis-NUWW5fMr.js";import{L as v}from"./Legend-DcyuktsH.js";import{B as a}from"./Bar-Bpd2Gawo.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DBbSGEQz.js";import"./get-CjriyByo.js";import"./Label-CFregkfn.js";import"./Text-DGpe4WxS.js";import"./ZIndexLayer-BZ7iUhzZ.js";import"./index-X9B5BzRC.js";import"./index-DzqD25FH.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CTVIJxRd.js";import"./throttle-BVtqo_9X.js";import"./axisSelectors-zp31unE3.js";import"./diverging-0nS9y-pB.js";import"./CartesianAxis-CednQB0X.js";import"./Layer-BmO--khP.js";import"./types-C-m9Hr0T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bb6Mddqa.js";import"./index-CO4LKWIG.js";import"./index-BIvaYjey.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DHKT5KBC.js";import"./index-Cvsm1Tm8.js";import"./fillDefinitions-pQA0VntX.js";import"./CartesianChart-DiqGyEKX.js";import"./chartDataContext-CqIvcjot.js";import"./CategoricalChart-DIDmT5Om.js";import"./Symbols-DgGyp4Yg.js";import"./symbol-D8T0ODfo.js";import"./path-BBMZd4YL.js";import"./useElementOffset-VoZhZIkW.js";import"./uniqBy-D7cU4A4V.js";import"./iteratee-w-RXZ5GP.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-B2sIlIGL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D4nL3Ndu.js";import"./useAnimationId-BgYtx5DV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-wxtxdEJ1.js";import"./tooltipContext-C8JMsOca.js";import"./ErrorBarContext-GHF_OtFg.js";import"./activeStyles-CwggIO5e.js";import"./SetGraphicalItem-DvFjNtUQ.js";import"./getZIndexFromUnknown-cnBSox7j.js";import"./useEffectiveDataKey-CLP9K8e-.js";import"./omit-BIFVMJ9u.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
