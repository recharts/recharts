import{r as f,R as e}from"./iframe-BoZGnJw3.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DWoSckNu.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-a6rFVYjz.js";import{C as k}from"./ComposedChart-BoAZL9SR.js";import{X as K}from"./XAxis-DaJlL1eX.js";import{L as v}from"./Legend-BXUyYQeC.js";import{B as a}from"./Bar-vXcyloz8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-hjfvRRRs.js";import"./Text-Cs6Ml33D.js";import"./resolveDefaultProps-D8QzFlGf.js";import"./DOMUtils-BLzuTGwo.js";import"./ZIndexLayer-D6tdIhXp.js";import"./index-WbIhOddD.js";import"./index-XXsuRe2m.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DFgK4OY0.js";import"./throttle-DtDTnxHB.js";import"./axisSelectors-D380Rkbk.js";import"./d3-scale-CiyCJ5ON.js";import"./CartesianAxis-LiXL0IDn.js";import"./Layer-DWrdDLVq.js";import"./types-VJa2wa64.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BtiSzaGq.js";import"./index-CTKnxowE.js";import"./index-D9DvxSgb.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-WWWx-rVQ.js";import"./index-Bzl_gDx-.js";import"./fillDefinitions-OcelR7By.js";import"./CartesianChart-6fSva3n5.js";import"./ZIndexPortal-KFQo0SKW.js";import"./CategoricalChart-C5KKs8ZF.js";import"./Symbols-DeYNYvA0.js";import"./symbol-P9MXa4Nc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-hC9xa8NL.js";import"./uniqBy-bj0x6NYX.js";import"./iteratee-CAiBVgkS.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DN0FQ104.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BsU8vkw-.js";import"./useAnimationId-DhSaM75t.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-9rzgq6Y4.js";import"./tooltipContext-Ca1Lk8rd.js";import"./dataEntryStyles-BZaOAKnN.js";import"./ErrorBarContext-BWsLX-Zn.js";import"./activeStyles-B-PjepTA.js";import"./SetGraphicalItem-8abau_IG.js";import"./getZIndexFromUnknown-Nn6KDw3p.js";import"./useEffectiveDataKey-D7W7vL8E.js";import"./omit-b-A36VPk.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
