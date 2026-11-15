import{r as f,R as e}from"./iframe-CQK5cKb5.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CXpvs3FV.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B7W_lSrS.js";import{C as k}from"./ComposedChart-BPNXxxpF.js";import{X as K}from"./XAxis-C7d_UGHt.js";import{L as v}from"./Legend-BMSPASHC.js";import{B as a}from"./Bar-B3Oiy8yj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CQ2HjeWR.js";import"./Text-Z2ey8U7p.js";import"./resolveDefaultProps-sIKj046z.js";import"./ZIndexLayer-9k2RLX5n.js";import"./index-Dm38SIQa.js";import"./index-BKYCEKLA.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CGBkjniO.js";import"./throttle-CtjoOnFV.js";import"./axisSelectors-CFm2aUpt.js";import"./d3-scale-DXQtVXGL.js";import"./CartesianAxis-BgpXgN1R.js";import"./Layer-urQEAooy.js";import"./types-DmMnI0O_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CfjQzOiB.js";import"./index-CB2LtrSa.js";import"./index-FJUFiiDw.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DIL7xA5W.js";import"./index-vF-n4YF_.js";import"./fillDefinitions-R6mNXYbM.js";import"./CartesianChart-CdwXekNk.js";import"./chartDataContext-LfCv8xRO.js";import"./CategoricalChart-DiRS6s-r.js";import"./Symbols-BYEI9G2W.js";import"./symbol-CDkSHUUS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-KeEWMChU.js";import"./uniqBy-C_Y6AlzU.js";import"./iteratee-AcsDAR-L.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-B4J35a5k.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DkPkuka8.js";import"./useAnimationId-C1Da615s.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DSt9b1dG.js";import"./tooltipContext-B_XufsJP.js";import"./ErrorBarContext-7B25K72P.js";import"./activeStyles-DkKN9Gb1.js";import"./SetGraphicalItem-u5-88p1b.js";import"./getZIndexFromUnknown-C8pSLRLW.js";import"./useEffectiveDataKey-C9n3TkLL.js";import"./omit-XESemSvM.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
