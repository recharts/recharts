import{r as f,R as e}from"./iframe-Bh1U-oMl.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DLWlNOvC.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CbwDGfhV.js";import{C as k}from"./ComposedChart-_0dXWU4B.js";import{X as K}from"./XAxis-BDDyTBp4.js";import{L as v}from"./Legend-B_aI-CWe.js";import{B as s}from"./Bar-CImJU4XG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CoZlS51A.js";import"./Text-bdpnJJaC.js";import"./resolveDefaultProps-Cs5bXre5.js";import"./DOMUtils-TtYkNMfa.js";import"./isWellBehavedNumber-Dyeu8bHm.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C51_GrjW.js";import"./index-CIfG7xc6.js";import"./index-B7DuV58o.js";import"./RechartsWrapper-BJiANDik.js";import"./index-BJEvKA6W.js";import"./index-Pl0BuMhm.js";import"./throttle-DMII0ZAy.js";import"./axisSelectors-KgYrPzsA.js";import"./d3-scale-DvNPjBaU.js";import"./renderedTicksSlice-6pXaWoy-.js";import"./CartesianAxis-DON_KZPp.js";import"./Layer-C3H-dOT5.js";import"./types-w_TylJof.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-Bbvr3NVw.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-YxKbksJG.js";import"./chartDataContext-B8xHbf95.js";import"./CategoricalChart-DcSXPqkv.js";import"./Symbols-DQ62W2JC.js";import"./symbol-B_QuibgC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CkLuT-ex.js";import"./uniqBy-DzWBXKbZ.js";import"./iteratee-CG3_OUhe.js";import"./tooltipContext-B5aE_LSZ.js";import"./AnimatedItems-BvF3WRYv.js";import"./useAnimationId-0BmLZ6mF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B31sdsfS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-0P_4fb1E.js";import"./RegisterGraphicalItemId-UrCBGtwU.js";import"./ErrorBarContext-CYylskZD.js";import"./GraphicalItemClipPath-CR-53Dh0.js";import"./SetGraphicalItem-oPzo6Gr-.js";import"./getZIndexFromUnknown-CPcuAC_m.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CC_S-o56.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const He=["WithIncludeHidden"];export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
