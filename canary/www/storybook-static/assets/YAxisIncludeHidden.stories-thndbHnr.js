import{r as f,R as e}from"./iframe-DPP4Tdri.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Ce7IYC8C.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bty8FlsF.js";import{C as k}from"./ComposedChart-CXeRVVMY.js";import{X as K}from"./XAxis-BpxUBGxx.js";import{L as v}from"./Legend-OQCQPwo-.js";import{B as a}from"./Bar-kJNtSnDL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-VwhFHh0o.js";import"./Text-BtmpD8Z5.js";import"./resolveDefaultProps-Cm9tdCQy.js";import"./pageBackground-km40Fien.js";import"./useId-Ddybgx-i.js";import"./ZIndexLayer-Blh-9Ce2.js";import"./index-DVADikfE.js";import"./index-De7017Q2.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CClqMsSX.js";import"./throttle-vvUvRomY.js";import"./dataEntryStyles-CptsKKQm.js";import"./axisSelectors-D5c_jQLf.js";import"./d3-scale-DzX31dlW.js";import"./CartesianAxis-Cw8YZYZ1.js";import"./Layer-wOFD4jm5.js";import"./types-nPujXrb0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B_g7wt05.js";import"./index-Cb0QOEvK.js";import"./index-CTYPR5t0.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Dc5A4Gsl.js";import"./index-C1bARSgS.js";import"./CartesianChart-_cTASiWq.js";import"./chartDataContext-BX3Xv7t3.js";import"./CategoricalChart-CkLeLS7-.js";import"./Symbols-DAUL1Z82.js";import"./symbol-CyE3iFmu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DETypLP1.js";import"./uniqBy-B9BTqrOm.js";import"./iteratee-b2KlmUpP.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-Czb_VVwe.js";import"./useAnimationId-CRGpdxWH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CYtgedmy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BRfAaZtt.js";import"./tooltipContext-BbQ3hIxk.js";import"./RegisterGraphicalItemId-C_PEUR1P.js";import"./ErrorBarContext-DA7VKoxZ.js";import"./SetGraphicalItem-me1Dq43s.js";import"./getZIndexFromUnknown-CYps8qNe.js";import"./useEffectiveDataKey-CPqFi3kZ.js";import"./omit-DeVuR1ub.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
