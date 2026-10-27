import{r as f,R as e}from"./iframe-DNsV3xvw.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B4nJYauW.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BkDmHlXx.js";import{C as k}from"./ComposedChart-DUPDtyKq.js";import{X as K}from"./XAxis-BbuAR6XK.js";import{L as v}from"./Legend-B1543AzP.js";import{B as a}from"./Bar-BDG2sPRV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DxEHX6q3.js";import"./Text-D6nhI6eC.js";import"./resolveDefaultProps-DaIQaOsN.js";import"./pageBackground-DcwhSKr2.js";import"./ZIndexLayer-B29GXU_O.js";import"./index-Dztf8_-N.js";import"./index-CvtjAZLm.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-wmmlw52W.js";import"./throttle-CpyfnSH3.js";import"./dataEntryStyles-BPFhmlnt.js";import"./axisSelectors-DtPl2Lwd.js";import"./d3-scale-Y31MRKoT.js";import"./CartesianAxis-BNXXsiE3.js";import"./Layer-CxNpu0Gw.js";import"./types-En29vQtS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-gGubTrlw.js";import"./index-DpSt1MRy.js";import"./index-Byk9LK8-.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BitdsUuz.js";import"./index-HmVV84Ak.js";import"./CartesianChart-CQXK8dPk.js";import"./ZIndexPortal-D_VHs3j1.js";import"./CategoricalChart-Dkljh1MP.js";import"./Symbols-CXxyrJ-f.js";import"./symbol-Da48TnzF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D3m42K-G.js";import"./uniqBy-C1A792zL.js";import"./iteratee-D19tejeG.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-Dxbb0X28.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DYTWCfMr.js";import"./useAnimationId-BFFnWfJy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DHdP5lJT.js";import"./tooltipContext-DuKUy6BV.js";import"./RegisterGraphicalItemId-0BinVrEN.js";import"./ErrorBarContext-BojgDOr6.js";import"./activeStyles-BmYbBsXF.js";import"./SetGraphicalItem-BMxaBFjY.js";import"./getZIndexFromUnknown-DqcYMWif.js";import"./useEffectiveDataKey-BlrFpRwa.js";import"./omit-DQEsgukW.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
