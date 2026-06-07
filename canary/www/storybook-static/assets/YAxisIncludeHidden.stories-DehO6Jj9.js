import{r as f,R as e}from"./iframe-RDkqVuG2.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-4GVW-TXE.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C4ZKGTQh.js";import{C as k}from"./ComposedChart-n_pkeOwP.js";import{X as K}from"./XAxis-DEACd4mi.js";import{L as v}from"./Legend-DWG4YceH.js";import{B as s}from"./Bar-BYU8vxI_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-qTOI2Rj3.js";import"./CartesianAxis-BXGLIO05.js";import"./Layer-DnJxeL60.js";import"./resolveDefaultProps-CrvfBHpF.js";import"./Text-euyAwdDa.js";import"./DOMUtils-B1kyH5Gm.js";import"./isWellBehavedNumber-B7BMWvxG.js";import"./Label-kl9r3lv0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ChplAtHB.js";import"./index-9iQIkkD_.js";import"./index-C0Sw1Z_f.js";import"./types-BwJsYmye.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BbGCSG_u.js";import"./immer-tJ0TJl6x.js";import"./RechartsWrapper-BeMiseSr.js";import"./index-DIx3ZRGh.js";import"./index-Bl5JBY4m.js";import"./axisSelectors-ChiETq8M.js";import"./d3-scale-CNXGEtqn.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CkUHBUTg.js";import"./chartDataContext-DCYgbhWK.js";import"./CategoricalChart-DKO530-y.js";import"./Symbols-CgqqfKpX.js";import"./symbol-CMCC0ufv.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BgGPf32V.js";import"./uniqBy-CGyhlrqZ.js";import"./iteratee-gpO3rR4q.js";import"./tooltipContext-CKhyGnG7.js";import"./AnimatedItems-wlRh2tbg.js";import"./useAnimationId-DWgEGQGL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cf0Ils5n.js";import"./ActiveShapeUtils-BGYROLTx.js";import"./RegisterGraphicalItemId-BjCxIzIU.js";import"./ErrorBarContext-DhtRtcJb.js";import"./GraphicalItemClipPath-fh46Mv1_.js";import"./SetGraphicalItem-C_Bitdri.js";import"./getZIndexFromUnknown-D8aFDo5v.js";import"./graphicalItemSelectors-_gyjbiax.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
