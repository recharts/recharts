import{r as f,R as e}from"./iframe-CMFw787F.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CRwIRJrx.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DW-R_9mL.js";import{C as k}from"./ComposedChart-jPjAixDx.js";import{X as K}from"./XAxis-C_WTSptP.js";import{L as v}from"./Legend-e-8OZbaV.js";import{B as a}from"./Bar-C2Cjz_v6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CYtvKaSn.js";import"./Text-DneUrFCx.js";import"./resolveDefaultProps-BOABxk_y.js";import"./ZIndexLayer-zQQZbbdp.js";import"./index-DIgguH2B.js";import"./index-C6m7ox6c.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-2ZnybmZ1.js";import"./throttle-CR0jnMre.js";import"./axisSelectors-rk7JAHS6.js";import"./d3-scale-CNeDjyej.js";import"./CartesianAxis-DJ5NbueU.js";import"./Layer-DoofO9Zt.js";import"./types-DA1V6lfX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-AeJYcQuN.js";import"./index-PbtEsu_A.js";import"./index-CdT540h8.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-AThag0NN.js";import"./index-BZFAdJUr.js";import"./fillDefinitions-CI5aneaf.js";import"./CartesianChart-tkvn-Ty3.js";import"./chartDataContext-DUqK50U7.js";import"./CategoricalChart-rbZS7bUK.js";import"./Symbols-DMJ9ooJB.js";import"./symbol-CP9FSlU1.js";import"./path-BBMZd4YL.js";import"./useElementOffset-O2G3aTiM.js";import"./uniqBy-2YD2k7wm.js";import"./iteratee-6HUgj-CO.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CcaQQEAi.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CnUfue8k.js";import"./useAnimationId-DwVwC1xb.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DVE_ISH9.js";import"./tooltipContext-BC-0az86.js";import"./ErrorBarContext-tb4T2KmR.js";import"./activeStyles-DP81Qo_e.js";import"./SetGraphicalItem-B5x77PpV.js";import"./getZIndexFromUnknown-A6LZSEsL.js";import"./useEffectiveDataKey-rlJiXvMI.js";import"./omit-rQJAOHnj.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
