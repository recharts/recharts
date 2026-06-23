import{r as f,R as e}from"./iframe-CMVn_SNm.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-8PetJcY4.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-5bfS2JCG.js";import{C as k}from"./ComposedChart-CtvSTeFH.js";import{X as K}from"./XAxis-BK_m78bZ.js";import{L as v}from"./Legend-_-zNynGN.js";import{B as s}from"./Bar-DlNVr3VR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CIPBGhdg.js";import"./CartesianAxis-HAFu0ua0.js";import"./Layer-NKsa_8yv.js";import"./resolveDefaultProps-CRaaAotp.js";import"./Text-DjHHlwuG.js";import"./DOMUtils-DEDVnuPv.js";import"./isWellBehavedNumber-C4Dcoy8i.js";import"./Label-DCWSGF-w.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-qzvYtv-n.js";import"./index-BHUmbQo-.js";import"./index-BNNprLMB.js";import"./types-DXSGjGm9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B8N2zN9Q.js";import"./immer-BrNA81ld.js";import"./RechartsWrapper-DcTKM8HZ.js";import"./index-DgABY5rS.js";import"./index-o3wTHYCY.js";import"./axisSelectors-Dk5pLmzI.js";import"./d3-scale-p_vnFVNW.js";import"./CartesianChart-Bhmmmn5c.js";import"./chartDataContext-Dg2f8fbZ.js";import"./CategoricalChart-DUjGX6JP.js";import"./Symbols-C8L8AvrN.js";import"./symbol-BJC98dA9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C51qjBi2.js";import"./uniqBy-DICaK5oX.js";import"./iteratee-C6Ehk9Ya.js";import"./tooltipContext-E9qytSTD.js";import"./AnimatedItems-i8neEi91.js";import"./useAnimationId-DARzAta0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DOnpVfWW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DbnUcZo7.js";import"./RegisterGraphicalItemId-B5nu-pPZ.js";import"./ErrorBarContext-B0E3DilN.js";import"./GraphicalItemClipPath-CTln66En.js";import"./SetGraphicalItem-rX6NUfmr.js";import"./getZIndexFromUnknown-CMvd9kQk.js";import"./graphicalItemSelectors-CVpIZw14.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
