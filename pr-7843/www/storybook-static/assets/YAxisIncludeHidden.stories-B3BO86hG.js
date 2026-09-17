import{r as f,R as e}from"./iframe-DgWro0Cb.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D4vSwiu5.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-kqW7224Y.js";import{C as k}from"./ComposedChart-BkLdUaFI.js";import{X as K}from"./XAxis-CkB5HD-K.js";import{L as v}from"./Legend-BRN_aLTq.js";import{B as a}from"./Bar-DPwHEJww.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CAU1RuQf.js";import"./Text-waGCJknf.js";import"./resolveDefaultProps-BhS12mAV.js";import"./DOMUtils-D88jtPAc.js";import"./isWellBehavedNumber-DwM6ebKF.js";import"./useId-BFsrAK1l.js";import"./useBackwardsCompatibleTheme-VKMGBrP2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DpP2thTP.js";import"./index-DztsUb_g.js";import"./index-D3He7cmP.js";import"./RechartsWrapper-h6y9B5zn.js";import"./axisSelectors-CZ13_oVc.js";import"./throttle-BP62aThC.js";import"./d3-scale-BfkfHoGl.js";import"./index-BDglQEHq.js";import"./index-CTaoAsOx.js";import"./renderedTicksSlice-gL8A1NDh.js";import"./index-DaYKny0o.js";import"./CartesianAxis-CA5xaS56.js";import"./Layer-XFlq6LCH.js";import"./types-pVUrsENP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DA39YynM.js";import"./chartDataContext-CGD2iDmQ.js";import"./CategoricalChart-u8OOiycT.js";import"./Symbols-DrEB9F-d.js";import"./symbol-DXkmIxFe.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BsSXBjhh.js";import"./uniqBy-PhKVtvXH.js";import"./iteratee-88r513BQ.js";import"./AnimatedItems-DqXJhGnM.js";import"./useAnimationId-NxEFQxZ2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-wXrqsCXj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BxIddtsB.js";import"./tooltipContext-DTlpCDdB.js";import"./RegisterGraphicalItemId-9cmkZE1J.js";import"./ErrorBarContext-8rr3nTdF.js";import"./GraphicalItemClipPath-D8FUo4fb.js";import"./SetGraphicalItem-DPr6Abv8.js";import"./getZIndexFromUnknown-CcGuHQGB.js";import"./useGraphicalItemIdentity-DUrbqVuJ.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
