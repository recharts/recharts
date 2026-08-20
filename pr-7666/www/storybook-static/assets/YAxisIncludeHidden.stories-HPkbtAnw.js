import{r as f,R as e}from"./iframe-O6BbDbFD.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D4M42lWl.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-ufl9shMa.js";import{C as k}from"./ComposedChart-BrGWNJAt.js";import{X as K}from"./XAxis-DBoP-lnN.js";import{L as v}from"./Legend-7ddVC25Z.js";import{B as s}from"./Bar-BmKe5cZm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-SH09pAJC.js";import"./Text-ti8Fj8zJ.js";import"./resolveDefaultProps-Tk25gN9F.js";import"./DOMUtils-BG1uuH7H.js";import"./isWellBehavedNumber-CZqzhzTI.js";import"./useId-Cennb_xj.js";import"./useBackwardsCompatibleTheme-DlXi3557.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bt9vBpxW.js";import"./index-BpSs36Jm.js";import"./index-C0YTM7Q0.js";import"./RechartsWrapper-CoeUwGvc.js";import"./index-CnIZ7xjW.js";import"./index-BUePfml7.js";import"./throttle-C3IkSeoT.js";import"./axisSelectors-B4uTofMj.js";import"./d3-scale-C59jQ7wQ.js";import"./renderedTicksSlice-B4DLXLOp.js";import"./CartesianAxis-B8nYUrro.js";import"./Layer-BCiB-dL4.js";import"./types-o_WouL0J.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B9Asj-o-.js";import"./chartDataContext-CMEfpaNZ.js";import"./CategoricalChart-aiOnciBW.js";import"./Symbols-BFe2cyG5.js";import"./symbol-Bc4BbbRZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dpoz46wZ.js";import"./uniqBy-CNBDR_xD.js";import"./iteratee-ZH8ZQkoC.js";import"./AnimatedItems-BmR1pSA0.js";import"./useAnimationId-DHIHugsV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C8trBQbW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CApqjo8g.js";import"./tooltipContext-RLkUKuxJ.js";import"./RegisterGraphicalItemId-DqjeB-Ir.js";import"./ErrorBarContext-CsR2u1pe.js";import"./GraphicalItemClipPath-DQtsyL-k.js";import"./SetGraphicalItem-BTWaHo9u.js";import"./getZIndexFromUnknown-Ay6wl0tk.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DWFN68Iw.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
