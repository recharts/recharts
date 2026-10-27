import{r as f,R as e}from"./iframe-CEQushtN.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CO7P54oT.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DjNM_HLz.js";import{C as k}from"./ComposedChart-BlLv9QRG.js";import{X as K}from"./XAxis-Dox0Mf_6.js";import{L as v}from"./Legend-BnmhZmMZ.js";import{B as a}from"./Bar-C4c1-X5W.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CFJJzt7V.js";import"./Text-CmoBCOlM.js";import"./resolveDefaultProps-CyZKvMPR.js";import"./pageBackground-QlEa7JV2.js";import"./ZIndexLayer-DtsqWk3z.js";import"./index-BtHOWWHr.js";import"./index-Dij9Lyzg.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-S5DqA3LI.js";import"./throttle-D-s41lqW.js";import"./dataEntryStyles-BlFVEHbT.js";import"./axisSelectors-DQduFkeJ.js";import"./d3-scale-BWM46Ydz.js";import"./CartesianAxis-Df5o-IJd.js";import"./Layer-C3v_EKIk.js";import"./types-CPVpRlsk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BiOzFX7m.js";import"./index-BdO45VT9.js";import"./index-CoxdILWo.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DXBxSHCJ.js";import"./index-BB4PCvH7.js";import"./CartesianChart-BcxOd9Ut.js";import"./ZIndexPortal-pBjad6tL.js";import"./CategoricalChart-gEK0X1ot.js";import"./Symbols-C3N2Nfx0.js";import"./symbol-DSj-rHxT.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DWKbuRf4.js";import"./uniqBy-DDpW34LG.js";import"./iteratee-DFqopvcF.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DwlBaftj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CdiELTU5.js";import"./useAnimationId-CzbeFnj4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D8RrSuBC.js";import"./tooltipContext-CiX2UjUA.js";import"./RegisterGraphicalItemId-CVBDPhvw.js";import"./ErrorBarContext-CpznhA_J.js";import"./activeStyles-6x5lKRrB.js";import"./SetGraphicalItem-D60Grc7B.js";import"./getZIndexFromUnknown-BWbvic_t.js";import"./useEffectiveDataKey-BKKYPJCk.js";import"./omit-Cq07IlM6.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
