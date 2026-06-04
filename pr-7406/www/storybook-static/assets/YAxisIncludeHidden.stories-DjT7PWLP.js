import{r as f,R as e}from"./iframe-Bzk7zQca.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-SS3sg1KC.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CmFEWq1r.js";import{C as k}from"./ComposedChart-BwJ5t2t4.js";import{X as K}from"./XAxis-BwFTdCod.js";import{L as v}from"./Legend-BPmG3xhd.js";import{B as s}from"./Bar-D7T9SqkV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CihDQax7.js";import"./CartesianAxis-BuH3LaY7.js";import"./Layer-C58in0aX.js";import"./resolveDefaultProps-CJmyog69.js";import"./Text-D9hBaYLe.js";import"./DOMUtils-DFVOZKBs.js";import"./isWellBehavedNumber-CzHA7xI4.js";import"./Label-CTPsCXr1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DxzvrsVM.js";import"./index-CeYl3XRo.js";import"./index-D8DPmuyK.js";import"./types-BYFlfVWD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CLAMxmGy.js";import"./immer-CcXYFoUI.js";import"./RechartsWrapper-DcMBMMpz.js";import"./index-CKgE1yXu.js";import"./index-OXAI-BjX.js";import"./axisSelectors-BZF8A_qV.js";import"./d3-scale-MuAf3A9e.js";import"./string-B6fdYHAA.js";import"./CartesianChart-C4aLau3c.js";import"./chartDataContext-CKqg-aWy.js";import"./CategoricalChart-BpAfwFxI.js";import"./Symbols-iwAfdcfd.js";import"./symbol-BjkRgUq5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C3YrErby.js";import"./uniqBy-20cDpXHs.js";import"./iteratee-BHx8gBfP.js";import"./tooltipContext-Ccz7S-_U.js";import"./AnimatedItems-Bm1dVVre.js";import"./useAnimationId-3u1Yr1gs.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CDk6Iz6Z.js";import"./ActiveShapeUtils-Dm9siI7l.js";import"./RegisterGraphicalItemId-C-C-Ugyg.js";import"./ErrorBarContext-C883JGGF.js";import"./GraphicalItemClipPath-Bjzuz5Yo.js";import"./SetGraphicalItem-BZrvK3UD.js";import"./getZIndexFromUnknown-CpdBFIll.js";import"./graphicalItemSelectors-B0IMupcf.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
