import{r as f,R as e}from"./iframe-CEaKFLOD.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Cm2tjuJm.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BW_-kNl2.js";import{C as k}from"./ComposedChart-BWdu-w5M.js";import{X as K}from"./XAxis-xN7pSHzN.js";import{L as v}from"./Legend-DnP4zCwl.js";import{B as a}from"./Bar-BhzblDJe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BzoSUysL.js";import"./Text-Bjai807M.js";import"./resolveDefaultProps-y1moel4K.js";import"./DOMUtils-DMHzK5Q0.js";import"./isWellBehavedNumber-DMSwtAM2.js";import"./useId-DBCCsHcD.js";import"./useBackwardsCompatibleTheme-VjyVXj2U.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer--MuvhbKE.js";import"./index-BP77GY6y.js";import"./index-Pesxz8sF.js";import"./RechartsWrapper-CWplp24t.js";import"./axisSelectors-CCBeMCMj.js";import"./throttle-BTwCYOHA.js";import"./d3-scale-xgyjEPPy.js";import"./index-_btimE9G.js";import"./index-CqNUlXBo.js";import"./renderedTicksSlice-pAYw7YNa.js";import"./index-CA_j_GK2.js";import"./CartesianAxis-DZYvFW8B.js";import"./Layer-CAr7LORZ.js";import"./types-Da2TODPT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BqEoKcYr.js";import"./chartDataContext-ehQpVm1w.js";import"./CategoricalChart-BHppyMGY.js";import"./Symbols-5r6rCeAJ.js";import"./symbol-6uRkNH0Z.js";import"./path-DyVhHtw_.js";import"./useElementOffset-c3kW9Mat.js";import"./uniqBy-hLK4QAWK.js";import"./iteratee-COhtBRtJ.js";import"./AnimatedItems-BousSNqt.js";import"./useAnimationId-D_rlhFDI.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BqqSxccJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-5t5AMzdk.js";import"./tooltipContext-DdgASxLO.js";import"./RegisterGraphicalItemId-BZrlXr-M.js";import"./ErrorBarContext-CtrcR3pN.js";import"./GraphicalItemClipPath-CA8fPvSm.js";import"./SetGraphicalItem-BktkMU9R.js";import"./getZIndexFromUnknown-v-QUgELF.js";import"./useGraphicalItemIdentity-BnhZXg65.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
