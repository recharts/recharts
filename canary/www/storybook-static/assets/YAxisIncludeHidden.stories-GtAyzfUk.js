import{r as f,R as e}from"./iframe-DfmqqqCr.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-b9ABcoaF.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-d0YHK6xw.js";import{C as k}from"./ComposedChart-gLZpFizW.js";import{X as K}from"./XAxis-B0knr_7L.js";import{L as v}from"./Legend-BmgcmV92.js";import{B as a}from"./Bar-DvkRPddU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-C130jv2t.js";import"./Text-CG3VrxOm.js";import"./resolveDefaultProps-ComwQ6WC.js";import"./pageBackground-dHeomk-I.js";import"./ZIndexLayer-Cvk6PIs7.js";import"./index-Lp2jcwfG.js";import"./index-CSO17-J0.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DpDn-hFD.js";import"./throttle-DAA8X2l5.js";import"./dataEntryStyles-CeCkFK1K.js";import"./axisSelectors-DWglHHAi.js";import"./d3-scale-Ci_zYY1V.js";import"./CartesianAxis-CYll20RU.js";import"./Layer-BrcDHHcB.js";import"./types-9Kx7AXVb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C4mLmnSQ.js";import"./index-pJqwg3_d.js";import"./index-hdUN889v.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D6KUw4si.js";import"./index-CQMOT26p.js";import"./CartesianChart-LSHb6JPq.js";import"./ZIndexPortal-BDrojabW.js";import"./CategoricalChart-BsBaBvnF.js";import"./Symbols-BOmwAADp.js";import"./symbol-CvaR8Ff4.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BIpV4hkj.js";import"./uniqBy-B-Zb9oWg.js";import"./iteratee-KP65sc9-.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-C0IeivS9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CCmTs9GK.js";import"./useAnimationId-RNI69aEn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Csx1hMVo.js";import"./tooltipContext-BKMUBK5C.js";import"./RegisterGraphicalItemId-CzjpJBeg.js";import"./ErrorBarContext-C3AKnlrm.js";import"./activeStyles-CHOILxkP.js";import"./SetGraphicalItem-41fol6Y1.js";import"./getZIndexFromUnknown-CgUp2j4H.js";import"./useEffectiveDataKey-Ri-wD3JN.js";import"./omit-eqC7RsUJ.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
