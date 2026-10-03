import{r as f,R as e}from"./iframe-C2y7-rH2.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B28w59_W.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BQPOy7As.js";import{C as k}from"./ComposedChart-CwCxFjZe.js";import{X as K}from"./XAxis-BRv-fAhZ.js";import{L as v}from"./Legend-Bz20O50v.js";import{B as a}from"./Bar-BiBRnfSw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CSUQJf-z.js";import"./Text-Dg2YZl1D.js";import"./resolveDefaultProps-vPK17mKC.js";import"./DOMUtils-CYVmP7ld.js";import"./isWellBehavedNumber-6_l4g7Xi.js";import"./useId-rIBzQY0F.js";import"./useBackwardsCompatibleTheme-xd8BeFgY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cqkx5XlC.js";import"./index-Bz54eCtj.js";import"./index-ChrJmNNe.js";import"./RechartsWrapper-BcfYPaoe.js";import"./axisSelectors-Bw0Qwigf.js";import"./throttle-BDe4zlG9.js";import"./d3-scale-D07iQYqn.js";import"./index-DyeRA5Td.js";import"./index-OvZqyYfZ.js";import"./renderedTicksSlice-DVIPHfrA.js";import"./index-DN97KnNV.js";import"./CartesianAxis-DwUPIt0X.js";import"./Layer-Y5hBKOyR.js";import"./types-DDulV5vn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B1na8-qP.js";import"./chartDataContext-ClTM7zwW.js";import"./CategoricalChart-BgXqKpLI.js";import"./Symbols-D5N7fhe9.js";import"./symbol-BfZZVleY.js";import"./path-DyVhHtw_.js";import"./useElementOffset-kO2xZAmN.js";import"./uniqBy-Cquckdt6.js";import"./iteratee-CbQmO-Fp.js";import"./AnimatedItems-CrKX7S12.js";import"./useAnimationId-BlRPNYZD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-X3oIIIHx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CXM-saMn.js";import"./tooltipContext-_6Vhu7JT.js";import"./RegisterGraphicalItemId-CD4HP7HF.js";import"./ErrorBarContext-J0sVh-nS.js";import"./GraphicalItemClipPath-SSZXiCnp.js";import"./SetGraphicalItem-B36qE1ly.js";import"./getZIndexFromUnknown-BCkLZ-eQ.js";import"./useGraphicalItemIdentity-B5eIfUAt.js";import"./dataEntryStyles-D42baz0i.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
