import{r as f,R as e}from"./iframe-C3Hc6ExU.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C-y6lpsY.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DUSt-QRk.js";import{C as k}from"./ComposedChart-DQvc_r-0.js";import{X as K}from"./XAxis-Dtgw3Co8.js";import{L as v}from"./Legend-vTCAFLss.js";import{B as s}from"./Bar-BJGqZnNl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CANqho75.js";import"./Text-DrMy69_K.js";import"./resolveDefaultProps-I9hvH7ZX.js";import"./DOMUtils-Cnn_urMe.js";import"./isWellBehavedNumber-BaxFFXf5.js";import"./useId-z0f7lKjA.js";import"./useBackwardsCompatibleTheme-BO1TP3oH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-G0ryhOC-.js";import"./index-BCuR5Ep7.js";import"./index-N8Br274d.js";import"./RechartsWrapper-B7tS-h39.js";import"./index-DPHIqaZF.js";import"./index-jh_FdFAs.js";import"./throttle-DY2EWLMY.js";import"./axisSelectors-CVNuchwD.js";import"./d3-scale-BNbYa6kD.js";import"./renderedTicksSlice-C_VQ6yCW.js";import"./CartesianAxis-DzoIF-ni.js";import"./Layer-nhPcXxtD.js";import"./types-fNKA8Oi0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D83sOKb0.js";import"./chartDataContext-De2r_5pJ.js";import"./CategoricalChart-Z9dORHEb.js";import"./Symbols-DPWsfdBp.js";import"./symbol-Gsnozwnh.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DuZ6R57W.js";import"./uniqBy-CoWizTQu.js";import"./iteratee-BjcMXY4A.js";import"./AnimatedItems-EryZIVr5.js";import"./useAnimationId-C5Z2jNIS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B8xTYBg9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BBT5vOsU.js";import"./tooltipContext-BfV4vefB.js";import"./RegisterGraphicalItemId-B-hExQD4.js";import"./ErrorBarContext-C-2s-xSs.js";import"./GraphicalItemClipPath-1LBjo5Ot.js";import"./SetGraphicalItem-DJG5Kc0f.js";import"./getZIndexFromUnknown-B6lJBKJt.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CPtG7WLe.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
