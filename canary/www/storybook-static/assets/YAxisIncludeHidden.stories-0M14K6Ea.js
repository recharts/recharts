import{r as f,R as e}from"./iframe-B_nNZpI2.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-2XrZ_LwE.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-FViTDxbD.js";import{C as k}from"./ComposedChart-IJuZ_x55.js";import{X as K}from"./XAxis-BnGisaM6.js";import{L as v}from"./Legend-ZqNJUdO7.js";import{B as a}from"./Bar-Bu7FASb1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CETIJz5j.js";import"./Text-D-JNnNjs.js";import"./resolveDefaultProps-BCFRFaLp.js";import"./DOMUtils-adSDEv62.js";import"./ZIndexLayer-DP7ICro2.js";import"./index-CvC1anYi.js";import"./index-CLDy2H7V.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-c40A3UY1.js";import"./throttle-CfowHFSP.js";import"./axisSelectors-BlrbKtsJ.js";import"./d3-scale-BP2r_61E.js";import"./CartesianAxis-CmpohTUe.js";import"./Layer-BI_5R4V_.js";import"./types-CwUR8ti8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BZkCDNTa.js";import"./index-D3rZTjme.js";import"./index-CMcdxE-j.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C-v3LlOW.js";import"./index-CkI1O38Z.js";import"./fillDefinitions-BvN15Ps2.js";import"./CartesianChart-Ct6HzlQ7.js";import"./ZIndexPortal-fcfY6DBt.js";import"./CategoricalChart-CN7dS280.js";import"./Symbols-zxsCudAN.js";import"./symbol-CQ43VyHp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Q6NphwPQ.js";import"./uniqBy-B6gg-PM7.js";import"./iteratee-pGgkjcUZ.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DxewBo1N.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C8RP3-tc.js";import"./useAnimationId-DARA-gCu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B2gG84cu.js";import"./tooltipContext-goTd0_TX.js";import"./dataEntryStyles-RBGB6YIO.js";import"./ErrorBarContext-DhTGqk3o.js";import"./activeStyles-BsBbQeVt.js";import"./SetGraphicalItem-BWi71ya4.js";import"./getZIndexFromUnknown-UdxXNnsn.js";import"./useEffectiveDataKey-BKhq6vYl.js";import"./omit-lQ-G7lRl.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
