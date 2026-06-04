import{r as f,R as e}from"./iframe-D7yt-ZhS.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-C5MIsZgm.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B3_xMC6k.js";import{C as k}from"./ComposedChart-Bl4WegRH.js";import{X as K}from"./XAxis-dYNJxVBm.js";import{L as v}from"./Legend-BuS0gEvx.js";import{B as s}from"./Bar-Bz8odb4B.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Cebs6l6-.js";import"./CartesianAxis-CuPdOLrD.js";import"./Layer-B34T8oTs.js";import"./resolveDefaultProps-BUJk688E.js";import"./Text-DWwT0_EQ.js";import"./DOMUtils-DoEzEhWE.js";import"./isWellBehavedNumber-NaDCVAJY.js";import"./Label-C0p1CWe9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BjlE0UF2.js";import"./index-CHXGCi4x.js";import"./index-nuP2vluJ.js";import"./types-CuLQosun.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DNerh-qI.js";import"./immer-HxqS16dW.js";import"./RechartsWrapper-CArYIH40.js";import"./index-CglBtasG.js";import"./index-8zJni8A2.js";import"./axisSelectors-CW8UYJLW.js";import"./d3-scale-BUBb-XjW.js";import"./string-B6fdYHAA.js";import"./CartesianChart-C6SOYYpl.js";import"./chartDataContext-_IqHUZU5.js";import"./CategoricalChart-CMCxIWsh.js";import"./Symbols-CgBZX9Up.js";import"./symbol-DAthuMSh.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DEe0y9L2.js";import"./uniqBy-C2rlrQ-8.js";import"./iteratee-DZxnX6Pq.js";import"./tooltipContext-C7RfWuHE.js";import"./AnimatedItems-CUAQ84gk.js";import"./useAnimationId-gSm0_FsD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-KnaRg_aq.js";import"./ActiveShapeUtils-C4okiOLS.js";import"./RegisterGraphicalItemId-Bj0awerq.js";import"./ErrorBarContext-BCc7VHSV.js";import"./GraphicalItemClipPath-CSwP3plz.js";import"./SetGraphicalItem-BFSgsIRt.js";import"./getZIndexFromUnknown-CYFadKVd.js";import"./graphicalItemSelectors-C0X08UDC.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
