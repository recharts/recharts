import{r as f,R as e}from"./iframe-D_khPHZ1.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CYrms82_.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-KFlckT-7.js";import{C as k}from"./ComposedChart-v5twU8VD.js";import{X as K}from"./XAxis-CG7KNKev.js";import{L as v}from"./Legend-CSNjMX4v.js";import{B as a}from"./Bar-SEmD42Jg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DNajAghq.js";import"./Text-CRLTQjiS.js";import"./resolveDefaultProps-BBG9DHK8.js";import"./pageBackground-Cdf9H4fo.js";import"./isWellBehavedNumber-DGsU9FBh.js";import"./useId-DisFqhsr.js";import"./useBackwardsCompatibleTheme-BLiMjfFD.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BGvEmvHh.js";import"./index-CB03tEHO.js";import"./index-BuxDgG-t.js";import"./dataEntryStyles-2My5Q2VA.js";import"./axisSelectors-CBjKjY28.js";import"./throttle-BBn7lrSC.js";import"./d3-scale-BLOap0UK.js";import"./CartesianAxis-DtPap_2c.js";import"./Layer-D1docXzT.js";import"./types-DL7z7syQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Jho7gpOC.js";import"./index-syOpg8yK.js";import"./index-BI2dlpsL.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Do2gsgG0.js";import"./index-CHrlhwwU.js";import"./CartesianChart-Ci9HbE6G.js";import"./chartDataContext-DTR5p3jS.js";import"./CategoricalChart-Bfua2ObC.js";import"./Symbols-BCYNi6oJ.js";import"./symbol-CdZ0n7Lr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-9IHiAY7G.js";import"./uniqBy-DXUw7-JM.js";import"./iteratee-C2BbWe9-.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-DVSsJDko.js";import"./useAnimationId-BOA4oZA_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BifmVm-G.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C8SJzoVE.js";import"./tooltipContext-DVHndJ9j.js";import"./RegisterGraphicalItemId-CFGUNGbT.js";import"./ErrorBarContext-DWMtIAoI.js";import"./SetGraphicalItem-CGqBV4nA.js";import"./getZIndexFromUnknown-BcdX0_Uj.js";import"./useEffectiveDataKey-B2F1WAcU.js";import"./omit-BMLwajrp.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
