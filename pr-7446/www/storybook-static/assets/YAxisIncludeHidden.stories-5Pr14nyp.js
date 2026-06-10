import{r as f,R as e}from"./iframe-DR9JYvo9.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-njpk2nvi.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C8us_33i.js";import{C as k}from"./ComposedChart-DKmeLx_e.js";import{X as K}from"./XAxis-CkTBv7Vq.js";import{L as v}from"./Legend-tASb65wc.js";import{B as s}from"./Bar-CqWkihR8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cu4HmN_G.js";import"./CartesianAxis-Dipo9dl9.js";import"./Layer-BDZfdfVu.js";import"./resolveDefaultProps-BYvz8ioJ.js";import"./Text-DBYgVn99.js";import"./DOMUtils-Bi5BI6KA.js";import"./isWellBehavedNumber-CoRQ5I_Q.js";import"./Label-De6_no0_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BgzJVSii.js";import"./index-BSI6txHD.js";import"./index-DDKROPpY.js";import"./types-C_DqPfQs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CyVH_MQq.js";import"./immer-BibliqvJ.js";import"./RechartsWrapper-xGluos2C.js";import"./index-k7j0Xumv.js";import"./index-CU_PZZsV.js";import"./axisSelectors-DGVKCopH.js";import"./d3-scale-L0XByWhe.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BZ37_3cP.js";import"./chartDataContext-CejwtDPv.js";import"./CategoricalChart-BpqxHQTK.js";import"./Symbols-CRp0uNKN.js";import"./symbol-DTdjZNyu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-48OXgiQB.js";import"./uniqBy-06vWrWfm.js";import"./iteratee-laBcaYlX.js";import"./tooltipContext-DJfuGMMl.js";import"./AnimatedItems-DwCxTPVO.js";import"./useAnimationId-BlaQudXH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DCKYc31L.js";import"./ActiveShapeUtils-BwilYhsw.js";import"./RegisterGraphicalItemId-DV56rO-3.js";import"./ErrorBarContext-BO0-BSQI.js";import"./GraphicalItemClipPath-Vt_UhRqU.js";import"./SetGraphicalItem-DG2lsiaO.js";import"./getZIndexFromUnknown-DMXv6A8r.js";import"./graphicalItemSelectors-DF-pdot3.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
