import{r as f,R as e}from"./iframe-DkIbxCKI.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CwdPxCpD.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CHbZzwgN.js";import{C as k}from"./ComposedChart-AmLF4jNt.js";import{X as K}from"./XAxis-BPLEkIZ2.js";import{L as v}from"./Legend-DOMeRgMd.js";import{B as a}from"./Bar-DBwLR-Jq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DXoCOeOg.js";import"./Text-BbOUDRzF.js";import"./resolveDefaultProps-BevWDyyN.js";import"./DOMUtils-BUKWldcd.js";import"./isWellBehavedNumber-fyAAr-BE.js";import"./useId-8qRrdFWs.js";import"./useBackwardsCompatibleTheme-BwQOOq4w.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BJyXs-Ro.js";import"./index-yECzrrEn.js";import"./index-B09gEsNA.js";import"./RechartsWrapper-CqxFYmG2.js";import"./axisSelectors-B_cE3_9l.js";import"./throttle-CWb9XQe7.js";import"./d3-scale-8ot6xaxi.js";import"./index-CgyukL1G.js";import"./index-x7Df9KyH.js";import"./renderedTicksSlice-DyBDLYr8.js";import"./index-BccjzSMV.js";import"./CartesianAxis-5Nq6xx1I.js";import"./Layer-D7vk6n2M.js";import"./types-CwHWliOY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CLeTDcJ1.js";import"./chartDataContext-CWOneN2n.js";import"./CategoricalChart-De8d0Fqy.js";import"./Symbols-HotSIVb8.js";import"./symbol-IDRMsfhc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Br7ppT_A.js";import"./uniqBy-BUgSc2Cm.js";import"./iteratee-DkJdq8oi.js";import"./AnimatedItems-CIN2lrWw.js";import"./useAnimationId-DMHPZlQv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CcvMQD5l.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CMEDiyrE.js";import"./tooltipContext-D_1DAJCL.js";import"./RegisterGraphicalItemId-lA-3F1_K.js";import"./ErrorBarContext-C70mMVNC.js";import"./GraphicalItemClipPath-DKslCQDi.js";import"./SetGraphicalItem-CEswJxM0.js";import"./getZIndexFromUnknown-D7dPzLOV.js";import"./useGraphicalItemIdentity-BZv1ZQCF.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
