import{r as f,R as e}from"./iframe-Zh2ccugb.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DZs1fmzf.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DEmBd4ZB.js";import{C as k}from"./ComposedChart-Dd1MizuK.js";import{X as K}from"./XAxis-Csr8aJtN.js";import{L as v}from"./Legend-aJhKvZPb.js";import{B as a}from"./Bar-BP724zKh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DiL3sO7Q.js";import"./Text-MWlHmKAn.js";import"./resolveDefaultProps-fH52x6Wq.js";import"./ZIndexLayer-Xr-T5Ltv.js";import"./index-DCPtMhny.js";import"./index-Bpm_0b-N.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-ODY0eR4B.js";import"./throttle-B3lkaQcW.js";import"./axisSelectors-CeETa2Oh.js";import"./d3-scale-oTva27Ef.js";import"./CartesianAxis-CIOwjTNM.js";import"./Layer-C95YSbsg.js";import"./types-aszg7ufr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DqNUbck1.js";import"./index-BTZK7nKb.js";import"./index-WmNaFkcT.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CwKOWqmW.js";import"./index-CMNAmNto.js";import"./fillDefinitions-CSMYcBHa.js";import"./CartesianChart-nM5gdBcu.js";import"./chartDataContext-CFkN0KVz.js";import"./CategoricalChart-DWn3sGtD.js";import"./Symbols-S44HEmao.js";import"./symbol-UAwU-psM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Csv0_1PL.js";import"./uniqBy-FqU-5Unm.js";import"./iteratee-DDOrFaHy.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BE_TnqZR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BZ898oCF.js";import"./useAnimationId-CwFbYXoE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-wgF5Hj2i.js";import"./tooltipContext-BIpiKwdI.js";import"./ErrorBarContext-f9PwKgv4.js";import"./activeStyles-D6kWvGgQ.js";import"./SetGraphicalItem-Dg3wmm6w.js";import"./getZIndexFromUnknown-DA2_TRCf.js";import"./useEffectiveDataKey-Ctjc01_U.js";import"./omit-B1CaXPmp.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
