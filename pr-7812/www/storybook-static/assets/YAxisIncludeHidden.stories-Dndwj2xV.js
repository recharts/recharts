import{r as f,R as e}from"./iframe-D6i__LoP.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B5XPYz7e.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CyKHeydM.js";import{C as k}from"./ComposedChart-CjSU8WGa.js";import{X as K}from"./XAxis-CAx1pIhU.js";import{L as v}from"./Legend-bzmj0gXI.js";import{B as a}from"./Bar-CgfzO7cl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CcM-HFI6.js";import"./Text-hZV3tmbb.js";import"./resolveDefaultProps-CqzBSPJb.js";import"./DOMUtils-DeYJTEnJ.js";import"./isWellBehavedNumber-CluTirfv.js";import"./useId-tMVNWk8Z.js";import"./useBackwardsCompatibleTheme-CQpTINsS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cgr5Sbcn.js";import"./index-DMFV_hOu.js";import"./index--kg1cBe0.js";import"./RechartsWrapper-DCWzk6aO.js";import"./axisSelectors-LrJn1RIt.js";import"./throttle-DZkWvGbR.js";import"./d3-scale-CPAx7ill.js";import"./index-TOqTf9p4.js";import"./index-B0NZAO6k.js";import"./renderedTicksSlice-Cqr2zXs_.js";import"./index-CfSh3_es.js";import"./CartesianAxis-DBbQlRic.js";import"./Layer-g6kXe5Or.js";import"./types-BferblG2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-SH0Bt_l8.js";import"./chartDataContext-DoSIIG4T.js";import"./CategoricalChart-CQsWyxzZ.js";import"./Symbols-C7sIDB3S.js";import"./symbol-CCdPpWBc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-tYvBFPP4.js";import"./uniqBy-DBt7WG7j.js";import"./iteratee-q1Bz0EWx.js";import"./AnimatedItems-BhOCoOsB.js";import"./useAnimationId-Bi456v-E.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cv4A529c.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-p-Z4MyM6.js";import"./tooltipContext-CrT1ux3Y.js";import"./RegisterGraphicalItemId-DMF9sTtn.js";import"./ErrorBarContext-CpDc2JTq.js";import"./GraphicalItemClipPath-C4ZotnNz.js";import"./SetGraphicalItem-B41pEGJW.js";import"./getZIndexFromUnknown-RAllw5jp.js";import"./useGraphicalItemIdentity-CVzdXzJV.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
