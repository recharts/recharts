import{r as f,R as e}from"./iframe-l1Y42C0u.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-MT51XlEY.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B33nqsCb.js";import{C as k}from"./ComposedChart-0uZutU6k.js";import{X as K}from"./XAxis-B9K8Q1Xb.js";import{L as v}from"./Legend-EUSnmrcQ.js";import{B as a}from"./Bar-CWc1HL67.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-sWz5CiLk.js";import"./Text-B6K4_AwF.js";import"./resolveDefaultProps-1jZi99P0.js";import"./DOMUtils-D4PcHABk.js";import"./ZIndexLayer-DxyEEQXG.js";import"./index-DIs184pY.js";import"./index-Cqq6zn6Z.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BQIs9A7o.js";import"./throttle-DAyvkz9h.js";import"./axisSelectors-D7HUEi6M.js";import"./d3-scale-B5Y8SIz5.js";import"./CartesianAxis-tpqsI94N.js";import"./Layer-euAv7Vlw.js";import"./types-CrZHDfLN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D6aSCZ50.js";import"./index-Bn03Joy2.js";import"./index-BwfxQem6.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DOuMjlQh.js";import"./index-BL-lBVJK.js";import"./CartesianChart-DP0lCfag.js";import"./ZIndexPortal-DmDlsnpL.js";import"./CategoricalChart-CsG2T3-z.js";import"./Symbols-CQXeMdB_.js";import"./symbol-K2q-awoK.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-AHxQevDT.js";import"./themeFill-DQcF-Fqd.js";import"./useElementOffset-Dc6g4T8Y.js";import"./uniqBy-BXAphbyZ.js";import"./iteratee-BoMr2KG7.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-CqnzZffr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Gcg8iRps.js";import"./useAnimationId-Df3Y-xS6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CSx2HuI1.js";import"./tooltipContext-BSj91y9Q.js";import"./dataEntryStyles-D_KE_N47.js";import"./ErrorBarContext-xxN9WryY.js";import"./activeStyles-De0IjX-U.js";import"./SetGraphicalItem-Do2v7-d1.js";import"./getZIndexFromUnknown-DnteUgzv.js";import"./useEffectiveDataKey-Dv99CamK.js";import"./omit-R_--s2l3.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
