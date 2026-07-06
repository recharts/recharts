import{r as f,R as e}from"./iframe-7XJ2xcaa.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BG1hFypZ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Smyg0ZdR.js";import{C as k}from"./ComposedChart-CsOZpoaR.js";import{X as K}from"./XAxis-C1fpfCfO.js";import{L as v}from"./Legend-BaHRoIPM.js";import{B as s}from"./Bar-C4vgLWR3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-OiUDsUEB.js";import"./Layer-BGcXXZrK.js";import"./resolveDefaultProps-Dm7ujSLB.js";import"./Text-Dt_HR9_i.js";import"./DOMUtils-DVnhXYtC.js";import"./isWellBehavedNumber-C2jdcJtq.js";import"./Label-kaLCkxIc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CzQjP_gg.js";import"./index-2ovstjTu.js";import"./index-TMtczAeJ.js";import"./types-CCvMXBAG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C2Tixweq.js";import"./throttle-D4811UcH.js";import"./RechartsWrapper-49lbEV7H.js";import"./index-DVTD1Fpd.js";import"./index-WU_oH4BO.js";import"./axisSelectors-BEWMGkmB.js";import"./d3-scale-BuuUT6V5.js";import"./CartesianChart-BVaoZCto.js";import"./chartDataContext-hp2Drl2b.js";import"./CategoricalChart-DLU0PYD6.js";import"./Symbols-DQCEJqHR.js";import"./symbol-B0FARq78.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C-vskSZV.js";import"./uniqBy-Big4MVsT.js";import"./iteratee-BpHsmV36.js";import"./tooltipContext-CKUlWzZu.js";import"./AnimatedItems-DXPDcN2s.js";import"./useAnimationId-Bhm-Tg4Q.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BCPFxxTI.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CUzuZPCF.js";import"./RegisterGraphicalItemId-ezS9CDrB.js";import"./ErrorBarContext-BQCQT8xU.js";import"./GraphicalItemClipPath-8cnbCE1N.js";import"./SetGraphicalItem-BkRk4aVf.js";import"./getZIndexFromUnknown-ncmLB9nU.js";import"./graphicalItemSelectors-DCsUtSMK.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
