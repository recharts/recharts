import{r as f,R as e}from"./iframe-Xn2MpEZO.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-CAfubk2b.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Ci7uKtqk.js";import{C as k}from"./ComposedChart-B-mMwZkB.js";import{X as K}from"./XAxis-BfvOUMD4.js";import{L as v}from"./Legend-r5dsJIuI.js";import{B as s}from"./Bar-LXwcAE0e.js";import"./preload-helper-Dp1pzeXC.js";import"./get-a5GlobPr.js";import"./CartesianAxis-Ci5XT6aX.js";import"./Layer-DSBtIc_n.js";import"./resolveDefaultProps-ComQIB2r.js";import"./Text-DhiURvp0.js";import"./DOMUtils-C9OtDZJT.js";import"./isWellBehavedNumber-ikHr81yL.js";import"./Label-Drk02YPI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-rkhqqfVD.js";import"./index-B9rMLYis.js";import"./index-BJjZAGkk.js";import"./types-BkUFHbYz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DHtwTgZF.js";import"./immer-Df9E9w07.js";import"./RechartsWrapper-BxUke-Wy.js";import"./index-DCEv34s7.js";import"./index-BFHb-0iX.js";import"./axisSelectors-N1yg_9bS.js";import"./d3-scale-BhQeBFLV.js";import"./CartesianChart-qVEZ4DBv.js";import"./chartDataContext-CdM4lEIq.js";import"./CategoricalChart-BYw4mGkG.js";import"./Symbols-BM7k7zSs.js";import"./symbol-ipVDMKgS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Byrz6AYu.js";import"./uniqBy-BTijv5vR.js";import"./iteratee-kQQ-_etq.js";import"./tooltipContext-BGI5JWMg.js";import"./AnimatedItems-AezG2GF8.js";import"./useAnimationId-Dddlhxb8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BNtGtL1T.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DjKDdlLp.js";import"./RegisterGraphicalItemId-CGNP0Yo_.js";import"./ErrorBarContext-C0h6VuZc.js";import"./GraphicalItemClipPath-Cc8lCQ6R.js";import"./SetGraphicalItem-97hX8Iat.js";import"./getZIndexFromUnknown-C4ETOTVk.js";import"./graphicalItemSelectors-IpQzZ0vj.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
