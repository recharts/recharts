import{r as f,R as e}from"./iframe-B5-NOQ5t.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BxGdoYHh.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CRh8M764.js";import{C as k}from"./ComposedChart-Cs-WfBMv.js";import{X as K}from"./XAxis-BFljSmnb.js";import{L as v}from"./Legend-CtVYeCbD.js";import{B as a}from"./Bar-CNUVYZpc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Buxp0onk.js";import"./Text-B1H13EKo.js";import"./resolveDefaultProps-CzoCHCv3.js";import"./pageBackground-CQjz6Ds_.js";import"./ZIndexLayer-CDTqLj5d.js";import"./index-BByFyeZE.js";import"./index-B_jQtdqD.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-SkPOKFrV.js";import"./throttle-BmJCRGcn.js";import"./axisSelectors-CoB8fX7y.js";import"./d3-scale-BV3y_nyi.js";import"./CartesianAxis-BQONH3FI.js";import"./Layer-vSXC9HFp.js";import"./types-BMOXg_-b.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DXZVnJsv.js";import"./index-CwdbuGI9.js";import"./index-CyjoC35Z.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DlDVaHKU.js";import"./index-Dboi7S9M.js";import"./CartesianChart-CFWWZ1wD.js";import"./ZIndexPortal-BtWSCMSf.js";import"./CategoricalChart-DfZY2tZ6.js";import"./Symbols-Ol0rnrkZ.js";import"./symbol-DXpOMYfl.js";import"./path-DyVhHtw_.js";import"./useElementOffset-RuET0wQK.js";import"./uniqBy-CQFuYkxP.js";import"./iteratee-Do7GGGp4.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-D_E_aw3e.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B17Nym8J.js";import"./useAnimationId-CsdMGkaP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-khUUw2eu.js";import"./tooltipContext-pcr2pEIs.js";import"./dataEntryStyles-DTbCoLqH.js";import"./ErrorBarContext-x4ks4uU4.js";import"./activeStyles-DCKEH4qZ.js";import"./SetGraphicalItem-OxeVhn_0.js";import"./getZIndexFromUnknown-Du4k3NXS.js";import"./useEffectiveDataKey-CE1na-4k.js";import"./omit-fO6yY01H.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
