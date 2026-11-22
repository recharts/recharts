import{r as f,R as e}from"./iframe-CUvNAvus.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-BY3XsiJB.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D-rH8vD1.js";import{C as k}from"./ComposedChart-CpK6zK-b.js";import{X as K}from"./XAxis-CM346fVw.js";import{L as v}from"./Legend-DIaEXIPc.js";import{B as a}from"./Bar-BZ_ejKun.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B7OEZM_6.js";import"./Text-BRc4p81h.js";import"./resolveDefaultProps-3SUBoYwM.js";import"./ZIndexLayer-CPI_Yi1m.js";import"./index-Cp_pTOca.js";import"./index-CAWn2Z9i.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B2l_kUqX.js";import"./throttle-CYllgfiW.js";import"./axisSelectors-Xjgkf-2T.js";import"./d3-scale-CA_D1sKG.js";import"./CartesianAxis-BL1UgLf5.js";import"./Layer-CoFmyLu_.js";import"./types-CsWgfhSt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-A7Y2iS9L.js";import"./index-BMOBZiEl.js";import"./index-58JkOBJX.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BjljmlV4.js";import"./index-BkH-1jYD.js";import"./fillDefinitions-Dr0Z3ytP.js";import"./CartesianChart-cFWvwfAO.js";import"./chartDataContext-CYuQBQZt.js";import"./CategoricalChart-BW_ZnICB.js";import"./Symbols-CmJ419_u.js";import"./symbol-CLRUs3HG.js";import"./path-BBMZd4YL.js";import"./useElementOffset-DyhJv7Tq.js";import"./uniqBy-CzilxMyM.js";import"./iteratee-BTZk3n5k.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-C_QXXqcb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DEfxlhJq.js";import"./useAnimationId-BneLXqad.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Davo8QQp.js";import"./tooltipContext-SftmL3Js.js";import"./ErrorBarContext-C0H1v8By.js";import"./activeStyles-DPihfCdA.js";import"./SetGraphicalItem-DRGWCaTd.js";import"./getZIndexFromUnknown-CoqoIK0W.js";import"./useEffectiveDataKey-BAjzW2qT.js";import"./omit-CROME7CD.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
