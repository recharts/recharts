import{r as f,R as e}from"./iframe-130qk4m_.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-COXka6w4.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DRUK-Dg-.js";import{C as k}from"./ComposedChart-CjFOZhuN.js";import{X as K}from"./XAxis-CZ9F9O5a.js";import{L as v}from"./Legend-CWU4XwfA.js";import{B as a}from"./Bar-Dk_lnDjq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BTScYLJC.js";import"./Text-BSQyPF-I.js";import"./resolveDefaultProps-CYRr0Ie5.js";import"./DOMUtils-nn98Njua.js";import"./isWellBehavedNumber-DjBeGij7.js";import"./useId-DN63oQqC.js";import"./useBackwardsCompatibleTheme-BFLDUGtw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BCmai4o5.js";import"./index-CsWcnfda.js";import"./index-BcLoK3PR.js";import"./RechartsWrapper-Bo40Do7U.js";import"./axisSelectors-X5KptGXH.js";import"./throttle-kCNuVuJ-.js";import"./d3-scale-Dk5HPyUF.js";import"./index-CrvbTTow.js";import"./index-Bjllb2VH.js";import"./renderedTicksSlice-Cmod0XxC.js";import"./index-DEOEohuH.js";import"./CartesianAxis-C5WMjY4c.js";import"./Layer-Cyv1dWj2.js";import"./types-Da5i9wCB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BIfw6B_y.js";import"./chartDataContext-DcIZimMl.js";import"./CategoricalChart-BUcyv7Rs.js";import"./Symbols-Bvuju7KU.js";import"./symbol-kYWcfVOX.js";import"./path-DyVhHtw_.js";import"./useElementOffset-COi3Obl9.js";import"./uniqBy-BlyxtPBE.js";import"./iteratee-P4nCtj53.js";import"./AnimatedItems-CnmA861Y.js";import"./useAnimationId-NcjSJtDX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C2EXdHxS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CM6xxOZA.js";import"./tooltipContext-CXrQPimu.js";import"./RegisterGraphicalItemId-Cj8G_tD9.js";import"./ErrorBarContext-Cce-eGB1.js";import"./GraphicalItemClipPath-CEUDXBSP.js";import"./SetGraphicalItem-fFkzzaD8.js";import"./getZIndexFromUnknown-D9Lpnrxk.js";import"./useGraphicalItemIdentity-UHVfOAjT.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
