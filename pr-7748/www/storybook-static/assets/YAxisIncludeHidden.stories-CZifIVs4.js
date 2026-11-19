import{r as f,R as e}from"./iframe-Gg4ukcCI.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DOuLffri.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DlNyh_xi.js";import{C as k}from"./ComposedChart-C1UNd2GX.js";import{X as K}from"./XAxis-DOco_gcc.js";import{L as v}from"./Legend-DhqkmL-h.js";import{B as a}from"./Bar-tpFdtf-q.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DdUKW8N3.js";import"./Text-b8eoKvTG.js";import"./resolveDefaultProps-DhxEFOug.js";import"./ZIndexLayer-D5rwnqu2.js";import"./index-C2HXgDT0.js";import"./index-CXFDGi8T.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D8GOATX4.js";import"./throttle-CUgxKpyu.js";import"./axisSelectors-a1SI1Wf4.js";import"./d3-scale-Br8c0ClH.js";import"./CartesianAxis-BfWLv6d8.js";import"./Layer-BoT4M5vY.js";import"./types-BPcXCIuq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DvSqlga1.js";import"./index-HuopnsCQ.js";import"./index-BeAfusT4.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D9XD6s1l.js";import"./index-BpeL0xzJ.js";import"./fillDefinitions-ihHkonIl.js";import"./CartesianChart-BjLEuFc_.js";import"./chartDataContext-CnuflyS8.js";import"./CategoricalChart-COQQ2eYQ.js";import"./Symbols-Dd8eQ8SU.js";import"./symbol-KoL4YSEk.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D8U2qNR0.js";import"./uniqBy-By79vucy.js";import"./iteratee-DR_VEJPR.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-oHOQ7SK5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Csr5lTlg.js";import"./useAnimationId-DNK2Kfuo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DuHRv64l.js";import"./tooltipContext-C2W-FmQi.js";import"./ErrorBarContext-CJwSW4gu.js";import"./activeStyles-tWC5f0r5.js";import"./SetGraphicalItem-_cwLqG8F.js";import"./getZIndexFromUnknown-BVKy8b3G.js";import"./useEffectiveDataKey-DtjZjT7w.js";import"./omit-DmrPEJBR.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
