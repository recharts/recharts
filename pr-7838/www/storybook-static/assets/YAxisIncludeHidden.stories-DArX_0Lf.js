import{r as f,R as e}from"./iframe-Bo128pRc.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Bd_441pA.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-WbjY_zmo.js";import{C as k}from"./ComposedChart-Cw7mlXQ9.js";import{X as K}from"./XAxis-BBTi9Quq.js";import{L as v}from"./Legend-dJCD3p5v.js";import{B as a}from"./Bar-CrdjQA3e.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-ghQ3JhC7.js";import"./Text-BFaLgVB9.js";import"./resolveDefaultProps-CR_Daah7.js";import"./DOMUtils-DyhgREL4.js";import"./isWellBehavedNumber-DSGzbKJq.js";import"./useId-DR5HNXG4.js";import"./useBackwardsCompatibleTheme-DyPyGrUA.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DD1XEuiL.js";import"./index-BFq8L4Qf.js";import"./index-Cj2yGnH8.js";import"./RechartsWrapper-DmrtgzWA.js";import"./axisSelectors-BYCa1KQi.js";import"./throttle-DKRp2Cpf.js";import"./d3-scale-EUAW_uXn.js";import"./index-CTI4te1e.js";import"./index-9RfS0P5N.js";import"./renderedTicksSlice-BJhZejFa.js";import"./index-CNXfLYdJ.js";import"./CartesianAxis-CscJTeW3.js";import"./Layer-DR8K2tDR.js";import"./types-CsIyy1S-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Df4TbwdF.js";import"./chartDataContext-BfZakhMa.js";import"./CategoricalChart-D4todBvL.js";import"./Symbols-IDhPg5Sz.js";import"./symbol-B_l5LtYl.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DBOsMn43.js";import"./uniqBy-RT7Uc_zP.js";import"./iteratee-Cyk4vjhM.js";import"./AnimatedItems-BX9wZRAd.js";import"./useAnimationId-CQmNoSKE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CDN6vLqp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-wH4Ic5EK.js";import"./tooltipContext-DXP82UUR.js";import"./RegisterGraphicalItemId-CwYw7hzr.js";import"./ErrorBarContext-QkPpzvTl.js";import"./GraphicalItemClipPath-RiFLM0LL.js";import"./SetGraphicalItem-qyOUVGvM.js";import"./getZIndexFromUnknown-DU7HI6wE.js";import"./useGraphicalItemIdentity-B2TrnUL8.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
