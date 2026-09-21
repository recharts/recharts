import{r as f,R as e}from"./iframe-B-kCJkOw.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D8VGqcIq.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Clv-Wr_e.js";import{C as k}from"./ComposedChart-BAXW9VrG.js";import{X as K}from"./XAxis-C88jehXC.js";import{L as v}from"./Legend-BpHEVsxX.js";import{B as a}from"./Bar-CMswvrej.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CshHc_P8.js";import"./Text-DvIEDZcH.js";import"./resolveDefaultProps-BhhOMDdt.js";import"./DOMUtils-CWJWmJqm.js";import"./isWellBehavedNumber-C4FzwffV.js";import"./useId-DGNKKzIZ.js";import"./useBackwardsCompatibleTheme-D27rYUis.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-yM8iQkyd.js";import"./index-DcAa2UuL.js";import"./index-CBKTbWE1.js";import"./RechartsWrapper-D3el3knR.js";import"./axisSelectors-DT9SmTCn.js";import"./throttle-DVuM4iFd.js";import"./d3-scale-IzH54SGl.js";import"./index-2QimBBuf.js";import"./index-BVh04Hzh.js";import"./renderedTicksSlice-C6ma__-i.js";import"./index-CmAyTwir.js";import"./CartesianAxis-DmQK4you.js";import"./Layer-DUmzLecA.js";import"./types-1S0vnYpD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C3VLYHct.js";import"./chartDataContext-CikOGl8V.js";import"./CategoricalChart-CVXqoPY8.js";import"./Symbols-1DmeI7Ir.js";import"./symbol-CtvnUhbs.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BJT03Q9O.js";import"./uniqBy-_dq4LJrc.js";import"./iteratee-Dxw4ISyk.js";import"./AnimatedItems-BgnTcQ58.js";import"./useAnimationId-Bkh3_vjS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CgoNg2OD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C14ipRtW.js";import"./tooltipContext-BjlGROJz.js";import"./RegisterGraphicalItemId-DX8EYk4F.js";import"./ErrorBarContext-PD5E_qHe.js";import"./GraphicalItemClipPath-Bf7ClEec.js";import"./SetGraphicalItem-DlY4dRC7.js";import"./getZIndexFromUnknown-BI5uVghB.js";import"./useGraphicalItemIdentity-wZgDD3hk.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
