import{r as f,R as e}from"./iframe-YX8o2v6C.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-Be6O_CQ7.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DdFbRU-_.js";import{C as k}from"./ComposedChart-CuekEZUs.js";import{X as K}from"./XAxis-DQ2uOSag.js";import{L as v}from"./Legend-BEsPkW1J.js";import{B as s}from"./Bar-CFHHRu3H.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BycinDno.js";import"./CartesianAxis-CKLUnXwa.js";import"./Layer-BIbmWem6.js";import"./resolveDefaultProps-Beo9Ue5G.js";import"./Text-Buo3hKKc.js";import"./DOMUtils-QQafW-5D.js";import"./isWellBehavedNumber-BTMdVTVN.js";import"./Label-MzgVsBeP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-jNA71lIU.js";import"./index-DH-2xtWc.js";import"./index-Cl4YYRbA.js";import"./types-DnEhxp69.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CH1AW_i0.js";import"./immer-D9wrmu0j.js";import"./RechartsWrapper-CG6S7igm.js";import"./index-CEZPHdCs.js";import"./index-C3Ly3wbD.js";import"./axisSelectors-D8SjoVzs.js";import"./d3-scale-BBOwGfMu.js";import"./string-B6fdYHAA.js";import"./CartesianChart-W4Jk2biF.js";import"./chartDataContext-BjewCl-Q.js";import"./CategoricalChart-D0PZB27U.js";import"./Symbols-CtEjouGN.js";import"./symbol-Du6MS9OR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BpEKen9w.js";import"./uniqBy-CkCHcnMU.js";import"./iteratee-ByJ6tARf.js";import"./tooltipContext-DSvHJrY6.js";import"./AnimatedItems-CRhm6WPg.js";import"./useAnimationId-CqTJac9i.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BKZ5Spt-.js";import"./ActiveShapeUtils-C75e4XAE.js";import"./RegisterGraphicalItemId-6llrHCrO.js";import"./ErrorBarContext-BJw7X7Qy.js";import"./GraphicalItemClipPath-BF8Vebbu.js";import"./SetGraphicalItem-OjQ_8WxS.js";import"./getZIndexFromUnknown-BkLvGmN8.js";import"./graphicalItemSelectors-CBWxv08A.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
