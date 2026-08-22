import{r as f,R as e}from"./iframe-CbdG93Rp.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Dmha2qJn.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BBA2vYL9.js";import{C as k}from"./ComposedChart-BlErnFXo.js";import{X as K}from"./XAxis-gGpg7lh6.js";import{L as v}from"./Legend-Dz0C8B_9.js";import{B as s}from"./Bar-DL_z0dKJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DXZsEXpn.js";import"./Text-DuH_mhct.js";import"./resolveDefaultProps-BNACGTBd.js";import"./DOMUtils-CqvRu_MB.js";import"./isWellBehavedNumber-DBJb9JTb.js";import"./useId-Ca5c2KHs.js";import"./useBackwardsCompatibleTheme-CqJEL2NO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-FtCXwXjd.js";import"./index-yQCZGhVI.js";import"./index-BiGXtIk6.js";import"./RechartsWrapper-Bx7VgKe3.js";import"./index-D8WEHlsH.js";import"./index-ybXde8ox.js";import"./throttle-k7AnGod1.js";import"./axisSelectors-BHZKzxax.js";import"./d3-scale-CLJM1nE7.js";import"./renderedTicksSlice-H0Ext-F-.js";import"./CartesianAxis-D93bSTxK.js";import"./Layer-BZ6Fc3lQ.js";import"./types-CpUmxW-2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-KT4JQkAx.js";import"./chartDataContext-fDUY1EA6.js";import"./CategoricalChart-BZ6Syier.js";import"./Symbols-CuasTVW9.js";import"./symbol-DOXCA695.js";import"./path-DyVhHtw_.js";import"./useElementOffset-g697mWa_.js";import"./uniqBy-BjmPaqQH.js";import"./iteratee-mNdZ8SiJ.js";import"./AnimatedItems-LAFrqwsd.js";import"./useAnimationId-Ctl7EN5N.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CwYRuFSD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DQoUFAUU.js";import"./tooltipContext-D5Q41Klp.js";import"./RegisterGraphicalItemId-VTOA4vtw.js";import"./ErrorBarContext-DKNTm7fJ.js";import"./GraphicalItemClipPath-B5C5ys39.js";import"./SetGraphicalItem-OAT4QAS1.js";import"./getZIndexFromUnknown-B0qIceOM.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Beqitca1.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
