import{r as f,R as e}from"./iframe-CkYMKdj_.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-U8fHQD44.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BYtB_o4a.js";import{C as k}from"./ComposedChart-aFeYXy0e.js";import{X as K}from"./XAxis-C0aJOre-.js";import{L as v}from"./Legend-JWH7LkBR.js";import{B as s}from"./Bar-BceUKYIr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-nwXUgC1e.js";import"./Text-DLxJgi7q.js";import"./resolveDefaultProps-Cash8-Wc.js";import"./DOMUtils-CRMwsydF.js";import"./isWellBehavedNumber-D3nu-dTg.js";import"./useId-vngItXwU.js";import"./useBackwardsCompatibleTheme-BDT9ZxVM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CYcyrDOa.js";import"./index-C3dUdvXE.js";import"./index-DXIKdrQ_.js";import"./RechartsWrapper-nO0TmJ-v.js";import"./index-E2SMYanO.js";import"./index-DL62tWXC.js";import"./throttle-BoLMdPdD.js";import"./axisSelectors-C8zY5_Jl.js";import"./d3-scale-DbX3n6Vg.js";import"./renderedTicksSlice-BQ9kQeWp.js";import"./CartesianAxis-CwqvTQH4.js";import"./Layer-DM-j75FJ.js";import"./types-lWnA8D12.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CFe3I3j0.js";import"./chartDataContext-B1d2oGRw.js";import"./CategoricalChart-ceXzvbTP.js";import"./Symbols-BU2IqvHD.js";import"./symbol-ClBpnaaq.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dp-ixcz-.js";import"./uniqBy-ae7h2v4h.js";import"./iteratee-wG1Ynzn8.js";import"./AnimatedItems-DOwp1bhS.js";import"./useAnimationId-BMO_95FO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BmPDkiT-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DdvFeJee.js";import"./tooltipContext-DEeMObbm.js";import"./RegisterGraphicalItemId-xAUQoTNg.js";import"./ErrorBarContext-sYCQPlFx.js";import"./GraphicalItemClipPath-65lu28GO.js";import"./SetGraphicalItem-BDY3wpRw.js";import"./getZIndexFromUnknown-DancgIru.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DtWqI1-3.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
