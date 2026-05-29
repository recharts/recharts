import{P as f,c as e}from"./iframe-DmBQ8HMz.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-D8ss-GGA.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-DIRHIjeL.js";import{C as k}from"./ComposedChart-DNElitZJ.js";import{X as K}from"./XAxis-BaDVYnrk.js";import{L as v}from"./Legend-CvCXD82i.js";import{B as s}from"./Bar-kkOUqeOv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Ckx5uNL8.js";import"./CartesianAxis-B9da2UAY.js";import"./Layer-BhYZ1XdM.js";import"./resolveDefaultProps-DuJ2-4bL.js";import"./Text-DDANB2NF.js";import"./DOMUtils-o09_GivZ.js";import"./isWellBehavedNumber-BHVm_SNT.js";import"./Label-C1M61kae.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-eAbRrt0r.js";import"./index-kdRFnVq9.js";import"./index-RSqbnpUZ.js";import"./types-DUdiMbO-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DVSCP4nP.js";import"./immer-CvETSy6i.js";import"./RechartsWrapper-DWg7_V2c.js";import"./index-o0mRVwTr.js";import"./index-Drn3R5Q6.js";import"./axisSelectors-COTb3exH.js";import"./d3-scale-CE7Es6uL.js";import"./CartesianChart-uAfb6KQX.js";import"./chartDataContext-CpJyWUlD.js";import"./CategoricalChart-DUJKtdcW.js";import"./Symbols-L1gtdK7X.js";import"./symbol-D5N6_vHE.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DsYLvXSH.js";import"./uniqBy-KElqJvHA.js";import"./iteratee-D3O-hQgd.js";import"./tooltipContext-Cg0_U2Ap.js";import"./ReactUtils-DKCxnkHT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-i0rACkhx.js";import"./useAnimationId-BZ5U8z_o.js";import"./ActiveShapeUtils-DVhmDt4u.js";import"./RegisterGraphicalItemId-Dup5UL4N.js";import"./ErrorBarContext-DC5ZfMR_.js";import"./GraphicalItemClipPath-pcxJ2TmH.js";import"./SetGraphicalItem-CsbBVlmH.js";import"./getZIndexFromUnknown-3SUzMX_I.js";import"./graphicalItemSelectors-CAXxuBta.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
