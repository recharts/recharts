import{r as f,R as e}from"./iframe-D4WxERWR.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-oI30KIzY.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Ctb-XE3r.js";import{C as k}from"./ComposedChart-Bw102KtD.js";import{X as K}from"./XAxis-CSUQYPZm.js";import{L as v}from"./Legend-BdsZ9eSK.js";import{B as a}from"./Bar-CrxDxOUL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DI6ASMtN.js";import"./Text-DwZS23az.js";import"./resolveDefaultProps-CcZJ3F4Z.js";import"./DOMUtils-Dfn1BJxK.js";import"./ZIndexLayer-Czs-NT3b.js";import"./index-DBKc-d7M.js";import"./index-BrtN9C6M.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-29BSG3By.js";import"./throttle-YSLka_uT.js";import"./axisSelectors-CDo6nEPG.js";import"./d3-scale-DUPxeW1L.js";import"./CartesianAxis-CWiuRNLE.js";import"./Layer-Cql_Pemo.js";import"./types-Bl0q8uU6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-nOQMzdpc.js";import"./index-CN65hpd1.js";import"./index-CSWYxHgR.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BABrVhwD.js";import"./index-DUxamRCa.js";import"./fillDefinitions-LA2OUO3V.js";import"./CartesianChart-CoO-_Rza.js";import"./ZIndexPortal-CgOieTb4.js";import"./CategoricalChart-BsaTkIBD.js";import"./Symbols-C5JQpjZ0.js";import"./symbol-DvMe5rhC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DucCROoJ.js";import"./uniqBy-D_80LO3-.js";import"./iteratee-CWtaTKWH.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-CQQZHleH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CKjrVYq4.js";import"./useAnimationId-VHvbbifh.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ExAh61OK.js";import"./tooltipContext-8HRhQMzM.js";import"./dataEntryStyles-Q9NassVy.js";import"./ErrorBarContext-f8d14flb.js";import"./activeStyles-BIi7TIST.js";import"./SetGraphicalItem-BTGcX_vm.js";import"./getZIndexFromUnknown-DQoUiOZn.js";import"./useEffectiveDataKey-BiVeMsFi.js";import"./omit-Bt-KoeMF.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
