import{r as f,R as e}from"./iframe-DRd8L1ij.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Dzj0j6ti.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DWK0mKBW.js";import{C as k}from"./ComposedChart-BgiL4Xm-.js";import{X as K}from"./XAxis-DYHP_qTD.js";import{L as v}from"./Legend-Bzv9SWR0.js";import{B as a}from"./Bar-tke9XL7t.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Dlqk38Aa.js";import"./Text-DOqNkwx7.js";import"./resolveDefaultProps--2iGUKCh.js";import"./DOMUtils-BMkGHkgN.js";import"./ZIndexLayer-BYH3DLDW.js";import"./index-DuLNwG6c.js";import"./index-GNzKGxFd.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B7CzXU5n.js";import"./throttle-BZHSEq8k.js";import"./axisSelectors-DKYErlU4.js";import"./d3-scale-Degm7ixx.js";import"./CartesianAxis-BCEsA_1Q.js";import"./Layer-C-w_mvnX.js";import"./types-99rmuj1o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-VRZysoJN.js";import"./index-BOBLZBKw.js";import"./index-BnUkaxQb.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CVHpNPrj.js";import"./index-DZh8SmTQ.js";import"./fillDefinitions-BcJsDDFO.js";import"./CartesianChart-xzJeK0ZT.js";import"./ZIndexPortal-BX35EtJy.js";import"./CategoricalChart-C3H_aI_M.js";import"./Symbols-C10Tu53k.js";import"./symbol-CYG96CRr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DvtLZm2w.js";import"./uniqBy-CQ6eO9fT.js";import"./iteratee-0XuJHBpI.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-C56jidjO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DdQ2_4X9.js";import"./useAnimationId-C1EYHtHK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dj9_Xfwc.js";import"./tooltipContext-B2CjN-pI.js";import"./dataEntryStyles-CMr7JuEI.js";import"./ErrorBarContext-DGvI8kwC.js";import"./activeStyles-N3dA5laV.js";import"./SetGraphicalItem-Cted8rHa.js";import"./getZIndexFromUnknown-D1D0jIp4.js";import"./useEffectiveDataKey-C0wXpfOI.js";import"./omit-CdCfDepK.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
