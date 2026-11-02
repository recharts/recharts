import{r as f,R as e}from"./iframe-Bq5XC69E.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C-Z0y3eM.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CH_ot-kn.js";import{C as k}from"./ComposedChart-DMESowBx.js";import{X as K}from"./XAxis-CJ__L0zP.js";import{L as v}from"./Legend-x8X7Fp0S.js";import{B as a}from"./Bar-Cbc5Uo5e.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CGkLvakU.js";import"./Text-BD2GyaNh.js";import"./resolveDefaultProps-DoKMFVBl.js";import"./DOMUtils-DK-6QFhi.js";import"./ZIndexLayer-DBkhZGBE.js";import"./index-DLG40tqd.js";import"./index-C2BKaTPh.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CEQjO6UJ.js";import"./throttle-Ct-rPSxx.js";import"./axisSelectors-BOZBH3Nn.js";import"./d3-scale-MB7Peh3q.js";import"./CartesianAxis-D7JxrcAJ.js";import"./Layer-Cnu5LwAi.js";import"./types-L3YuI5Vg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BwIYCUgi.js";import"./index-C-17JylX.js";import"./index-3Uw_iAKp.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-bjxa_6pD.js";import"./index-DzbJHNcA.js";import"./fillDefinitions-Dhgql6la.js";import"./CartesianChart-moaB2ENx.js";import"./ZIndexPortal-D4Ob-hnX.js";import"./CategoricalChart-mibAt8bj.js";import"./Symbols-Cive21Dh.js";import"./symbol-BHxgCtzG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-6RktWzhj.js";import"./uniqBy-DcVUePGP.js";import"./iteratee-D8dB9Iuu.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-0FCseyju.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CdaMHBMZ.js";import"./useAnimationId-DwGbNOL_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Gk8oTWam.js";import"./tooltipContext-T6g8p_Fs.js";import"./dataEntryStyles-DVS0RaWt.js";import"./ErrorBarContext-JgTKdwbz.js";import"./activeStyles-BIBdu-Bw.js";import"./SetGraphicalItem-D8FNyAZb.js";import"./getZIndexFromUnknown-E-yaDm0v.js";import"./useEffectiveDataKey-DNNImqCq.js";import"./omit-B5Gs5zHP.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
