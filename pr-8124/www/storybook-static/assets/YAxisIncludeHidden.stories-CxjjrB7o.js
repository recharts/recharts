import{r as f,R as e}from"./iframe-C_yGAyrl.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-lwhG3-Lu.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BJ-JuQhh.js";import{C as k}from"./ComposedChart-CFLgoo8z.js";import{X as K}from"./XAxis-BCyVXA2-.js";import{L as v}from"./Legend-DckLNiaV.js";import{B as a}from"./Bar-CLFeXbE0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BnQGI-qv.js";import"./Text-DzacdUSY.js";import"./resolveDefaultProps-B8DgtWv7.js";import"./DOMUtils-DAgrf4y-.js";import"./ZIndexLayer-B7Tlmy9n.js";import"./index-DrbolqVI.js";import"./index-ddpbYnm-.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-ut8KXzAo.js";import"./throttle-BAXAw3D6.js";import"./axisSelectors-5FYthY9Y.js";import"./d3-scale-PQcr3dQu.js";import"./CartesianAxis-DMLFVqxV.js";import"./Layer-DRwTYvg4.js";import"./types-Cxyr58RE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DkVAJH0_.js";import"./index-C36DrKNt.js";import"./index-RS1OPqlJ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BSGXC4_F.js";import"./index-ClVDXgD6.js";import"./CartesianChart-CokpCbyl.js";import"./ZIndexPortal-BbHy9i_X.js";import"./CategoricalChart-vhidTTy9.js";import"./Symbols-Bbax-3ST.js";import"./symbol-CWSoe6BS.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-BmGKFoo3.js";import"./dataEntryStyles-DACXFNb8.js";import"./useElementOffset-DY-j2w8T.js";import"./uniqBy-CNLZexsa.js";import"./iteratee-DpnVvTvv.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-o4uUgS5K.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DTDM3K3u.js";import"./useAnimationId-HAfaQzyp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHVm68Z9.js";import"./tooltipContext-CJMN-mb7.js";import"./ErrorBarContext-BFE3xm4o.js";import"./activeStyles-B0RsKEFJ.js";import"./SetGraphicalItem-ByCBXbFB.js";import"./getZIndexFromUnknown-7pUA36BO.js";import"./useEffectiveDataKey-DU6lMzAC.js";import"./omit-DF37_2xs.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
