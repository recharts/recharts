import{r as f,R as e}from"./iframe-AVXfkv0w.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-IC2DAOXe.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cpy73fEL.js";import{C as k}from"./ComposedChart-T6jMjzBh.js";import{X as K}from"./XAxis-Ccg3sENg.js";import{L as v}from"./Legend-CrCKt3md.js";import{B as s}from"./Bar-D_JobrpT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CUHI9zvN.js";import"./Layer-ht4prXr-.js";import"./resolveDefaultProps-Dkqh2Ws0.js";import"./Text-Cc6gSuDY.js";import"./DOMUtils-BVwM3Jdl.js";import"./isWellBehavedNumber-C_0WrTwr.js";import"./Label-Bn0N3T-p.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B0wR3MRM.js";import"./index-DVRYbkUW.js";import"./index-CAfC1Ith.js";import"./types-3aWcalA-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BWAQroks.js";import"./throttle-CElZ_OGC.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-Bri81Hil.js";import"./index-CFZrGIxH.js";import"./index-Dd93-if2.js";import"./axisSelectors-D5sH7YSt.js";import"./d3-scale-BOPObWse.js";import"./CartesianChart-DosAg0hI.js";import"./chartDataContext-bVF6MeRR.js";import"./CategoricalChart-B23xHRz2.js";import"./Symbols-dI54hGBN.js";import"./symbol-DmI7JuN2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DyzLG0E2.js";import"./uniqBy-CdBEraEs.js";import"./iteratee-uAse0fea.js";import"./tooltipContext-Bt0KiDnZ.js";import"./AnimatedItems-XdBOicHp.js";import"./useAnimationId-DI1PqqVk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C0v_P9FW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CFy0QQ1U.js";import"./RegisterGraphicalItemId-Ba7mqd93.js";import"./ErrorBarContext-DhRbE3HA.js";import"./GraphicalItemClipPath-CZYMuLkO.js";import"./SetGraphicalItem-BnjtQKWx.js";import"./getZIndexFromUnknown-YPczkL-n.js";import"./graphicalItemSelectors-CHpgIakV.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
